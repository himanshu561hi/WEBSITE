import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5006";

const HackathonContext = createContext(null);

/**
 * HackathonProvider
 * Dynamically resolves the hackathon context:
 * - If a :slug is present in URL params (or passed via overrideSlug), loads /api/hackathon/by-slug/:slug
 * - If no slug is specified (base /hackathon), loads the single ACTIVE hackathon via /api/hackathon/active
 * - Provides safe fallback state when no active hackathon exists (isNoActive: true)
 */
export function HackathonProvider({ children, overrideSlug = null, overrideHackathonId = null }) {
  const params = useParams();
  const location = useLocation();

  const [currentHackathon, setCurrentHackathon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isNoActive, setIsNoActive] = useState(false);

  // Target slug can come from explicit override prop or URL params
  const targetSlug = overrideSlug || params.slug || null;

  const fetchContext = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      setIsNoActive(false);

      let url;
      if (overrideHackathonId) {
        url = `${BACKEND_URL}/api/hackathons/${overrideHackathonId}`;
      } else if (targetSlug) {
        url = `${BACKEND_URL}/api/hackathon/by-slug/${encodeURIComponent(targetSlug)}`;
      } else {
        url = `${BACKEND_URL}/api/hackathon/active`;
      }

      const res = await axios.get(url);
      if (res.data?.success && res.data.data) {
        setCurrentHackathon(res.data.data);
      } else {
        setCurrentHackathon(null);
      }
    } catch (err) {
      console.warn("Hackathon context resolution notice:", err.response?.data?.message || err.message);
      const code = err.response?.data?.code;
      if (code === "NO_ACTIVE_HACKATHON") {
        setIsNoActive(true);
        setCurrentHackathon(null);
        setError("NO_ACTIVE_HACKATHON");
      } else if (code === "HACKATHON_NOT_FOUND") {
        setCurrentHackathon(null);
        setError("HACKATHON_NOT_FOUND");
      } else {
        setCurrentHackathon(null);
        setError(err.response?.data?.message || "Failed to resolve hackathon context");
      }
    } finally {
      setLoading(false);
    }
  }, [targetSlug, overrideHackathonId]);

  useEffect(() => {
    fetchContext();
  }, [fetchContext, location.pathname]);

  const value = {
    currentHackathon,
    hackathonId: currentHackathon?.hackathonId || null,
    slug: currentHackathon?.slug || targetSlug || null,
    status: currentHackathon?.status || null,
    loading,
    error,
    isNoActive,
    refresh: fetchContext,
  };

  return (
    <HackathonContext.Provider value={value}>
      {children}
    </HackathonContext.Provider>
  );
}

/**
 * Hook to consume Hackathon Context
 */
export function useHackathon() {
  const context = useContext(HackathonContext);
  if (!context) {
    // Return a graceful non-crashing fallback object if used outside Provider
    return {
      currentHackathon: null,
      hackathonId: null,
      slug: null,
      status: null,
      loading: false,
      error: null,
      isNoActive: false,
      refresh: () => {},
    };
  }
  return context;
}

export default HackathonContext;
