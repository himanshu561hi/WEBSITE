const mongoose = require('mongoose');
const Hackathon = require('../models/Hackathon');

// Standardized Error Codes for Hackathon Context
const ERROR_CODES = {
  HACKATHON_CONTEXT_REQUIRED: 'HACKATHON_CONTEXT_REQUIRED',
  HACKATHON_NOT_FOUND: 'HACKATHON_NOT_FOUND',
  HACKATHON_INACTIVE: 'HACKATHON_INACTIVE',
  NO_ACTIVE_HACKATHON: 'NO_ACTIVE_HACKATHON',
  HACKATHON_CONTEXT_INVALID: 'HACKATHON_CONTEXT_INVALID',
  HACKATHON_CONTEXT_INTEGRITY_ERROR: 'HACKATHON_CONTEXT_INTEGRITY_ERROR',
};

/**
 * Format public-safe hackathon response object
 */
function formatPublicHackathonData(hackathon, settings = null) {
  if (!hackathon) return null;
  const s = settings || hackathon.settingsRef || {};

  return {
    hackathonId: hackathon.hackathonId,
    slug: hackathon.slug,
    name: hackathon.name,
    title: hackathon.title || hackathon.name,
    shortDescription: hackathon.shortDescription || '',
    description: hackathon.description || '',
    status: hackathon.status,
    startDate: hackathon.startDate || s.startDate || null,
    endDate: hackathon.endDate || s.endDate || null,
    registrationStart: hackathon.registrationStart || null,
    registrationDeadline: hackathon.registrationDeadline || null,
    submissionDeadline: hackathon.submissionDeadline || s.submissionDeadline || null,
    resultDate: hackathon.resultDate || s.resultDate || null,
    logoUrl: hackathon.logoUrl || '',
    bannerUrl: hackathon.bannerUrl || '',
    organizerName: hackathon.organizerName || 'Code-A-Nova',
    tags: hackathon.tags || [],
    settings: {
      participationFee: s.participationFee !== undefined ? s.participationFee : 0,
      currency: s.currency || 'INR',
      rules: s.rules || [],
      tracks: s.tracks || [],
      judgingCriteria: s.judgingCriteria || [],
      prizes: s.prizes || [],
      announcements: (s.announcements || []).filter((a) => a.active !== false),
      isRegistrationOpen: Boolean(s.isRegistrationOpen),
      isSubmissionOpen: Boolean(s.isSubmissionOpen),
      isResultsPublished: Boolean(s.isResultsPublished),
      isActive: hackathon.status === 'ACTIVE',
    },
  };
}

/**
 * Helper: Find hackathon by normalized slug
 */
async function findBySlug(slug) {
  if (!slug || typeof slug !== 'string') return null;
  const normalized = slug.toLowerCase().trim();
  return await Hackathon.findOne({
    slug: normalized,
    isDeleted: { $ne: true },
  }).populate('settingsRef');
}

/**
 * Helper: Find hackathon by canonical ID (e.g. CAN-HACK-000001 or legacy can-hackathon-2026)
 */
async function findById(hackathonId) {
  if (!hackathonId || typeof hackathonId !== 'string') return null;
  const cleanId = hackathonId.trim();

  // Search by exact canonical ID, uppercase ID, or legacy lowercase ID
  return await Hackathon.findOne({
    $or: [
      { hackathonId: cleanId },
      { hackathonId: cleanId.toUpperCase() },
      { hackathonId: cleanId.toLowerCase() },
    ],
    isDeleted: { $ne: true },
  }).populate('settingsRef');
}

/**
 * Helper: Find the single currently ACTIVE hackathon with integrity checking
 */
async function findActiveHackathon() {
  const activeList = await Hackathon.find({
    status: 'ACTIVE',
    isDeleted: { $ne: true },
  }).populate('settingsRef');

  if (activeList.length > 1) {
    const err = new Error(
      `Database integrity violation: Detected ${activeList.length} hackathons simultaneously marked as ACTIVE.`
    );
    err.code = ERROR_CODES.HACKATHON_CONTEXT_INTEGRITY_ERROR;
    err.statusCode = 500;
    throw err;
  }

  return activeList.length === 1 ? activeList[0] : null;
}

/**
 * Middleware: Universal Hackathon Context Resolver
 * Enforces strict priority order:
 *  A. Route parameter (:slug)
 *  B. Explicit API Header (x-hackathon-id)
 *  C. Explicit Query parameter (?hackathonId= or ?slug=)
 *  D. Base active hackathon resolution (if defaultToActive: true)
 *
 * Options:
 *  - required: boolean (default: false)
 *  - defaultToActive: boolean (default: true)
 *  - allowInactive: boolean (default: true)
 */
