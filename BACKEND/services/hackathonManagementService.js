const mongoose = require('mongoose');
const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');
const HackathonAuditLog = require('../models/HackathonAuditLog');

const RESERVED_SLUGS = [
  'admin',
  'api',
  'auth',
  'login',
  'dashboard',
  'results',
  'certificate',
  'certificates',
  'verify',
  'editorial',
  'null',
  'undefined',
  'new',
  'create',
  'edit',
  'health',
  'healthz',
  'info',
  'my-team',
  'payment',
  'submission',
  'prizes',
  'sponsors',
];

/**
 * Validate and clean a hackathon slug
 */
function sanitizeSlug(slug) {
  if (!slug || typeof slug !== 'string') return '';
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Validate slug format and reservation
 */
function validateSlugFormat(slug) {
  const sanitized = sanitizeSlug(slug);
  if (!sanitized) {
    throw new Error('Slug cannot be empty.');
  }
  if (sanitized.length < 3) {
    throw new Error('Slug must be at least 3 characters long.');
  }
  if (sanitized.length > 60) {
    throw new Error('Slug cannot exceed 60 characters.');
  }
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(sanitized)) {
    throw new Error('Slug may only contain lowercase letters, numbers, and single hyphens between words.');
  }
  if (RESERVED_SLUGS.includes(sanitized)) {
    throw new Error(`The slug "${sanitized}" is a reserved system keyword and cannot be used.`);
  }
  return sanitized;
}

/**
 * Generate permanent canonical Hackathon ID (Format: CAN-HACK-000001)
 */
async function generateHackathonId() {
  const totalCount = await Hackathon.countDocuments();
  let candidateNum = totalCount + 1;
  let candidateId = `CAN-HACK-${String(candidateNum).padStart(6, '0')}`;

  while (
    (await Hackathon.exists({ hackathonId: candidateId })) ||
    (await HackathonSetting.exists({ hackathonId: candidateId }))
  ) {
    candidateNum++;
    candidateId = `CAN-HACK-${String(candidateNum).padStart(6, '0')}`;
  }

  return candidateId;
}

/**
 * Service to manage Hackathons (Master Entity Lifecycle, Creation & Scoped Settings)
 */
class HackathonManagementService {
  /**
   * Validate slug availability
   */
  static async isSlugAvailable(slug, excludeHackathonId = null) {
    const clean = validateSlugFormat(slug);
    const query = { slug: clean };
    if (excludeHackathonId) {
      query.hackathonId = { $ne: excludeHackathonId };
    }
    const exists = await Hackathon.exists(query);
    return !exists;
  }

