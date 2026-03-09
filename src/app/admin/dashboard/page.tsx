"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

  async function fetchProducts() {
    const res = await fetch("/api/admin/products");
    setProducts(await res.json());
    setLoading(false);
  }
  useEffect(() => { fetchProducts(); }, []);

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
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`"${name}" 을(를) 삭제하시겠습니까?`)) return;
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    await fetchProducts();
  }

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
            </button>
          ))}
        </div>

        {activeTab === "projects" ? <ProjectPanel /> : <ProductPanel />}
      </main>
    </div>
  );
}
