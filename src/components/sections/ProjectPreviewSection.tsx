"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
