const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

const ALLOWED_MIMES = [
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
  'application/vnd.ms-excel', // .xls
  'application/pdf',
  'application/vnd.ms-powerpoint', // .ppt
  'application/vnd.openxmlformats-officedocument.presentationml.presentation', // .pptx
  'image/png',
  'image/jpeg',
  'image/webp',
];

const ALLOWED_EXTENSIONS = ['.xlsx', '.xls', '.pdf', '.ppt', '.pptx', '.png', '.jpg', '.jpeg', '.webp'];

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB limit
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase();
    // Block path traversal characters
    if (file.originalname && (file.originalname.includes('..') || file.originalname.includes('/') || file.originalname.includes('\\'))) {
      return cb(new Error('Invalid filename: Path traversal characters are not permitted.'));
    }
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      return cb(new Error(`File type rejected. Allowed extensions: ${ALLOWED_EXTENSIONS.join(', ')}`));
    }
    cb(null, true);
  },
});

const auth = require('../middleware/auth');
const { verifyAdmin } = require('../middleware/verifyAdmin');
const { verifyEditorial } = require('../middleware/verifyEditorial');

const {
  getPublicHackathonInfo,
  getMyTeam,
  getAdminOverview,
  getAdminSettings,
  updateAdminSettings,
  toggleHackathonActive,
  getAdminAuditLogs,
  previewUnstopExcel,
  commitUnstopImport,
  getAdminTeams,
  getAdminTeamById,
  createManualTeam,
  updateAdminTeam,
  deleteAdminTeam,
  cleanOrphanedRecords,
  updateTeamReview,
  updateTeamStatus,
  resendShortlistEmail,
  createPaymentOrder,
  verifyPayment,
  handlePaymentWebhook,
  getMySubmission,
  saveSubmissionDraft,
  finalSubmitProject,
  getAdminSubmissions,
  getAdminSubmissionByTeamId,
  unlockAdminSubmission,
  getAdminEditorialMembers,
  createAdminEditorialMember,
  searchGlobalJudges,
  reuseAdminEditorialMember,
  updateAdminEditorialMember,
  resetAdminEditorialMemberPassword,
  getAdminEditorialAssignments,
  createAdminEditorialAssignment,
  deleteAdminEditorialAssignment,
  getAdminEditorialEvaluations,
  reopenAdminEditorialEvaluation,
  editorialLogin,
  editorialLogout,
  getEditorialMe,
  changeEditorialPassword,
  getEditorialDashboard,
  getEditorialProjects,
  getEditorialProjectDetail,
  auditEditorialLinkClick,
  saveEditorialEvaluationDraft,
  finalizeEditorialEvaluation,
  calculateAdminResults,
  getAdminResults,
  getAdminResultDetail,
  resolveAdminResultTie,
  assignAdminResultWinner,
  approveAdminResults,
  publishAdminResults,
  lockAdminResults,
  reopenAdminResults,
  getParticipantMyResult,
  getPublicResults,
  getAdminCertificates,
  generateAdminCertificates,
  emailAdminCertificate,
  emailBulkAdminCertificates,
  revokeAdminCertificate,
  getAdminCertificateDetail,
  getParticipantMyCertificates,
  downloadCertificate,
  verifyPublicCertificate,
  getAdminPrizes,
  createAdminPrize,
  updateAdminPrize,
  deleteAdminPrize,
  getAdminSponsors,
  createAdminSponsor,
  searchGlobalSponsors,
  reuseAdminSponsor,
  updateAdminSponsor,
  deleteAdminSponsor,
  getPublicSponsors,
  getAdminPrizeFulfillments,
  createAdminPrizeFulfillment,
  updateAdminPrizeFulfillment,
  notifyAdminPrizeFulfillment,
  getParticipantMyPrizes,
  getPublicHealth,
  getAdminHealth,
  getAdminAlerts,
  getAdminEmailStats,
  getAdminSecuritySummary,
  exportAdminResource,
  operationalSearch,
  getAdminTeam360,
  registerWebsiteTeam,
  getAdminDuplicateQueue,
  resolveAdminDuplicateQueueItem,
  getAdminAnalytics,
  getAdminGlobalAnalytics,
  getAdminCompareAnalytics,
  getParticipantStats,
  getEditorialStats,
  getPublicLeaderboard,
  getAdminHackathonEmailLogs,
  previewHackathonEmail,
  sendAdminTestEmail,
  sendAdminBulkHackathonEmail,
} = require('../controllers/hackathonController');
const {
  hackathonPublicLimiter,
  hackathonExportLimiter,
} = require('../middleware/hackathonLimiter');

