import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-white font-bold text-lg mb-3">세현아이씨티</h3>
            <p className="text-sm leading-relaxed">
              스마트 IT 기술 기반의 IT Solution Provider Group
            </p>
          </div>

          {/* 메뉴 */}
          <div>
            <h4 className="text-white font-semibold mb-3">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/project" className="hover:text-white transition-colors">Project</Link></li>
              <li><Link href="/product" className="hover:text-white transition-colors">Product</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">SEbit AI</Link></li>
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h4 className="text-white font-semibold mb-3">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>경기도 화성시 금강펜테리움 IT타워</li>
              <li>Tel: 070-4047-8955</li>
              <li>
                <a href="mailto:asset.manager@sehyunict.com" className="hover:text-white transition-colors">
                  asset.manager@sehyunict.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-xs">
          <p>© {new Date().getFullYear()} 세현아이씨티. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
