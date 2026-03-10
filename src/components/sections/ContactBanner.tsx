"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const orbs = [
  { x: "72%", y: "15%", size: 420, color: "rgba(255,255,255,0.12)", duration: 12, delay: 0 },
  { x: "15%", y: "70%", size: 320, color: "rgba(147,197,253,0.18)", duration: 15, delay: 3 },
  { x: "50%", y: "50%", size: 260, color: "rgba(255,255,255,0.08)", duration: 10, delay: 6 },
];

export default function ContactBanner() {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden bg-blue-700"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* 배경 그리드 */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* 움직이는 글로우 오브 */}
          {orbs.map((orb, i) => (
            <motion.div
              key={i}
              className="absolute pointer-events-none rounded-full"
              style={{
                left: orb.x,
                top: orb.y,
                width: orb.size,
                height: orb.size,
                transform: "translate(-50%, -50%)",
                background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              }}
              animate={{
                x: [0, 30, -20, 15, 0],
                y: [0, -25, 20, -10, 0],
                scale: [1, 1.08, 0.95, 1.05, 1],
              }}
              transition={{
                duration: orb.duration,
                delay: orb.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* 흐르는 라인 효과 */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.07]" preserveAspectRatio="none">
            {[0.2, 0.5, 0.8].map((pos, i) => (
              <motion.line
                key={i}
                x1="0%"
                y1={`${pos * 100}%`}
                x2="100%"
                y2={`${pos * 100}%`}
                stroke="rgba(99,160,255,1)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0], x: ["-100%", "0%"] }}
                transition={{
                  duration: 4,
                  delay: i * 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </svg>

          {/* 부유하는 파티클 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute pointer-events-none rounded-full bg-blue-400"
              style={{
                width: 3 + (i % 3),
                height: 3 + (i % 3),
                left: `${15 + i * 14}%`,
                top: `${25 + (i % 3) * 25}%`,
                opacity: 0.25,
              }}
              animate={{
                y: [0, -18, 0],
                opacity: [0.15, 0.4, 0.15],
              }}
              transition={{
                duration: 3 + i * 0.7,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 p-10 sm:p-16">

            {/* 좌측: 텍스트 */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="block text-xs font-bold text-blue-200 uppercase tracking-[0.2em] mb-5">
                  Contact Us
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                  프로젝트를
                  <br />
                  함께 시작해요.
                </h2>
                <p className="text-blue-100 text-base leading-relaxed max-w-sm">
                  귀사의 IT 과제에 대해 이야기해 주세요.
                  최적의 솔루션을 제안해 드립니다.
                </p>
              </div>

              <Link
                href="/contact"
                className="group mt-10 inline-flex items-center gap-3 self-start px-8 py-4 rounded-full bg-white text-blue-700 font-bold text-sm hover:bg-blue-900 hover:text-white transition-all duration-300"
              >
                문의하기
                <span className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-white/20 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* 우측: 연락처 정보 */}
            <div className="flex flex-col gap-6 lg:pl-12 lg:border-l lg:border-white/20">

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:"18px",height:"18px"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-blue-300 mb-1 uppercase tracking-widest">Phone</p>
                  <a href="tel:07040478955" className="text-white font-semibold hover:text-blue-200 transition-colors">
                    070-4047-8955
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:"18px",height:"18px"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-blue-300 mb-1 uppercase tracking-widest">Email</p>
                  <a href="mailto:asset.manager@sehyunict.com" className="text-white font-semibold hover:text-blue-400 transition-colors text-sm">
                    asset.manager@sehyunict.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{width:"18px",height:"18px"}}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-blue-300 mb-1 uppercase tracking-widest">Location</p>
                  <p className="text-white font-semibold text-sm leading-snug">
                    경기도 화성시<br />
                    <span className="text-blue-200 font-normal text-xs">금강펜테리움 IT타워</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
