"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { LocalProject } from "@/types";

interface Props {
  projects: LocalProject[];
}

const categoryColors: Record<string, string> = {
  "스마트팩토리": "bg-blue-50 text-blue-700",
  "GIS": "bg-indigo-50 text-indigo-700",
  "SI": "bg-purple-50 text-purple-700",
  "방재/재난": "bg-red-50 text-red-700",
  "솔루션": "bg-green-50 text-green-700",
  "모니터링": "bg-orange-50 text-orange-700",
  "모바일": "bg-cyan-50 text-cyan-700",
  "디지털트윈": "bg-violet-50 text-violet-700",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ProjectListSection({ projects }: Props) {
  const years = useMemo(() => {
    const all = [...new Set(projects.map((p) => p.year))].sort((a, b) => Number(b) - Number(a));
    return ["전체", ...all];
  }, [projects]);

  const [activeYear, setActiveYear] = useState("전체");

  const filtered = useMemo(
    () => (activeYear === "전체" ? projects : projects.filter((p) => p.year === activeYear)),
    [activeYear, projects]
  );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {projects.length === 0 ? (
          <div className="text-center py-24 text-gray-400">등록된 프로젝트가 없습니다.</div>
        ) : (
          <>
            {/* 연도별 탭 */}
            <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-100 pb-6">
              {years.map((year) => {
                const count = year === "전체" ? projects.length : projects.filter((p) => p.year === year).length;
                return (
                  <button
                    key={year}
                    onClick={() => setActiveYear(year)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeYear === year
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {year}
                    {activeYear === year && (
                      <span className="ml-1.5 text-blue-200 text-xs">{count}건</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* 프로젝트 카드 그리드 */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md hover:border-blue-100 transition-all duration-300"
                  >
                    {/* 이미지 영역 */}
                    <div className="relative h-44 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
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
                      {/* 연도 배지 */}
                      <div className="absolute top-3 right-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-600">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* 텍스트 */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${categoryColors[project.category] ?? "bg-gray-100 text-gray-600"}`}>
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-400">{project.client}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-gray-400">해당 연도의 프로젝트가 없습니다.</div>
            )}

            <p className="mt-10 text-center text-sm text-gray-400">
              총 <span className="font-semibold text-gray-600">{filtered.length}</span>건
            </p>
          </>
        )}
      </div>
    </section>
  );
}
