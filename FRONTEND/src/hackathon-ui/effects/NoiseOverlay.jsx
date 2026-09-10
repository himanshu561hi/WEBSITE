import React, { memo } from "react";

/**
 * NoiseOverlay
 * Renders a subtle, non-blocking film grain texture
 * to evoke authentic 80s analog sci-fi atmosphere.
 */
const NoiseOverlay = memo(function NoiseOverlay() {
  return (
    <div 
      className="film-grain" 
      aria-hidden="true" 
    />
  );
});

export default NoiseOverlay;
