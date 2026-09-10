import * as THREE from "three";

/**
 * GhostEntity
 * Original 3D Paranormal Humanoid Wraith Apparition.
 * 
 * Features:
 * - GLSL wave displacement for organic billowing tattered cloth/shroud
 * - Translucent smoke body with chilling Fresnel rim glow
 * - Dark cowl hood with hollow black void
 * - Piercing glowing supernatural eyes that track cursor
 * - Reaching skeletal hands
 * - Zero jump scares, subtle, atmospheric, and environment-integrated
 */
export function createGhostEntity(scene) {
  const disposables = [];
  const shaderMats = [];

  const ghostRoot = new THREE.Group();
  ghostRoot.position.set(0, 0, -10);
  scene.add(ghostRoot);

  // Custom Spectral Shader
  const createGhostShader = (colorHex, rimHex) => {
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(colorHex) },
        uRimColor: { value: new THREE.Color(rimHex) },
        uOpacity: { value: 0.0 },
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        uniform float uTime;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          vec3 pos = position;
          
          // Billowing cloth / ectoplasm wind physics
          float wave = sin(pos.y * 3.5 + uTime * 2.2) * 0.08 +
                       cos(pos.x * 4.0 + uTime * 1.8) * 0.05 +
                       sin(pos.z * 3.0 + uTime * 1.6) * 0.06;
          float bottomFactor = clamp((2.5 - pos.y) / 2.5, 0.0, 1.0);
          pos.x += wave * bottomFactor;
          pos.z += wave * 0.7 * bottomFactor;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          vViewPosition = -mvPosition.xyz;
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        varying vec3 vViewPosition;
        varying vec2 vUv;
        uniform vec3 uColor;
        uniform vec3 uRimColor;
        uniform float uOpacity;
        void main() {
          vec3 normal = normalize(vNormal);
          vec3 viewDir = normalize(vViewPosition);
          float fresnel = 1.0 - abs(dot(normal, viewDir));
          fresnel = pow(fresnel, 2.3);

          float bottomFade = smoothstep(0.0, 0.22, vUv.y);
          vec3 col = mix(uColor, uRimColor, fresnel * 0.8);
          float alpha = uOpacity * bottomFade * (0.32 + fresnel * 0.68);
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });
    shaderMats.push(mat);
    disposables.push(mat);
    return mat;
  };

  const shroudMat = createGhostShader(0x050608, 0xd01820);
  const innerShroudMat = createGhostShader(0x020304, 0x38bdf8);

  // 1. Shroud Body (Tapered Cylinder)
  const bodyGeo = new THREE.CylinderGeometry(0.32, 1.2, 2.7, 24, 18, true);
  const bodyMesh = new THREE.Mesh(bodyGeo, shroudMat);
  bodyMesh.position.y = 1.35;
  ghostRoot.add(bodyMesh);
  disposables.push(bodyGeo);

  const innerBodyGeo = new THREE.CylinderGeometry(0.26, 0.9, 2.4, 20, 14, true);
  const innerBodyMesh = new THREE.Mesh(innerBodyGeo, innerShroudMat);
  innerBodyMesh.position.y = 1.3;
  ghostRoot.add(innerBodyMesh);
  disposables.push(innerBodyGeo);

  // 2. Hood / Head
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 2.65, 0);
  ghostRoot.add(headGroup);

  const hoodGeo = new THREE.ConeGeometry(0.52, 0.9, 20, 10, true);
  const hoodMesh = new THREE.Mesh(hoodGeo, shroudMat);
  hoodMesh.rotation.x = Math.PI * 0.9;
  hoodMesh.position.set(0, 0.1, -0.08);
  headGroup.add(hoodMesh);
  disposables.push(hoodGeo);

  const hoodVoidGeo = new THREE.SphereGeometry(0.3, 14, 14);
  const hoodVoidMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
  const hoodVoid = new THREE.Mesh(hoodVoidGeo, hoodVoidMat);
  hoodVoid.position.set(0, 0, 0.05);
  headGroup.add(hoodVoid);
  disposables.push(hoodVoidGeo, hoodVoidMat);

  // 3. Piercing Supernatural Eyes
  const eyeGeo = new THREE.SphereGeometry(0.04, 10, 10);
  const eyeMat = new THREE.MeshBasicMaterial({ color: 0xffffff, toneMapped: false });
  disposables.push(eyeGeo, eyeMat);

  const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
  leftEye.position.set(-0.1, 0.02, 0.25);
  headGroup.add(leftEye);

  const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
  rightEye.position.set(0.1, 0.02, 0.25);
  headGroup.add(rightEye);

  const eyeGlowGeo = new THREE.SphereGeometry(0.08, 8, 8);
  const eyeGlowMat = new THREE.MeshBasicMaterial({
    color: 0xd01820,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
  });
  disposables.push(eyeGlowGeo, eyeGlowMat);

  const leftEyeGlow = new THREE.Mesh(eyeGlowGeo, eyeGlowMat);
  leftEyeGlow.position.set(-0.1, 0.02, 0.25);
  headGroup.add(leftEyeGlow);

  const rightEyeGlow = new THREE.Mesh(eyeGlowGeo, eyeGlowMat);
  rightEyeGlow.position.set(0.1, 0.02, 0.25);
  headGroup.add(rightEyeGlow);

  // 4. Reaching Skeletal Arms & Hands
  const armGeo = new THREE.CylinderGeometry(0.05, 0.12, 0.85, 10, 6, true);
  disposables.push(armGeo);

  const leftArm = new THREE.Group();
  leftArm.position.set(-0.6, 2.05, 0.1);
  leftArm.rotation.set(0.45, 0, -0.35);
  const leftArmMesh = new THREE.Mesh(armGeo, shroudMat);
  leftArmMesh.position.y = -0.42;
  leftArm.add(leftArmMesh);
  ghostRoot.add(leftArm);

  const rightArm = new THREE.Group();
  rightArm.position.set(0.6, 2.0, 0.12);
  rightArm.rotation.set(0.55, 0, 0.38);
  const rightArmMesh = new THREE.Mesh(armGeo, shroudMat);
  rightArmMesh.position.y = -0.42;
  rightArm.add(rightArmMesh);
  ghostRoot.add(rightArm);

  // 5. Ectoplasm Particles
  const emberCount = 350;
  const emberGeo = new THREE.BufferGeometry();
  const emberPositions = new Float32Array(emberCount * 3);
  for (let i = 0; i < emberCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.35 + Math.random() * 1.8;
    emberPositions[i * 3] = Math.cos(angle) * radius;
    emberPositions[i * 3 + 1] = Math.random() * 3.2;
    emberPositions[i * 3 + 2] = Math.sin(angle) * radius;
  }
  emberGeo.setAttribute("position", new THREE.BufferAttribute(emberPositions, 3));
  const emberMat = new THREE.PointsMaterial({
    color: 0xd01820,
    size: 0.04,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
  });
  const emberPoints = new THREE.Points(emberGeo, emberMat);
  ghostRoot.add(emberPoints);
  disposables.push(emberGeo, emberMat);

  return {
    group: ghostRoot,
    head: headGroup,
    setOpacity: (opacity) => {
      shaderMats.forEach((mat) => {
        mat.uniforms.uOpacity.value = opacity;
      });
      emberMat.opacity = opacity * 0.75;
      eyeMat.opacity = opacity;
      eyeGlowMat.opacity = opacity * 0.8;
    },
    update: (elapsedTime, mouse) => {
      shaderMats.forEach((mat) => {
        mat.uniforms.uTime.value = elapsedTime;
      });

      // Subtle levitation
      ghostRoot.position.y = Math.sin(elapsedTime * 1.3) * 0.12;

      // Head tracks mouse
      headGroup.rotation.y = mouse.x * 0.4;
      headGroup.rotation.x = -mouse.y * 0.3;

      // Arm subtle bobbing
      leftArm.rotation.x = 0.45 + Math.sin(elapsedTime * 1.6) * 0.05;
      rightArm.rotation.x = 0.55 + Math.cos(elapsedTime * 1.4) * 0.05;

      // Ectoplasm rise
      const pos = emberGeo.attributes.position.array;
      for (let i = 0; i < emberCount; i++) {
        pos[i * 3 + 1] += 0.01;
        if (pos[i * 3 + 1] > 3.4) pos[i * 3 + 1] = 0.1;
      }
      emberGeo.attributes.position.needsUpdate = true;
    },
    dispose: () => {
      scene.remove(ghostRoot);
      disposables.forEach((d) => d.dispose && d.dispose());
    },
  };
}
