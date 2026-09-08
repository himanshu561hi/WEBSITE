import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import {
  Trophy,
  Plus,
  Search,
  Filter,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Flame,
  Layers,
  Sparkles,
  Edit2,
  Eye,
  Archive,
  Check,
  X,
  Lock,
  Loader2,
  ArrowRight,
  ExternalLink,
  ShieldAlert,
  Globe,
} from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5006";

const STATUS_CONFIG = {
  DRAFT: {
    label: "Draft",
    bg: "bg-slate-100 text-slate-700 border-slate-300",
    dot: "bg-slate-400",
  },
  UPCOMING: {
    label: "Upcoming",
    bg: "bg-blue-100 text-blue-700 border-blue-300",
    dot: "bg-blue-500",
  },
  ACTIVE: {
    label: "Active Now",
    bg: "bg-emerald-100 text-emerald-800 border-emerald-400 font-bold",
    dot: "bg-emerald-500 animate-pulse",
  },
  COMPLETED: {
    label: "Completed",
    bg: "bg-purple-100 text-purple-700 border-purple-300",
    dot: "bg-purple-500",
  },
  ARCHIVED: {
    label: "Archived",
    bg: "bg-gray-100 text-gray-500 border-gray-300",
    dot: "bg-gray-400",
  },
};

