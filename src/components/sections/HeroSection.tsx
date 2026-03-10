"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Projects Completed" },
  { value: 13, suffix: "+", label: "Enterprise Clients" },
];

const clients = ["삼성전자", "삼성디스플레이", "삼성SDS", "한국가스공사", "삼성물산"];

export default function HeroSection() {
  return (
<<<<<<< HEAD
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
=======
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
>>>>>>> origin/now_work

      {/* 배경 그리드 패턴 */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          opacity: 0.4,
        }}
      />

      {/* 우측 블루 글로우 */}
      <div
        className="absolute top-0 right-0 w-[640px] h-[640px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 30%, rgba(59,130,246,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* 좌측: 텍스트 */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 mb-8"
            >
              <span className="w-8 h-px bg-blue-600" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">
                IT Solution Provider
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-950 leading-[1.05] tracking-tight mb-8"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Leader of
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400">
                Smarter
              </span>
              <br />
              World.
            </motion.h1>

            <motion.p
              className="text-base text-gray-500 leading-relaxed mb-10 max-w-md"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              GIS·LBS·IoT 기반의 스마트 IT 솔루션으로
              고객의 디지털 전환을 함께 완성합니다.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="/project"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-700 text-white font-semibold text-sm hover:bg-blue-800 transition-all duration-300"
              >
                프로젝트 보기
                <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-gray-200 text-gray-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-700 transition-all duration-300"
              >
                문의하기
              </Link>
            </motion.div>
          </div>

          {/* 우측: 실적 패널 */}
          <motion.div
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* 수치 카드 */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-50 rounded-2xl p-5 border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-2xl font-bold text-blue-700 leading-none mb-2">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={1800} />
                  </div>
                  <div className="text-xs text-gray-400 leading-snug">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* 고객사 패널 */}
            <motion.div
              className="bg-gray-950 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-4">
                Trusted by
              </p>
              <div className="flex flex-wrap gap-2">
                {clients.map((client) => (
                  <span
                    key={client}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-gray-300 border border-white/10"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Since 라인 */}
            <motion.div
              className="flex items-center gap-4 px-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400 shrink-0">Since 2010</span>
              <div className="flex-1 h-px bg-gray-100" />
            </motion.div>
          </motion.div>
        </div>
<<<<<<< HEAD
=======

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
>>>>>>> origin/now_work
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-6 h-9 rounded-full border-2 border-gray-300 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-gray-400"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[9px] text-gray-400 uppercase tracking-[0.25em]">Scroll</span>
      </motion.div>
    </section>
  );
}
