import * as THREE from "three";
import { visualConfig } from "../data/visualConfig";

/**
 * DustParticles
 * Drifting spatial dust particles visible in moonlight and emergency beacons.
 */
export function createDustParticles(scene, isMobile = false) {
  const count = isMobile
    ? visualConfig.particles.dustCountMobile
    : visualConfig.particles.dustCountDesktop;

  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = Math.random() * 6.5;
    positions[i * 3 + 2] = 6 - Math.random() * 34;
  }
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: visualConfig.particles.dustColor,
    size: 0.035,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
  });

  const points = new THREE.Points(geo, mat);
  scene.add(points);

  return {
    update: () => {
      const pos = geo.attributes.position.array;
      for (let i = 1; i < pos.length; i += 3) {
        pos[i] -= 0.0035;
        if (pos[i] < 0.1) pos[i] = 6.0;
      }
      geo.attributes.position.needsUpdate = true;
    },
    dispose: () => {
      scene.remove(points);
      geo.dispose();
      mat.dispose();
    },
  };
}
