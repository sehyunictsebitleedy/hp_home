"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
<<<<<<< HEAD
import { LocalProduct, ContactInfo, LocalProject, HistoryItem } from "@/types";

const emptyProduct = { name: "", description: "", image: "", pdfUrl: "", featured: false };

const emptyContact: ContactInfo = {
  placeName: "", address: "", lat: 0, lng: 0,
  phone: "", fax: "", email: "", hours: "",
};

const emptyProject = {
  year: new Date().getFullYear().toString(),
  title: "", category: "", client: "", description: "", image: "", featured: false,
};

const emptyHistory = { year: "", events: [""] };

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"products" | "projects" | "history" | "contact">("products");
=======
import { LocalProduct, LocalProject } from "@/types";

// ─────────────────────────────────────
// 제품 관리 패널
// ─────────────────────────────────────
const emptyProduct = { name: "", description: "", image: "", pdfUrl: "", featured: false };

function ProductPanel() {
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128

  // ── 제품 ──
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [productForm, setProductForm] = useState(emptyProduct);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [productSaving, setProductSaving] = useState(false);

  // ── 프로젝트 ──
  const [projects, setProjects] = useState<LocalProject[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectForm, setProjectForm] = useState(emptyProject);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [projectSaving, setProjectSaving] = useState(false);
  const [filterYear, setFilterYear] = useState<string>("all");

  // ── 연혁 ──
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loadingHistory, setLoadingHistory] = useState(true);
  const [historyForm, setHistoryForm] = useState(emptyHistory);
  const [editingHistoryId, setEditingHistoryId] = useState<string | null>(null);
  const [showHistoryForm, setShowHistoryForm] = useState(false);
  const [historySaving, setHistorySaving] = useState(false);
  const [historyError, setHistoryError] = useState("");

  // ── 위치 ──
  const [contact, setContact] = useState<ContactInfo>(emptyContact);
  const [loadingContact, setLoadingContact] = useState(true);
  const [contactSaving, setContactSaving] = useState(false);
  const [contactSaved, setContactSaved] = useState(false);

  // ── 데이터 로드 ──
  async function fetchProducts() {
    const res = await fetch("/api/admin/products");
    setProducts(await res.json());
    setLoadingProducts(false);
  }
  async function fetchProjects() {
    const res = await fetch("/api/admin/projects");
    setProjects(await res.json());
    setLoadingProjects(false);
  }
  async function fetchHistory() {
    const res = await fetch("/api/admin/history");
    setHistory(await res.json());
    setLoadingHistory(false);
  }
  async function fetchContact() {
    const res = await fetch("/api/admin/contact");
    setContact(await res.json());
    setLoadingContact(false);
  }
  useEffect(() => { fetchProducts(); }, []);

