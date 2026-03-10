"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LocalProduct, ContactInfo } from "@/types";

const emptyProduct = { name: "", description: "", image: "", pdfUrl: "", featured: false };

const emptyContact: ContactInfo = {
  placeName: "",
  address: "",
  lat: 0,
  lng: 0,
  phone: "",
  fax: "",
  email: "",
  hours: "",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"products" | "contact">("products");

  // ── 제품 관리 상태 ──
  const [products, setProducts] = useState<LocalProduct[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [form, setForm] = useState(emptyProduct);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [saving, setSaving] = useState(false);

  // ── 위치 설정 상태 ──
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

  async function fetchContact() {
    const res = await fetch("/api/admin/contact");
    setContact(await res.json());
    setLoadingContact(false);
  }

  useEffect(() => {
    fetchProducts();
    fetchContact();
  }, []);

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin");
  }

  // ── 제품 CRUD ──
  function openAdd() {
    setForm(emptyProduct);
    setEditingId(null);
    setShowForm(true);
  }

  function openEdit(product: LocalProduct) {
    setForm({
      name: product.name,
      description: product.description,
      image: product.image || "",
      pdfUrl: product.pdfUrl || "",
      featured: product.featured,
    });
    setEditingId(product.id);
    setShowForm(true);
  }

  function cancelForm() {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyProduct);
  }

  async function handleSave(e: React.SyntheticEvent) {
    e.preventDefault();
    setSaving(true);

    if (editingId) {
      await fetch(`/api/admin/products/${editingId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } else {
      await fetch("/api/admin/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    }

    await fetchProducts();
    cancelForm();
    setSaving(false);
  }

  async function handleDelete(id: string, name: string) {
    if (!confirm(`"${name}" 을(를) 삭제하시겠습니까?`)) return;
    await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
    await fetchProducts();
  }

  // ── 위치 저장 ──
  async function handleContactSave(e: React.SyntheticEvent) {
    e.preventDefault();
    setContactSaving(true);
    setContactSaved(false);

    await fetch("/api/admin/contact", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    setContactSaving(false);
    setContactSaved(true);
    setTimeout(() => setContactSaved(false), 3000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold text-gray-900">세현아이씨티</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">관리자</span>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        {/* 탭 */}
        <div className="flex gap-1 bg-gray-100 p-1 rounded-xl mb-8 w-fit">
          <button
            onClick={() => setActiveTab("products")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "products"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            제품 관리
          </button>
          <button
            onClick={() => setActiveTab("contact")}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === "contact"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            위치 설정
          </button>
        </div>

        {/* ── 제품 관리 탭 ── */}
        {activeTab === "products" && (
          <>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">제품 관리</h2>
              <button
                onClick={openAdd}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                제품 추가
              </button>
            </div>

            {showForm && (
              <form
                onSubmit={handleSave}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6"
              >
                <h3 className="text-base font-semibold text-gray-900 mb-4">
                  {editingId ? "제품 수정" : "새 제품 추가"}
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">제품명 *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="제품명 입력"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">설명</label>
                    <textarea
                      value={form.description}
                      onChange={(e) => setForm({ ...form, description: e.target.value })}
                      rows={3}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      placeholder="제품 설명 입력"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">이미지 URL</label>
                    <input
                      type="url"
                      value={form.image}
                      onChange={(e) => setForm({ ...form, image: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">PDF URL</label>
                    <input
                      type="url"
                      value={form.pdfUrl}
                      onChange={(e) => setForm({ ...form, pdfUrl: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://... (PDF 파일 링크)"
                    />
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.featured}
                      onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                      className="w-4 h-4 rounded text-blue-600"
                    />
                    <span className="text-sm text-gray-700">홈 화면 노출</span>
                  </label>
                </div>
                <div className="flex gap-2 mt-5">
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-5 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
                  >
                    {saving ? "저장 중..." : "저장"}
                  </button>
                  <button
                    type="button"
                    onClick={cancelForm}
                    className="px-5 py-2.5 rounded-xl border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
                  >
                    취소
                  </button>
                </div>
              </form>
            )}

            {loadingProducts ? (
              <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p>
            ) : products.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-400 text-sm">등록된 제품이 없습니다.</p>
                <button onClick={openAdd} className="mt-3 text-sm text-blue-600 hover:underline">
                  + 첫 번째 제품 추가
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-start gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 overflow-hidden">
                      {product.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      ) : (
                        <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-gray-900 text-sm truncate">{product.name}</h3>
                        {product.featured && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">홈 노출</span>
                        )}
                        {product.pdfUrl && (
                          <span className="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded-full">PDF</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400 mt-1 line-clamp-2">{product.description}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => openEdit(product)}
                        className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                      >
                        수정
                      </button>
                      <button
                        onClick={() => handleDelete(product.id, product.name)}
                        className="text-xs px-3 py-1.5 rounded-lg border border-red-100 text-red-500 hover:bg-red-50 transition-colors"
                      >
                        삭제
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {/* ── 위치 설정 탭 ── */}
        {activeTab === "contact" && (
          <>
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">위치 설정</h2>
              <p className="text-sm text-gray-500 mt-1">
                Contact 페이지에 표시되는 지도 위치와 연락처 정보를 설정합니다.
              </p>
            </div>

            {loadingContact ? (
              <p className="text-center text-gray-400 py-12 text-sm">불러오는 중...</p>
            ) : (
              <form onSubmit={handleContactSave} className="space-y-6">
                {/* 지도 위치 */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-1">지도 위치</h3>
                  <p className="text-xs text-gray-400 mb-5">
                    구글맵에서 위치를 검색한 뒤, URL의 @위도,경도 값을 입력하세요.
                    <br />예: <span className="font-mono text-gray-500">@37.2925,127.0446</span>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">장소명 *</label>
                      <input
                        type="text"
                        value={contact.placeName}
                        onChange={(e) => setContact({ ...contact, placeName: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="세현아이씨티"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">표시 주소 *</label>
                      <input
                        type="text"
                        value={contact.address}
                        onChange={(e) => setContact({ ...contact, address: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="경기도 수원시 ..."
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">위도 (Latitude) *</label>
                      <input
                        type="number"
                        step="any"
                        value={contact.lat}
                        onChange={(e) => setContact({ ...contact, lat: parseFloat(e.target.value) })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="37.2925"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">경도 (Longitude) *</label>
                      <input
                        type="number"
                        step="any"
                        value={contact.lng}
                        onChange={(e) => setContact({ ...contact, lng: parseFloat(e.target.value) })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="127.0446"
                        required
                      />
                    </div>
                  </div>

                  {/* 위도/경도 찾는 법 안내 */}
                  <div className="mt-4 p-4 rounded-xl bg-blue-50 text-xs text-blue-700 leading-relaxed">
                    <strong>위도/경도 찾는 방법:</strong><br />
                    1. <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="underline">maps.google.com</a>에서 주소 검색<br />
                    2. 원하는 위치에서 우클릭 → "이 위치" 클릭<br />
                    3. 상단에 나타나는 숫자(위도, 경도) 복사
                  </div>
                </div>

                {/* 연락처 정보 */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h3 className="text-base font-semibold text-gray-900 mb-5">연락처 정보</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">전화번호</label>
                      <input
                        type="text"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="070-0000-0000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">팩스</label>
                      <input
                        type="text"
                        value={contact.fax}
                        onChange={(e) => setContact({ ...contact, fax: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="없으면 빈칸"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">이메일</label>
                      <input
                        type="email"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="example@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">업무시간</label>
                      <input
                        type="text"
                        value={contact.hours}
                        onChange={(e) => setContact({ ...contact, hours: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="월~금 09:00~18:00"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={contactSaving}
                    className="px-6 py-2.5 rounded-xl bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50"
                  >
                    {contactSaving ? "저장 중..." : "저장"}
                  </button>
                  {contactSaved && (
                    <span className="text-sm text-green-600 font-medium flex items-center gap-1.5">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      저장되었습니다
                    </span>
                  )}
                </div>
              </form>
            )}
          </>
        )}
      </main>
    </div>
  );
}
