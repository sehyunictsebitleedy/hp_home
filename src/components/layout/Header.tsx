"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Product", href: "/product" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-700">세현아이씨티</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                  pathname.startsWith(item.href)
                    ? "text-blue-700 border-b-2 border-blue-700 pb-0.5"
                    : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-3 py-1.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800 transition-colors"
            >
              SEbitAI
            </a>
          </nav>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴 열기"
          >
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current mb-1 transition-all" />
            <div className="w-5 h-0.5 bg-current transition-all" />
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gray-50 transition-colors hover:text-blue-700 ${
                pathname.startsWith(item.href) ? "text-blue-700" : "text-gray-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-semibold text-blue-700 hover:text-blue-800 transition-colors"
          >
            SEbitAI ↗
          </a>
        </div>
      )}
    </header>
  );
}
