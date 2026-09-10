import React, { memo } from "react";

/**
 * CRTOverlay
 * Subtle horizontal raster scanlines reminiscent of old CRT surveillance monitors.
 */
const CRTOverlay = memo(function CRTOverlay() {
  return <div className="crt-scanlines" aria-hidden="true" />;
});

export default CRTOverlay;
