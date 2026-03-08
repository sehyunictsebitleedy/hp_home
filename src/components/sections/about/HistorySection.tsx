"use client";

import { motion } from "framer-motion";

// 실제 연혁 데이터는 Sanity에서 관리 — 아래는 초기 임시 데이터
const historyData = [
  {
    year: "2024",
    events: [
      "스마트팩토리 IoT 모니터링 시스템 고도화",
      "삼성디스플레이 베트남 GIS 시스템 구축",
    ],
  },
  {
    year: "2023",
    events: [
      "ERP 통합 SI 프로젝트 완료",
      "GIS 기반 방재 플랫폼 v2.0 출시",
    ],
  },
  {
    year: "2022",
    events: [
      "삼성전자 서안법인 GIS 시스템 구축",
      "SmartGeoKit 솔루션 출시",
    ],
  },
  {
    year: "2020",
    events: [
      "한국가스공사 설비 모니터링 시스템 구축",
      "모바일 LBS 플랫폼 고도화",
    ],
  },
  {
    year: "2015",
    events: [
      "삼성SDS GIS 시스템 구축 파트너 선정",
      "방재/재난 모니터링 솔루션 개발",
    ],
  },
  {
    year: "2010",
    events: [
      "세현아이씨티 설립",
      "GIS/LBS 기반 IT 솔루션 사업 시작",
    ],
  },
];

export default function HistorySection() {
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
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">History</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">연혁</h2>
        </motion.div>

        {/* 타임라인 */}
        <div className="relative max-w-3xl mx-auto">
          {/* 중앙 세로선 */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

          <div className="space-y-10">
            {historyData.map((item, index) => (
              <motion.div
                key={item.year}
                className="relative flex items-start gap-6 sm:gap-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* 연도 (데스크톱: 왼쪽, 모바일: 인라인) */}
                <div className="sm:w-1/2 sm:pr-12 sm:text-right hidden sm:block">
                  {index % 2 === 0 && (
                    <div className="pt-1">
                      <span className="text-2xl font-bold text-blue-700">{item.year}</span>
                      <ul className="mt-2 space-y-1">
                        {item.events.map((event) => (
                          <li key={event} className="text-sm text-gray-500">{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 중앙 도트 */}
                <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm mt-1" />

                {/* 오른쪽 내용 (데스크톱) */}
                <div className="sm:w-1/2 sm:pl-12 hidden sm:block">
                  {index % 2 !== 0 && (
                    <div className="pt-1">
                      <span className="text-2xl font-bold text-blue-700">{item.year}</span>
                      <ul className="mt-2 space-y-1">
                        {item.events.map((event) => (
                          <li key={event} className="text-sm text-gray-500">{event}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 모바일 레이아웃 */}
                <div className="sm:hidden pl-14">
                  <span className="text-2xl font-bold text-blue-700">{item.year}</span>
                  <ul className="mt-2 space-y-1">
                    {item.events.map((event) => (
                      <li key={event} className="text-sm text-gray-500">{event}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
