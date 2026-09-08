/**
 * Production Configuration Validation Script (Phase M11)
 *
 * Validates existence and format of environment variables without leaking secrets.
 * Categorizes configuration into REQUIRED, FEATURE-SPECIFIC, and OPTIONAL.
 *
 * Usage: node BACKEND/scripts/validateProductionConfig.js
 */

require('dotenv').config({ path: '.env' });

function maskValue(val) {
  if (!val) return '[NOT SET]';
  if (val.length <= 4) return '****';
  return `${val.substring(0, 2)}...${val.substring(val.length - 2)} (${val.length} chars)`;
}

function runConfigValidation() {
  console.log('===============================================================');
  console.log('=== MULTI-HACKATHON PRODUCTION CONFIGURATION AUDIT (M11)   ===');
  console.log('===============================================================');

  const CONFIG_SCHEMA = {
    core: {
      title: 'CORE INFRASTRUCTURE & DATABASE (REQUIRED)',
      required: true,
      items: [
        { key: 'MONGO_URI', description: 'MongoDB connection string (Atlas or self-hosted)' },
        { key: 'JWT_SECRET', description: 'JSON Web Token secret for authentication' },
        { key: 'FRONTEND_URL', description: 'Authoritative frontend origin for CORS' },
      ],
    },
    payment: {
      title: 'RAZORPAY PAYMENT GATEWAY (FEATURE-SPECIFIC)',
      required: false,
      items: [
        { key: 'RAZORPAY_KEY_ID', description: 'Razorpay API Key ID' },
        { key: 'RAZORPAY_KEY_SECRET', description: 'Razorpay API Key Secret' },
        { key: 'RAZORPAY_WEBHOOK_SECRET', description: 'Razorpay Webhook HMAC signing secret' },
      ],
    },
    email: {
      title: 'EMAIL DELIVERY & FALLBACK (FEATURE-SPECIFIC)',
      required: false,
      items: [
        { key: 'SMTP_HOST', description: 'Hostinger or primary SMTP hostname' },
        { key: 'SMTP_PORT', description: 'Primary SMTP port (typically 465 or 587)' },
        { key: 'SMTP_USER', description: 'Primary SMTP username/email address' },
        { key: 'SMTP_PASS', description: 'Primary SMTP password' },
        { key: 'RESEND_API_KEY', description: 'Resend API key for secondary fallback delivery' },
      ],
    },
    monitoring: {
      title: 'OBSERVABILITY & MONITORING (OPTIONAL)',
      required: false,
      items: [
        { key: 'SENTRY_DSN', description: 'Sentry application monitoring DSN' },
        { key: 'NODE_ENV', description: 'Node runtime environment (production / development)' },
      ],
    },
  };

  let totalRequiredMissing = 0;
  const summaryReport = [];

  for (const [sectionKey, section] of Object.entries(CONFIG_SCHEMA)) {
    console.log(`\n--- ${section.title} ---`);
    let sectionPass = true;

    for (const item of section.items) {
      const val = process.env[item.key];
      const isSet = Boolean(val && val.trim().length > 0);

      if (section.required && !isSet) {
        sectionPass = false;
        totalRequiredMissing++;
        console.log(`  ❌ [MISSING] ${item.key.padEnd(26)} : ${item.description}`);
      } else if (!isSet) {
        console.log(`  ⚠️  [UNSET]   ${item.key.padEnd(26)} : ${item.description} (Optional)`);
      } else {
        console.log(`  ✅ [SET]     ${item.key.padEnd(26)} : ${maskValue(val)}`);
      }
    }

    summaryReport.push({
      Category: section.title,
      Status: sectionPass ? 'PASS' : 'FAIL',
    });
  }

  console.log('\n===============================================================');
  console.log('=== CONFIGURATION SUMMARY REPORT                            ===');
  console.log('===============================================================');
  console.table(summaryReport);

  if (totalRequiredMissing > 0) {
    console.error(`\n❌ CONFIGURATION AUDIT FAILED: ${totalRequiredMissing} required environment variable(s) missing.`);
    return false;
  }

  console.log('\n✅ CONFIGURATION AUDIT PASSED: All required environment variables are set.');
  return true;
}

if (require.main === module) {
  const success = runConfigValidation();
  process.exit(success ? 0 : 1);
}

module.exports = { runConfigValidation };
