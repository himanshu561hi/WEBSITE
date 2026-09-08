import { QueryClient } from '@tanstack/react-query';

/**
 * Global QueryClient configured for optimal performance and data isolation.
 * 
 * Cache Policies:
 * - Public / Slow-changing data: 5-minute staleTime, 30-minute gcTime.
 * - Standard User / Dashboard data: 1-minute staleTime, 10-minute gcTime.
 * - Sensitive / Fast-changing data (payments, submission locks): 0 staleTime.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute default stale time
      gcTime: 10 * 60 * 1000, // 10 minutes cache retention
      refetchOnWindowFocus: false, // Prevent disruptive refetch bursts on tab switch
      retry: 1, // Single retry on network failure
    },
  },
});

/**
 * Standardized Query Key Factories (Guarantees Data & Multi-Hackathon Isolation)
 */
export const queryKeys = {
  // Global / Public Website Settings
  settings: {
    features: ['settings', 'features'],
    leaderboard: ['settings', 'leaderboard'],
    banner: ['settings', 'banner'],
  },
  // User Profile & Authentication Data
  user: (userId) => ({
    all: ['user', userId || 'anonymous'],
    profile: ['user', userId || 'anonymous', 'profile'],
    credits: ['user', userId || 'anonymous', 'credits'],
    sessions: ['user', userId || 'anonymous', 'sessions'],
    resumes: ['user', userId || 'anonymous', 'resumes'],
  }),
  // Multi-Hackathon Scoped Keys (Strict Hackathon Isolation)
  hackathon: (hackathonId) => ({
    all: ['hackathon', hackathonId || 'active'],
    details: ['hackathon', hackathonId || 'active', 'details'],
    teams: (filters) => ['hackathon', hackathonId || 'active', 'teams', filters || {}],
    overview: ['hackathon', hackathonId || 'active', 'overview'],
    myTeam: (userId) => ['hackathon', hackathonId || 'active', 'my-team', userId || 'me'],
    results: ['hackathon', hackathonId || 'active', 'results'],
    prizes: ['hackathon', hackathonId || 'active', 'prizes'],
    sponsors: ['hackathon', hackathonId || 'active', 'sponsors'],
  }),
  // Jobs & Portal Data
  jobs: {
    list: (params) => ['jobs', 'list', params || {}],
    detail: (id) => ['jobs', 'detail', id],
    saved: ['jobs', 'saved'],
    applied: ['jobs', 'applied'],
  },
};

/**
 * Safe Cache Invalidation on Logout
 */
export function purgePrivateUserCache() {
  queryClient.removeQueries({ queryKey: ['user'] });
  queryClient.removeQueries({ queryKey: ['jobs', 'saved'] });
  queryClient.removeQueries({ queryKey: ['jobs', 'applied'] });
}
