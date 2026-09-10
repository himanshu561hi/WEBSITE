import * as THREE from "three";

/**
 * Facility
 * 3D Architectural Shell for the BUILDX Abandoned Investigation Facility.
 * Provides the wet reflective stone floor, brutalist concrete arch pillars,
 * supernatural crimson etched glyphs, and the distant gateway.
 */
export function createFacility(scene) {
  const disposables = [];

  // 1. Reflective Wet Floor (Mirror-like puddles)
  const floorGeo = new THREE.PlaneGeometry(36, 80, 1, 1);
  const floorMat = new THREE.MeshStandardMaterial({
    color: 0x050609,
    roughness: 0.18,
    metalness: 0.85,
  });
  const floor = new THREE.Mesh(floorGeo, floorMat);
  floor.rotation.x = -Math.PI / 2;
  floor.position.set(0, 0, -12);
  scene.add(floor);
  disposables.push(floorGeo, floorMat);

  // 2. Brutalist Archway Pillars with Etched Runes
  const pillarGeo = new THREE.BoxGeometry(0.9, 8.5, 0.9);
  const pillarMat = new THREE.MeshStandardMaterial({
    color: 0x0b0d12,
    roughness: 0.85,
    metalness: 0.15,
  });
  disposables.push(pillarGeo, pillarMat);

  const runeGeo = new THREE.PlaneGeometry(0.12, 1.9);
  const runeMat = new THREE.MeshBasicMaterial({
    color: 0xd01820,
    transparent: true,
    opacity: 0.55,
  });
  disposables.push(runeGeo, runeMat);

  for (let z = 4; z >= -28; z -= 5.5) {
    // Left Pillar
    const leftPillar = new THREE.Mesh(pillarGeo, pillarMat);
    leftPillar.position.set(-3.8, 4.25, z);
    scene.add(leftPillar);

    const leftRune = new THREE.Mesh(runeGeo, runeMat);
    leftRune.position.set(-3.34, 3.4, z);
    leftRune.rotation.y = Math.PI / 2;
    scene.add(leftRune);

    // Right Pillar
    const rightPillar = new THREE.Mesh(pillarGeo, pillarMat);
    rightPillar.position.set(3.8, 4.25, z);
    scene.add(rightPillar);

    const rightRune = new THREE.Mesh(runeGeo, runeMat);
    rightRune.position.set(3.34, 3.4, z);
    rightRune.rotation.y = -Math.PI / 2;
    scene.add(rightRune);
  }

  // 3. Distant Gateway Frame at Corridor Terminus
  const gateGeo = new THREE.BoxGeometry(3.6, 6.2, 0.4);
  const gateMat = new THREE.MeshStandardMaterial({ color: 0x040507, roughness: 0.95 });
  const gate = new THREE.Mesh(gateGeo, gateMat);
  gate.position.set(0, 3.1, -29.0);
  scene.add(gate);
  disposables.push(gateGeo, gateMat);

  const portalVoidGeo = new THREE.PlaneGeometry(2.6, 5.6);
  const portalVoidMat = new THREE.MeshBasicMaterial({
    color: 0xd01820,
    transparent: true,
    opacity: 0.45,
  });
  const portalVoid = new THREE.Mesh(portalVoidGeo, portalVoidMat);
  portalVoid.position.set(0, 3.0, -28.75);
  scene.add(portalVoid);
  disposables.push(portalVoidGeo, portalVoidMat);

  return {
    dispose: () => {
      disposables.forEach((d) => d.dispose && d.dispose());
    },
  };
}
