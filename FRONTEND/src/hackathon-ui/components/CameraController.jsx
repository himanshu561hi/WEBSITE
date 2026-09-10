import * as THREE from "three";
import { sceneConfig } from "../data/sceneConfig";

/**
 * CameraController
 * Master Cinematic Camera Choreography Engine.
 * 
 * In accordance with Master Prompt Sections 7 & 53:
 * Reads camera stages from sceneConfig.js and computes smooth multi-waypoint
 * position and lookAt interpolation driven by scroll progress with subtle
 * mouse parallax and damping.
 */
export function createCameraController(camera) {
  const stages = sceneConfig.cameraStages;

  const currentPos = new THREE.Vector3(...stages[0].camPos.start);
  const targetPos = new THREE.Vector3(...stages[0].camPos.start);
  const currentLook = new THREE.Vector3(...stages[0].lookAt.start);
  const targetLook = new THREE.Vector3(...stages[0].lookAt.start);

  camera.position.copy(currentPos);
  camera.lookAt(currentLook);

  return {
    update: (scrollProgress, mouse) => {
      // Find matching stage
      let stage = stages[0];
      let prevEnd = 0;

      for (let i = 0; i < stages.length; i++) {
        if (scrollProgress <= stages[i].progressEnd) {
          stage = stages[i];
          prevEnd = i === 0 ? 0 : stages[i - 1].progressEnd;
          break;
        }
      }

      // Stage local normalized interpolation factor [0, 1]
      const span = stage.progressEnd - prevEnd;
      const t = span > 0 ? Math.min(Math.max((scrollProgress - prevEnd) / span, 0), 1) : 0;

      // Smooth cosine easing
      const easedT = 0.5 - 0.5 * Math.cos(t * Math.PI);

      // Interpolate target camera position
      targetPos.x = THREE.MathUtils.lerp(stage.camPos.start[0], stage.camPos.end[0], easedT);
      targetPos.y = THREE.MathUtils.lerp(stage.camPos.start[1], stage.camPos.end[1], easedT);
      targetPos.z = THREE.MathUtils.lerp(stage.camPos.start[2], stage.camPos.end[2], easedT);

      // Interpolate target lookAt
      targetLook.x = THREE.MathUtils.lerp(stage.lookAt.start[0], stage.lookAt.end[0], easedT);
      targetLook.y = THREE.MathUtils.lerp(stage.lookAt.start[1], stage.lookAt.end[1], easedT);
      targetLook.z = THREE.MathUtils.lerp(stage.lookAt.start[2], stage.lookAt.end[2], easedT);

      // Add damped mouse parallax
      targetPos.x += mouse.x * 0.35;
      targetPos.y += mouse.y * 0.2;

      // Camera position damping
      currentPos.x += (targetPos.x - currentPos.x) * 0.045;
      currentPos.y += (targetPos.y - currentPos.y) * 0.045;
      currentPos.z += (targetPos.z - currentPos.z) * 0.045;
      camera.position.copy(currentPos);

      // LookAt damping
      currentLook.x += (targetLook.x - currentLook.x) * 0.045;
      currentLook.y += (targetLook.y - currentLook.y) * 0.045;
      currentLook.z += (targetLook.z - currentLook.z) * 0.045;
      camera.lookAt(currentLook);
    },
  };
}