const {
  resolveHackathonContext,
  resolveActiveHackathon,
  resolveHackathonBySlug,
  formatPublicHackathonData,
} = require('../middleware/resolveHackathon');

/**
 * Public Routes (Phase M3 Dynamic Hackathon Context)
 */
// Public Active Hackathon Endpoint
router.get('/active', resolveActiveHackathon({ required: true }), (req, res) => {
  const publicData = formatPublicHackathonData(req.hackathon);
  res.status(200).json({
    success: true,
    data: publicData,
  });
});

// Public By-Slug Hackathon Endpoint
router.get('/by-slug/:slug', resolveHackathonBySlug({ required: true }), (req, res) => {
  const publicData = formatPublicHackathonData(req.hackathon);
  res.status(200).json({
    success: true,
    data: publicData,
  });
});

router.get('/info', resolveHackathonContext({ required: false, defaultToActive: true }), getPublicHackathonInfo);
router.get('/health', hackathonPublicLimiter, getPublicHealth);

/**
 * Participant Protected Routes (Reuses existing Student/User JWT authentication)
 */
router.get('/my-team', auth, resolveHackathonContext({ required: false, defaultToActive: true }), getMyTeam);

/**
 * Phase 4: Participant Payment Routes
 */
router.post('/payment/create-order', auth, resolveHackathonContext({ required: false, defaultToActive: true }), createPaymentOrder);
router.post('/payment/verify', auth, resolveHackathonContext({ required: false, defaultToActive: true }), verifyPayment);
router.post('/payment/webhook', handlePaymentWebhook);

/**
 * Phase 5: Participant Project Submission Routes
 */
router.get('/submission/my-submission', auth, resolveHackathonContext({ required: false, defaultToActive: true }), getMySubmission);
router.post('/submission/save-draft', auth, resolveHackathonContext({ required: false, defaultToActive: true }), saveSubmissionDraft);
router.post('/submission/final-submit', auth, resolveHackathonContext({ required: false, defaultToActive: true }), finalSubmitProject);

/**
 * Admin Hackathon Management Workspace Routes
 */
router.get('/admin/overview', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminOverview);
router.get('/admin/settings', auth, verifyAdmin, getAdminSettings);
router.put('/admin/settings', auth, verifyAdmin, updateAdminSettings);
router.post('/admin/settings/toggle-active', auth, verifyAdmin, toggleHackathonActive);
router.get('/admin/audit-logs', auth, verifyAdmin, getAdminAuditLogs);
router.get('/admin/teams', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminTeams);

/**
 * Phase 5: Admin Submissions Management Routes
 */
router.get('/admin/submissions', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminSubmissions);
router.get('/admin/submissions/team/:teamId', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminSubmissionByTeamId);
router.post('/admin/submissions/:id/unlock', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), unlockAdminSubmission);

/**
 * Phase 3 & 4: Admin Team Management & Review Routes
 */
router.get('/admin/teams/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminTeamById);
router.post('/admin/teams', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), createManualTeam);
router.put('/admin/teams/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminTeam);
router.delete('/admin/teams/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), deleteAdminTeam);
router.post('/admin/cleanup-orphaned', auth, verifyAdmin, cleanOrphanedRecords);
router.put('/admin/teams/:id/review', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateTeamReview);
router.put('/admin/teams/:id/status', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateTeamStatus);
router.post('/admin/teams/:id/resend-shortlist-email', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), resendShortlistEmail);

/**
 * Phase 2: Unstop Excel Import Routes
 */
router.post('/admin/unstop/preview', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), upload.single('excelFile'), previewUnstopExcel);
router.post('/admin/unstop/commit', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), commitUnstopImport);

/**
 * Phase 6 / M7: Admin Editorial & Evaluation Management Routes
 */
router.get('/admin/editorial-members', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminEditorialMembers);
router.post('/admin/editorial-members', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), createAdminEditorialMember);
router.get('/admin/editorial-members/search-global', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), searchGlobalJudges);
router.post('/admin/editorial-members/reuse', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), reuseAdminEditorialMember);
router.put('/admin/editorial-members/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminEditorialMember);
router.post('/admin/editorial-members/:id/reset-password', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), resetAdminEditorialMemberPassword);

