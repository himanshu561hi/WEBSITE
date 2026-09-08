import { purgePrivateUserCache } from './queryClient';

/**
 * Clears ALL user-related data from localStorage, sessionStorage, and memory cache.
 * Call this on every logout, regardless of user type.
 */
export const clearAllUserData = () => {
  // ── localStorage keys ──────────────────────────────────────────────────────
  const localKeys = [
    'studentToken',
    'studentData',
    'interviewToken',
    'interviewUser',
    'interviewUserRole',
    'adminToken',
    'adminData',
  ];
  localKeys.forEach(key => localStorage.removeItem(key));

  // ── sessionStorage keys (banners, caches, temp data) ──────────────────────
  sessionStorage.clear();

  // ── Purge private user cache from memory (TanStack Query) ─────────────────
  try {
    purgePrivateUserCache();
  } catch (e) {
    // Ignore if called before queryClient init
  }
};
