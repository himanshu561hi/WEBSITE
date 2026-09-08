import { useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

// Immediate static imports for critical home & layout elements
import Home from "./Pages/Home";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./Components/ProtectedRoute";
import FeatureBanner from "./Components/FeatureBanner";
import RouteTracker from "./Components/RouteTracker";
import ReferralTracker from "./Components/ReferralTracker";
import PageLoader from "./Components/PageLoader";
import { InterviewConfigProvider } from "./context/InterviewConfigContext";
import { HackathonProvider } from "./context/HackathonContext";

// ── Lazy-loaded Routes (Code-Splitting for Monolithic Bundle Elimination) ──
const Contact = lazy(() => import("./Pages/Contact"));
const About = lazy(() => import("./Pages/About"));
const Service = lazy(() => import("./Pages/Services"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));
const Projects = lazy(() => import("./Pages/Projects"));
const Industries = lazy(() => import("./Pages/Industries"));
const IndustryDetail = lazy(() => import("./Pages/IndustryDetail"));
const Privacy = lazy(() => import("./Pages/Privacy"));
const Term = lazy(() => import("./Pages/Term"));
const Refund = lazy(() => import("./Pages/Refund"));
const Resources = lazy(() => import("./Pages/Resources"));
const ResourceDetail = lazy(() => import("./Pages/ResourceDetail"));
const NotFound = lazy(() => import("./Pages/NotFound"));
const PublicAssessments = lazy(() => import("./Pages/PublicAssessments"));
const PublicResumeBuilder = lazy(() => import("./Pages/PublicResumeBuilder"));
const PublicMockInterview = lazy(() => import("./Pages/PublicMockInterview"));
const UnifiedDashboard = lazy(() => import("./Pages/UnifiedDashboard"));
const MyResumes = lazy(() => import("./Pages/MyResumes"));
const MyInterviews = lazy(() => import("./Pages/MyInterviews"));
const StudentCertificatesPage = lazy(() => import("./Pages/StudentCertificatesPage"));
const StudentQuizzesPage = lazy(() => import("./Pages/StudentQuizzesPage"));
const MyProfile = lazy(() => import("./Pages/MyProfile"));
const ResumeBuilder = lazy(() => import("./Pages/ResumeBuilder/ResumeBuilder"));
const Jobs = lazy(() => import("./Pages/Jobs"));
const JobDetail = lazy(() => import("./Pages/JobDetail"));
const SavedJobs = lazy(() => import("./Pages/SavedJobs"));
const Registration = lazy(() => import("./Components/Registration"));
const SetupPassword = lazy(() => import("./Components/SetupPassword"));
const AdminLogin = lazy(() => import("./Components/AdminLogin"));
const AdminDashboard = lazy(() => import("./Components/AdminDashboard"));
const Verify = lazy(() => import("./Components/Verify"));
const Project = lazy(() => import("./Components/Project"));
const Leaderboard = lazy(() => import("./Components/Leaderboard"));
const InterviewLogin = lazy(() => import("./Pages/InterviewPortal/InterviewLogin"));
const InterviewSetup = lazy(() => import("./Pages/InterviewPortal/InterviewSetup"));
const InterviewActive = lazy(() => import("./Pages/InterviewPortal/InterviewActive"));
const PanelInterviewActive = lazy(() => import("./Pages/InterviewPortal/PanelInterviewActive"));
const CampusAmbassadorApply = lazy(() => import("./Pages/CampusAmbassadorApply"));
const PublicVerificationPage = lazy(() => import("./Admin/Assessment/PublicVerificationPage"));
const AssessmentTerminal = lazy(() => import("./Pages/AssessmentPortal/AssessmentTerminal"));
const HackathonPortal = lazy(() => import("./Pages/Hackathon/HackathonPortal"));
const PublicResultsPage = lazy(() => import("./Pages/Hackathon/PublicResultsPage"));
const PublicCertificateVerificationPage = lazy(() => import("./Pages/Hackathon/PublicCertificateVerificationPage"));
const EditorialLogin = lazy(() => import("./Pages/Hackathon/Editorial/EditorialLogin"));
const EditorialDashboard = lazy(() => import("./Pages/Hackathon/Editorial/EditorialDashboard"));

const UnifiedLayout = () => (
  <MainLayout>
    <Outlet />
  </MainLayout>
);

const ScopedInterviewLayout = ({ children }) => (
  <InterviewConfigProvider>
    {children || <Outlet />}
  </InterviewConfigProvider>
);

function App() {
  useEffect(() => {
    // Only track once per session and skip admins
    const isAdmin = localStorage.getItem('adminToken') !== null;
    if (!isAdmin && !sessionStorage.getItem('site_visited')) {
      const email = localStorage.getItem("userEmail") || 
                    localStorage.getItem("studentEmail") || 
                    (localStorage.getItem('interviewUserData') ? JSON.parse(localStorage.getItem('interviewUserData')).email : null) ||
                    (localStorage.getItem('studentData') ? JSON.parse(localStorage.getItem('studentData')).email : null);

      const sendNewVisitor = () => {
        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/admin/audit-logs/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'NEW_VISITOR', details: { userEmail: email } })
        }).catch(err => console.error("Tracking error", err));
      };

      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        window.requestIdleCallback(sendNewVisitor);
      } else {
        setTimeout(sendNewVisitor, 1500);
      }
      sessionStorage.setItem('site_visited', 'true');
    }
  }, []);

  return (
    <Router>
      <RouteTracker />
      <ReferralTracker />
      <Toaster position="top-right" containerStyle={{ top: 80 }} />
      <FeatureBanner />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* New Marketing Pages (Navbar & Footer handled by MainLayout internally) */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
          <Route path="/saved-jobs" element={
            <ProtectedRoute>
              <SavedJobs />
            </ProtectedRoute>
          } />
          <Route
            path="/registration"
            element={
              <MainLayout>
                <Registration />
              </MainLayout>
            }
          />
          <Route
            path="/internship"
            element={
              <MainLayout>
                <Registration />
              </MainLayout>
            }
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route
            path="/campus-ambassador"
            element={
              <MainLayout>
                <CampusAmbassadorApply />
              </MainLayout>
            }
          />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/:slug" element={<ResourceDetail />} />
          <Route path="/assessments" element={<PublicAssessments />} />
          
          {/* Phase 8: Hackathon Certificate Verification */}
          <Route path="/hackathon/certificate/verify/:verificationCode" element={<PublicCertificateVerificationPage />} />
          <Route path="/hackathon/certificate/verify" element={<PublicCertificateVerificationPage />} />
          <Route path="/hackathon/verify/:verificationCode" element={<PublicCertificateVerificationPage />} />
          <Route path="/hackathon/verify" element={<PublicCertificateVerificationPage />} />

          {/* Phase 7: Hackathon Public Results & Leaderboard */}
          <Route path="/hackathon/results" element={<PublicResultsPage />} />
          <Route path="/results" element={<Navigate to="/hackathon/results" replace />} />

          {/* Phase 6: Hackathon Editorial / Judge Portal */}
          <Route path="/editorial-login" element={<Navigate to="/editorial/login" replace />} />
          <Route path="/editorial/login" element={<EditorialLogin />} />
          <Route path="/editorial" element={<EditorialDashboard />} />
          <Route path="/hackathon/editorial/login" element={<EditorialLogin />} />
          <Route path="/hackathon/editorial" element={<EditorialDashboard />} />

          <Route path="/hackathon" element={<HackathonProvider><HackathonPortal /></HackathonProvider>} />
          <Route path="/hackathon/:slug" element={<HackathonProvider><HackathonPortal /></HackathonProvider>} />
          <Route path="/resume-builder" element={<PublicResumeBuilder />} />
          <Route path="/mock-interview" element={<PublicMockInterview />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
          <Route path="/refund-policy" element={<Refund />} />
          <Route path="/refund" element={<Navigate to="/refund-policy" replace />} />
          <Route path="/terms" element={<Term />} />
          <Route path="/terms-of-service" element={<Navigate to="/terms" replace />} />
          <Route path="/terms-and-conditions" element={<Navigate to="/terms" replace />} />

          {/* Admin Pages (No site navbar/footer — they have their own header) */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<ScopedInterviewLayout><AdminDashboard /></ScopedInterviewLayout>} />

          {/* Assessment Terminal (Phase 9) full screen */}
          <Route path="/assessment-terminal/:sessionId" element={<AssessmentTerminal />} />
          
          {/* Standalone full-screen pages without standard website navbar */}
          <Route path="/resume-builder/:id" element={<ResumeBuilder />} />
          <Route path="/verify/:certificateId" element={<PublicVerificationPage />} />

          {/* Interview-Specific Routes wrapped in ScopedInterviewLayout (Zero global polling on non-interview pages) */}
          <Route element={<ScopedInterviewLayout />}>
            <Route path="/interview-setup" element={<InterviewSetup />} />
            <Route path="/interview-active/:sessionId" element={<InterviewActive />} />
            <Route path="/panel-interview-active/:sessionId" element={<PanelInterviewActive />} />
          </Route>

          {/* Unified Layout Functional Pages */}
          <Route element={<UnifiedLayout />}>
            <Route path="/dashboard" element={<UnifiedDashboard />} />
            <Route path="/dashboard/assessment/*" element={<UnifiedDashboard />} />
            <Route path="/dashboard/assessment" element={<UnifiedDashboard />} />

            <Route path="/student-assessment" element={<Navigate to="/dashboard/assessment" replace />} />
            <Route path="/student-portal" element={<Navigate to="/dashboard/assessment" replace />} />
            <Route path="/student/dashboard/assessment" element={<Navigate to="/dashboard/assessment" replace />} />

            <Route path="/student-login" element={<InterviewLogin />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/setup-password" element={<SetupPassword />} />
            <Route path="/project-submission" element={<Project />} />
            <Route path="/my-resumes" element={<ProtectedRoute><MyResumes /></ProtectedRoute>} />
            <Route path="/my-interviews" element={<ProtectedRoute><ScopedInterviewLayout><MyInterviews /></ScopedInterviewLayout></ProtectedRoute>} />
            <Route path="/my-certificates" element={<ProtectedRoute><StudentCertificatesPage /></ProtectedRoute>} />
            <Route path="/my-quizzes" element={<ProtectedRoute><StudentQuizzesPage /></ProtectedRoute>} />
            <Route path="/verify" element={<Verify />} />
          </Route>

          {/* Catch-all 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
