// api/index.js
const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const app = express();

// Hardened CORS: Restricts origins in production while allowing local development and authorized origins
const allowedOrigins = [
  process.env.FRONTEND_URL,
  process.env.CLIENT_URL,
  'https://www.codeanova.com',
  'https://codeanova.com',
  'https://code-a-nova.online',
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'http://127.0.0.1:3000',
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Allow non-browser requests (e.g. server-to-server, curl, tests without origin)
    if (!origin) return callback(null, true);
    if (process.env.NODE_ENV !== 'production' || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked: Origin ${origin} is not allowed.`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'x-hackathon-id', 'x-request-id', 'x-razorpay-signature'],
}));

// Request Correlation ID (X-Request-ID)
app.use((req, res, next) => {
  const incoming = req.headers['x-request-id'] || req.headers['x-correlation-id'];
  const sanitizedId = typeof incoming === 'string' && incoming.length <= 128 && /^[a-zA-Z0-9_-]+$/.test(incoming)
    ? incoming
    : `can-${Date.now()}-${crypto.randomBytes(4).toString('hex')}`;
  req.id = sanitizedId;
  res.setHeader('X-Request-ID', sanitizedId);
  next();
});

try {
  const mongoose = require("mongoose");
  const helmet = require("helmet");
  const rateLimit = require("express-rate-limit");
  const auditLogger = require("./utils/auditLogger");
  require("dotenv").config();
const { validateEnv } = require('./utils/envValidator');
validateEnv(); // Fail fast if missing required environment variables

let Sentry = null;
try {
  Sentry = require("@sentry/node");
} catch (e) {
  console.warn("Sentry module not available:", e.message);
}

const registerRoutes = require("./routes/register");
const adminRoutes = require("./routes/admin");
const auth = require("./middleware/auth");
const verifyRoutes = require("./routes/verify");
const projectRoutes = require("./routes/project");
const authRoutes = require("./routes/auth");
const studentRoutes = require("./routes/student");
const cronRoutes = require("./routes/cron");
const contactRoutes = require("./routes/contact");
const interviewAuthRoutes = require("./routes/interviewAuth");
const interviewSessionRoutes = require("./routes/interviewSession");
const interviewPaymentRoutes = require("./routes/interviewPayment");
const resumeRoutes = require("./routes/resume");
const adminResumeRoutes = require("./routes/adminResume");
const jobRoutes = require("./routes/jobs");
const otpRoutes = require("./routes/otp");
const mailRoutes = require("./routes/mail");
const emailLogRoutes = require("./routes/emailLogs");
const interviewConfigRoutes = require("./routes/interviewConfigRoutes");
const InterviewConfigInitializer = require("./initializers/InterviewConfigInitializer");
// ── Assessment Module Routes (Phase 1+) ──────────────────────────────────────
const adminAssessmentRoutes   = require("./routes/assessment/adminAssessment");
const studentAssessmentRoutes = require("./routes/assessment/studentAssessment");
const publicAssessmentRoutes  = require("./routes/assessment/publicAssessment");
const auditLogRoutes = require("./routes/auditLogRoutes");
const hackathonRoutes         = require("./routes/hackathon");
const hackathonManagementRoutes = require("./routes/hackathonManagementRoutes");
require("./scripts/v2NotificationsCron");

// Global cached connection (very important for serverless!)
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) return cachedDb;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      maxPoolSize: 10, // Tuned for Vercel Serverless
      minPoolSize: 1,  // Allow connections to scale to 0 when idle
      socketTimeoutMS: 20000,
    });
    cachedDb = db;
    console.log("MongoDB connected (cached)");
    
    // Seed default interview configurations if none exist
    await InterviewConfigInitializer.seedDefaultConfigs();

    // Phase 15 Assessment module compound database index optimization (non-blocking background sync)
    try {
      const AssessmentIndexOptimizer = require("./initializers/AssessmentIndexOptimizer");
      AssessmentIndexOptimizer.optimizeIndexes().catch(() => {});
    } catch(idxErr) {
      console.warn("AssessmentIndexOptimizer note:", idxErr.message);
    }

    return db;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

// Create Express app (already instantiated at top-level for safe boot diagnostics)

// Sentry Initialization
if (Sentry && process.env.SENTRY_DSN) {
  try {
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
    });
    app.use(Sentry.Handlers.requestHandler());
    app.use(Sentry.Handlers.tracingHandler());
  } catch (initErr) {
    console.warn("Sentry init failed:", initErr.message);
  }
}

// Security Headers
app.use(helmet({
  contentSecurityPolicy: false, // Managed by reverse proxy/frontend to avoid breaking Razorpay checkout
  crossOriginOpenerPolicy: { policy: "same-origin-allow-popups" },
  crossOriginResourcePolicy: { policy: "cross-origin" },
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true,
  },
  noSniff: true,
  xssFilter: true,
  frameguard: { action: 'sameorigin' }
}));
app.disable('x-powered-by');

app.set('trust proxy', 1);

// CORS configured at top-level before try/catch block
app.use(express.json({
  limit: '50mb',
  verify: (req, res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Rate Limiting Config
const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 1000,
  message: { success: false, message: 'Too many requests, please try again later.' }
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50,
  message: { success: false, message: 'Too many authentication attempts, please try again later.' }
});

const interviewLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 1000,
  message: { success: false, message: 'Too many interview requests, please try again later.' }
});

// Apply General Rate Limiter globally
app.use(generalLimiter);

// Connect DB before routes (but Vercel runs per request → we connect lazily)
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    res.status(500).json({ message: "Database connection failed" });
  }
});

// Routes
app.use("/api/register", authLimiter, registerRoutes);
app.use("/api/auth", authLimiter, authRoutes);
app.use("/api/interview-auth", authLimiter, interviewAuthRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/project", projectRoutes);
app.use("/api/student", studentRoutes);
app.use("/api/cron", cronRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/interview-session", interviewLimiter, interviewSessionRoutes);
app.use("/api/interview-payment", interviewPaymentRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/admin/resume", adminResumeRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/otp", otpRoutes);
app.use("/api/email", mailRoutes);
app.use("/api/email", emailLogRoutes);
app.use("/api/interview-config", interviewConfigRoutes);
// ── Assessment Module ─────────────────────────────────────────────────────────
app.use("/api/admin/assessment", auth, adminAssessmentRoutes);
app.use("/api/assessment",       studentAssessmentRoutes);
app.use("/api/public/assessment",publicAssessmentRoutes);
app.use("/api/admin/audit-logs", auditLogRoutes);
app.use("/api/hackathon", hackathonRoutes);
app.use("/api/hackathons", hackathonManagementRoutes);

// Production Health Endpoint
app.get("/healthz", async (req, res) => {
  const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    environment: process.env.NODE_ENV || 'development',
    nodeVersion: process.version,
    mongodb: dbStatus
  });
});

app.get("/", (req, res) => {
  res.send("API is running on Vercel...");
});

// Sentry Error Handler (must be before any other error middleware)
if (Sentry && Sentry.Handlers && process.env.SENTRY_DSN) {
  app.use(Sentry.Handlers.errorHandler());
}

// Global Production Error Handling Middleware (Safe response without leaking internal stack traces or secrets)
app.use((err, req, res, next) => {
  const statusCode = err.status || err.statusCode || 500;
  console.error(`[GlobalError] [${req.id || 'N/A'}] ${req.method} ${req.originalUrl}:`, err.message || err);

  if (err.name === 'UnauthorizedError' || statusCode === 401) {
    return res.status(401).json({ success: false, message: err.message || 'Authentication required' });
  }

  if (statusCode === 403) {
    return res.status(403).json({ success: false, message: err.message || 'Forbidden' });
  }

  res.status(statusCode).json({
    success: false,
    message: process.env.NODE_ENV === 'production' && statusCode === 500
      ? 'An unexpected internal server error occurred.'
      : (err.message || 'Internal server error'),
    requestId: req.id || undefined,
  });
});

// Initialize WhatsApp Web JS Client (Delegated to external microservice)
const { initializeWhatsApp, queueWhatsAppMessage } = require('./utils/whatsappClient');
try {
  initializeWhatsApp();
} catch (error) {
  console.error("Failed to initialize WhatsApp delegation:", error);
}


  // Test WhatsApp Endpoint (Remove in production)
  app.post("/api/test-wa", (req, res) => {
    const { phone, message } = req.body;
    if (!phone || !message) return res.status(400).json({ error: "Missing phone or message" });
    queueWhatsAppMessage(phone, message);
    res.json({ success: true, message: "Message added to queue!" });
  });
} catch (bootError) {
  console.error("CRITICAL FATAL BOOT ERROR DURING INDEX.JS REQUIRE:", bootError.stack || bootError);
  app.use((req, res) => {
    res.status(500).json({
      error: "STARTUP_INVOCATION_FAILED",
      message: bootError.message,
      stack: bootError.stack || String(bootError),
    });
  });
}

// Export for Vercel serverless
if (require.main === module || !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