router.get('/admin/editorial-assignments', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminEditorialAssignments);
router.post('/admin/editorial-assignments', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), createAdminEditorialAssignment);
router.delete('/admin/editorial-assignments/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), deleteAdminEditorialAssignment);

router.get('/admin/editorial-evaluations', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminEditorialEvaluations);
router.post('/admin/editorial-evaluations/:id/reopen', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), reopenAdminEditorialEvaluation);

/**
 * Phase 6: Editorial / Judge Portal Routes
 */
router.post('/editorial/login', editorialLogin);
router.post('/editorial/logout', auth, verifyEditorial, editorialLogout);
router.get('/editorial/me', auth, verifyEditorial, getEditorialMe);
router.put('/editorial/password', auth, verifyEditorial, changeEditorialPassword);

router.get('/editorial/dashboard', auth, verifyEditorial, getEditorialDashboard);
router.get('/editorial/projects', auth, verifyEditorial, getEditorialProjects);
router.get('/editorial/projects/:teamId', auth, verifyEditorial, getEditorialProjectDetail);
router.post('/editorial/projects/:teamId/audit-link-click', auth, verifyEditorial, auditEditorialLinkClick);
router.post('/editorial/projects/:teamId/evaluation/draft', auth, verifyEditorial, saveEditorialEvaluationDraft);
router.post('/editorial/projects/:teamId/evaluation/finalize', auth, verifyEditorial, finalizeEditorialEvaluation);

/**
 * Phase 7: Results, Winner Management & Public Leaderboard
 */
router.get('/results/my-result', auth, resolveHackathonContext({ required: false, defaultToActive: true }), getParticipantMyResult);
router.get('/public/results', resolveHackathonContext({ required: false, defaultToActive: true }), getPublicResults);

// Admin Results Endpoints
router.post('/admin/results/calculate', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), calculateAdminResults);
router.get('/admin/results', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminResults);
router.get('/admin/results/:teamId', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminResultDetail);
router.post('/admin/results/resolve-tie', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), resolveAdminResultTie);
router.post('/admin/results/:teamId/assign-winner', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), assignAdminResultWinner);
router.post('/admin/results/approve', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), approveAdminResults);
router.post('/admin/results/publish', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), publishAdminResults);
router.post('/admin/results/lock', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), lockAdminResults);
router.post('/admin/results/reopen', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), reopenAdminResults);

// ==========================================
// Phase 8: Certificates, Prizes & Sponsors
// ==========================================

// Public Endpoints
router.get('/certificates/verify/:verificationCode', verifyPublicCertificate);
router.get('/public/sponsors', resolveHackathonContext({ required: false, defaultToActive: true }), getPublicSponsors);

// Participant Endpoints
router.get('/certificates/my-certificates', auth, resolveHackathonContext({ required: false, defaultToActive: true }), getParticipantMyCertificates);
router.get('/certificates/:id/download', auth, downloadCertificate);
router.get('/prizes/my-prizes', auth, resolveHackathonContext({ required: false, defaultToActive: true }), getParticipantMyPrizes);

