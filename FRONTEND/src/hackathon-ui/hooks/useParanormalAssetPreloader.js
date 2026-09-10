import { useState, useEffect } from "react";
import { scenes } from "../config/sceneConfig";
import buildxLogoDanger from "../assets/buildx-logo-danger.png";

/**
 * useParanormalAssetPreloader
 * Preloads and decodes ALL 13 scene images and crucial branding assets
 * directly into GPU memory upfront before user scroll begins.
 * Prevents missing images, blank frames, and pop-in flicker.
 */
export function useParanormalAssetPreloader() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const allSources = [
      ...scenes.map((s) => s.image),
      buildxLogoDanger,
    ].filter(Boolean);

    const total = allSources.length;
    let loadedCount = 0;

    const onAssetLoaded = () => {
      loadedCount++;
      if (isMounted) {
        const pct = Math.round((loadedCount / total) * 100);
        setProgress(pct);
      }
    };

    const loadSingleImage = (src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;

        const handleSuccess = () => {
          if ("decode" in img) {
            img
              .decode()
              .then(() => {
                onAssetLoaded();
                resolve();
              })
              .catch(() => {
                onAssetLoaded();
                resolve();
              });
          } else {
            onAssetLoaded();
            resolve();
          }
        };

        if (img.complete && img.naturalWidth > 0) {
          handleSuccess();
        } else {
          img.onload = handleSuccess;
          img.onerror = () => {
            onAssetLoaded();
            resolve();
          };
        }
      });
    };

    // Load all assets in parallel with GPU decoding
    Promise.all(allSources.map(loadSingleImage)).then(() => {
      if (isMounted) {
        setProgress(100);
        setTimeout(() => {
          if (isMounted) setIsReady(true);
        }, 300);
      }
    });

    // Hard fallback timeout: max 4.0s so user is never stuck on slow networks
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setProgress(100);
        setIsReady(true);
      }
    }, 4000);

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  return { progress, isReady };
}
