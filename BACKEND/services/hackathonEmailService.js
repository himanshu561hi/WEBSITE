const mailService = require('./mailService');
const EmailLog = require('../models/email/EmailLog');
const Hackathon = require('../models/Hackathon');
const HackathonSetting = require('../models/HackathonSetting');

/**
 * Enterprise Multi-Hackathon Email & Notification Service
 * Enforces strict hackathon-scoping, dynamic branding, idempotency, and HTML injection safety.
 */
class HackathonEmailService {
  /**
   * Escape HTML special characters to prevent template injection on user-supplied data
   */
  escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /**
   * Resolve dynamic branding and properties for a hackathon
   */
  async resolveBranding({ hackathonId, hackathon, settings }) {
    let resolvedHackathon = hackathon;
    let resolvedSettings = settings;

    const targetId = hackathonId || hackathon?.hackathonId || settings?.hackathonId || null;

    if (targetId) {
      if (!resolvedHackathon) {
        try {
          resolvedHackathon = await Hackathon.findOne({ hackathonId: targetId }).lean();
        } catch (_) {}
      }
      if (!resolvedSettings) {
        try {
          resolvedSettings = await HackathonSetting.findOne({ hackathonId: targetId }).lean();
        } catch (_) {}
      }
    }

    const clientUrl = process.env.CLIENT_URL || 'https://code-a-nova.online';
    const slug = resolvedHackathon?.slug || '';
    const hackathonName = resolvedHackathon?.name || resolvedSettings?.name || 'Code-A-Nova Hackathon';
    const logoUrl = resolvedHackathon?.logoUrl || resolvedSettings?.logoUrl || '';
    const supportEmail = resolvedSettings?.supportEmail || 'support@code-a-nova.online';
    const fee = resolvedSettings?.participationFee ?? 49;
    const submissionDeadline = resolvedSettings?.submissionDeadline || null;
    const resultDate = resolvedSettings?.resultDate || null;
    const portalUrl = resolvedSettings?.portalUrl || (slug ? `${clientUrl}/hackathon/${slug}` : `${clientUrl}/hackathon`);
    const whatsAppLink = resolvedSettings?.whatsAppLink || '';

    return {
      hackathonId: targetId,
      hackathonName,
      slug,
      logoUrl,
      supportEmail,
      fee,
      submissionDeadline,
      resultDate,
      portalUrl,
      whatsAppLink,
      clientUrl,
    };
  }

  /**
   * Verify idempotency key before dispatching email
   */
  async checkIdempotency(idempotencyKey) {
    if (!idempotencyKey) return null;
    try {
      const existing = await EmailLog.findOne({
        idempotencyKey: String(idempotencyKey).trim(),
        status: 'SUCCESS',
      }).lean();
      return existing;
    } catch (err) {
      return null;
    }
  }

