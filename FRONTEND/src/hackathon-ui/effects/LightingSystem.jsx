import * as THREE from "three";
import { visualConfig } from "../data/visualConfig";

/**
 * LightingSystem
 * Cinematic multi-source lighting subsystem for BUILDX.
 * Manages ambient moonlight, high-contrast directional beams, emergency beacons,
 * doorway illumination, and paranormal light flicker disturbances.
 */
export function createLightingSystem(scene) {
  const { lighting } = visualConfig;

  // 1. Ambient Moonlight
  const ambientLight = new THREE.AmbientLight(
    lighting.ambientColor,
    lighting.ambientIntensity
  );
  scene.add(ambientLight);

  // 2. Cold Directional Moonlight from upper right
  const moonLight = new THREE.DirectionalLight(
    lighting.moonlightColor,
    lighting.moonlightIntensity
  );
  moonLight.position.set(8, 14, 5);
  moonLight.target.position.set(0, 1.5, 0);
  scene.add(moonLight);
  scene.add(moonLight.target);

  // 3. Deep Crimson Beacon
  const beaconLight = new THREE.PointLight(
    lighting.emergencyBeaconColor,
    lighting.emergencyBeaconIntensity,
    14,
    1.4
  );
  beaconLight.position.set(-3.2, 3.8, -8.0);
  scene.add(beaconLight);

  // 4. Distant Doorway Portal Light
  const doorLight = new THREE.PointLight(
    lighting.doorwayColor,
    lighting.doorwayLightIntensity,
    24,
    1.1
  );
  doorLight.position.set(0, 2.5, -28.0);
  scene.add(doorLight);

  let flickerActive = false;

  return {
    update: (elapsedTime, isDoorHovered, scrollProgress) => {
      // Natural subtle electrical hum/flicker
      if (Math.sin(elapsedTime * 0.2) > 0.97) {
        flickerActive = true;
        moonLight.intensity = lighting.moonlightIntensity * (Math.random() * 0.6 + 0.4);
      } else {
        flickerActive = false;
        moonLight.intensity = lighting.moonlightIntensity;
      }

      // Doorway intensification on CTA hover or nearing final scene
      const baseIntensity =
        scrollProgress > 0.75
          ? lighting.doorwayLightIntensity + (scrollProgress - 0.75) * 8.0
          : lighting.doorwayLightIntensity;
      const targetIntensity = isDoorHovered
        ? lighting.doorwayHoverIntensity
        : baseIntensity;
      doorLight.intensity += (targetIntensity - doorLight.intensity) * 0.08;
    },
    isFlickering: () => flickerActive,
    dispose: () => {
      scene.remove(ambientLight);
      scene.remove(moonLight);
      scene.remove(beaconLight);
      scene.remove(doorLight);
    },
  };
}
