"use client";

import { motion } from "framer-motion";
import Link from "next/link";
<<<<<<< HEAD
import projectsData from "@/data/projects.json";

const recent = projectsData
  .slice()
  .sort((a, b) => Number(b.year) - Number(a.year))
  .slice(0, 4);

const categoryColors: Record<string, string> = {
  스마트팩토리: "bg-blue-50 text-blue-700",
  GIS: "bg-indigo-50 text-indigo-700",
  SI: "bg-purple-50 text-purple-700",
  "방재/재난": "bg-red-50 text-red-700",
  솔루션: "bg-green-50 text-green-700",
  모니터링: "bg-orange-50 text-orange-700",
  모바일: "bg-cyan-50 text-cyan-700",
};

export default function ProjectPreviewSection() {
  const [featured, ...rest] = recent;
  const sideItems = rest.slice(0, 3);

=======
import Image from "next/image";
import { LocalProject } from "@/types";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface Props {
  projects?: LocalProject[];
}

export default function ProjectPreviewSection({ projects = [] }: Props) {
>>>>>>> origin/now_work
  return (
    <section className="py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 섹션 헤더 */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="block text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3">
              Our Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-950 leading-tight tracking-tight">
              주요 프로젝트
            </h2>
          </div>
          <Link
            href="/project"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-blue-700 transition-colors shrink-0 pb-1"
          >
            전체 보기
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

<<<<<<< HEAD
        {/* 비대칭 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* 피처 카드 (좌측 대형) */}
          {featured && (
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <Link href="/project" className="group block h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500">
                {/* 이미지 영역 */}
                <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden">
                  <div className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                    </svg>
                  </div>
                  <div className="absolute top-5 left-5">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[featured.category] ?? "bg-white/20 text-white"}`}>
                      {featured.category}
                    </span>
                  </div>
                  <div className="absolute bottom-5 right-5 text-white/40 text-6xl font-bold leading-none select-none">
                    {featured.year}
                  </div>
                </div>

                {/* 텍스트 */}
                <div className="p-8">
                  <p className="text-xs text-gray-400 mb-2">{featured.client}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                    {featured.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600">
                    자세히 보기
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* 사이드 카드 (우측 3개) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {sideItems.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              >
                <Link href="/project" className="group flex gap-4 bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                  {/* 연도 아이콘 */}
                  <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-700 font-bold text-sm group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
                    {project.year}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${categoryColors[project.category] ?? "bg-gray-100 text-gray-500"}`}>
                        {project.category}
                      </span>
                      <span className="text-xs text-gray-400 truncate">{project.client}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors duration-300">
                      {project.title}
                    </h3>
=======
        {projects.length === 0 ? (
          <p className="text-center text-gray-400 py-12">등록된 프로젝트가 없습니다.</p>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Link
                  href="/project"
                  className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  {/* 이미지 영역 */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-16 h-16 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                    )}
                    {project.category && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-blue-700">
                          {project.category}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* 텍스트 영역 */}
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h3>
                    {project.client && (
                      <p className="text-xs text-blue-500 font-medium mb-1">{project.client}</p>
                    )}
                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{project.description}</p>
                    {project.year && (
                      <p className="mt-3 text-xs text-gray-400">{project.year}</p>
                    )}
>>>>>>> origin/now_work
                  </div>
                </Link>
              </motion.div>
            ))}
<<<<<<< HEAD
          </div>
        </div>
=======
          </motion.div>
        )}
>>>>>>> origin/now_work
      </div>
    </section>
  );
}