export default function HackathonListManager({ onSelectHackathon = null }) {
  const [hackathons, setHackathons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusCounts, setStatusCounts] = useState({
    ALL: 0,
    DRAFT: 0,
    UPCOMING: 0,
    ACTIVE: 0,
    COMPLETED: 0,
    ARCHIVED: 0,
  });
  const [activeHackathon, setActiveHackathon] = useState(null);

  // Modals state
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState(null);
  const [actionLoading, setActionLoading] = useState(false);

  // Conflict modal state
  const [conflictModalData, setConflictModalData] = useState(null);

  // Form state
  const initialForm = {
    name: "",
    slug: "",
    shortDescription: "",
    description: "",
    startDate: "",
    endDate: "",
    registrationStart: "",
    registrationDeadline: "",
    submissionDeadline: "",
    resultDate: "",
    organizerName: "Code-A-Nova",
    participationFee: 0,
    logoUrl: "",
    bannerUrl: "",
  };
  const [formData, setFormData] = useState(initialForm);
  const [slugChecking, setSlugChecking] = useState(false);
  const [slugAvailable, setSlugAvailable] = useState(null);

  const getAdminToken = () => {
    return (
      localStorage.getItem("adminToken") ||
      localStorage.getItem("token") ||
      localStorage.getItem("unifiedToken")
    );
  };

  const fetchHackathons = async () => {
    try {
      setLoading(true);
      const token = getAdminToken();
      let url = `${BACKEND_URL}/api/hackathons?status=${statusFilter}`;
      if (searchQuery.trim()) {
        url += `&search=${encodeURIComponent(searchQuery.trim())}`;
      }

      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data?.success) {
        setHackathons(res.data.items || []);
        setStatusCounts(res.data.statusCounts || statusCounts);
        setActiveHackathon(res.data.activeHackathon || null);
      }
    } catch (err) {
      console.error("fetchHackathons error:", err);
      toast.error(err.response?.data?.message || "Failed to load hackathons.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHackathons();
  }, [statusFilter]);

  // Auto-generate slug from name
  const handleNameChange = (e) => {
    const val = e.target.value;
    setFormData((prev) => {
      const updated = { ...prev, name: val };
      if (!prev.slug || prev.slug === slugify(prev.name)) {
        updated.slug = slugify(val);
      }
      return updated;
    });
  };

  const slugify = (text) => {
    return text
      .toString()
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");
  };

  // Check slug availability on blur or manual trigger
  const handleCheckSlug = async (slugVal) => {
    if (!slugVal || slugVal.length < 3) {
      setSlugAvailable(null);
      return;
    }
    try {
      setSlugChecking(true);
      const token = getAdminToken();
      const exclude = selectedHackathon?.hackathonId ? `?exclude=${selectedHackathon.hackathonId}` : "";
      const res = await axios.get(`${BACKEND_URL}/api/hackathons/check-slug/${encodeURIComponent(slugVal)}${exclude}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSlugAvailable(res.data?.available);
    } catch (err) {
      setSlugAvailable(false);
    } finally {
      setSlugChecking(false);
    }
  };

  // Submit Create Hackathon
  const handleCreateSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.slug.trim()) {
      toast.error("Name and Slug are required.");
      return;
    }

    try {
      setActionLoading(true);
      const token = getAdminToken();
      const res = await axios.post(`${BACKEND_URL}/api/hackathons`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data?.success) {
        toast.success(`Hackathon created successfully! Status: ${res.data.status}`);
        setShowCreateModal(false);
        setFormData(initialForm);
        fetchHackathons();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create hackathon.");
    } finally {
      setActionLoading(false);
    }
  };

  // Submit Edit Hackathon
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    if (!selectedHackathon) return;

    try {
      setActionLoading(true);
      const token = getAdminToken();
      const res = await axios.patch(
        `${BACKEND_URL}/api/hackathons/${selectedHackathon.hackathonId}`,
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (res.data?.success) {
        toast.success("Hackathon updated successfully.");
        setShowEditModal(false);
        setSelectedHackathon(null);
        fetchHackathons();
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update hackathon.");
    } finally {
      setActionLoading(false);
    }
  };

  // Open Edit Modal
  const openEditModal = (hackathon) => {
    setSelectedHackathon(hackathon);
    setFormData({
      name: hackathon.name || "",
      slug: hackathon.slug || "",
      shortDescription: hackathon.shortDescription || "",
      description: hackathon.description || "",
      startDate: hackathon.startDate ? hackathon.startDate.split("T")[0] : "",
      endDate: hackathon.endDate ? hackathon.endDate.split("T")[0] : "",
      registrationStart: hackathon.registrationStart ? hackathon.registrationStart.split("T")[0] : "",
      registrationDeadline: hackathon.registrationDeadline ? hackathon.registrationDeadline.split("T")[0] : "",
      submissionDeadline: hackathon.submissionDeadline ? hackathon.submissionDeadline.split("T")[0] : "",
      resultDate: hackathon.resultDate ? hackathon.resultDate.split("T")[0] : "",
      organizerName: hackathon.organizerName || "Code-A-Nova",
      participationFee: hackathon.settingsRef?.participationFee || 0,
      logoUrl: hackathon.logoUrl || "",
      bannerUrl: hackathon.bannerUrl || "",
    });
    setSlugAvailable(null);
    setShowEditModal(true);
  };

  // Lifecycle Transitions
  const handleTransition = async (hackathonId, action) => {
    try {
      setActionLoading(true);
      const token = getAdminToken();
      const res = await axios.post(`${BACKEND_URL}/api/hackathons/${hackathonId}/${action}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data?.success) {
        toast.success(res.data.message || `Status updated.`);
        fetchHackathons();
      }
    } catch (err) {
      if (err.response?.status === 409 && err.response?.data?.code === "ACTIVE_HACKATHON_CONFLICT") {
        setConflictModalData({
          message: err.response.data.message,
          activeHackathon: err.response.data.activeHackathon,
          targetHackathonId: hackathonId,
        });
      } else {
        toast.error(err.response?.data?.message || `Failed to transition hackathon status.`);
      }
    } finally {
      setActionLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* ── Active Hackathon Banner (UX Rule: Clear Active Visibility) ── */}
      {activeHackathon ? (
        <div className="relative overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-indigo-950 rounded-2xl p-6 border border-emerald-500/40 shadow-xl">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <Trophy className="w-48 h-48 text-emerald-400" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-black tracking-wider uppercase mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                ACTIVE NOW ON CODE-A-NOVA
              </div>
              <h2 className="text-2xl font-black text-white">{activeHackathon.name}</h2>
              <p className="text-xs text-slate-300 mt-1 flex items-center gap-3">
                <span>Slug: <code className="text-emerald-300 font-mono">/hackathon/{activeHackathon.slug}</code></span>
                <span>ID: <code className="text-indigo-300 font-mono">{activeHackathon.hackathonId}</code></span>
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={`/hackathon`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-lg"
              >
                <Globe className="w-3.5 h-3.5" /> View Live Portal
              </a>
              <button
                onClick={() => handleTransition(activeHackathon.hackathonId, "complete")}
                disabled={actionLoading}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold rounded-xl transition flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5" /> Mark Completed
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <div>
              <h4 className="text-sm font-bold text-amber-900">No Hackathon is Currently Active</h4>
              <p className="text-xs text-amber-700">The public portal will show an upcoming / inactive state until a hackathon is activated.</p>
            </div>
          </div>
        </div>
      )}

      {/* ── Control Header: Search, Filters & Create ── */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Status Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {["ALL", "DRAFT", "UPCOMING", "ACTIVE", "COMPLETED", "ARCHIVED"].map((status) => {
            const count = statusCounts[status] || 0;
            const isSelected = statusFilter === status;
            return (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span>{status === "ALL" ? "All Hackathons" : STATUS_CONFIG[status]?.label || status}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-700"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search & Create Button */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by name, slug, ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && fetchHackathons()}
              className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
            />
          </div>
          <button
            onClick={() => {
              setFormData(initialForm);
              setSlugAvailable(null);
              setShowCreateModal(true);
            }}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-sm whitespace-nowrap cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Create Hackathon
          </button>
        </div>
      </div>

      {/* ── Hackathons Directory ── */}
      {loading ? (
        <div className="p-16 flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-200">
          <Loader2 className="w-8 h-8 text-indigo-600 animate-spin mb-2" />
          <p className="text-xs text-slate-500 font-medium">Loading hackathons directory...</p>
        </div>
      ) : hackathons.length === 0 ? (
        <div className="p-16 text-center bg-white rounded-2xl border border-slate-200">
          <Trophy className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-slate-700">No hackathons found</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            {searchQuery ? `No results matching "${searchQuery}".` : `No hackathons match the selected filter.`}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {hackathons.map((h) => {
            const statusStyle = STATUS_CONFIG[h.status] || STATUS_CONFIG.DRAFT;
            const isCurrActive = h.status === "ACTIVE";

            return (
              <div
                key={h._id}
                className={`bg-white rounded-2xl p-5 border transition-all ${
                  isCurrActive
                    ? "border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                    : "border-slate-200 hover:border-slate-300 shadow-sm"
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
                  {/* Left Metadata */}
                  <div className="space-y-1.5 flex-1">
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold border ${statusStyle.bg}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                        {statusStyle.label}
                      </span>
                      <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {h.hackathonId}
                      </span>
                      <span className="text-xs text-slate-400">
                        Organized by <strong className="text-slate-600">{h.organizerName || "Code-A-Nova"}</strong>
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                      {h.name}
                      {isCurrActive && <Flame className="w-4 h-4 text-emerald-600 fill-emerald-600" />}
                    </h3>

                    {h.shortDescription && (
                      <p className="text-xs text-slate-600 line-clamp-1">{h.shortDescription}</p>
                    )}

                    {/* Timeline Grid */}
                    <div className="pt-2 flex items-center gap-4 text-xs text-slate-500 flex-wrap">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                        <strong>Event:</strong> {h.startDate ? new Date(h.startDate).toLocaleDateString() : "TBD"} – {h.endDate ? new Date(h.endDate).toLocaleDateString() : "TBD"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-amber-500" />
                        <strong>Registration:</strong> {h.registrationDeadline ? new Date(h.registrationDeadline).toLocaleDateString() : "TBD"}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                        <strong>Slug:</strong> <code className="text-indigo-600">/{h.slug}</code>
                      </span>
                    </div>
                  </div>

                  {/* Right Actions Bar (Strict Lifecycle Rules) */}
                  <div className="flex items-center gap-2 flex-wrap self-end lg:self-center">
                    {/* DRAFT ACTIONS */}
                    {h.status === "DRAFT" && (
                      <>
                        <button
                          onClick={() => openEditModal(h)}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button
                          onClick={() => handleTransition(h.hackathonId, "upcoming")}
                          disabled={actionLoading}
                          className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                        >
                          <Calendar className="w-3.5 h-3.5" /> Mark Upcoming
                        </button>
                        <button
                          onClick={() => handleTransition(h.hackathonId, "activate")}
                          disabled={actionLoading}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1 shadow-sm cursor-pointer"
                        >
                          <Flame className="w-3.5 h-3.5" /> Activate
                        </button>
                      </>
                    )}

                    {/* UPCOMING ACTIONS */}
                    {h.status === "UPCOMING" && (
                      <>
                        <button
                          onClick={() => openEditModal(h)}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                        >
                          <Edit2 className="w-3.5 h-3.5" /> Edit
                        </button>
                        <button
                          onClick={() => handleTransition(h.hackathonId, "activate")}
                          disabled={actionLoading}
                          className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1 shadow-sm cursor-pointer"
                        >
                          <Flame className="w-3.5 h-3.5" /> Activate
                        </button>
                      </>
                    )}

                    {/* ACTIVE ACTIONS */}
                    {h.status === "ACTIVE" && (
                      <>
                        <button
                          onClick={() => handleTransition(h.hackathonId, "complete")}
                          disabled={actionLoading}
                          className="px-3 py-1.5 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5" /> Complete
                        </button>
                      </>
                    )}

                    {/* COMPLETED ACTIONS */}
                    {h.status === "COMPLETED" && (
                      <>
                        <button
                          onClick={() => handleTransition(h.hackathonId, "archive")}
                          disabled={actionLoading}
                          className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition flex items-center gap-1 cursor-pointer"
                        >
                          <Archive className="w-3.5 h-3.5" /> Archive
                        </button>
                      </>
                    )}

                    {/* ARCHIVED ACTIONS */}
                    {h.status === "ARCHIVED" && (
                      <span className="text-xs text-slate-400 font-semibold px-2 py-1 bg-slate-100 rounded-lg">
                        Read-only Archived
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ── CREATE HACKATHON MODAL ── */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-black">
                  <Plus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-slate-900">Create New Hackathon</h3>
                  <p className="text-xs text-slate-500">Initializes a new isolated event. Status starts as DRAFT.</p>
                </div>
              </div>
              <button
                onClick={() => setShowCreateModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Hackathon Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. AI Innovation Sprint 2027"
                    value={formData.name}
                    onChange={handleNameChange}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    URL Slug <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. ai-innovation-2027"
                      value={formData.slug}
                      onChange={(e) => {
                        setFormData({ ...formData, slug: slugify(e.target.value) });
                        setSlugAvailable(null);
                      }}
                      onBlur={() => handleCheckSlug(formData.slug)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 pr-8 font-mono"
                    />
                    <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
                      {slugChecking ? (
                        <Loader2 className="w-3.5 h-3.5 text-slate-400 animate-spin" />
                      ) : slugAvailable === true ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : slugAvailable === false ? (
                        <X className="w-3.5 h-3.5 text-rose-600" />
                      ) : null}
                    </div>
                  </div>
                  {slugAvailable === false && (
                    <p className="text-[10px] text-rose-600 mt-0.5">Slug already taken or reserved.</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Short Description / Tagline</label>
                <input
                  type="text"
                  placeholder="e.g. Build cutting-edge GenAI applications in 48 hours"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                />
              </div>

              {/* Dates Grid */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Timelines & Milestones</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Registration Start</label>
                    <input
                      type="date"
                      value={formData.registrationStart}
                      onChange={(e) => setFormData({ ...formData, registrationStart: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Registration Deadline</label>
                    <input
                      type="date"
                      value={formData.registrationDeadline}
                      onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Hackathon Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Hackathon End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Optional Branding */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Organizer Name</label>
                  <input
                    type="text"
                    value={formData.organizerName}
                    onChange={(e) => setFormData({ ...formData, organizerName: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Participation Fee (₹ INR)</label>
                  <input
                    type="number"
                    min="0"
                    value={formData.participationFee}
                    onChange={(e) => setFormData({ ...formData, participationFee: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">New hackathon will be created with status: <strong>DRAFT</strong></span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={actionLoading}
                    className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    {actionLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                    Create Hackathon
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── EDIT HACKATHON MODAL ── */}
      {showEditModal && selectedHackathon && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-100 my-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
              <div>
                <h3 className="text-base font-black text-slate-900">Edit Hackathon</h3>
                <p className="text-xs text-slate-500">
                  Editing: <code className="text-indigo-600 font-mono font-bold">{selectedHackathon.hackathonId}</code> (Status: {selectedHackathon.status})
                </p>
              </div>
              <button
                onClick={() => setShowEditModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleEditSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Hackathon Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                    <span>URL Slug</span>
                    {["ACTIVE", "COMPLETED", "ARCHIVED"].includes(selectedHackathon.status) && (
                      <span className="text-[10px] text-amber-600 flex items-center gap-1 font-semibold">
                        <Lock className="w-3 h-3" /> Locked post-publication
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    required
                    disabled={["ACTIVE", "COMPLETED", "ARCHIVED"].includes(selectedHackathon.status)}
                    value={formData.slug}
                    onChange={(e) => setFormData({ ...formData, slug: slugify(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Short Description</label>
                <input
                  type="text"
                  value={formData.shortDescription}
                  onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium"
                />
              </div>

              {/* Timelines */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-3">
                <h4 className="text-xs font-black text-slate-800 uppercase tracking-wider">Timelines & Milestones</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Registration Deadline</label>
                    <input
                      type="date"
                      value={formData.registrationDeadline}
                      onChange={(e) => setFormData({ ...formData, registrationDeadline: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Submission Deadline</label>
                    <input
                      type="date"
                      value={formData.submissionDeadline}
                      onChange={(e) => setFormData({ ...formData, submissionDeadline: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Hackathon Start Date</label>
                    <input
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 mb-1">Hackathon End Date</label>
                    <input
                      type="date"
                      value={formData.endDate}
                      onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowEditModal(false)}
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={actionLoading}
                  className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition flex items-center gap-2 shadow-sm cursor-pointer"
                >
                  {actionLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── ACTIVE HACKATHON CONFLICT MODAL (UX Rule 17) ── */}
      {conflictModalData && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-rose-100 text-center">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto mb-3">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-base font-black text-slate-900 mb-1">Activation Blocked</h3>
            <p className="text-xs text-rose-600 font-bold mb-3">
              {conflictModalData.activeHackathon?.name || "Another hackathon"} is currently active.
            </p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs text-slate-600 text-left mb-5">
              <p className="font-semibold mb-1">Platform Invariant: Maximum 1 Active Hackathon</p>
              <p className="text-[11px] text-slate-500">
                To activate this hackathon, you must first mark the current active hackathon (
                <strong className="text-slate-800">{conflictModalData.activeHackathon?.name}</strong>) as Completed or Archived.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => setConflictModalData(null)}
                className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition cursor-pointer"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
