const mongoose = require('mongoose');

const HACKATHON_STATUSES = ['DRAFT', 'UPCOMING', 'ACTIVE', 'COMPLETED', 'ARCHIVED', 'CANCELLED'];

// Lifecycle transition validation matrix
const ALLOWED_TRANSITIONS = {
  DRAFT: ['UPCOMING', 'ACTIVE', 'CANCELLED'],
  UPCOMING: ['ACTIVE', 'DRAFT', 'CANCELLED'],
  ACTIVE: ['COMPLETED', 'CANCELLED'],
  COMPLETED: ['ARCHIVED'],
  ARCHIVED: [], // Terminal state
  CANCELLED: ['DRAFT'], // Allow restarting cancelled draft if explicitly needed
};

const hackathonSchema = new mongoose.Schema(
  {
    hackathonId: {
      type: String,
      required: [true, 'hackathonId is required'],
      unique: true,
      trim: true,
      immutable: true, // Cannot be modified after creation
      index: true,
    },
    slug: {
      type: String,
      required: [true, 'slug is required'],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
      match: [/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be lowercase alphanumeric characters and hyphens'],
    },
    name: {
      type: String,
      required: [true, 'name is required'],
      trim: true,
    },
    title: {
      type: String,
      trim: true,
      default: '',
    },
    shortDescription: {
      type: String,
      trim: true,
      default: '',
    },
    description: {
      type: String,
      trim: true,
      default: '',
    },
    status: {
      type: String,
      enum: HACKATHON_STATUSES,
      default: 'DRAFT',
    },
    startDate: {
      type: Date,
      default: null,
    },
    endDate: {
      type: Date,
      default: null,
    },
    registrationStart: {
      type: Date,
      default: null,
    },
    registrationDeadline: {
      type: Date,
      default: null,
    },
    submissionDeadline: {
      type: Date,
      default: null,
    },
    resultDate: {
      type: Date,
      default: null,
    },
    settingsRef: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HackathonSetting',
      default: null,
    },
    logoUrl: {
      type: String,
      trim: true,
      default: '',
    },
    bannerUrl: {
      type: String,
      trim: true,
      default: '',
    },
    organizerName: {
      type: String,
      trim: true,
      default: 'Code-A-Nova',
    },
    tags: {
      type: [String],
      default: [],
    },
    createdAdminId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Admin',
      default: null,
    },
    createdAdminEmail: {
      type: String,
      trim: true,
      default: '',
    },
    isDeleted: {
      type: Boolean,
      default: false,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// Slug auto-cleanup pre-save hook
hackathonSchema.pre('validate', function () {
  if (this.slug) {
    this.slug = this.slug.toLowerCase().trim().replace(/[^a-z0-9-]+/g, '-').replace(/^-+|-+$/g, '');
  }
  if (!this.title && this.name) {
    this.title = this.name;
  }
});

// Partial unique index enforcing MAXIMUM 1 ACTIVE HACKATHON across the platform
hackathonSchema.index(
  { status: 1 },
  {
    name: 'unique_active_hackathon_idx',
    unique: true,
    partialFilterExpression: { status: 'ACTIVE', isDeleted: false },
  }
);

hackathonSchema.index({ startDate: 1 });
hackathonSchema.index({ endDate: 1 });
hackathonSchema.index({ createdAt: -1 });

// Helper to validate lifecycle transitions
hackathonSchema.statics.canTransition = function (currentStatus, targetStatus) {
  if (currentStatus === targetStatus) return true;
  const allowed = ALLOWED_TRANSITIONS[currentStatus] || [];
  return allowed.includes(targetStatus);
};

hackathonSchema.statics.STATUSES = HACKATHON_STATUSES;
hackathonSchema.statics.ALLOWED_TRANSITIONS = ALLOWED_TRANSITIONS;

module.exports = mongoose.model('Hackathon', hackathonSchema);
