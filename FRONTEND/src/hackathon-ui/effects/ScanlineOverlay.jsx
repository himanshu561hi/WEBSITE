import React, { memo } from "react";

/**
 * ScanlineOverlay
 * Renders subtle CRT horizontal scanlines and faint RGB separation
 * for that retro-futuristic terminal monitor aesthetic.
 */
const ScanlineOverlay = memo(function ScanlineOverlay() {
  return (
    <div 
      className="crt-scanlines" 
      aria-hidden="true" 
    />
  );
});

export default ScanlineOverlay;
