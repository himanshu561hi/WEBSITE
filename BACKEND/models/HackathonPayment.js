const mongoose = require('mongoose');

const hackathonPaymentSchema = new mongoose.Schema(
  {
    hackathonId: {
      type: String,
      required: [true, 'hackathonId is required'],
      trim: true,
      index: true,
    },
    teamId: {
      type: String,
      required: true,
      index: true,
    },
    leaderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
    leaderEmail: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    amount: {
      type: Number,
      required: true, // in INR
    },
    currency: {
      type: String,
      default: 'INR',
    },
    gateway: {
      type: String,
      default: 'RAZORPAY',
    },
    orderId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    paymentId: {
      type: String,
      default: '',
      index: true,
    },
    signature: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      enum: ['PENDING', 'PROCESSING', 'PAID', 'FAILED', 'REFUNDED'],
      default: 'PENDING',
      index: true,
    },
    paidAt: {
      type: Date,
      default: null,
    },
    failureReason: {
      type: String,
      default: '',
    },
    webhookReceived: {
      type: Boolean,
      default: false,
    },
    webhookPayload: {
      type: mongoose.Schema.Types.Mixed,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Auto-inherit hackathonId from parent team if omitted
hackathonPaymentSchema.pre('validate', async function () {
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

hackathonPaymentSchema.index({ hackathonId: 1, teamId: 1 });
hackathonPaymentSchema.index({ hackathonId: 1, status: 1 });
hackathonPaymentSchema.index({ hackathonId: 1, paymentId: 1 });
hackathonPaymentSchema.index({ hackathonId: 1, createdAt: -1 });
hackathonPaymentSchema.index({ createdAt: -1 });

module.exports = mongoose.model('HackathonPayment', hackathonPaymentSchema);
