"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
      {/* 움직이는 동그라미 배경 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { w: 520, h: 520, x: "72%", y: "-20%", color: "bg-blue-100", opacity: 0.55, duration: 14, delay: 0 },
          { w: 340, h: 340, x: "-8%", y: "55%", color: "bg-blue-200", opacity: 0.3, duration: 18, delay: 2 },
          { w: 220, h: 220, x: "55%", y: "60%", color: "bg-blue-300", opacity: 0.2, duration: 12, delay: 1 },
          { w: 160, h: 160, x: "30%", y: "-10%", color: "bg-sky-200", opacity: 0.35, duration: 16, delay: 3 },
          { w: 100, h: 100, x: "85%", y: "40%", color: "bg-indigo-200", opacity: 0.25, duration: 10, delay: 0.5 },
        ].map((c, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${c.color}`}
            style={{ width: c.w, height: c.h, left: c.x, top: c.y, opacity: c.opacity }}
            animate={{
              x: [0, 30, -20, 15, 0],
              y: [0, -25, 20, -10, 0],
              scale: [1, 1.06, 0.96, 1.03, 1],
            }}
            transition={{
              duration: c.duration,
              delay: c.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          {/* 태그 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 mb-6">
              IT Solution Provider Group
            </span>
          </motion.div>

          {/* 헤드라인 */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Leader of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
              Smarter World
            </span>
          </motion.h1>

          {/* 서브 텍스트 */}
          <motion.p
            className="text-lg sm:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            세현아이씨티는 스마트 IT 기술 기반의 최적의 솔루션을 통해
            고객의 가치를 창출합니다.
          </motion.p>

          {/* CTA 버튼 */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/project"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold text-base shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 transition-all duration-300 hover:-translate-y-0.5"
            >
              프로젝트 보기
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border-2 border-blue-200 text-blue-700 font-semibold text-base hover:bg-blue-50 transition-all duration-300"
            >
              문의하기
            </Link>
          </motion.div>
        </div>

        {/* 하단 스크롤 힌트 — 마우스 아이콘 */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* 마우스 외곽 */}
          <div className="relative w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center pt-1.5">
            {/* 스크롤 휠 */}
            <motion.div
              className="w-1 h-2 rounded-full bg-gray-400"
              animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
