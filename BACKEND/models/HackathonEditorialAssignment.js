const mongoose = require('mongoose');

const hackathonEditorialAssignmentSchema = new mongoose.Schema(
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
    status: {
      type: String,
      enum: ['ACTIVE', 'UNASSIGNED'],
      default: 'ACTIVE',
      index: true,
    },
    assignedBy: {
      type: String,
      default: 'admin',
    },
    assignedAt: {
      type: Date,
      default: Date.now,
    },
    unassignedAt: {
      type: Date,
      default: null,
    },
    unassignedBy: {
      type: String,
      default: null,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

// Auto-inherit hackathonId from parent team if omitted
hackathonEditorialAssignmentSchema.pre('validate', async function () {
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

// Compound partial unique index: A judge cannot be actively assigned to the same team more than once
hackathonEditorialAssignmentSchema.index(
  { hackathonId: 1, team: 1, editorialMember: 1 },
  {
    unique: true,
    partialFilterExpression: { status: 'ACTIVE' },
  }
);
hackathonEditorialAssignmentSchema.index({ hackathonId: 1, teamId: 1 });

module.exports = mongoose.model('HackathonEditorialAssignment', hackathonEditorialAssignmentSchema);
