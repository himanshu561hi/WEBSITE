const HackathonManagementService = require('../services/hackathonManagementService');

/**
 * 1. Create a new Hackathon
 * POST /api/hackathons
 */
exports.createHackathon = async (req, res) => {
  try {
    const adminUser = req.admin || req.user;
    const result = await HackathonManagementService.createHackathon(req.body, adminUser, req);

    res.status(201).json({
      success: true,
      message: 'Hackathon created successfully.',
      status: result.hackathon.status,
      data: result.hackathon,
      settings: result.settings,
    });
  } catch (error) {
    console.error('createHackathon Error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to create hackathon.',
    });
  }
};

/**
 * 2. Get list of Hackathons with filters & pagination
 * GET /api/hackathons
 */
exports.getHackathons = async (req, res) => {
  try {
    const { status, search, page, limit } = req.query;
    const result = await HackathonManagementService.getHackathons({
      status,
      search,
      page,
      limit,
    });

    res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error('getHackathons Error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to retrieve hackathons.',
    });
  }
};

/**
 * 3. Get single Hackathon by ID or Slug
 * GET /api/hackathons/:hackathonId
 */
exports.getHackathonById = async (req, res) => {
  try {
    const { hackathonId } = req.params;
    const hackathon = await HackathonManagementService.getHackathonByIdOrSlug(hackathonId);

    if (!hackathon) {
      return res.status(404).json({
        success: false,
        message: `Hackathon "${hackathonId}" not found.`,
      });
    }

    res.status(200).json({
      success: true,
      data: hackathon,
    });
  } catch (error) {
    console.error('getHackathonById Error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to retrieve hackathon.',
    });
  }
};

/**
 * 4. Update Hackathon details
 * PATCH /api/hackathons/:hackathonId
 */
exports.updateHackathon = async (req, res) => {
  try {
    const { hackathonId } = req.params;
    const adminUser = req.admin || req.user;
    const updated = await HackathonManagementService.updateHackathon(hackathonId, req.body, adminUser, req);

    res.status(200).json({
      success: true,
      message: 'Hackathon updated successfully.',
      data: updated,
    });
  } catch (error) {
    console.error('updateHackathon Error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to update hackathon.',
    });
  }
};

/**
 * 5. Activate Hackathon (Enforcing ONE ACTIVE HACKATHON invariant)
 * POST /api/hackathons/:hackathonId/activate
 */
exports.activateHackathon = async (req, res) => {
  try {
    const { hackathonId } = req.params;
    const adminUser = req.admin || req.user;
    const updated = await HackathonManagementService.activateHackathon(hackathonId, adminUser, req);

    res.status(200).json({
      success: true,
      message: `Hackathon "${updated.name}" is now ACTIVE.`,
      status: updated.status,
      data: updated,
    });
  } catch (error) {
    console.error('activateHackathon Error:', error);
    const statusCode = error.code === 'ACTIVE_HACKATHON_CONFLICT' ? 409 : 400;
    res.status(statusCode).json({
      success: false,
      code: error.code || 'ACTIVATION_ERROR',
      message: error.message || 'Failed to activate hackathon.',
      activeHackathon: error.activeHackathon || null,
    });
  }
};

/**
 * 6. Mark Hackathon as UPCOMING
 * POST /api/hackathons/:hackathonId/upcoming
 */
exports.markUpcomingHackathon = async (req, res) => {
  try {
    const { hackathonId } = req.params;
    const adminUser = req.admin || req.user;
    const updated = await HackathonManagementService.markUpcoming(hackathonId, adminUser, req);

    res.status(200).json({
      success: true,
      message: `Hackathon "${updated.name}" is now marked as UPCOMING.`,
      status: updated.status,
      data: updated,
    });
  } catch (error) {
    console.error('markUpcomingHackathon Error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to mark hackathon upcoming.',
    });
  }
};

/**
 * 7. Mark Hackathon as COMPLETED
 * POST /api/hackathons/:hackathonId/complete
 */
exports.completeHackathon = async (req, res) => {
  try {
    const { hackathonId } = req.params;
    const adminUser = req.admin || req.user;
    const updated = await HackathonManagementService.completeHackathon(hackathonId, adminUser, req);

    res.status(200).json({
      success: true,
      message: `Hackathon "${updated.name}" is now marked as COMPLETED.`,
      status: updated.status,
      data: updated,
    });
  } catch (error) {
    console.error('completeHackathon Error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to complete hackathon.',
    });
  }
};

/**
 * 8. Archive Hackathon
 * POST /api/hackathons/:hackathonId/archive
 */
exports.archiveHackathon = async (req, res) => {
  try {
    const { hackathonId } = req.params;
    const adminUser = req.admin || req.user;
    const updated = await HackathonManagementService.archiveHackathon(hackathonId, adminUser, req);

    res.status(200).json({
      success: true,
      message: `Hackathon "${updated.name}" has been ARCHIVED.`,
      status: updated.status,
      data: updated,
    });
  } catch (error) {
    console.error('archiveHackathon Error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to archive hackathon.',
    });
  }
};

/**
 * 9. Validate Slug Availability
 * GET /api/hackathons/check-slug/:slug
 */
exports.checkSlugAvailability = async (req, res) => {
  try {
    const { slug } = req.params;
    const { exclude } = req.query;
    const available = await HackathonManagementService.isSlugAvailable(slug, exclude);

    res.status(200).json({
      success: true,
      slug,
      available,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      available: false,
      message: error.message,
    });
  }
};
