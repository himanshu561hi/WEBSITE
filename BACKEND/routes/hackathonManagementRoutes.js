const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { verifyAdmin } = require('../middleware/verifyAdmin');

const {
  createHackathon,
  getHackathons,
  getHackathonById,
  updateHackathon,
  activateHackathon,
  markUpcomingHackathon,
  completeHackathon,
  archiveHackathon,
  checkSlugAvailability,
  deleteHackathon,
} = require('../controllers/hackathonManagementController');

/**
 * All routes in this module are strictly ADMIN-ONLY.
 * Participants and Judges are rejected with 403 Forbidden.
 */

// List & Create Hackathons
router.get('/', auth, verifyAdmin, getHackathons);
router.post('/', auth, verifyAdmin, createHackathon);

// Slug Availability Check
router.get('/check-slug/:slug', auth, verifyAdmin, checkSlugAvailability);

// Single Hackathon Read, Update & Delete
router.get('/:hackathonId', auth, verifyAdmin, getHackathonById);
router.patch('/:hackathonId', auth, verifyAdmin, updateHackathon);
router.delete('/:hackathonId', auth, verifyAdmin, deleteHackathon);

// Lifecycle Transition Endpoints
router.post('/:hackathonId/upcoming', auth, verifyAdmin, markUpcomingHackathon);
router.post('/:hackathonId/activate', auth, verifyAdmin, activateHackathon);
router.post('/:hackathonId/complete', auth, verifyAdmin, completeHackathon);
router.post('/:hackathonId/archive', auth, verifyAdmin, archiveHackathon);

module.exports = router;
