import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { queryKeys } from '../utils/queryClient';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5006';

/**
 * Feature-Scoped Settings Hooks
 * Each feature owns its own data fetching and ONLY executes when that feature is active/rendered.
 */

// 1. Job Portal Settings
export function useJobPortalSettings(options = {}) {
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.settings.jobPortal || ['settings', 'job-portal'],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/admin/settings/job-portal`).catch(() => ({ data: { jobPortalEnabled: true } }));
      return {
        enabled: res.data?.jobPortalEnabled ?? true,
        freeMode: Boolean(res.data?.jobPortalFreeMode),
        premiumPrice: Number(res.data?.jobPortalPremiumPrice) || 199,
      };
    },
    enabled,
    staleTime: 10 * 60 * 1000, // 10 minutes fresh
    gcTime: 30 * 60 * 1000,
  });
}

// 2. Interview Settings
export function useInterviewSettings(options = {}) {
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.settings.interview || ['settings', 'interview'],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/admin/interview-settings`).catch(() => ({ data: { enabled: true } }));
      return {
        enabled: res.data?.enabled ?? true,
      };
    },
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}

// 3. Resume Settings
export function useResumeSettings(options = {}) {
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.settings.resume || ['settings', 'resume'],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/admin/resume-settings`).catch(() => ({ data: { enabled: true } }));
      return {
        enabled: res.data?.enabled ?? true,
      };
    },
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}

// 4. Assessment Settings
export function useAssessmentSettings(options = {}) {
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.settings.assessment || ['settings', 'assessment'],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/admin/assessment-settings`).catch(() => ({ data: { enabled: true } }));
      return {
        enabled: res.data?.enabled ?? true,
      };
    },
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}

// 5. Leaderboard Settings
export function useLeaderboardSettings(options = {}) {
  const { enabled = true } = options;
  return useQuery({
    queryKey: queryKeys.settings.leaderboard || ['settings', 'leaderboard'],
    queryFn: async () => {
      const res = await axios.get(`${BACKEND_URL}/api/admin/settings/leaderboard`).catch(() => ({ data: { showLeaderboard: false } }));
      return {
        showLeaderboard: Boolean(res.data?.showLeaderboard),
      };
    },
    enabled,
    staleTime: 10 * 60 * 1000,
    gcTime: 30 * 60 * 1000,
  });
}

/**
 * Backward-Compatible Safe Default Hook
 * Returns instant static feature configs by default.
 * Does NOT fire background network requests on initial page load.
 */
export function useFeatureSettings() {
  return {
    featuresConfig: {
      jobPortal: true,
      interview: true,
      resume: true,
      assessment: true,
    },
    jobPortalDetails: {
      jobPortalFreeMode: false,
      jobPortalPremiumPrice: 199,
    },
    showLeaderboard: false,
    isLoading: false,
  };
}