// Admin Certificates Endpoints
router.get('/admin/certificates', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminCertificates);
router.post('/admin/certificates/generate', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), generateAdminCertificates);
router.post('/admin/certificates/generate-bulk', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), generateAdminCertificates);
router.post('/admin/certificates/email-bulk', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), emailBulkAdminCertificates);
router.post('/admin/certificates/:id/email', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), emailAdminCertificate);
router.post('/admin/certificates/:id/revoke', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), revokeAdminCertificate);
router.get('/admin/certificates/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminCertificateDetail);

// Admin Prizes Endpoints
router.get('/admin/prizes', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminPrizes);
router.post('/admin/prizes', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), createAdminPrize);
router.put('/admin/prizes/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminPrize);
router.patch('/admin/prizes/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminPrize);
router.delete('/admin/prizes/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), deleteAdminPrize);

// Admin Sponsors Endpoints
router.get('/admin/sponsors/search-global', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), searchGlobalSponsors);
router.post('/admin/sponsors/reuse', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), reuseAdminSponsor);
router.get('/admin/sponsors', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminSponsors);
router.post('/admin/sponsors', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), createAdminSponsor);
router.put('/admin/sponsors/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminSponsor);
router.patch('/admin/sponsors/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminSponsor);
router.delete('/admin/sponsors/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), deleteAdminSponsor);

// Admin Prize Fulfillment Endpoints
router.get('/admin/prize-fulfillments', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminPrizeFulfillments);
router.post('/admin/prize-fulfillments', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), createAdminPrizeFulfillment);
router.put('/admin/prize-fulfillments/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminPrizeFulfillment);
router.patch('/admin/prize-fulfillments/:id', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), updateAdminPrizeFulfillment);
router.post('/admin/prize-fulfillments/:id/notify', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), notifyAdminPrizeFulfillment);

// ==========================================
// Phase 9: Operations, Health & Analytics
// ==========================================
router.get('/admin/health', auth, verifyAdmin, getAdminHealth);
router.get('/admin/alerts', auth, verifyAdmin, getAdminAlerts);
router.get('/admin/email-stats', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true, allowInactive: true }), getAdminEmailStats);
router.get('/admin/security-summary', auth, verifyAdmin, getAdminSecuritySummary);
router.get('/admin/export/:resource', auth, verifyAdmin, hackathonExportLimiter, resolveHackathonContext({ required: false, defaultToActive: true }), exportAdminResource);
router.get('/admin/search', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), operationalSearch);
router.get('/admin/team-360/:teamId', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminTeam360);

// ==========================================
// Team Identity & Duplicate Verification Queue
// ==========================================
// Public Website Registration (Requires Hackathon Context)
router.post('/register', hackathonPublicLimiter, resolveHackathonContext({ required: true, defaultToActive: false }), registerWebsiteTeam);
router.post('/teams/register-website', hackathonPublicLimiter, resolveHackathonContext({ required: true, defaultToActive: false }), registerWebsiteTeam);
router.post('/:slug/register', hackathonPublicLimiter, resolveHackathonBySlug({ required: true }), registerWebsiteTeam);
router.get('/admin/duplicates', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), getAdminDuplicateQueue);
router.post('/admin/duplicates/:id/resolve', auth, verifyAdmin, resolveHackathonContext({ required: false, defaultToActive: true }), resolveAdminDuplicateQueueItem);

// ==========================================
// Phase M2: Hackathon Core Management (Admin)
// ==========================================
const hackathonManagementRoutes = require('./hackathonManagementRoutes');
router.use('/admin/hackathons', hackathonManagementRoutes);

// ==========================================
// Phase M9: Multi-Hackathon Analytics & Leaderboards
// ==========================================
router.get('/admin/analytics', auth, verifyAdmin, resolveHackathonContext({ required: true, allowInactive: true }), getAdminAnalytics);
router.get('/admin/analytics/global', auth, verifyAdmin, getAdminGlobalAnalytics);
router.get('/admin/analytics/compare', auth, verifyAdmin, getAdminCompareAnalytics);
router.get('/participant/stats', auth, resolveHackathonContext({ required: false, defaultToActive: true, allowInactive: true }), getParticipantStats);
router.get('/editorial/stats', auth, verifyEditorial, resolveHackathonContext({ required: false, defaultToActive: true, allowInactive: true }), getEditorialStats);
router.get('/public/leaderboard', resolveHackathonContext({ required: false, defaultToActive: true, allowInactive: true }), getPublicLeaderboard);
router.get('/:slug/leaderboard', resolveHackathonBySlug({ required: true, allowInactive: true }), getPublicLeaderboard);

// ==========================================
// Phase M10: Multi-Hackathon Email & Notifications
// ==========================================
router.get('/admin/emails/logs', auth, verifyAdmin, resolveHackathonContext({ required: true, allowInactive: true }), getAdminHackathonEmailLogs);
router.get('/admin/emails/preview', auth, verifyAdmin, resolveHackathonContext({ required: true, allowInactive: true }), previewHackathonEmail);
router.post('/admin/emails/test-send', auth, verifyAdmin, resolveHackathonContext({ required: true, allowInactive: true }), sendAdminTestEmail);
router.post('/admin/emails/bulk', auth, verifyAdmin, resolveHackathonContext({ required: true, allowInactive: true }), sendAdminBulkHackathonEmail);

module.exports = router;