  /**
   * Create a new Hackathon and initialize fresh scoped settings
   * STRICT PHASE M2 RULES:
   * - Starts in DRAFT status
   * - Creates fresh HackathonSetting document
   * - Operationally empty: does NOT copy teams, payments, submissions, judges, results, etc.
   */
  static async createHackathon(data, adminUser = null, req = null) {
    const {
      name,
      slug,
      shortDescription = '',
      description = '',
      startDate = null,
      endDate = null,
      registrationStart = null,
      registrationDeadline = null,
      submissionDeadline = null,
      resultDate = null,
      logoUrl = '',
      bannerUrl = '',
      organizerName = 'Code-A-Nova',
      tags = [],
      participationFee = 0,
      customHackathonId = null,
    } = data;

    if (!name || !name.trim()) {
      throw new Error('Hackathon name is required.');
    }

    const cleanSlug = validateSlugFormat(slug || name);
    const slugAvailable = await this.isSlugAvailable(cleanSlug);
    if (!slugAvailable) {
      throw new Error(`The slug "${cleanSlug}" is already taken by another hackathon.`);
    }

    // Date validation if provided
    if (startDate && endDate && new Date(startDate) > new Date(endDate)) {
      throw new Error('Hackathon start date must be before or equal to end date.');
    }
    if (registrationStart && registrationDeadline && new Date(registrationStart) > new Date(registrationDeadline)) {
      throw new Error('Registration start date must be before or equal to registration deadline.');
    }

    // System-generate canonical Hackathon ID
    const hackathonId = customHackathonId ? customHackathonId.toUpperCase().trim() : await generateHackathonId();

    if (await Hackathon.exists({ hackathonId })) {
      throw new Error(`Hackathon ID "${hackathonId}" already exists.`);
    }

    // 1. Create fresh, completely isolated HackathonSetting document
    const initialSettings = await HackathonSetting.create({
      hackathonId,
      name: name.trim(),
      tagline: shortDescription ? shortDescription.trim() : 'Innovate, Build & Lead',
      description: description ? description.trim() : shortDescription || '',
      startDate: startDate ? new Date(startDate) : new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      endDate: endDate ? new Date(endDate) : new Date(Date.now() + 17 * 24 * 60 * 60 * 1000),
      submissionDeadline: submissionDeadline ? new Date(submissionDeadline) : new Date(Date.now() + 16 * 24 * 60 * 60 * 1000),
      resultDate: resultDate ? new Date(resultDate) : new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
      participationFee: Number(participationFee) || 0,
      currency: 'INR',
      whatsAppLink: '',
      rules: [
        'Teams must consist of 1 to 4 members.',
        'All project code must be written during the official hackathon development window.',
        'Submissions must include repository link, hosted URL, and demonstration video.',
      ],
      tracks: [
        {
          name: 'Open Innovation',
          description: 'Build creative, impactful solutions solving real-world challenges.',
          icon: 'sparkles',
        },
      ],
      judgingCriteria: [
        { title: 'Innovation & Originality', maxScore: 25, description: 'Creativity and originality' },
        { title: 'Technical Complexity', maxScore: 25, description: 'Engineering depth and execution' },
        { title: 'Usability & Design', maxScore: 25, description: 'UI/UX polish and accessibility' },
        { title: 'Impact & Feasibility', maxScore: 25, description: 'Practical usefulness and market fit' },
      ],
      prizes: [
        { position: 'Winner (1st Place)', amount: 'Cash Prize + Certificate + Trophy', perks: ['Internship Interview'] },
        { position: '1st Runner Up (2nd Place)', amount: 'Cash Prize + Certificate', perks: ['Internship Interview'] },
      ],
      isRegistrationOpen: false,
      isSubmissionOpen: false,
      isResultsPublished: false,
      isActive: false, // Inactive by default in draft
      updatedBy: adminUser?.email || adminUser?.username || 'Admin',
    });

    // 2. Create Hackathon master record in DRAFT status
    const hackathon = await Hackathon.create({
      hackathonId,
      slug: cleanSlug,
      name: name.trim(),
      title: name.trim(),
      shortDescription: shortDescription ? shortDescription.trim() : '',
      description: description ? description.trim() : '',
      status: 'DRAFT',
      startDate: startDate ? new Date(startDate) : null,
      endDate: endDate ? new Date(endDate) : null,
      registrationStart: registrationStart ? new Date(registrationStart) : null,
      registrationDeadline: registrationDeadline ? new Date(registrationDeadline) : null,
      submissionDeadline: submissionDeadline ? new Date(submissionDeadline) : null,
      resultDate: resultDate ? new Date(resultDate) : null,
      settingsRef: initialSettings._id,
      logoUrl: logoUrl ? logoUrl.trim() : '',
      bannerUrl: bannerUrl ? bannerUrl.trim() : '',
      organizerName: organizerName ? organizerName.trim() : 'Code-A-Nova',
      tags: Array.isArray(tags) ? tags : [],
      createdAdminId: adminUser?._id || adminUser?.id || null,
      createdAdminEmail: adminUser?.email || '',
    });

    // 3. Link back settingsRef to master record
    initialSettings.hackathonRef = hackathon._id;
    await initialSettings.save();

    // 4. Audit Log
    await HackathonAuditLog.log({
      actorId: String(adminUser?._id || adminUser?.id || 'admin'),
      actorName: adminUser?.name || adminUser?.username || 'Admin User',
      actorEmail: adminUser?.email || '',
      role: 'admin',
      action: 'CREATE_HACKATHON',
      targetEntity: 'Hackathon',
      targetId: hackathon.hackathonId,
      newState: hackathon.toObject(),
      reason: `Admin created new Hackathon: "${hackathon.name}" (${hackathon.slug})`,
      req,
    });

    return { hackathon, settings: initialSettings };
  }

