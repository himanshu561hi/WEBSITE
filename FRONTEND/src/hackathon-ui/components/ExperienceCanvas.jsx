import React, { useRef, useEffect, memo } from "react";
import * as THREE from "three";
import { visualConfig } from "../data/visualConfig";
import { createFacility } from "../environment/Facility";
import { createLightingSystem } from "../effects/LightingSystem";
import { createGhostSystem } from "../effects/GhostSystem";
import { createDustParticles } from "../effects/DustParticles";
import { createFogSystem } from "../effects/FogSystem";
import { createCameraController } from "./CameraController";
import { createSceneManager } from "./SceneManager";

/**
 * ExperienceCanvas
 * Master Persistent 3D WebGL Canvas for BUILDX.
 * 
 * Modular Subsystem Architecture (Section 5):
 * ExperienceCanvas
 *     |
 *     +-- SceneManager
 *     +-- CameraController
 *     +-- Facility (Environment)
 *     +-- LightingSystem
 *     +-- FogSystem
 *     +-- DustParticles
 *     +-- GhostSystem
 */
const ExperienceCanvas = memo(function ExperienceCanvas({
  scrollProgress = 0,
  finalDoorHovered = false,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL support check
    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl2") || testCanvas.getContext("webgl");
      if (!gl) return;
    } catch {
      return;
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    const isMobile = width < 768;

    // 1. Scene & Renderer Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 85);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, visualConfig.performance.maxPixelRatio));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    container.appendChild(renderer.domElement);

    // 2. Initialize Subsystems
    const sceneManager = createSceneManager();
    const cameraController = createCameraController(camera);
    const facility = createFacility(scene);
    const lighting = createLightingSystem(scene);
    const fog = createFogSystem(scene, isMobile);
    const dust = createDustParticles(scene, isMobile);
    const ghost = createGhostSystem(scene);

    // 3. Mouse Parallax Handling
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handleMouseMove = (e) => {
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // 4. Animation Loop with Visibility Optimization (Section 64)
    let animId = null;
    let clock = new THREE.Clock();
    let isPaused = false;

    const handleVisibility = () => {
      isPaused = document.hidden;
      if (!isPaused) clock.start();
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (isPaused) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Read current scroll progress and door hover state from dataset
      const currentProgress = container.dataset.scrollProgress
        ? parseFloat(container.dataset.scrollProgress)
        : 0;
      const isDoorHovered = container.dataset.doorHovered === "true";

      // Update Subsystems
      sceneManager.update(currentProgress);
      cameraController.update(currentProgress, mouse);
      lighting.update(elapsedTime, isDoorHovered, currentProgress);
      dust.update();
      ghost.update(elapsedTime, mouse, currentProgress);

      renderer.render(scene, camera);
    };

    animId = requestAnimationFrame(animate);

    // 5. Cleanup on Unmount (Section 65)
    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);

      facility.dispose();
      lighting.dispose();
      fog.dispose();
      dust.dispose();
      ghost.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement && renderer.domElement.parentNode) {
          renderer.domElement.parentNode.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-scroll-progress={scrollProgress}
      data-door-hovered={finalDoorHovered ? "true" : "false"}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
});

export default ExperienceCanvas;
