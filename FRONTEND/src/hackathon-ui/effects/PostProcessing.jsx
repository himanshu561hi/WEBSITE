import React, { memo } from "react";
import FilmGrain from "./FilmGrain";
import Vignette from "./Vignette";
import CRTOverlay from "./CRTOverlay";

/**
 * PostProcessing
 * Master cinematic postprocessing coordinator:
 * - Procedural SVG film grain
 * - Vignette with radial falloff
 * - Subtle scanlines on displays
 */
const PostProcessing = memo(function PostProcessing() {
  return (
    <>
      <FilmGrain />
      <CRTOverlay />
      <Vignette intensity="medium" />
    </>
  );
});

export default PostProcessing;