  /**
   * List hackathons with status filtering and pagination
   */
  static async getHackathons({ status = null, search = '', page = 1, limit = 20 } = {}) {
    const query = { isDeleted: { $ne: true } };

    if (status && status !== 'ALL') {
      query.status = status.toUpperCase();
    }

    if (search && search.trim()) {
      const reg = new RegExp(search.trim(), 'i');
      query.$or = [{ name: reg }, { slug: reg }, { hackathonId: reg }];
    }

    const currentPage = Math.max(1, parseInt(page, 10) || 1);
    const pageLimit = Math.min(100, Math.max(1, parseInt(limit, 10) || 20));
    const skip = (currentPage - 1) * pageLimit;

    const [items, total, countsByStatus] = await Promise.all([
      Hackathon.find(query)
        .populate('settingsRef')
        .sort({ status: 1, createdAt: -1 })
        .skip(skip)
        .limit(pageLimit)
        .lean(),
      Hackathon.countDocuments(query),
      Hackathon.aggregate([
        { $match: { isDeleted: { $ne: true } } },
        { $group: { _id: '$status', count: { $sum: 1 } } },
      ]),
    ]);

    const statusCounts = {
      ALL: 0,
      DRAFT: 0,
      UPCOMING: 0,
      ACTIVE: 0,
      COMPLETED: 0,
      ARCHIVED: 0,
      CANCELLED: 0,
    };

    countsByStatus.forEach((c) => {
      if (statusCounts[c._id] !== undefined) {
        statusCounts[c._id] = c.count;
      }
      statusCounts.ALL += c.count;
    });

    // Identify current active hackathon
    const activeHackathon = items.find((h) => h.status === 'ACTIVE') || (await Hackathon.findOne({ status: 'ACTIVE', isDeleted: { $ne: true } }).lean());

    return {
      items,
      pagination: {
        total,
        page: currentPage,
        limit: pageLimit,
        pages: Math.ceil(total / pageLimit) || 1,
      },
      statusCounts,
      activeHackathon: activeHackathon
        ? {
            hackathonId: activeHackathon.hackathonId,
            name: activeHackathon.name,
            slug: activeHackathon.slug,
            status: activeHackathon.status,
          }
        : null,
    };
  }

  /**
   * Get hackathon by hackathonId, slug, or MongoDB _id
   */
  static async getHackathonByIdOrSlug(idOrSlug) {
    if (!idOrSlug) return null;
    const clean = String(idOrSlug).trim();

    const query = {
      isDeleted: { $ne: true },
      $or: [
        { hackathonId: clean.toUpperCase() },
        { slug: clean.toLowerCase() },
      ],
    };

    if (mongoose.isValidObjectId(clean)) {
      query.$or.push({ _id: clean });
    }

    return await Hackathon.findOne(query).populate('settingsRef');
  }

