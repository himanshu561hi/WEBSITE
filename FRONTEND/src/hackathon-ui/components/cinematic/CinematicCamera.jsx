/**
 * calculateCameraTransform
 * Smooth camera push-in traveling physically deep into the corridor toward the ghost.
 */
export function calculateCameraTransform(
  scrollProgress = 0,
  reducedMotion = false,
  isImpactActive = false
) {
  const p = Math.min(Math.max(scrollProgress, 0), 1);

  if (reducedMotion) {
    return {
      x: 0,
      y: 0,
      scale: 1.0 + p * 0.15,
      rotateZ: 0,
      gateProximity: p,
    };
  }

  // Smooth, stable cinematic forward push into the corridor (gentle, steady-cam movement)
  const scale = 1.0 + p * 0.14;

  // Gentle, organic camera breathing (calm human presence without rapid jitter)
  const isWalking = p > 0.02;
  const stepCycle = p * Math.PI * 14;
  const footDrop = Math.abs(Math.sin(stepCycle));
  const walkBobY = isWalking ? (footDrop * 2.5 - 1.25) : 0;
  const walkSwayX = isWalking ? Math.sin(stepCycle * 0.5) * 2.0 : 0;
  const walkTilt = isWalking ? Math.sin(stepCycle * 0.5) * 0.20 : 0;

  return {
    x: walkSwayX,
    y: walkBobY,
    scale,
    rotateZ: walkTilt,
    gateProximity: p,
  };
}

export function useCinematicCamera(
  scrollProgress = 0,
  reducedMotion = false,
  isImpactActive = false
) {
  return calculateCameraTransform(scrollProgress, reducedMotion, isImpactActive);
}
