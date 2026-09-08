const nodemailer = require('nodemailer');
const { ImapFlow } = require('imapflow');
const MailComposer = require('nodemailer/lib/mail-composer');
const { mailConfig, defaultSender } = require('../config/mailConfig');
const emailLogger = require('./emailLogger');
const sendSafeEmail = require('../utils/safeMailSender');

/**
 * Mail Service for Code-A-Nova
 * Acts as an SMTP Gateway using Hostinger SMTP.
 * Decoupled from Express controllers to allow direct usage in cron jobs, workers, and batch pipelines.
 */
class MailService {
  constructor() {
    this.transporter = null;
    this.mockTransport = null;
    this.mockSentEmails = [];
    this.initTransporter();
  }

  /**
   * Mock transport methods for zero-network testing
   */
  setMockTransport(mockFn) {
    this.mockTransport = mockFn;
  }

  enableMockTransport() {
    this.mockTransport = true;
    this.mockSentEmails = [];
  }

  disableMockTransport() {
    this.mockTransport = null;
    this.mockSentEmails = [];
  }

  getMockSentEmails() {
    return [...this.mockSentEmails];
  }

  clearMockSentEmails() {
    this.mockSentEmails = [];
  }

  /**
   * Initializes the Nodemailer transporter with Hostinger SMTP configuration.
   */
  initTransporter() {
    try {
      this.transporter = nodemailer.createTransport({
        ...mailConfig,
        pool: true,
        maxConnections: 5,
        maxMessages: 100,
        tls: {
          rejectUnauthorized: process.env.NODE_ENV === "production" ? true : false,
        },
      });

      this.transporter.verify((err) => {
        if (err) {
          console.error("SMTP Verify Failed:", err.message);
        } else {
          console.log("Hostinger SMTP Connected Successfully");
        }
      });
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Appends the sent email to the Hostinger IMAP Sent folder.
   * @param {Buffer} rawMessage - The raw RFC822 formatted email message
   */
  async saveToSentFolder(rawMessage) {
    let client = null;
    try {
      client = new ImapFlow({
        host: 'imap.hostinger.com',
        port: 993,
        secure: true,
        auth: {
          user: mailConfig.auth.user,
          pass: mailConfig.auth.pass,
        },
        logger: false, // Set to true for debugging
      });

      await client.connect();
      
      // Append the raw message buffer to the Sent folder
      // Hostinger usually maps Sent to "Sent" folder
      await client.append('Sent', rawMessage, ['\\Seen']);
      console.log('[MailService] ✔️ Email successfully appended to Sent folder via IMAP.');
    } catch (error) {
      console.error('[MailService] ⚠️ Failed to append email to Sent folder (non-blocking):', error.message);
    } finally {
      if (client) {
        try {
          await client.logout();
        } catch (logoutError) {
          console.error('[MailService] ⚠️ Error logging out of IMAP:', logoutError.message);
        }
      }
    }
  }

  /**
   * Sends a single email using Hostinger SMTP and automatically logs historical record to MongoDB.
   * @param {Object} options - Email configuration object
   * @param {string} options.to - Recipient email address
   * @param {string} options.subject - Email subject line
   * @param {string} options.html - Complete HTML template body (received from Apps Script or caller)
   * @param {string} [options.from] - Custom sender (defaults to SMTP_USER)
   * @param {string} [options.replyTo] - Optional reply-to address
   * @param {Array} [options.attachments] - Optional array of file attachments
   * @param {string|Array} [options.cc] - Optional CC recipient(s)
   * @param {string|Array} [options.bcc] - Optional BCC recipient(s)
   * @param {string} [options.campaign] - Optional campaign classification
   * @param {string} [options.source] - Optional source identifier
   * @param {string} [options.recipientName] - Optional recipient name
   * @param {string} [options.text] - Optional plain text fallback
   * @param {string} [options.hackathonId] - Optional associated hackathon
   * @param {string} [options.eventType] - Optional event type
   * @param {string} [options.provider] - Optional provider override
   * @param {string} [options.idempotencyKey] - Optional idempotency key
   * @param {string} [options.entityId] - Optional entity id
   * @param {Object} [options.metadata] - Optional additional metadata
   * @returns {Promise<{success: boolean, messageId?: string, accepted?: Array, error?: string, code?: string}>}
   */
  async sendEmail({
    to,
    subject,
    html,
    from = process.env.SMTP_FROM ? `"Code-A-Nova" <${process.env.SMTP_FROM}>` : '"Code-A-Nova" <manager@code-a-nova.online>',
    replyTo = process.env.SMTP_REPLY_TO || process.env.SMTP_FROM || 'manager@code-a-nova.online',
    attachments,
    cc,
    bcc,
    text,
    campaign,
    source,
    recipientName,
    hackathonId = null,
    eventType = null,
    provider = null,
    idempotencyKey = null,
    entityId = null,
    metadata = {},
  }) {
    // Strictly enforce manager@code-a-nova.online as outgoing sender (never hr@code-a-nova.online)
    let effectiveFrom = from;
    if (!effectiveFrom || effectiveFrom.includes('hr@code-a-nova.online')) {
      effectiveFrom = process.env.SMTP_FROM ? `"Code-A-Nova" <${process.env.SMTP_FROM}>` : '"Code-A-Nova" <manager@code-a-nova.online>';
    }

    let effectiveReplyTo = replyTo;
    if (!effectiveReplyTo || effectiveReplyTo.includes('hr@code-a-nova.online')) {
      effectiveReplyTo = process.env.SMTP_REPLY_TO || process.env.SMTP_FROM || 'manager@code-a-nova.online';
    }

    const finalCampaign = campaign || 'General';
    const finalSource = source || 'Backend API';

    // Mock Transport Interceptor for Automated Tests
    if (this.mockTransport) {
      const mockMessageId = `mock_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
      const emailRecord = {
        to,
        subject,
        html,
        from: effectiveFrom,
        replyTo: effectiveReplyTo,
        text: text || '',
        campaign: finalCampaign,
        source: finalSource,
        hackathonId: hackathonId || null,
        eventType: eventType || null,
        provider: 'mock',
        idempotencyKey: idempotencyKey || null,
        entityId: entityId || null,
        messageId: mockMessageId,
        sentAt: new Date(),
      };
      this.mockSentEmails.push(emailRecord);

      if (typeof this.mockTransport === 'function') {
        await this.mockTransport(emailRecord);
      }

      await emailLogger.logEmail({
        senderEmail: effectiveFrom,
        recipientEmail: to,
        recipientName: recipientName || '',
        subject,
        html,
        text: text || '',
        campaign: finalCampaign,
        status: 'SUCCESS',
        messageId: mockMessageId,
        accepted: [to],
        smtpResponse: '250 Mock email accepted',
        source: finalSource,
        hackathonId,
        eventType,
        provider: 'mock',
        idempotencyKey,
        entityId,
        metadata,
      });

      return {
        success: true,
        messageId: mockMessageId,
        accepted: [to],
        mock: true,
      };
    }

    try {
      if (!this.transporter) {
        this.initTransporter();
      }

      if (!this.transporter) {
        throw new Error("SMTP transporter not initialized.");
      }

    const mailOptions = {
      from: effectiveFrom,
      to,
      subject,
      // Plain text fallback
      text:
        text ||
        html
          .replace(/<style[\s\S]*?<\/style>/gi, "")
          .replace(/<script[\s\S]*?<\/script>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim(),
      html,
      replyTo: effectiveReplyTo,
      ...(cc && { cc }),
      ...(bcc && { bcc }),
      ...(attachments && { attachments }),
    };

      const loggingContext = {
        hackathonId,
        eventType,
        provider: provider || 'smtp',
        idempotencyKey,
        entityId,
        metadata,
      };

      const info = await sendSafeEmail(this.transporter, mailOptions, finalCampaign, finalSource, loggingContext);

      console.log("==========================================");
      console.log("EMAIL SENT (Diagnostics)");
      console.log("To:", to);
      console.log("Subject:", subject);
      console.log("Campaign:", finalCampaign);
      console.log("Hackathon:", hackathonId || 'GLOBAL');
      console.log("Source:", finalSource);
      console.log("Message ID:", info.messageId);
      console.log("Accepted:", info.accepted);
      console.log("Rejected:", info.rejected);
      console.log("SMTP Response:", info.response || "250 OK");
      console.log("==========================================");

      // Save to IMAP Sent Folder asynchronously
      try {
        const saveOptions = { ...mailOptions, messageId: info.messageId };
        const mail = new MailComposer(saveOptions);
        const rawMessage = await mail.compile().build();
        
        // Fire and forget appending to avoid blocking the API response
        this.saveToSentFolder(rawMessage);
      } catch (imapErr) {
        console.error("[MailService] ⚠️ IMAP message generation failed (non-blocking exception):", imapErr.message);
      }

      return {
        success: true,
        messageId: info.messageId,
        accepted: info.accepted,
        rejected: info.rejected,
      };
    } catch (error) {
      console.error("==========================================");
      console.error("EMAIL FAILED (Diagnostics)");
      console.error("Recipient:", to);
      console.error("Subject:", subject);
      console.error("Campaign:", finalCampaign);
      console.error("Hackathon:", hackathonId || 'GLOBAL');
      console.error("Source:", finalSource);
      console.error("SMTP Response / Error:", error.message);
      console.error("==========================================");

      // Automatic fallback to Resend API if SMTP transmission fails
      if (process.env.RESEND_API_KEY) {
        try {
          console.log(`[MailService] 🔄 Attempting Resend API fallback for recipient [${to}]...`);
          const { sendEmail: resendSend } = require('../utils/emailService');
          const resendResult = await resendSend({
            to,
            subject,
            html,
            from: effectiveFrom,
            replyTo: effectiveReplyTo,
          });
          if (resendResult && resendResult.success) {
            const messageId = resendResult.data?.id || `resend_${Date.now()}`;
            console.log(`[MailService] ✔ Email successfully dispatched via Resend fallback! MessageID: ${messageId}`);

            // Log to centralized Email Center with multi-hackathon context
            try {
              await emailLogger.logEmail({
                senderEmail: effectiveFrom,
                recipientEmail: to,
                recipientName: recipientName || '',
                subject,
                html,
                text: text || '',
                campaign: finalCampaign,
                status: 'SUCCESS',
                messageId,
                accepted: [to],
                smtpResponse: '250 Dispatched via Resend API Fallback',
                source: `${finalSource} (Resend Fallback)`,
                hackathonId,
                eventType,
                provider: 'resend',
                idempotencyKey,
                entityId,
                metadata,
              });
            } catch (logErr) {
              console.warn('[MailService] Failed to record Resend log to DB:', logErr.message);
            }

            // Reset circuit breaker so subsequent emails are never blocked
            try {
              const CircuitBreaker = require('../models/email/CircuitBreaker');
              await CircuitBreaker.updateOne({ serviceName: 'email' }, { $set: { isTripped: false, consecutiveFailures: 0, trippedAt: null } });
            } catch (_) {}

            return {
              success: true,
              messageId,
              accepted: [to],
              fallbackUsed: true,
            };
          }
        } catch (fallbackError) {
          console.error("[MailService] ❌ Resend fallback also failed:", fallbackError.message);
        }
      }

      return {
        success: false,
        error: error.message,
        code: error.code,
      };
    }
  }

  /**
   * Sends a batch of emails sequentially with throttling delay to protect against Hostinger rate limits.
   */
  async sendBatchEmails(emailList, delayMs = 1500) {
    if (!Array.isArray(emailList) || emailList.length === 0) {
      return { success: false, message: "Email list must be a non-empty array." };
    }

    console.log(`[MailService] 🚀 Launching batch transmission of ${emailList.length} emails with ${delayMs}ms delay...`);
    let successful = 0;
    let failed = 0;
    const results = [];

    for (let i = 0; i < emailList.length; i++) {
      const emailOptions = emailList[i];
      try {
        const res = await this.sendEmail(emailOptions);
        if (res.success) {
          successful++;
        } else {
          failed++;
        }
        results.push({ email: emailOptions.to, ...res });
      } catch (err) {
        failed++;
        results.push({ email: emailOptions.to, success: false, error: err.message });
      }

      // Pause before sending next email to prevent SMTP spam triggers
      if (i < emailList.length - 1 && delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }

    console.log(`[MailService] 🏁 Batch transmission finalized | Total: ${emailList.length} | ✔ Success: ${successful} | ❌ Failed: ${failed}`);
    return {
      success: true,
      total: emailList.length,
      successful,
      failed,
      results,
    };
  }

  /**
   * Resends a historical stored email by ID.
   * Enforces attachment safety checks and guarantees historical log immutability by creating a brand new record.
   * @param {string} logId - The MongoDB document ID of the historical email log
   */
  async resendStoredEmail(logId) {
    const EmailLog = require('../models/email/EmailLog');
    const log = await EmailLog.findById(logId);

    if (!log) {
      const err = new Error("Email log record not found.");
      err.status = 404;
      throw err;
    }

    // Prepare valid attachments for delivery (skip placeholder strings gracefully)
    const validAttachments = Array.isArray(log.attachments)
      ? log.attachments
          .filter((a) => a && (a.url || a.path || (a.content && a.content !== "[Buffer Payload]" && a.content !== "[Binary Attachment Payload]")))
          .map((a) => ({
            filename: a.filename || "attachment",
            content: a.content || undefined,
            path: (!a.content && (a.url || a.path)) ? (a.url || a.path) : undefined,
          }))
      : [];

    console.log(`[MailService] 🔄 Resending historical email [${log.subject}] to [${log.recipientEmail}]...`);

    return await this.sendEmail({
      to: log.recipientEmail,
      subject: log.subject,
      html: log.html,
      text: log.text,
      from: '"Code-A-Nova" <manager@code-a-nova.online>',
      replyTo: "manager@code-a-nova.online",
      attachments: validAttachments,
      campaign: log.campaign,
      source: "Admin Resend",
      recipientName: log.recipientName,
      hackathonId: log.hackathonId || null,
      eventType: log.eventType || null,
      entityId: log.entityId || null,
    });
  }

  /**
   * Alias method for backward compatibility
   */
  async sendCustomEmail(options) {
    return this.sendEmail(options);
  }
}

// Export singleton instance of MailService for global reuse
module.exports = new MailService();
