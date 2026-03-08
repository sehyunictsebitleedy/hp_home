"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/CountUp";

const stats = [
  { label: "설립", value: 2010, suffix: "년", desc: "풍부한 현장 경험" },
  { label: "누적 프로젝트", value: 200, suffix: "+", desc: "다양한 분야 납품" },
  { label: "주요 고객사", value: 13, suffix: "+", desc: "삼성전자 등 대기업" },
  { label: "주요 협력사", value: 9, suffix: "+", desc: "검증된 파트너십" },
];

export default function CompanyIntroSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 텍스트 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">About Us</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900 leading-snug">
              스마트 IT 기술로<br />더 나은 세상을 만듭니다
            </h2>
            <div className="mt-6 space-y-4 text-gray-500 leading-relaxed">
              <p>
                세현아이씨티는 GIS·LBS·IoT 기반의 IT 솔루션 전문 기업입니다.
                방재/재난 모니터링부터 스마트팩토리, 모바일 서비스까지 다양한 분야에서
                고객의 디지털 전환을 지원합니다.
              </p>
              <p>
                삼성전자, 삼성디스플레이, 한국가스공사 등 국내 주요 대기업과의 파트너십을 통해
                검증된 기술력과 신뢰를 쌓아왔습니다. 고객의 성공이 우리의 성공이라는
                철학 아래 최적의 솔루션을 제공합니다.
              </p>
            </div>
          </motion.div>

          {/* 수치 카드 */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="text-3xl font-bold text-blue-700 mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