const resolveHackathonContext = (options = {}) => {
  const { required = false, defaultToActive = true, allowInactive = true } = options;

  return async (req, res, next) => {
    try {
      let resolvedHackathon = null;
      let contextSource = null;

      // Priority A: Route Parameter (:slug or :hackathonId)
      if (req.params?.slug) {
        resolvedHackathon = await findBySlug(req.params.slug);
        contextSource = 'ROUTE_SLUG';
        if (!resolvedHackathon) {
          return res.status(404).json({
            success: false,
            code: ERROR_CODES.HACKATHON_NOT_FOUND,
            message: `Hackathon with slug "${req.params.slug}" was not found.`,
          });
        }
      } else if (req.params?.hackathonId) {
        resolvedHackathon = await findById(req.params.hackathonId);
        contextSource = 'ROUTE_ID';
        if (!resolvedHackathon) {
          return res.status(404).json({
            success: false,
            code: ERROR_CODES.HACKATHON_NOT_FOUND,
            message: `Hackathon with ID "${req.params.hackathonId}" was not found.`,
          });
        }
      }

      // Priority B: Explicit API Header (x-hackathon-id)
      if (!resolvedHackathon && req.headers['x-hackathon-id']) {
        const headerId = req.headers['x-hackathon-id'];
        resolvedHackathon = await findById(headerId);
        contextSource = 'HEADER_ID';

        if (!resolvedHackathon) {
          // STRICT RULE: Do NOT fall back to 2026 or active on invalid header!
          return res.status(404).json({
            success: false,
            code: ERROR_CODES.HACKATHON_NOT_FOUND,
            message: `Hackathon specified in x-hackathon-id header ("${headerId}") was not found.`,
          });
        }
      }

      // Priority C: Explicit Query or Body Parameter (?hackathonId=, ?slug=, body.hackathonId, body.slug)
      const paramHackathonId = req.query?.hackathonId || req.body?.hackathonId;
      const paramSlug = req.query?.slug || req.body?.slug;

      if (!resolvedHackathon && paramHackathonId) {
        resolvedHackathon = await findById(paramHackathonId);
        contextSource = req.query?.hackathonId ? 'QUERY_ID' : 'BODY_ID';
        if (!resolvedHackathon) {
          return res.status(404).json({
            success: false,
            code: ERROR_CODES.HACKATHON_NOT_FOUND,
            message: `Hackathon specified in hackathonId ("${paramHackathonId}") was not found.`,
          });
        }
      } else if (!resolvedHackathon && paramSlug) {
        resolvedHackathon = await findBySlug(paramSlug);
        contextSource = req.query?.slug ? 'QUERY_SLUG' : 'BODY_SLUG';
        if (!resolvedHackathon) {
          return res.status(404).json({
            success: false,
            code: ERROR_CODES.HACKATHON_NOT_FOUND,
            message: `Hackathon specified in slug ("${paramSlug}") was not found.`,
          });
        }
      }

      // Priority D: Base Active Hackathon Fallback
      if (!resolvedHackathon && defaultToActive) {
        resolvedHackathon = await findActiveHackathon();
        contextSource = 'ACTIVE_FALLBACK';
        if (!resolvedHackathon && required) {
          return res.status(404).json({
            success: false,
            code: ERROR_CODES.NO_ACTIVE_HACKATHON,
            message: 'No active hackathon is currently available.',
          });
        }
      }

      // Final Required Check
      if (!resolvedHackathon && required) {
        return res.status(400).json({
          success: false,
          code: ERROR_CODES.HACKATHON_CONTEXT_REQUIRED,
          message: 'A valid hackathon context is required to execute this operation.',
        });
      }

      // Inactive Check if strictly requested
      if (resolvedHackathon && !allowInactive && resolvedHackathon.status !== 'ACTIVE') {
        return res.status(403).json({
          success: false,
          code: ERROR_CODES.HACKATHON_INACTIVE,
          message: `The hackathon "${resolvedHackathon.name}" is ${resolvedHackathon.status} and does not accept active operations.`,
        });
      }

      // Attach canonical context to request
      if (resolvedHackathon) {
        req.hackathon = resolvedHackathon;
        req.hackathonId = resolvedHackathon.hackathonId;
        req.hackathonSlug = resolvedHackathon.slug;
        req.hackathonContextSource = contextSource;
      } else {
        req.hackathon = null;
        req.hackathonId = null;
        req.hackathonSlug = null;
        req.hackathonContextSource = null;
      }

      next();
    } catch (error) {
      console.error('resolveHackathonContext Middleware Error:', error);
      if (error.code === ERROR_CODES.HACKATHON_CONTEXT_INTEGRITY_ERROR) {
        return res.status(500).json({
          success: false,
          code: ERROR_CODES.HACKATHON_CONTEXT_INTEGRITY_ERROR,
          message: error.message,
        });
      }
      res.status(500).json({
        success: false,
        code: 'HACKATHON_CONTEXT_RESOLUTION_ERROR',
        message: 'Internal server error while resolving hackathon context.',
      });
    }
  };
};

/**
 * Helper Middleware: Strictly Resolve the currently ACTIVE hackathon
 */
const resolveActiveHackathon = (options = { required: true }) => {
  return resolveHackathonContext({
    required: options.required !== false,
    defaultToActive: true,
    allowInactive: false,
  });
};

/**
 * Helper Middleware: Strictly Resolve by :slug route parameter
 */
const resolveHackathonBySlug = (options = { required: true }) => {
  return resolveHackathonContext({
    required: options.required !== false,
    defaultToActive: false,
    allowInactive: true,
  });
};

/**
 * Helper Middleware: Strictly Resolve by :hackathonId route parameter or header
 */
const resolveHackathonById = (options = { required: true }) => {
  return resolveHackathonContext({
    required: options.required !== false,
    defaultToActive: false,
    allowInactive: true,
  });
};

module.exports = {
  ERROR_CODES,
  formatPublicHackathonData,
  findActiveHackathon,
  findBySlug,
  findById,
  resolveHackathonContext,
  resolveActiveHackathon,
  resolveHackathonBySlug,
  resolveHackathonById,
};