  /**
   * Update Hackathon details (core metadata, dates, branding)
   */
  static async updateHackathon(idOrSlug, updateData, adminUser = null, req = null) {
    const hackathon = await this.getHackathonByIdOrSlug(idOrSlug);
    if (!hackathon) {
      throw new Error(`Hackathon "${idOrSlug}" not found.`);
    }

    const previousState = hackathon.toObject();

    // Block modification of immutable fields
    if (updateData.hackathonId && updateData.hackathonId.toUpperCase() !== hackathon.hackathonId) {
      throw new Error('hackathonId is immutable and cannot be modified.');
    }

    // Slug validation and modification restrictions
    if (updateData.slug && updateData.slug !== hackathon.slug) {
      if (['ACTIVE', 'COMPLETED', 'ARCHIVED'].includes(hackathon.status)) {
        throw new Error(`Cannot change slug while hackathon is in ${hackathon.status} status.`);
      }
      const cleanSlug = validateSlugFormat(updateData.slug);
      const isAvailable = await this.isSlugAvailable(cleanSlug, hackathon.hackathonId);
      if (!isAvailable) {
        throw new Error(`Slug "${cleanSlug}" is already in use by another hackathon.`);
      }
      hackathon.slug = cleanSlug;
    }

    // Editable fields
    if (updateData.name && updateData.name.trim()) {
      hackathon.name = updateData.name.trim();
      hackathon.title = updateData.name.trim();
    }
    if (updateData.shortDescription !== undefined) {
      hackathon.shortDescription = String(updateData.shortDescription).trim();
    }
    if (updateData.description !== undefined) {
      hackathon.description = String(updateData.description).trim();
    }
    if (updateData.startDate !== undefined) {
      hackathon.startDate = updateData.startDate ? new Date(updateData.startDate) : null;
    }
    if (updateData.endDate !== undefined) {
      hackathon.endDate = updateData.endDate ? new Date(updateData.endDate) : null;
    }
    if (updateData.registrationStart !== undefined) {
      hackathon.registrationStart = updateData.registrationStart ? new Date(updateData.registrationStart) : null;
    }
    if (updateData.registrationDeadline !== undefined) {
      hackathon.registrationDeadline = updateData.registrationDeadline ? new Date(updateData.registrationDeadline) : null;
    }
    if (updateData.submissionDeadline !== undefined) {
      hackathon.submissionDeadline = updateData.submissionDeadline ? new Date(updateData.submissionDeadline) : null;
    }
    if (updateData.resultDate !== undefined) {
      hackathon.resultDate = updateData.resultDate ? new Date(updateData.resultDate) : null;
    }
    if (updateData.logoUrl !== undefined) {
      hackathon.logoUrl = String(updateData.logoUrl).trim();
    }
    if (updateData.bannerUrl !== undefined) {
      hackathon.bannerUrl = String(updateData.bannerUrl).trim();
    }
    if (updateData.organizerName !== undefined) {
      hackathon.organizerName = String(updateData.organizerName).trim();
    }
    if (Array.isArray(updateData.tags)) {
      hackathon.tags = updateData.tags;
    }

    await hackathon.save();

    // Synchronize basic metadata to HackathonSetting if linked
    if (hackathon.settingsRef) {
      await HackathonSetting.findByIdAndUpdate(hackathon.settingsRef, {
        name: hackathon.name,
        description: hackathon.description || hackathon.shortDescription,
        startDate: hackathon.startDate,
        endDate: hackathon.endDate,
        submissionDeadline: hackathon.submissionDeadline,
        resultDate: hackathon.resultDate,
        updatedBy: adminUser?.email || adminUser?.username || 'Admin',
      });
    }

    // Audit log
    await HackathonAuditLog.log({
      actorId: String(adminUser?._id || adminUser?.id || 'admin'),
      actorName: adminUser?.name || adminUser?.username || 'Admin User',
      actorEmail: adminUser?.email || '',
      role: 'admin',
      action: 'UPDATE_HACKATHON',
      targetEntity: 'Hackathon',
      targetId: hackathon.hackathonId,
      previousState,
      newState: hackathon.toObject(),
      reason: `Admin updated Hackathon metadata: "${hackathon.name}"`,
      req,
    });

    return hackathon;
  }

