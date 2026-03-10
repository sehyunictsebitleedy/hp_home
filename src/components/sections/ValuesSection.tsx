"use client";

import { motion } from "framer-motion";

const values = [
  {
    number: "01",
    title: "스마트 솔루션",
    description:
      "최신 IoT·스마트팩토리 기술을 기반으로 고객 환경에 최적화된 IT 솔루션을 설계하고 구현합니다.",
  },
  {
    number: "02",
    title: "고객 가치 창출",
    description:
      "단순 납품을 넘어 고객의 비즈니스 목표를 함께 달성하는 장기 파트너로 동행합니다.",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.599 6.5a3 3 0 0 0 .399-1.375" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.477 10.896a4 4 0 0 1 .585-.396" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.938 10.5a4 4 0 0 1 .585.396" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18a4 4 0 0 1-1.967-.516" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.967 17.484A4 4 0 0 1 18 18" />
      </svg>
    ),
    title: "SEbit AI",
    description: "세현의 AI 브랜드 SEbit AI 서비스를 제공합니다.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-32 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* 좌측 타이틀 블록 */}
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-32"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="block text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">
              Why Sehyun ICT
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-950 leading-[1.1] tracking-tight">
              우리가<br />다른 이유
            </h2>
            <div className="mt-6 w-12 h-1 rounded-full bg-blue-600" />
          </motion.div>

          {/* 우측 가치 목록 */}
          <div className="lg:col-span-8 flex flex-col divide-y divide-gray-100">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                className="group flex gap-8 py-10 first:pt-0 last:pb-0"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="text-sm font-bold text-gray-300 shrink-0 w-8 pt-1 group-hover:text-blue-400 transition-colors duration-300">
                  {value.number ?? `0${i + 1}`}
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm max-w-lg">
                    {value.description}
                  </p>
                </div>
                <div className="hidden sm:flex items-start pt-1 shrink-0">
                  <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-blue-300 group-hover:bg-blue-50 transition-all duration-300">
                    <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
