const mongoose = require('mongoose');

const criterionScoreSchema = new mongoose.Schema(
  {
    criterion: {
      type: String,
      required: true,
      trim: true,
    },
    score: {
      type: Number,
      required: true,
      min: 0,
    },
    maxScore: {
      type: Number,
      required: true,
      min: 1,
    },
    description: {
      type: String,
      default: '',
    },
  },
  { _id: false }
);

const hackathonEditorialEvaluationSchema = new mongoose.Schema(
  {
    hackathonId: {
      type: String,
      required: [true, 'hackathonId is required'],
      index: true,
      trim: true,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HackathonTeam',
      required: true,
      index: true,
    },
    teamId: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    submission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HackathonSubmission',
      required: true,
      index: true,
    },
    editorialMember: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HackathonEditorialMember',
      required: true,
      index: true,
    },
    assignment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HackathonEditorialAssignment',
      required: true,
      index: true,
    },
    scores: [criterionScoreSchema],
    totalScore: {
      type: Number,
      default: 0,
      min: 0,
    },
    comments: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['NOT_STARTED', 'IN_PROGRESS', 'FINALIZED', 'REOPENED'],
      default: 'NOT_STARTED',
      index: true,
    },
    isLocked: {
      type: Boolean,
      default: false,
      index: true,
    },
    startedAt: {
      type: Date,
      default: null,
    },
    lastUpdatedAt: {
      type: Date,
      default: Date.now,
    },
    finalizedAt: {
      type: Date,
      default: null,
      index: true,
    },
    reopenedAt: {
      type: Date,
      default: null,
    },
    reopenedBy: {
      type: String,
      default: null,
    },
    reopenReason: {
      type: String,
      default: '',
    },
    version: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Auto-inherit hackathonId from parent team if omitted
hackathonEditorialEvaluationSchema.pre('validate', async function () {
  if (!this.hackathonId) {
    try {
      const HackathonTeam = mongoose.model('HackathonTeam');
      let parentTeam = null;
      if (this.team && mongoose.isValidObjectId(this.team)) {
        parentTeam = await HackathonTeam.findById(this.team).select('hackathonId').lean();
      }
      if (!parentTeam && this.teamId) {
        parentTeam = await HackathonTeam.findOne({ teamId: this.teamId }).select('hackathonId').lean();
      }
      if (parentTeam?.hackathonId) {
        this.hackathonId = parentTeam.hackathonId;
      }
    } catch (e) {
      // Ignore error and let schema validation handle missing hackathonId
    }
  }
});

// One evaluation document per judge per team
hackathonEditorialEvaluationSchema.index(
  { hackathonId: 1, team: 1, editorialMember: 1 },
  { unique: true }
);
hackathonEditorialEvaluationSchema.index({ hackathonId: 1, teamId: 1 });

module.exports = mongoose.model('HackathonEditorialEvaluation', hackathonEditorialEvaluationSchema);
