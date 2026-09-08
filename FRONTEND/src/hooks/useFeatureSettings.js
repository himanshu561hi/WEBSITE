import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from '../utils/queryClient';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5006';

async function fetchAllFeatureSettings() {
  const [jobRes, intRes, resRes, assmtRes, leadRes] = await Promise.all([
    axios.get(`${BACKEND_URL}/api/admin/settings/job-portal`).catch(() => ({ data: { jobPortalEnabled: true } })),
    axios.get(`${BACKEND_URL}/api/admin/interview-settings`).catch(() => ({ data: { enabled: true } })),
    axios.get(`${BACKEND_URL}/api/admin/resume-settings`).catch(() => ({ data: { enabled: true } })),
    axios.get(`${BACKEND_URL}/api/admin/assessment-settings`).catch(() => ({ data: { enabled: true } })),
    axios.get(`${BACKEND_URL}/api/admin/settings/leaderboard`).catch(() => ({ data: { showLeaderboard: false } })),
  ]);

  return {
    featuresConfig: {
      jobPortal: jobRes.data?.jobPortalEnabled ?? true,
      interview: intRes.data?.enabled ?? true,
      resume: resRes.data?.enabled ?? true,
      assessment: assmtRes.data?.enabled ?? true,
    },
    jobPortalDetails: {
      jobPortalFreeMode: Boolean(jobRes.data?.jobPortalFreeMode),
      jobPortalPremiumPrice: Number(jobRes.data?.jobPortalPremiumPrice) || 199,
    },
    showLeaderboard: Boolean(leadRes.data?.showLeaderboard),
  };
}

/**
 * Shared Hook for Public Feature Flags & Settings
 * Deduplicates and caches settings across Navbar, Home, and CTAs for 5 minutes.
 */
export function useFeatureSettings() {
  const { data, isLoading } = useQuery({
    queryKey: queryKeys.settings.features,
    queryFn: fetchAllFeatureSettings,
    staleTime: 5 * 60 * 1000, // 5 minutes fresh
    gcTime: 30 * 60 * 1000, // 30 minutes in memory
  });

  return {
    featuresConfig: data?.featuresConfig || { jobPortal: true, interview: true, resume: true, assessment: true },
    jobPortalDetails: data?.jobPortalDetails || { jobPortalFreeMode: false, jobPortalPremiumPrice: 199 },
    showLeaderboard: data?.showLeaderboard || false,
    isLoading,
  };
}
