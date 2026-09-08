const jwt = require('jsonwebtoken');
const HackathonEditorialMember = require('../models/HackathonEditorialMember');

/**
  * Middleware to verify Editorial / Judge authorization.
  * Can be executed after auth.js middleware or directly with Bearer token.
  */
const verifyEditorial = async (req, res, next) => {
  try {
    if (!req.user && req.headers?.authorization?.startsWith('Bearer ')) {
      const token = req.headers.authorization.split(' ')[1];
      try {
        req.user = jwt.verify(token, process.env.JWT_SECRET || process.env.JWT_SECRET_KEY || 'secret');
      } catch (jwtErr) {
        return res.status(401).json({
          success: false,
          message: '401 Unauthorized: Invalid or expired authentication token.',
        });
      }
    }

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: '401 Unauthorized: Authentication token required.',
      });
    }

    const memberId = req.user.editorialMemberId || req.user.id || req.user.unifiedUserId;

    if (!memberId) {
      return res.status(401).json({
        success: false,
        message: '401 Unauthorized: Missing identity in authentication payload.',
      });
    }

    // Role check: must explicitly have editorial role or match editorial member
    if (req.user.role !== 'editorial' && req.user.unifiedRole !== 'editorial') {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Editorial / Judge privileges required.',
      });
    }

    const member = await HackathonEditorialMember.findById(memberId);
    if (!member) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Editorial account not found.',
      });
    }

    if (!member.isActive) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: This Editorial / Judge account has been deactivated. Please contact the administrator.',
      });
    }

    // Scope hackathon check: strict boundary enforcement
    const requestedHackathonId =
      req.headers['x-hackathon-id'] ||
      req.query?.hackathonId ||
      req.body?.hackathonId ||
      req.hackathonId;

    if (requestedHackathonId && member.hackathonId && requestedHackathonId !== member.hackathonId) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Access across different hackathons is denied.',
      });
    }

    if (req.user.hackathonId && member.hackathonId && req.user.hackathonId !== member.hackathonId) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: Access across different hackathons is denied.',
      });
    }

    req.hackathonId = member.hackathonId;
    req.editorialMember = member;
    next();
  } catch (error) {
    console.error('verifyEditorial Middleware Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error during editorial authorization.',
      error: error.message,
    });
  }
};

module.exports = { verifyEditorial };
