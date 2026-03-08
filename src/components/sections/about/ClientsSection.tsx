"use client";

import { motion } from "framer-motion";

const clients = [
  "삼성전자",
  "삼성디스플레이",
  "삼성SDS",
  "삼성물산",
  "삼성엔지니어링",
  "삼성전자 서안",
  "삼성디스플레이 베트남",
  "한국가스공사",
  "아이마켓코리아",
  "아이엘포유",
  "에버원",
  "인투데이터",
  "엔솔루션스",
];

const partners = [
  "나무 INC",
  "미사엔지니어링",
  "(주)지엠아이티",
  "유민에스티",
  "창성에이스산업",
  "노불방재",
  "노리시스템",
  "제이비티",
  "젠체스토리",
];

export default function ClientsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Partners</span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">주요 고객사 및 협력사</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 고객사 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-blue-600 inline-block" />
              주요 고객사
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {clients.map((client) => (
                <span
                  key={client}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100"
                >
                  {client}
                </span>
              ))}
            </div>
          </motion.div>

          {/* 협력사 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-gray-400 inline-block" />
              주요 협력사
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {partners.map((partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-gray-50 text-gray-600 border border-gray-200"
                >
                  {partner}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
