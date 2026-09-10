import * as THREE from "three";
import { visualConfig } from "../data/visualConfig";

/**
 * FogSystem
 * Layered exponential fog creating distance, mystery, and depth occlusion.
 */
export function createFogSystem(scene, isMobile = false) {
  const density = isMobile
    ? visualConfig.fog.densityMobile
    : visualConfig.fog.densityDesktop;

  scene.fog = new THREE.FogExp2(visualConfig.fog.color, density);

  return {
    setDensity: (val) => {
      if (scene.fog) scene.fog.density = val;
    },
    dispose: () => {
      scene.fog = null;
    },
  };
}
