"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LocalProject } from "@/types";

interface Props {
  projects: LocalProject[];
}

export default function ProjectListSection({ projects }: Props) {
  // 연도 목록 (내림차순)
  const years = Array.from(new Set(projects.map((p) => p.year))).sort(
    (a, b) => Number(b) - Number(a)
  );

  const [activeYear, setActiveYear] = useState(years[0] ?? "");

  const filtered = projects.filter((p) => p.year === activeYear);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.length === 0 ? (
          <div className="text-center py-24 text-gray-400">등록된 프로젝트가 없습니다.</div>
        ) : (
          <>
            {/* 연도 탭 */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-6">
              {years.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeYear === year
                      ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>

            {/* 카드 그리드 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="rounded-2xl border border-gray-100 overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300 group"
                  >
                    {/* 이미지 */}
                    <div className="relative h-44 bg-gradient-to-br from-blue-50 to-blue-100">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-14 h-14 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                      )}
                      {project.category && (
                        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-blue-700">
                          {project.category}
                        </span>
                      )}
                    </div>

                    {/* 텍스트 */}
                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-1.5 group-hover:text-blue-700 transition-colors leading-snug">
                        {project.title}
                      </h3>
                      {project.client && (
                        <p className="text-xs text-blue-500 font-medium mb-2">{project.client}</p>
                      )}
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* 건수 표시 */}
            <p className="mt-10 text-center text-sm text-gray-400">
              {activeYear}년 프로젝트 총 <span className="font-semibold text-gray-600">{filtered.length}</span>건
            </p>
          </>
        )}
      </div>
    </section>
  );
}