  /**
   * Helper: Generate HTML email skeleton with dynamic hackathon branding
   */
  wrapEmailTemplate({ badgeText, title, hackathonName, contentHtml, footerText, primaryColor = '#4f46e5', accentColor = '#7c3aed' }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.escapeHtml(title)}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0f172a; margin: 0; padding: 0; color: #334155; }
    .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%); padding: 36px 24px; text-align: center; color: #ffffff; }
    .header h1 { margin: 0; font-size: 22px; font-weight: 900; letter-spacing: -0.5px; }
    .header p { margin: 8px 0 0; font-size: 13px; opacity: 0.9; }
    .badge { display: inline-block; background-color: rgba(255, 255, 255, 0.2); backdrop-filter: blur(4px); color: #ffffff; font-size: 11px; font-weight: 800; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 0.5px; }
    .content { padding: 32px 28px; line-height: 1.6; }
    .footer { background-color: #f1f5f9; padding: 20px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; }
    .cta-btn { display: inline-block; background: linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%); color: #ffffff !important; text-decoration: none; padding: 14px 32px; border-radius: 12px; font-weight: 800; font-size: 14px; box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3); }
    .box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin: 24px 0; }
    .row { display: flex; justify-content: space-between; margin-bottom: 10px; font-size: 13px; }
    .label { color: #64748b; font-weight: 600; }
    .value { color: #0f172a; font-weight: 700; text-align: right; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      ${badgeText ? `<div class="badge">${this.escapeHtml(badgeText)}</div>` : ''}
      <h1>${this.escapeHtml(title)}</h1>
      <p>${this.escapeHtml(hackathonName)}</p>
    </div>
    <div class="content">
      ${contentHtml}
    </div>
    <div class="footer">
      ${footerText || `© ${new Date().getFullYear()} ${this.escapeHtml(hackathonName)}. All rights reserved.<br>Automated notification system.`}
    </div>
  </div>
</body>
</html>`;
  }

  // =========================================================================
  // 1. REGISTRATION CONFIRMATION EMAIL
  // =========================================================================
  async sendRegistrationEmail({ team, settings, hackathon, hackathonId, recipientEmail, recipientName }) {
    const targetHackathonId = hackathonId || team?.hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = recipientEmail || team?.leader?.email;
    if (!to) throw new Error('Recipient email is required for registration notification.');
    const name = recipientName || team?.leader?.name || 'Team Leader';

    const idempotencyKey = targetHackathonId ? `${targetHackathonId}:REGISTRATION_CONFIRMATION:${team?.teamId || team?._id}:${to}` : null;
    const existing = await this.checkIdempotency(idempotencyKey);
    if (existing) {
      return { success: true, duplicate: true, skipped: true, messageId: existing.messageId };
    }

    const title = `Registration Confirmed: ${team?.teamName || 'Team'}`;
    const subject = `Welcome to ${branding.hackathonName}! Your team "${team?.teamName || 'Your Team'}" is registered`;

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(name)}</strong>,</p>
      <p>Thank you for registering for <strong>${this.escapeHtml(branding.hackathonName)}</strong>! Your team details have been recorded in our system.</p>
      <div class="box">
        <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Team ID:</span><span class="value font-mono">${this.escapeHtml(team?.teamId || '—')}</span></div>
        <div class="row"><span class="label">Track:</span><span class="value">${this.escapeHtml(team?.track || 'General')}</span></div>
        <div class="row"><span class="label">Total Members:</span><span class="value">${(team?.members?.length || 0) + 1}</span></div>
      </div>
      <p>Our review panel is currently assessing all initial proposals. You will receive an update once shortlisted teams are announced.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.portalUrl}" class="cta-btn" target="_blank">View Hackathon Portal →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Registration Received',
      title,
      hackathonName: branding.hackathonName,
      contentHtml,
    });

    return await mailService.sendEmail({
      to,
      recipientName: name,
      subject,
      html,
      campaign: 'Hackathon Registration',
      eventType: 'REGISTRATION_CONFIRMATION',
      hackathonId: branding.hackathonId,
      entityId: team?.teamId || team?._id ? String(team.teamId || team._id) : null,
      idempotencyKey,
      source: 'Registration System',
    });
  }

  // =========================================================================
  // 2. SHORTLIST NOTIFICATION EMAIL
  // =========================================================================
  generateShortlistEmailHtml({ teamName, leaderName, track, fee, portalUrl, deadline, hackathonName = 'Code-A-Nova Hackathon' }) {
    const contentHtml = `
      <p class="welcome-text">
        Dear <strong>${this.escapeHtml(leaderName)}</strong>,
      </p>
      <p class="welcome-text">
        We are thrilled to inform you that your team <strong>${this.escapeHtml(teamName)}</strong> has been <strong>shortlisted</strong> for the <strong>${this.escapeHtml(hackathonName)}</strong>! Out of hundreds of problem statements, your approach stood out to our evaluation panel.
      </p>

      <div class="box">
        <div class="row">
          <span class="label">Team Name:</span>
          <span class="value">${this.escapeHtml(teamName)}</span>
        </div>
        <div class="row">
          <span class="label">Team Leader:</span>
          <span class="value">${this.escapeHtml(leaderName)}</span>
        </div>
        <div class="row">
          <span class="label">Track:</span>
          <span class="value">${this.escapeHtml(track)}</span>
        </div>
        <div class="row">
          <span class="label">Confirmation Fee:</span>
          <span class="value" style="color: #059669;">₹${this.escapeHtml(fee)} / Team</span>
        </div>
        ${deadline ? `
        <div class="row">
          <span class="label">Confirmation Deadline:</span>
          <span class="value" style="color: #d97706;">${new Date(deadline).toLocaleString()}</span>
        </div>` : ''}
      </div>

      <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 14px 18px; border-radius: 6px; margin: 20px 0;">
        <div style="font-weight: 800; font-size: 13px; color: #065f46; margin-bottom: 4px;">Important Notice — Single Team Payment:</div>
        <p style="font-size: 12px; color: #047857; margin: 0;">
          The nominal <strong>₹${this.escapeHtml(fee)}</strong> participation confirmation fee is charged <strong>ONCE PER TEAM</strong>, NOT per member. As the Team Leader, only you need to complete this one-time confirmation for your entire team.
        </p>
      </div>

      <p style="font-size: 13px; color: #1e293b; margin-bottom: 12px;">
        Completing your participation confirmation immediately unlocks:
      </p>
      <ul style="font-size: 13px; color: #475569; padding-left: 20px; margin-bottom: 24px;">
        <li>Access to the private <strong>Official Hackathon Community</strong></li>
        <li>Direct mentorship, problem statement refinement sessions & office hours</li>
        <li>Final project submission workspace and prototype judging eligibility</li>
      </ul>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${portalUrl}" class="cta-btn" target="_blank">Confirm Team Participation (₹${this.escapeHtml(fee)}) →</a>
      </div>

      <p style="font-size: 11px; color: #64748b; text-align: center; margin-top: 24px;">
        Can't click the button? Copy and paste this URL into your browser:<br>
        <a href="${portalUrl}" style="color: #4f46e5; word-break: break-all;">${portalUrl}</a>
      </p>
    `;

    return this.wrapEmailTemplate({
      badgeText: 'Official Selection',
      title: `Congratulations, Team ${teamName}!`,
      hackathonName,
      contentHtml,
    });
  }

  async sendShortlistEmail({ team, settings, hackathon, portalUrl, deadline }) {
    const leaderEmail = team.leader?.email;
    if (!leaderEmail) {
      throw new Error(`Team ${team.teamId} does not have a valid leader email.`);
    }

    const targetHackathonId = team.hackathonId || settings?.hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const effectiveFee = settings?.participationFee ?? branding.fee;
    const effectivePortalUrl = portalUrl || branding.portalUrl;
    const effectiveDeadline = deadline || settings?.submissionDeadline || branding.submissionDeadline;

    const idempotencyKey = targetHackathonId ? `${targetHackathonId}:SHORTLISTED:${team.teamId || team._id}:${leaderEmail}` : null;
    const existing = await this.checkIdempotency(idempotencyKey);
    if (existing) {
      return { success: true, duplicate: true, skipped: true, messageId: existing.messageId };
    }

    const html = this.generateShortlistEmailHtml({
      teamName: team.teamName,
      leaderName: team.leader?.name || 'Team Leader',
      track: team.track || 'General Track',
      fee: effectiveFee,
      portalUrl: effectivePortalUrl,
      deadline: effectiveDeadline,
      hackathonName: branding.hackathonName,
    });

    const subject = `Congratulations! Your team "${team.teamName}" has been shortlisted for ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to: leaderEmail,
      subject,
      html,
      recipientName: team.leader?.name || 'Team Leader',
      campaign: 'Hackathon Shortlist Notification',
      eventType: 'SHORTLISTED',
      hackathonId: branding.hackathonId,
      entityId: team.teamId || team._id ? String(team.teamId || team._id) : null,
      idempotencyKey,
      source: 'Hackathon Shortlist System',
    });
  }

  // =========================================================================
  // 3. PAYMENT REQUIRED EMAIL
  // =========================================================================
  async sendPaymentRequiredEmail({ team, settings, hackathon, amount, paymentUrl }) {
    const targetHackathonId = team?.hackathonId || settings?.hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = team?.leader?.email;
    if (!to) throw new Error('Team leader email is required for payment request.');
    const fee = amount ?? settings?.participationFee ?? branding.fee;
    const payUrl = paymentUrl || branding.portalUrl;

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(team?.leader?.name || 'Team Leader')}</strong>,</p>
      <p>To confirm your team's participation in <strong>${this.escapeHtml(branding.hackathonName)}</strong>, please complete your one-time team participation fee.</p>
      <div class="box">
        <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Amount Due:</span><span class="value" style="color:#059669;">₹${this.escapeHtml(fee)}</span></div>
        ${branding.submissionDeadline ? `<div class="row"><span class="label">Payment Deadline:</span><span class="value" style="color:#d97706;">${new Date(branding.submissionDeadline).toLocaleDateString()}</span></div>` : ''}
      </div>
      <div style="text-align:center;margin:30px 0;">
        <a href="${payUrl}" class="cta-btn" target="_blank">Complete Payment (₹${this.escapeHtml(fee)}) →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Action Required',
      title: 'Complete Participation Confirmation',
      hackathonName: branding.hackathonName,
      contentHtml,
    });

    const subject = `Action Required: Confirm Participation for "${team?.teamName}" in ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to,
      recipientName: team?.leader?.name || 'Team Leader',
      subject,
      html,
      campaign: 'Hackathon Payment Required',
      eventType: 'PAYMENT_REQUIRED',
      hackathonId: branding.hackathonId,
      entityId: team?.teamId || team?._id ? String(team.teamId || team._id) : null,
      source: 'Payment Service',
    });
  }

  // =========================================================================
  // 4. PAYMENT SUCCESS CONFIRMATION EMAIL
  // =========================================================================
  async sendPaymentSuccessEmail({ team, payment, settings, hackathon }) {
    const targetHackathonId = payment?.hackathonId || team?.hackathonId || settings?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = team?.leader?.email;
    if (!to) return { success: false, error: 'Recipient email required' };

    const paymentId = payment?.paymentId || payment?.razorpayPaymentId || 'Verified';
    const amount = payment?.amount ? (payment.amount > 5000 ? Math.round(payment.amount / 100) : payment.amount) : branding.fee;

    const idempotencyKey = targetHackathonId ? `${targetHackathonId}:PAYMENT_SUCCESS:${paymentId}:${to}` : null;
    const existing = await this.checkIdempotency(idempotencyKey);
    if (existing) {
      return { success: true, duplicate: true, skipped: true, messageId: existing.messageId };
    }

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(team?.leader?.name || 'Team Leader')}</strong>,</p>
      <p>Your payment for <strong>${this.escapeHtml(branding.hackathonName)}</strong> has been successfully processed! Your team is now officially <strong>CONFIRMED</strong>.</p>
      <div class="box">
        <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Amount Paid:</span><span class="value" style="color:#059669;">₹${this.escapeHtml(amount)}</span></div>
        <div class="row"><span class="label">Payment ID:</span><span class="value font-mono">${this.escapeHtml(paymentId)}</span></div>
        <div class="row"><span class="label">Status:</span><span class="value" style="color:#10b981;">CONFIRMED</span></div>
      </div>
      ${branding.whatsAppLink ? `
      <div style="background-color:#ecfdf5;border:1px solid #6ee7b7;border-radius:10px;padding:16px;margin:20px 0;text-align:center;">
        <h4 style="margin:0 0 6px 0;color:#065f46;">Official WhatsApp Community:</h4>
        <a href="${branding.whatsAppLink}" style="color:#059669;font-weight:bold;text-decoration:none;" target="_blank">Join Official WhatsApp Group →</a>
      </div>` : ''}
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.portalUrl}" class="cta-btn" target="_blank">Go to Team Workspace →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Payment Successful',
      title: 'Participation Confirmed!',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#059669',
      accentColor: '#10b981',
    });

    const subject = `Payment Confirmed: Team "${team?.teamName}" is ready for ${branding.hackathonName}!`;

    return await mailService.sendEmail({
      to,
      recipientName: team?.leader?.name || 'Team Leader',
      subject,
      html,
      campaign: 'Hackathon Payment Success',
      eventType: 'PAYMENT_SUCCESS',
      hackathonId: branding.hackathonId,
      entityId: team?.teamId || team?._id ? String(team.teamId || team._id) : null,
      idempotencyKey,
      source: 'Payment Service',
    });
  }

  // =========================================================================
  // 5. PAYMENT FAILURE EMAIL
  // =========================================================================
  async sendPaymentFailedEmail({ team, payment, settings, hackathon, reason }) {
    const targetHackathonId = payment?.hackathonId || team?.hackathonId || settings?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = team?.leader?.email;
    if (!to) return { success: false, error: 'Recipient email required' };

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(team?.leader?.name || 'Team Leader')}</strong>,</p>
      <p>We noticed an issue with your recent payment transaction for <strong>${this.escapeHtml(branding.hackathonName)}</strong>.</p>
      <div class="box" style="border-left:4px solid #ef4444;">
        <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Reason:</span><span class="value" style="color:#ef4444;">${this.escapeHtml(reason || 'Transaction could not be completed')}</span></div>
      </div>
      <p>No funds were permanently deducted. You may retry your payment safely via the hackathon portal.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.portalUrl}" class="cta-btn" target="_blank" style="background:#ef4444;">Retry Payment →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Payment Notice',
      title: 'Payment Incomplete',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#b91c1c',
      accentColor: '#ef4444',
    });

    const subject = `Payment Incomplete for Team "${team?.teamName}" — ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to,
      recipientName: team?.leader?.name || 'Team Leader',
      subject,
      html,
      campaign: 'Hackathon Payment Failure',
      eventType: 'PAYMENT_FAILED',
      hackathonId: branding.hackathonId,
      entityId: team?.teamId || team?._id ? String(team.teamId || team._id) : null,
      source: 'Payment Service',
    });
  }

  // =========================================================================
  // 6. SUBMISSION REMINDER EMAIL
  // =========================================================================
  async sendSubmissionReminderEmail({ team, settings, hackathon, deadline }) {
    const targetHackathonId = team?.hackathonId || settings?.hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = team?.leader?.email;
    if (!to) return { success: false, error: 'Recipient email required' };

    const effectiveDeadline = deadline || branding.submissionDeadline;
    const formattedDeadline = effectiveDeadline ? new Date(effectiveDeadline).toLocaleString() : 'Soon';

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(team?.leader?.name || 'Team Leader')}</strong>,</p>
      <p>This is a friendly reminder that the submission deadline for <strong>${this.escapeHtml(branding.hackathonName)}</strong> is rapidly approaching!</p>
      <div class="box" style="border-left:4px solid #f59e0b;">
        <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Submission Deadline:</span><span class="value" style="color:#d97706;">${this.escapeHtml(formattedDeadline)}</span></div>
        <div class="row"><span class="label">Status:</span><span class="value">${this.escapeHtml(team?.submissionStatus || 'Draft')}</span></div>
      </div>
      <p>Please ensure all repository links, live project URLs, and demo videos are updated and submitted before the deadline.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.portalUrl}" class="cta-btn" target="_blank">Submit Your Project Now →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Deadline Approaching',
      title: 'Submission Reminder',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#d97706',
      accentColor: '#f59e0b',
    });

    const subject = `Deadline Reminder: Submit your project for ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to,
      recipientName: team?.leader?.name || 'Team Leader',
      subject,
      html,
      campaign: 'Hackathon Submission Reminder',
      eventType: 'SUBMISSION_REMINDER',
      hackathonId: branding.hackathonId,
      entityId: team?.teamId || team?._id ? String(team.teamId || team._id) : null,
      source: 'Submission Reminders',
    });
  }

  // =========================================================================
  // 7. SUBMISSION CONFIRMATION EMAIL
  // =========================================================================
  async sendSubmissionConfirmationEmail({ team, submission, settings, hackathon }) {
    const targetHackathonId = submission?.hackathonId || team?.hackathonId || settings?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = team?.leader?.email || submission?.submitterEmail;
    if (!to) return { success: false, error: 'Recipient email required' };

    const idempotencyKey = targetHackathonId ? `${targetHackathonId}:SUBMISSION_RECEIVED:${submission?._id || team?.teamId}:${to}` : null;
    const existing = await this.checkIdempotency(idempotencyKey);
    if (existing) {
      return { success: true, duplicate: true, skipped: true, messageId: existing.messageId };
    }

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(team?.leader?.name || 'Participant')}</strong>,</p>
      <p>We have successfully received your final project submission for <strong>${this.escapeHtml(branding.hackathonName)}</strong>!</p>
      <div class="box">
        <div class="row"><span class="label">Project Name:</span><span class="value">${this.escapeHtml(submission?.projectName || 'Project')}</span></div>
        <div class="row"><span class="label">Team:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Status:</span><span class="value" style="color:#059669;">SUBMITTED</span></div>
        <div class="row"><span class="label">Submitted At:</span><span class="value">${new Date().toLocaleString()}</span></div>
      </div>
      <p>Our editorial and judging panel will now evaluate your submission based on our standard rubric. Results will be announced on the scheduled result date.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.portalUrl}" class="cta-btn" target="_blank">View Submission Details →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Project Received',
      title: 'Submission Received Successfully',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#2563eb',
      accentColor: '#3b82f6',
    });

    const subject = `Submission Received: "${submission?.projectName || 'Project'}" for ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to,
      recipientName: team?.leader?.name || 'Participant',
      subject,
      html,
      campaign: 'Hackathon Submission Confirmation',
      eventType: 'SUBMISSION_RECEIVED',
      hackathonId: branding.hackathonId,
      entityId: submission?._id ? String(submission._id) : (team?.teamId ? String(team.teamId) : null),
      idempotencyKey,
      source: 'Submission Engine',
    });
  }

  // =========================================================================
  // 8. JUDGE ASSIGNMENT EMAIL
  // =========================================================================
  async sendJudgeAssignmentEmail({ judge, team, assignment, settings, hackathon }) {
    const targetHackathonId = assignment?.hackathonId || judge?.hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = judge?.email;
    if (!to) return { success: false, error: 'Judge email required' };

    const idempotencyKey = targetHackathonId ? `${targetHackathonId}:JUDGE_ASSIGNED:${assignment?._id || team?.teamId}:${to}` : null;
    const existing = await this.checkIdempotency(idempotencyKey);
    if (existing) {
      return { success: true, duplicate: true, skipped: true, messageId: existing.messageId };
    }

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(judge?.name || 'Judge')}</strong>,</p>
      <p>You have been assigned a new project submission for review in <strong>${this.escapeHtml(branding.hackathonName)}</strong>.</p>
      <div class="box">
        <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Project Title:</span><span class="value">${this.escapeHtml(team?.submission?.projectName || team?.projectName || 'Project Submission')}</span></div>
        <div class="row"><span class="label">Track:</span><span class="value">${this.escapeHtml(team?.track || 'General')}</span></div>
        ${assignment?.deadline ? `<div class="row"><span class="label">Review Deadline:</span><span class="value" style="color:#d97706;">${new Date(assignment.deadline).toLocaleDateString()}</span></div>` : ''}
      </div>
      <p>Please log in to your editorial judging dashboard to access the rubric, evaluate criteria, and submit your scoring.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.clientUrl}/editorial/dashboard" class="cta-btn" target="_blank">Access Judging Workspace →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'New Assignment',
      title: 'Project Assigned for Review',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#4338ca',
      accentColor: '#6366f1',
    });

    const subject = `New Project Assigned for Evaluation — ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to,
      recipientName: judge?.name || 'Judge',
      subject,
      html,
      campaign: 'Hackathon Judge Assignment',
      eventType: 'JUDGE_ASSIGNED',
      hackathonId: branding.hackathonId,
      entityId: assignment?._id ? String(assignment._id) : null,
      idempotencyKey,
      source: 'Editorial Panel',
    });
  }

  // =========================================================================
  // 9. JUDGE EVALUATION REMINDER EMAIL
  // =========================================================================
  async sendJudgeReminderEmail({ judge, pendingCount = 1, settings, hackathon, deadline }) {
    const targetHackathonId = judge?.hackathonId || settings?.hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = judge?.email;
    if (!to) return { success: false, error: 'Judge email required' };

    const effectiveDeadline = deadline || branding.submissionDeadline;
    const formattedDeadline = effectiveDeadline ? new Date(effectiveDeadline).toLocaleString() : 'Upcoming';

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(judge?.name || 'Judge')}</strong>,</p>
      <p>This is a gentle reminder regarding your pending evaluations for <strong>${this.escapeHtml(branding.hackathonName)}</strong>.</p>
      <div class="box" style="border-left:4px solid #f59e0b;">
        <div class="row"><span class="label">Pending Evaluations:</span><span class="value" style="color:#d97706;">${pendingCount} pending evaluation(s)</span></div>
        <div class="row"><span class="label">Evaluation Deadline:</span><span class="value">${this.escapeHtml(formattedDeadline)}</span></div>
      </div>
      <p>Completing your scores on time ensures rankings and winners can be finalized promptly.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.clientUrl}/editorial/dashboard" class="cta-btn" target="_blank">Complete Evaluations →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Evaluation Reminder',
      title: 'Pending Project Evaluations',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#d97706',
      accentColor: '#f59e0b',
    });

    const subject = `Action Required: ${pendingCount} pending evaluation(s) for ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to,
      recipientName: judge?.name || 'Judge',
      subject,
      html,
      campaign: 'Hackathon Judge Reminder',
      eventType: 'JUDGE_REMINDER',
      hackathonId: branding.hackathonId,
      source: 'Editorial Panel',
    });
  }

  // =========================================================================
  // 10. EDITORIAL WELCOME / INVITATION EMAIL
  // =========================================================================
  async sendEditorialWelcomeEmail({ email, name, loginUrl, hackathon, hackathonId }) {
    if (!email) return { success: false, error: 'Recipient email required' };

    const targetHackathonId = hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon });

    const effectiveLoginUrl = loginUrl || `${branding.clientUrl}/editorial/login`;

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(name)}</strong>,</p>
      <p>You have been officially provisioned as an Editorial / Judge member for <strong>${this.escapeHtml(branding.hackathonName)}</strong>.</p>
      <div class="box">
        <p style="margin:0 0 8px 0;font-size:13px;"><strong>Login Email:</strong> ${this.escapeHtml(email)}</p>
        <p style="margin:0 0 8px 0;font-size:13px;"><strong>Initial Password:</strong> As configured by Hackathon Administrators</p>
        <p style="margin:0;font-size:12px;color:#dc2626;"><strong>Security Notice:</strong> You will be prompted to update your password immediately upon your first login.</p>
      </div>
      <div style="text-align:center;margin:30px 0;">
        <a href="${effectiveLoginUrl}" class="cta-btn" target="_blank">Access Editorial Dashboard →</a>
      </div>
      <p style="font-size:12px;color:#64748b;">If you have any questions or require assistance, please contact the organizing committee.</p>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Editorial Panel',
      title: 'Welcome to the Editorial Workspace',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#1e1b4b',
      accentColor: '#312e81',
    });

    const subject = `${branding.hackathonName} — Editorial Panel Invitation & Workspace Access`;

    return await mailService.sendEmail({
      to: email,
      subject,
      html,
      recipientName: name,
      campaign: 'Hackathon Editorial Invitation',
      eventType: 'JUDGE_ASSIGNED',
      hackathonId: branding.hackathonId,
      source: 'Hackathon Editorial System',
    });
  }

  // =========================================================================
  // 11. RESULT & WINNER ANNOUNCEMENT EMAIL
  // =========================================================================
  async sendResultAnnouncementEmail({ team, result, settings, hackathon }) {
    const targetHackathonId = result?.hackathonId || team?.hackathonId || settings?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon, settings });

    const to = team?.leader?.email;
    if (!to) return { success: false, error: 'Recipient email required' };

    const rank = result?.rank || 'Finalist';
    const awardCategory = result?.awardCategory || 'Participant';
    const isWinner = rank <= 3 || ['WINNER', 'RUNNER_UP', 'SPECIAL_AWARD'].includes(awardCategory);

    const idempotencyKey = targetHackathonId ? `${targetHackathonId}:RESULT_ANNOUNCEMENT:${result?._id || team?.teamId}:${to}` : null;
    const existing = await this.checkIdempotency(idempotencyKey);
    if (existing) {
      return { success: true, duplicate: true, skipped: true, messageId: existing.messageId };
    }

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(team?.leader?.name || 'Participant')}</strong>,</p>
      <p>The official results for <strong>${this.escapeHtml(branding.hackathonName)}</strong> have been published!</p>
      <div class="box" style="${isWinner ? 'background-color:#fefce8;border-color:#fde047;' : ''}">
        <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(team?.teamName || '—')}</span></div>
        <div class="row"><span class="label">Rank:</span><span class="value" style="color:#d97706;font-weight:bold;">#${this.escapeHtml(rank)}</span></div>
        <div class="row"><span class="label">Recognition:</span><span class="value">${this.escapeHtml(awardCategory)}</span></div>
      </div>
      ${isWinner ? '<p style="color:#059669;font-weight:bold;">🏆 Outstanding achievement! Our team will contact you regarding prize fulfillment and ceremony details.</p>' : ''}
      <div style="text-align:center;margin:30px 0;">
        <a href="${branding.portalUrl}/leaderboard" class="cta-btn" target="_blank">View Official Leaderboard →</a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: isWinner ? 'Winner Announcement' : 'Official Results',
      title: isWinner ? 'Congratulations on Your Victory!' : 'Hackathon Results Published',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: isWinner ? '#854d0e' : '#1e293b',
      accentColor: isWinner ? '#ca8a04' : '#334155',
    });

    const subject = isWinner
      ? `🏆 Congratulations! Team "${team?.teamName}" placed #${rank} in ${branding.hackathonName}`
      : `Official Results Announced for ${branding.hackathonName}`;

    return await mailService.sendEmail({
      to,
      recipientName: team?.leader?.name || 'Participant',
      subject,
      html,
      campaign: 'Hackathon Result Announcement',
      eventType: isWinner ? 'WINNER_ANNOUNCEMENT' : 'RESULT_ANNOUNCEMENT',
      hackathonId: branding.hackathonId,
      entityId: result?._id ? String(result._id) : (team?.teamId ? String(team.teamId) : null),
      idempotencyKey,
      source: 'Results Engine',
    });
  }

  // =========================================================================
  // 12. CERTIFICATE NOTIFICATION EMAIL
  // =========================================================================
  async sendCertificateEmail({ email, name, award, certificateNumber, verificationUrl, downloadUrl, hackathon, hackathonId }) {
    if (!email) return { success: false, error: 'Recipient email required' };

    const targetHackathonId = hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon });

    const effectiveVerifyUrl = verificationUrl || `${branding.clientUrl}/hackathon/certificate/verify/${certificateNumber}`;
    const effectiveDownloadUrl = downloadUrl || `${branding.portalUrl}#team-status`;

    const idempotencyKey = targetHackathonId ? `${targetHackathonId}:CERTIFICATE_ISSUED:${certificateNumber}:${email}` : null;
    const existing = await this.checkIdempotency(idempotencyKey);
    if (existing) {
      return { success: true, duplicate: true, skipped: true, messageId: existing.messageId };
    }

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(name)}</strong>,</p>
      <p>Congratulations on your participation in <strong>${this.escapeHtml(branding.hackathonName)}</strong>! Your official verifiable certificate has been issued by the organizing committee.</p>
      <div class="box">
        <div class="row"><span class="label">Award / Recognition:</span><span class="value">${this.escapeHtml(award)}</span></div>
        <div class="row"><span class="label">Certificate Number:</span><span class="value font-mono">${this.escapeHtml(certificateNumber)}</span></div>
      </div>
      <p style="font-size:12px;color:#475569;">You can view, download, or verify this credential online at any time.</p>
      <div style="text-align:center;margin:30px 0;">
        <a href="${effectiveDownloadUrl}" class="cta-btn" target="_blank">Access My Certificate →</a>
      </div>
      <p style="font-size:12px;color:#64748b;text-align:center;">
        Public Verification Link:<br/>
        <a href="${effectiveVerifyUrl}" style="color:#4f46e5;word-break:break-all;">${effectiveVerifyUrl}</a>
      </p>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Official Credential',
      title: 'Your Certificate is Ready! 🎉',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#1e1b4b',
      accentColor: '#4338ca',
    });

    const subject = `Your ${branding.hackathonName} Certificate is Ready 🎉 (${certificateNumber})`;

    return await mailService.sendEmail({
      to: email,
      subject,
      html,
      recipientName: name,
      campaign: 'Hackathon Certificate Delivery',
      eventType: 'CERTIFICATE_ISSUED',
      hackathonId: branding.hackathonId,
      entityId: certificateNumber,
      idempotencyKey,
      source: 'Certificate Generator',
    });
  }

  // =========================================================================
  // 13. PRIZE FULFILLMENT NOTIFICATION EMAIL
  // =========================================================================
  async sendPrizeFulfillmentEmail({ email, name, award, prizeName, fulfillmentStatus, message, hackathon, hackathonId }) {
    if (!email) return { success: false, error: 'Recipient email required' };

    const targetHackathonId = hackathonId || hackathon?.hackathonId;
    const branding = await this.resolveBranding({ hackathonId: targetHackathonId, hackathon });

    const contentHtml = `
      <p>Dear <strong>${this.escapeHtml(name)}</strong>,</p>
      <p>We are writing with an update regarding your team's prize fulfillment for your achievement in <strong>${this.escapeHtml(branding.hackathonName)}</strong>.</p>
      <div class="box" style="background-color:#f0fdf4;border:1px solid #bbf7d0;">
        <div class="row"><span class="label">Award:</span><span class="value">${this.escapeHtml(award)}</span></div>
        <div class="row"><span class="label">Prize:</span><span class="value">${this.escapeHtml(prizeName)}</span></div>
        <div class="row"><span class="label">Fulfillment Status:</span><span class="value" style="color:#047857;font-weight:bold;">${this.escapeHtml(fulfillmentStatus)}</span></div>
      </div>
      ${message ? `<p style="font-size:13px;color:#1e293b;">${this.escapeHtml(message)}</p>` : ''}
      <div style="text-align:center;margin:24px 0;">
        <a href="${branding.portalUrl}#team-status" class="cta-btn" target="_blank" style="background:#059669;">
          View Hackathon Status →
        </a>
      </div>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'Prize Department',
      title: 'Prize Fulfillment Update',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#065f46',
      accentColor: '#047857',
    });

    const subject = `${branding.hackathonName} — Prize Fulfillment Update: ${prizeName}`;

    return await mailService.sendEmail({
      to: email,
      subject,
      html,
      recipientName: name,
      campaign: 'Hackathon Prize Fulfillment Notification',
      eventType: 'PRIZE_FULFILLMENT_UPDATE',
      hackathonId: branding.hackathonId,
      entityId: prizeName,
      source: 'Prize Management System',
    });
  }

  // =========================================================================
  // 14. ADMIN ALERT EMAIL
  // =========================================================================
  async sendAdminAlertEmail({ hackathonId, subject, message, recipientEmail }) {
    const branding = await this.resolveBranding({ hackathonId });
    const to = recipientEmail || branding.supportEmail || 'admin@code-a-nova.online';

    const contentHtml = `
      <p>This is an automated administrative notification for <strong>${this.escapeHtml(branding.hackathonName)}</strong>.</p>
      <div class="box">
        <p style="margin:0;font-size:13px;color:#1e293b;">${this.escapeHtml(message)}</p>
      </div>
      <p style="font-size:11px;color:#64748b;">Timestamp: ${new Date().toISOString()}</p>
    `;

    const html = this.wrapEmailTemplate({
      badgeText: 'System Alert',
      title: subject || 'Hackathon System Notification',
      hackathonName: branding.hackathonName,
      contentHtml,
      primaryColor: '#475569',
      accentColor: '#64748b',
    });

    return await mailService.sendEmail({
      to,
      subject: `[Admin Alert] ${subject} — ${branding.hackathonName}`,
      html,
      campaign: 'Hackathon Admin Alert',
      eventType: 'ADMIN_ALERT',
      hackathonId: branding.hackathonId,
      source: 'Operations Telemetry',
    });
  }

  // =========================================================================
  // 15. EMAIL PREVIEW RENDERER
  // =========================================================================
  async renderEmailPreview({ hackathonId, templateType = 'SHORTLISTED', sampleData = {} }) {
    const branding = await this.resolveBranding({ hackathonId });

    let title = '';
    let subject = '';
    let html = '';

    switch (templateType.toUpperCase()) {
      case 'REGISTRATION_CONFIRMATION': {
        const teamName = sampleData.teamName || 'Innovators Club';
        title = `Registration Confirmed: ${teamName}`;
        subject = `Welcome to ${branding.hackathonName}! Your team "${teamName}" is registered`;
        html = this.wrapEmailTemplate({
          badgeText: 'Registration Received',
          title,
          hackathonName: branding.hackathonName,
          contentHtml: `
            <p>Dear <strong>${this.escapeHtml(sampleData.leaderName || 'Sample Leader')}</strong>,</p>
            <p>Thank you for registering for <strong>${this.escapeHtml(branding.hackathonName)}</strong>!</p>
            <div class="box">
              <div class="row"><span class="label">Team Name:</span><span class="value">${this.escapeHtml(teamName)}</span></div>
              <div class="row"><span class="label">Track:</span><span class="value">${this.escapeHtml(sampleData.track || 'Web3')}</span></div>
            </div>
          `,
        });
        break;
      }
      case 'SHORTLISTED': {
        const teamName = sampleData.teamName || 'Team Alpha';
        title = `Congratulations, Team ${teamName}!`;
        subject = `Congratulations! Your team "${teamName}" has been shortlisted for ${branding.hackathonName}`;
        html = this.generateShortlistEmailHtml({
          teamName,
          leaderName: sampleData.leaderName || 'Jane Doe',
          track: sampleData.track || 'AI / Machine Learning',
          fee: sampleData.fee ?? branding.fee,
          portalUrl: branding.portalUrl,
          deadline: branding.submissionDeadline,
          hackathonName: branding.hackathonName,
        });
        break;
      }
      case 'PAYMENT_SUCCESS': {
        const teamName = sampleData.teamName || 'Team Velocity';
        subject = `Payment Confirmed: Team "${teamName}" is ready for ${branding.hackathonName}!`;
        html = this.wrapEmailTemplate({
          badgeText: 'Payment Successful',
          title: 'Participation Confirmed!',
          hackathonName: branding.hackathonName,
          contentHtml: `
            <p>Your participation fee for <strong>${this.escapeHtml(branding.hackathonName)}</strong> has been received.</p>
            <div class="box">
              <div class="row"><span class="label">Team:</span><span class="value">${this.escapeHtml(teamName)}</span></div>
              <div class="row"><span class="label">Amount:</span><span class="value">₹${this.escapeHtml(branding.fee)}</span></div>
            </div>
          `,
        });
        break;
      }
      case 'SUBMISSION_REMINDER': {
        subject = `Deadline Reminder: Submit your project for ${branding.hackathonName}`;
        html = this.wrapEmailTemplate({
          badgeText: 'Deadline Approaching',
          title: 'Submission Reminder',
          hackathonName: branding.hackathonName,
          contentHtml: `
            <p>Don't forget to finalize your project submission before the official deadline!</p>
          `,
        });
        break;
      }
      case 'CERTIFICATE_ISSUED': {
        subject = `Your ${branding.hackathonName} Certificate is Ready 🎉 (SAMPLE-12345)`;
        html = this.wrapEmailTemplate({
          badgeText: 'Official Credential',
          title: 'Your Certificate is Ready! 🎉',
          hackathonName: branding.hackathonName,
          contentHtml: `
            <p>Your certificate for <strong>${this.escapeHtml(branding.hackathonName)}</strong> has been generated.</p>
            <div class="box">
              <div class="row"><span class="label">Certificate ID:</span><span class="value font-mono">SAMPLE-12345</span></div>
            </div>
          `,
        });
        break;
      }
      default: {
        subject = `Notification from ${branding.hackathonName}`;
        html = this.wrapEmailTemplate({
          badgeText: 'Notification',
          title: 'Hackathon Update',
          hackathonName: branding.hackathonName,
          contentHtml: `<p>Sample template preview content for ${this.escapeHtml(templateType)}.</p>`,
        });
      }
    }

    return {
      success: true,
      hackathonId: branding.hackathonId,
      hackathonName: branding.hackathonName,
      templateType,
      subject,
      html,
    };
  }

  // =========================================================================
  // 16. BULK HACKATHON EMAIL DISPATCH
  // =========================================================================
  async sendBulkHackathonEmail({ hackathonId, recipientType = 'LEADERS', subject, bodyHtml, filter = {}, adminUser }) {
    if (!hackathonId) throw new Error('Hackathon ID is required for bulk email.');
    if (!subject || !bodyHtml) throw new Error('Subject and body content are required.');

    const branding = await this.resolveBranding({ hackathonId });
    const HackathonTeam = require('../models/HackathonTeam');
    const HackathonEditorialMember = require('../models/HackathonEditorialMember');

    let recipients = [];

    if (recipientType === 'LEADERS' || recipientType === 'CONFIRMED_TEAMS') {
      const query = { hackathonId };
      if (recipientType === 'CONFIRMED_TEAMS') {
        query.status = 'CONFIRMED';
      }
      if (filter.track) query.track = filter.track;

      const teams = await HackathonTeam.find(query).select('leader teamName track status').lean();
      recipients = teams
        .filter((t) => t.leader?.email)
        .map((t) => ({
          to: t.leader.email,
          name: t.leader.name || 'Team Leader',
          teamName: t.teamName,
          entityId: t.teamId || t._id,
        }));
    } else if (recipientType === 'JUDGES') {
      const judges = await HackathonEditorialMember.find({ hackathonId, isActive: true }).select('email name').lean();
      recipients = judges
        .filter((j) => j.email)
        .map((j) => ({
          to: j.email,
          name: j.name || 'Judge',
          entityId: j._id,
        }));
    } else {
      throw new Error(`Unsupported recipient type: ${recipientType}`);
    }

    const emailList = recipients.map((r) => {
      const wrappedHtml = this.wrapEmailTemplate({
        badgeText: 'Announcement',
        title: subject,
        hackathonName: branding.hackathonName,
        contentHtml: bodyHtml.replace(/{name}/g, this.escapeHtml(r.name)).replace(/{teamName}/g, this.escapeHtml(r.teamName || '')),
      });

      return {
        to: r.to,
        recipientName: r.name,
        subject: `${subject} — ${branding.hackathonName}`,
        html: wrappedHtml,
        campaign: `Hackathon Bulk ${recipientType}`,
        eventType: 'ADMIN_BULK_EMAIL',
        hackathonId: branding.hackathonId,
        entityId: String(r.entityId || ''),
        source: `Bulk Campaign by ${adminUser?.email || 'Admin'}`,
      };
    });

    const batchResult = await mailService.sendBatchEmails(emailList, 500);

    return {
      success: true,
      hackathonId: branding.hackathonId,
      recipientCount: recipients.length,
      ...batchResult,
    };
  }
}

module.exports = new HackathonEmailService();