  /**
   * Transition Hackathon Lifecycle Status
   * STRICT ENFORCEMENT OF INVARIANTS:
   * 1. Lifecycle transition validation matrix
   * 2. MAXIMUM ONE ACTIVE HACKATHON RULE:
   *    If Hackathon A is ACTIVE and Admin tries to activate Hackathon B:
   *    REJECT activation with clear message:
   *    "Another hackathon is currently active. Complete or archive the current hackathon before activating this one."
   * 3. No silent deactivations.
   */
  static async transitionStatus(idOrSlug, targetStatus, adminUser = null, reason = '', req = null) {
    const cleanTargetStatus = String(targetStatus).toUpperCase().trim();
    if (!Hackathon.STATUSES.includes(cleanTargetStatus)) {
      throw new Error(`Invalid status "${targetStatus}". Allowed statuses: ${Hackathon.STATUSES.join(', ')}`);
    }

    const hackathon = await this.getHackathonByIdOrSlug(idOrSlug);
    if (!hackathon) {
      throw new Error(`Hackathon "${idOrSlug}" not found.`);
    }

    const currentStatus = hackathon.status;
    if (currentStatus === cleanTargetStatus) {
      return hackathon; // Idempotent success
    }

    // 1. Verify permitted lifecycle transition
    const isValidTransition = Hackathon.canTransition(currentStatus, cleanTargetStatus);
    if (!isValidTransition) {
      throw new Error(
        `Invalid lifecycle transition: Cannot move from "${currentStatus}" to "${cleanTargetStatus}".`
      );
    }

    // 2. CRITICAL: MAXIMUM ONE ACTIVE HACKATHON ENFORCEMENT
    if (cleanTargetStatus === 'ACTIVE') {
      const existingActive = await Hackathon.findOne({
        status: 'ACTIVE',
        hackathonId: { $ne: hackathon.hackathonId },
        isDeleted: { $ne: true },
      }).lean();

      if (existingActive) {
        const error = new Error(
          `Another hackathon is currently active. Complete or archive the current hackathon before activating this one.`
        );
        error.code = 'ACTIVE_HACKATHON_CONFLICT';
        error.activeHackathon = {
          hackathonId: existingActive.hackathonId,
          name: existingActive.name,
          slug: existingActive.slug,
        };
        throw error;
      }
    }

    const previousState = hackathon.toObject();

    // 3. Atomically perform status transition
    // If activating, use condition that ensures status is not already ACTIVE on another record
    if (cleanTargetStatus === 'ACTIVE') {
      const updated = await Hackathon.findOneAndUpdate(
        {
          _id: hackathon._id,
          status: { $in: ['DRAFT', 'UPCOMING'] },
        },
        {
          $set: { status: 'ACTIVE' },
        },
        { new: true }
      );

      if (!updated) {
        throw new Error('Failed to activate hackathon. State conflict detected.');
      }
      hackathon.status = 'ACTIVE';

      // Synchronize HackathonSetting.isActive
      if (hackathon.settingsRef) {
        await HackathonSetting.findByIdAndUpdate(hackathon.settingsRef, {
          isActive: true,
          updatedBy: adminUser?.email || adminUser?.username || 'Admin',
        });
      }
    } else {
      hackathon.status = cleanTargetStatus;
      await hackathon.save();

      // If transitioning to COMPLETED, ARCHIVED, or CANCELLED, deactivate settings flag
      if (['COMPLETED', 'ARCHIVED', 'CANCELLED'].includes(cleanTargetStatus) && hackathon.settingsRef) {
        await HackathonSetting.findByIdAndUpdate(hackathon.settingsRef, {
          isActive: false,
          updatedBy: adminUser?.email || adminUser?.username || 'Admin',
        });
      }
    }

    // 4. Audit Log
    await HackathonAuditLog.log({
      actorId: String(adminUser?._id || adminUser?.id || 'admin'),
      actorName: adminUser?.name || adminUser?.username || 'Admin User',
      actorEmail: adminUser?.email || '',
      role: 'admin',
      action: 'TRANSITION_HACKATHON_STATUS',
      targetEntity: 'Hackathon',
      targetId: hackathon.hackathonId,
      previousState,
      newState: hackathon.toObject(),
      reason: reason || `Admin transitioned Hackathon status from ${currentStatus} to ${cleanTargetStatus}`,
      req,
    });

    return hackathon;
  }

  // Convenience lifecycle transition methods
  static async markUpcoming(idOrSlug, adminUser = null, req = null) {
    return this.transitionStatus(idOrSlug, 'UPCOMING', adminUser, 'Admin set hackathon to UPCOMING', req);
  }

  static async activateHackathon(idOrSlug, adminUser = null, req = null) {
    return this.transitionStatus(idOrSlug, 'ACTIVE', adminUser, 'Admin ACTIVATED hackathon', req);
  }

  static async completeHackathon(idOrSlug, adminUser = null, req = null) {
    return this.transitionStatus(idOrSlug, 'COMPLETED', adminUser, 'Admin marked hackathon as COMPLETED', req);
  }

  static async archiveHackathon(idOrSlug, adminUser = null, req = null) {
    return this.transitionStatus(idOrSlug, 'ARCHIVED', adminUser, 'Admin ARCHIVED hackathon', req);
  }
}

module.exports = HackathonManagementService;
