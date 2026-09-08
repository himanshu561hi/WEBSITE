const mongoose = require('mongoose');

const scoreSnapshotItemSchema = new mongoose.Schema(
  {
    judgeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HackathonEditorialMember',
    },
    judgeName: { type: String, default: '' },
    judgeEmail: { type: String, default: '' },
    criteriaScores: [
      {
        criterionId: { type: String, default: '' },
        criterionName: { type: String, default: '' },
        score: { type: Number, default: 0 },
        maxScore: { type: Number, default: 25 },
      },
    ],
    totalScore: { type: Number, default: 0 },
    comments: { type: String, default: '' },
    finalizedAt: { type: Date, default: null },
  },
  { _id: false }
);

const historyItemSchema = new mongoose.Schema(
  {
    action: { type: String, required: true },
    actor: { type: String, default: 'admin' },
    timestamp: { type: Date, default: Date.now },
    previousState: { type: mongoose.Schema.Types.Mixed, default: null },
    newState: { type: mongoose.Schema.Types.Mixed, default: null },
    reason: { type: String, default: '' },
  },
  { _id: false }
);

const hackathonResultSchema = new mongoose.Schema(
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
      trim: true,
      uppercase: true,
      index: true,
    },
    teamName: {
      type: String,
      default: '',
    },
    track: {
      type: String,
      default: 'General Track',
    },
    submissionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'HackathonSubmission',
      default: null,
    },
    rank: {
      type: Number,
      default: null,
      index: true,
    },
    finalScore: {
      type: Number,
      default: 0,
      index: true,
    },
    averageScore: {
      type: Number,
      default: 0,
    },
    judgeCount: {
      type: Number,
      default: 0,
    },
    finalizedJudgeCount: {
      type: Number,
      default: 0,
    },
    pendingJudgeCount: {
      type: Number,
      default: 0,
    },
    rankingStatus: {
      type: String,
      enum: ['READY', 'PENDING_EVALUATIONS', 'INELIGIBLE', 'DISQUALIFIED', 'TIE'],
      default: 'READY',
      index: true,
    },
    statusReason: {
      type: String,
      default: '',
    },
    resultStatus: {
      type: String,
      enum: ['DRAFT', 'CALCULATED', 'APPROVED', 'PUBLISHED', 'LOCKED', 'REOPENED'],
      default: 'DRAFT',
      index: true,
    },
    category: {
      type: String,
      default: null,
      index: true,
    },
    prize: {
      type: String,
      default: null,
    },
    isWinner: {
      type: Boolean,
      default: false,
      index: true,
    },
    isRunnerUp: {
      type: Boolean,
      default: false,
      index: true,
    },
    isPublished: {
      type: Boolean,
      default: false,
      index: true,
    },
    isLocked: {
      type: Boolean,
      default: false,
      index: true,
    },
    isTie: {
      type: Boolean,
      default: false,
      index: true,
    },
    tieBreakReason: {
      type: String,
      default: '',
    },
    winnerCategory: {
      type: String,
      default: '',
    },
    tieDetails: {
      isTie: { type: Boolean, default: false },
      tiedWithTeamIds: { type: [String], default: [] },
      resolvedBy: { type: String, default: null },
      resolvedAt: { type: Date, default: null },
      tieBreakReason: { type: String, default: '' },
      tieMethod: { type: String, default: '' },
    },
    approvedBy: {
      type: String,
      default: null,
    },
    approvedAt: {
      type: Date,
      default: null,
    },
    publishedBy: {
      type: String,
      default: null,
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    lockedBy: {
      type: String,
      default: null,
    },
    lockedAt: {
      type: Date,
      default: null,
    },
    lockReason: {
      type: String,
      default: '',
    },
    reopenedBy: {
      type: String,
      default: null,
    },
    reopenedAt: {
      type: Date,
      default: null,
    },
    reopenReason: {
      type: String,
      default: '',
    },
    notes: {
      type: String,
      default: '',
    },
    scoreSnapshot: [scoreSnapshotItemSchema],
    rankingSnapshot: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
    history: [historyItemSchema],
  },
  {
    timestamps: true,
  }
);

// Pre-validate hook: auto-inherit hackathonId from team if missing
hackathonResultSchema.pre('validate', async function () {
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
      // Ignore error and let validation rule handle missing hackathonId
    }
  }
});

// Compound index for uniqueness per hackathon and team
hackathonResultSchema.index({ hackathonId: 1, teamId: 1 }, { unique: true });
hackathonResultSchema.index({ hackathonId: 1, rank: 1 });
hackathonResultSchema.index({ hackathonId: 1, resultStatus: 1, isPublished: 1 });
hackathonResultSchema.index({ hackathonId: 1, isWinner: 1 });

module.exports = mongoose.model('HackathonResult', hackathonResultSchema);
