"use client";

import { motion } from "framer-motion";

const businesses = [
  {
    number: "01",
    title: "방재/재난 모니터링 구축",
    description: "GIS 기반 Enterprise 방재시스템 구축, 방재·재난 관리 컨설팅, 방재·재해 시뮬레이션 시스템 개발",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "모바일 서비스 System",
    description: "모바일 네비게이션, 현장 업무 지원 시스템, 위치기반 LBS 서비스 개발 및 구축",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "솔루션 판매",
    description: "SmartGeoKit 솔루션, 설비 연계 솔루션 등 자체 개발 솔루션 공급 및 기술 지원",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "GIS/LBS 서비스 기획",
    description: "실내 위치측위 LBS 서비스 개발, 공간 기반 업무 서비스, 시스템 구축 및 유지보수",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "GIS/도면 DB 구축",
    description: "공간 데이터베이스 구축 및 변환, DB 유지보수, 맵 데이터 분석 컨설팅 제공",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
  },
  {
    number: "06",
    title: "GIS System 응용",
    description: "위치 모니터링 및 관제 시스템, 대시보드 구축, GIS 응용 및 공간 분석 서비스",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BusinessSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Business Area</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">사업영역</h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            GIS·LBS·IoT를 핵심으로 다양한 산업 분야의 디지털 전환을 지원합니다.
          </p>
        </motion.div>

        {/* 6대 분야 그리드 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {businesses.map((biz) => (
            <motion.div
              key={biz.number}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {biz.icon}
                </div>
                <div>
                  <span className="text-xs font-bold text-blue-400 tracking-widest">{biz.number}</span>
                  <h3 className="mt-0.5 text-base font-bold text-gray-900 leading-snug">{biz.title}</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-500 leading-relaxed">{biz.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