<<<<<<< HEAD
  useEffect(() => {
    fetchProducts();
    fetchProjects();
    fetchHistory();
    fetchContact();
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  // ── 제품 CRUD ──
  function openAddProduct() { setProductForm(emptyProduct); setEditingProductId(null); setShowProductForm(true); }
  function openEditProduct(p: LocalProduct) {
    setProductForm({ name: p.name, description: p.description, image: p.image || "", pdfUrl: p.pdfUrl || "", featured: p.featured });
    setEditingProductId(p.id); setShowProductForm(true);
  }
  function cancelProductForm() { setShowProductForm(false); setEditingProductId(null); setProductForm(emptyProduct); }
  async function handleProductSave(e: React.SyntheticEvent) {
    e.preventDefault(); setProductSaving(true);
    if (editingProductId) {
      await fetch(`/api/admin/products/${editingProductId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(productForm) });
    } else {
      await fetch("/api/admin/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(productForm) });
    }
    await fetchProducts(); cancelProductForm(); setProductSaving(false);
=======
  function openAdd() { setForm(emptyProduct); setEditingId(null); setShowForm(true); }
  function openEdit(p: LocalProduct) {
    setForm({ name: p.name, description: p.description, image: p.image || "", pdfUrl: p.pdfUrl || "", featured: p.featured });
    setEditingId(p.id); setShowForm(true);
  }
  function cancelForm() { setShowForm(false); setEditingId(null); setForm(emptyProduct); }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true);
    if (editingId) {
      await fetch(`/api/admin/products/${editingId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/products", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    await fetchProducts(); cancelForm(); setSaving(false);
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
  }
  async function handleProductDelete(id: string, name: string) {
    if (!confirm(`"${name}" 을(를) 삭제하시겠습니까?`)) return;
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" }); await fetchProducts();
  }

  // ── 프로젝트 CRUD ──
  function openAddProject() { setProjectForm(emptyProject); setEditingProjectId(null); setShowProjectForm(true); }
  function openEditProject(p: LocalProject) {
    setProjectForm({ year: p.year, title: p.title, category: p.category, client: p.client, description: p.description, image: p.image || "", featured: p.featured });
    setEditingProjectId(p.id); setShowProjectForm(true);
  }
  function cancelProjectForm() { setShowProjectForm(false); setEditingProjectId(null); setProjectForm(emptyProject); }
  async function handleProjectSave(e: React.SyntheticEvent) {
    e.preventDefault(); setProjectSaving(true);
    if (editingProjectId) {
      await fetch(`/api/admin/projects/${editingProjectId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(projectForm) });
    } else {
      await fetch("/api/admin/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(projectForm) });
    }
    await fetchProjects(); cancelProjectForm(); setProjectSaving(false);
  }
  async function handleProjectDelete(id: string, title: string) {
    if (!confirm(`"${title}" 을(를) 삭제하시겠습니까?`)) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" }); await fetchProjects();
  }

  // ── 연혁 CRUD ──
  function openAddHistory() { setHistoryForm(emptyHistory); setEditingHistoryId(null); setHistoryError(""); setShowHistoryForm(true); }
  function openEditHistory(h: HistoryItem) {
    setHistoryForm({ year: h.year, events: [...h.events] });
    setEditingHistoryId(h.id); setHistoryError(""); setShowHistoryForm(true);
  }
  function cancelHistoryForm() { setShowHistoryForm(false); setEditingHistoryId(null); setHistoryForm(emptyHistory); setHistoryError(""); }
  function addEventField() { setHistoryForm({ ...historyForm, events: [...historyForm.events, ""] }); }
  function removeEventField(i: number) { setHistoryForm({ ...historyForm, events: historyForm.events.filter((_, idx) => idx !== i) }); }
  function updateEvent(i: number, val: string) {
    const events = [...historyForm.events]; events[i] = val; setHistoryForm({ ...historyForm, events });
  }
  async function handleHistorySave(e: React.SyntheticEvent) {
    e.preventDefault(); setHistorySaving(true); setHistoryError("");
    const payload = { ...historyForm, events: historyForm.events.filter((ev) => ev.trim() !== "") };
    if (editingHistoryId) {
      await fetch(`/api/admin/history/${editingHistoryId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    } else {
      const res = await fetch("/api/admin/history", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) { const data = await res.json(); setHistoryError(data.error || "오류가 발생했습니다."); setHistorySaving(false); return; }
    }
    await fetchHistory(); cancelHistoryForm(); setHistorySaving(false);
  }
  async function handleHistoryDelete(id: string, year: string) {
    if (!confirm(`${year}년 연혁을 삭제하시겠습니까?`)) return;
    await fetch(`/api/admin/history/${id}`, { method: "DELETE" }); await fetchHistory();
  }

  // ── 위치 저장 ──
  async function handleContactSave(e: React.SyntheticEvent) {
    e.preventDefault(); setContactSaving(true); setContactSaved(false);
    await fetch("/api/admin/contact", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(contact) });
    setContactSaving(false); setContactSaved(true); setTimeout(() => setContactSaved(false), 3000);
  }

  const projectYears = Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => Number(b) - Number(a));
  const filteredProjects = filterYear === "all" ? projects : projects.filter((p) => p.year === filterYear);
  const sortedHistory = [...history].sort((a, b) => Number(b.year) - Number(a.year));

  const inputCls = "w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";
  const btnPrimary = "px-5 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50";
  const btnSecondary = "px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors";

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">제품 관리</h2>
        <button onClick={openAdd} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          제품 추가
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">{editingId ? "제품 수정" : "새 제품 추가"}</h3>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">제품명 *</label>
              <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="제품명 입력" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="제품 설명 입력" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label>
              <input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">PDF URL</label>
              <input type="url" value={form.pdfUrl} onChange={(e) => setForm({ ...form, pdfUrl: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://... (PDF 파일 링크)" />
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={form.featured} onChange={(e) => setForm({ ...form, featured: e.target.checked })} className="w-4 h-4 rounded text-blue-600" />
              <span className="text-sm text-gray-700">홈 화면 노출</span>
            </label>
          </div>
          <div className="flex gap-2 mt-5">
            <button type="submit" disabled={saving} className="px-5 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50">{saving ? "저장 중..." : "저장"}</button>
            <button type="button" onClick={cancelForm} className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">취소</button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p>
      ) : products.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-400 text-sm">등록된 제품이 없습니다.</p>
          <button onClick={openAdd} className="mt-3 text-sm text-blue-600 hover:underline">+ 첫 번째 제품 추가</button>
        </div>
      ) : (
        <div className="space-y-3">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 overflow-hidden">
                {product.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                ) : (
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900 text-sm">{product.name}</h3>
                  {product.featured && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">홈 노출</span>}
                  {product.pdfUrl && <span className="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded-full">PDF</span>}
                </div>
                <p className="text-xs text-gray-400 mt-1 line-clamp-2">{product.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => openEdit(product)} className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">수정</button>
                <button onClick={() => handleDelete(product.id, product.name)} className="text-xs px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors">삭제</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────
// 프로젝트 관리 패널
// ─────────────────────────────────────
const currentYear = new Date().getFullYear().toString();
const emptyProject = { year: currentYear, title: "", category: "", client: "", description: "", image: "" };
const categoryOptions = ["스마트팩토리", "GIS", "SI", "방재/재난", "솔루션", "모니터링", "모바일", "기타"];

function ProjectPanel() {
  const [projects, setProjects] = useState<LocalProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(emptyProject);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  async function fetchProjects() {
    const res = await fetch("/api/admin/projects");
    const data = await res.json();
    setProjects([...data].sort((a: LocalProject, b: LocalProject) => Number(b.year) - Number(a.year)));
    setLoading(false);
  }
  useEffect(() => { fetchProjects(); }, []);

  function openAdd() { setForm(emptyProject); setEditingId(null); setShowForm(true); }
  function openEdit(p: LocalProject) {
    setForm({ year: p.year, title: p.title, category: p.category, client: p.client, description: p.description, image: p.image || "" });
    setEditingId(p.id); setShowForm(true);
  }
  function cancelForm() { setShowForm(false); setEditingId(null); setForm(emptyProject); }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault(); setSaving(true);
    if (editingId) {
      await fetch(`/api/admin/projects/${editingId}`, { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    } else {
      await fetch("/api/admin/projects", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
    }
    await fetchProjects(); cancelForm(); setSaving(false);
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`"${title}" 을(를) 삭제하시겠습니까?`)) return;
    await fetch(`/api/admin/projects/${id}`, { method: "DELETE" });
    await fetchProjects();
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">프로젝트 관리</h2>
        <button onClick={openAdd} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
          프로젝트 추가
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
          <h3 className="text-base font-semibold text-gray-900 mb-4">{editingId ? "프로젝트 수정" : "새 프로젝트 추가"}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">프로젝트명 *</label>
              <input type="text" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="프로젝트명 입력" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">연도 *</label>
              <input type="text" value={form.year} onChange={(e) => setForm({ ...form, year: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="예: 2024" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">분야</label>
              <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option value="">분야 선택</option>
                {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">고객사</label>
              <input type="text" value={form.client} onChange={(e) => setForm({ ...form, client: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="고객사명" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
              <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" placeholder="프로젝트 설명 입력" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label>
              <input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="https://..." />
            </div>
          </div>
          <div className="flex gap-2 mt-5">
            <button type="submit" disabled={saving} className="px-5 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50">{saving ? "저장 중..." : "저장"}</button>
            <button type="button" onClick={cancelForm} className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors">취소</button>
          </div>
        </form>
      )}

      {loading ? (
        <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
          <p className="text-gray-400 text-sm">등록된 프로젝트가 없습니다.</p>
          <button onClick={openAdd} className="mt-3 text-sm text-blue-600 hover:underline">+ 첫 번째 프로젝트 추가</button>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-700 font-bold text-sm overflow-hidden">
                {project.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  project.year
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-gray-900 text-sm">{project.title}</h3>
                  {project.category && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{project.category}</span>}
                  {project.client && <span className="text-xs text-gray-400">{project.client}</span>}
                </div>
                <p className="text-xs text-gray-400 mt-1 line-clamp-1">{project.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => openEdit(project)} className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">수정</button>
                <button onClick={() => handleDelete(project.id, project.title)} className="text-xs px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors">삭제</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────
// 대시보드 (탭 전환)
// ─────────────────────────────────────
type Tab = "products" | "projects";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>("projects");

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-gray-900">세현아이씨티</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">관리자</span>
          </div>
          <button onClick={handleLogout} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">로그아웃</button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* 탭 */}
<<<<<<< HEAD
        <div className="flex flex-wrap gap-1 bg-gray-100 p-1 rounded-xl mb-8 w-fit">
          {(["products", "projects", "history", "contact"] as const).map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"}`}
            >
              {tab === "products" ? "제품 관리" : tab === "projects" ? "프로젝트 관리" : tab === "history" ? "연혁 관리" : "위치 설정"}
=======
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl w-fit mb-8">
          {([["projects", "프로젝트 관리"], ["products", "제품 관리"]] as [Tab, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === key ? "bg-white text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {label}
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
            </button>
          ))}
        </div>

<<<<<<< HEAD
        {/* ── 제품 관리 ── */}
        {activeTab === "products" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">제품 관리</h2>
              <button onClick={openAddProduct} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                제품 추가
              </button>
            </div>
            {showProductForm && (
              <form onSubmit={handleProductSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">{editingProductId ? "제품 수정" : "새 제품 추가"}</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">제품명 *</label><input type="text" value={productForm.name} onChange={(e) => setProductForm({ ...productForm, name: e.target.value })} className={inputCls} placeholder="제품명 입력" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">설명</label><textarea value={productForm.description} onChange={(e) => setProductForm({ ...productForm, description: e.target.value })} rows={3} className={`${inputCls} resize-none`} placeholder="제품 설명 입력" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label><input type="url" value={productForm.image} onChange={(e) => setProductForm({ ...productForm, image: e.target.value })} className={inputCls} placeholder="https://..." /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">PDF URL</label><input type="url" value={productForm.pdfUrl} onChange={(e) => setProductForm({ ...productForm, pdfUrl: e.target.value })} className={inputCls} placeholder="https://..." /></div>
                  <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" checked={productForm.featured} onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })} className="w-4 h-4 rounded text-blue-600" /><span className="text-sm text-gray-700">홈 화면 노출</span></label>
                </div>
                <div className="flex gap-2 mt-5">
                  <button type="submit" disabled={productSaving} className={btnPrimary}>{productSaving ? "저장 중..." : "저장"}</button>
                  <button type="button" onClick={cancelProductForm} className={btnSecondary}>취소</button>
                </div>
              </form>
            )}
            {loadingProducts ? <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p>
              : products.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                  <p className="text-gray-400 text-sm">등록된 제품이 없습니다.</p>
                  <button onClick={openAddProduct} className="mt-3 text-sm text-blue-600 hover:underline">+ 첫 번째 제품 추가</button>
                </div>
              ) : (
                <div className="space-y-3">
                  {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 overflow-hidden">
                        {product.image ? <img src={product.image} alt={product.name} className="w-full h-full object-cover" /> // eslint-disable-line @next/next/no-img-element
                          : <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">{product.name}</h3>
                          {product.featured && <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">홈 노출</span>}
                          {product.pdfUrl && <span className="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded-full">PDF</span>}
                        </div>
                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">{product.description}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => openEditProduct(product)} className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">수정</button>
                        <button onClick={() => handleProductDelete(product.id, product.name)} className="text-xs px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors">삭제</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </>
        )}

        {/* ── 프로젝트 관리 ── */}
        {activeTab === "projects" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">프로젝트 관리</h2>
              <button onClick={openAddProject} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                프로젝트 추가
              </button>
            </div>
            {showProjectForm && (
              <form onSubmit={handleProjectSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">{editingProjectId ? "프로젝트 수정" : "새 프로젝트 추가"}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">연도 *</label><input type="text" value={projectForm.year} onChange={(e) => setProjectForm({ ...projectForm, year: e.target.value })} className={inputCls} placeholder="2024" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">분야</label><input type="text" value={projectForm.category} onChange={(e) => setProjectForm({ ...projectForm, category: e.target.value })} className={inputCls} placeholder="스마트팩토리, IoT, SI 등" /></div>
                  <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">프로젝트명 *</label><input type="text" value={projectForm.title} onChange={(e) => setProjectForm({ ...projectForm, title: e.target.value })} className={inputCls} placeholder="프로젝트명 입력" required /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">고객사</label><input type="text" value={projectForm.client} onChange={(e) => setProjectForm({ ...projectForm, client: e.target.value })} className={inputCls} placeholder="고객사명" /></div>
                  <div><label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label><input type="url" value={projectForm.image} onChange={(e) => setProjectForm({ ...projectForm, image: e.target.value })} className={inputCls} placeholder="https://..." /></div>
                  <div className="sm:col-span-2"><label className="block text-sm font-medium text-gray-700 mb-1">설명</label><textarea value={projectForm.description} onChange={(e) => setProjectForm({ ...projectForm, description: e.target.value })} rows={3} className={`${inputCls} resize-none`} placeholder="프로젝트 설명 입력" /></div>
                  <label className="flex items-center gap-2 cursor-pointer sm:col-span-2"><input type="checkbox" checked={projectForm.featured} onChange={(e) => setProjectForm({ ...projectForm, featured: e.target.checked })} className="w-4 h-4 rounded text-blue-600" /><span className="text-sm text-gray-700">홈 화면 노출 (최대 3개)</span></label>
                </div>
                <div className="flex gap-2 mt-5">
                  <button type="submit" disabled={projectSaving} className={btnPrimary}>{projectSaving ? "저장 중..." : "저장"}</button>
                  <button type="button" onClick={cancelProjectForm} className={btnSecondary}>취소</button>
                </div>
              </form>
            )}
            {!loadingProjects && projects.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                <button onClick={() => setFilterYear("all")} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${filterYear === "all" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>전체</button>
                {projectYears.map((year) => (
                  <button key={year} onClick={() => setFilterYear(year)} className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${filterYear === year ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}>{year}</button>
                ))}
              </div>
            )}
            {loadingProjects ? <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p>
              : filteredProjects.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                  <p className="text-gray-400 text-sm">등록된 프로젝트가 없습니다.</p>
                  <button onClick={openAddProject} className="mt-3 text-sm text-blue-600 hover:underline">+ 첫 번째 프로젝트 추가</button>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center overflow-hidden">
                        {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover" /> // eslint-disable-line @next/next/no-img-element
                          : <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{project.year}</span>
                          {project.category && <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{project.category}</span>}
                          {project.featured && <span className="text-xs bg-amber-50 text-amber-600 px-2 py-0.5 rounded-full">홈 노출</span>}
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{project.title}</h3>
                        {project.client && <p className="text-xs text-blue-500 mt-0.5">{project.client}</p>}
                        {project.description && <p className="text-xs text-gray-400 mt-1 line-clamp-1">{project.description}</p>}
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => openEditProject(project)} className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">수정</button>
                        <button onClick={() => handleProjectDelete(project.id, project.title)} className="text-xs px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors">삭제</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </>
        )}

        {/* ── 연혁 관리 ── */}
        {activeTab === "history" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">연혁 관리</h2>
              <button onClick={openAddHistory} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                연도 추가
              </button>
            </div>

            {showHistoryForm && (
              <form onSubmit={handleHistorySave} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6">
                <h3 className="text-base font-semibold text-gray-900 mb-4">{editingHistoryId ? "연혁 수정" : "새 연도 추가"}</h3>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">연도 *</label>
                  <input
                    type="text" value={historyForm.year}
                    onChange={(e) => setHistoryForm({ ...historyForm, year: e.target.value })}
                    className={`${inputCls} max-w-xs`} placeholder="2025"
                    required disabled={!!editingHistoryId}
                  />
                  {editingHistoryId && <p className="text-xs text-gray-400 mt-1">연도는 변경할 수 없습니다.</p>}
                </div>

                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">주요 내용</label>
                  <div className="space-y-2">
                    {historyForm.events.map((ev, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input
                          type="text" value={ev}
                          onChange={(e) => updateEvent(i, e.target.value)}
                          className={inputCls} placeholder={`내용 ${i + 1}`}
                        />
                        {historyForm.events.length > 1 && (
                          <button type="button" onClick={() => removeEventField(i)}
                            className="flex-shrink-0 w-8 h-8 rounded-lg border border-red-100 text-red-400 hover:bg-red-50 flex items-center justify-center transition-colors">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={addEventField} className="mt-2 text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                    내용 추가
                  </button>
                </div>

                {historyError && <p className="text-sm text-red-500 mt-2">{historyError}</p>}
                <div className="flex gap-2 mt-5">
                  <button type="submit" disabled={historySaving} className={btnPrimary}>{historySaving ? "저장 중..." : "저장"}</button>
                  <button type="button" onClick={cancelHistoryForm} className={btnSecondary}>취소</button>
                </div>
              </form>
            )}

            {loadingHistory ? <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p>
              : sortedHistory.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                  <p className="text-gray-400 text-sm">등록된 연혁이 없습니다.</p>
                  <button onClick={openAddHistory} className="mt-3 text-sm text-blue-600 hover:underline">+ 첫 번째 연도 추가</button>
                </div>
              ) : (
                <div className="space-y-3">
                  {sortedHistory.map((item) => (
                    <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 pt-0.5">
                        <span className="text-xl font-bold text-blue-700">{item.year}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <ul className="space-y-1">
                          {item.events.map((ev, i) => (
                            <li key={i} className="text-sm text-gray-600 flex items-start gap-1.5">
                              <span className="text-blue-400 mt-1.5 flex-shrink-0">·</span>
                              {ev}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => openEditHistory(item)} className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">수정</button>
                        <button onClick={() => handleHistoryDelete(item.id, item.year)} className="text-xs px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors">삭제</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
          </>
        )}

        {/* ── 위치 설정 ── */}
        {activeTab === "contact" && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">위치 설정</h2>
              <p className="text-sm text-gray-500 mt-1">Contact 페이지에 표시되는 지도 위치와 연락처 정보를 설정합니다.</p>
            </div>
            {loadingContact ? <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p> : (
              <form onSubmit={handleContactSave} className="space-y-6">
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">지도 위치</h3>
                  <p className="text-xs text-gray-400 mb-5">구글맵에서 위치를 검색한 뒤, URL의 @위도,경도 값을 입력하세요.<br />예: <span className="font-mono text-gray-500">@37.2925,127.0446</span></p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">장소명 *</label><input type="text" value={contact.placeName} onChange={(e) => setContact({ ...contact, placeName: e.target.value })} className={inputCls} placeholder="세현아이씨티" required /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">표시 주소 *</label><input type="text" value={contact.address} onChange={(e) => setContact({ ...contact, address: e.target.value })} className={inputCls} placeholder="경기도 수원시 ..." required /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">위도 (Latitude) *</label><input type="number" step="any" value={contact.lat} onChange={(e) => setContact({ ...contact, lat: parseFloat(e.target.value) })} className={inputCls} placeholder="37.2925" required /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">경도 (Longitude) *</label><input type="number" step="any" value={contact.lng} onChange={(e) => setContact({ ...contact, lng: parseFloat(e.target.value) })} className={inputCls} placeholder="127.0446" required /></div>
                  </div>
                  <div className="mt-4 p-4 rounded-xl bg-blue-50 text-xs text-blue-700 leading-relaxed">
                    <strong>위도/경도 찾는 방법:</strong><br />
                    1. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="underline">maps.google.com</a>에서 주소 검색<br />
                    2. 원하는 위치에서 우클릭 → "이 위치" 클릭<br />
                    3. 상단에 나타나는 숫자(위도, 경도) 복사
                  </div>
                </div>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-5">연락처 정보</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">전화번호</label><input type="text" value={contact.phone} onChange={(e) => setContact({ ...contact, phone: e.target.value })} className={inputCls} placeholder="070-0000-0000" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">팩스</label><input type="text" value={contact.fax} onChange={(e) => setContact({ ...contact, fax: e.target.value })} className={inputCls} placeholder="없으면 빈칸" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">이메일</label><input type="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} className={inputCls} placeholder="example@company.com" /></div>
                    <div><label className="block text-sm font-medium text-gray-700 mb-1">업무시간</label><input type="text" value={contact.hours} onChange={(e) => setContact({ ...contact, hours: e.target.value })} className={inputCls} placeholder="월~금 09:00~18:00" /></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button type="submit" disabled={contactSaving} className={btnPrimary}>{contactSaving ? "저장 중..." : "저장"}</button>
                  {contactSaved && (
                    <span className="text-sm text-green-600 font-medium flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      저장되었습니다
                    </span>
                  )}
                </div>
              </form>
            )}
          </>
        )}
=======
        {activeTab === "projects" ? <ProjectPanel /> : <ProductPanel />}
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
      </main>
    </div>
  );
}
