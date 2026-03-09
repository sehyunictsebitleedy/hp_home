"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface LocalProject {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image?: string;
  date: string;
}

const placeholderProjects: LocalProject[] = [
  {
    id: "1",
    title: "스마트팩토리 MES 구축",
    slug: "smart-factory-mes",
    category: "smart-factory",
    description: "제조 실행 시스템(MES) 구축을 통한 생산 공정 디지털화 및 실시간 모니터링 구현",
    date: "2024-06",
  },
  {
    id: "2",
    title: "IoT 설비 원격 모니터링",
    slug: "iot-monitoring",
    category: "iot",
    description: "공장 내 주요 설비에 IoT 센서를 설치하여 원격 모니터링 및 예지보전 시스템 구축",
    date: "2024-03",
  },
  {
    id: "3",
    title: "ERP 시스템 통합 SI",
    slug: "erp-si",
    category: "si",
    description: "기존 레거시 ERP 시스템을 최신 클라우드 기반으로 전환 및 타 시스템과의 통합 구축",
    date: "2023-11",
  },
];

const categoryLabel: Record<string, string> = {
  "smart-factory": "스마트팩토리",
  iot: "IoT",
  si: "SI",
  other: "기타",
};

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

export default function ProjectPreviewSection({ projects }: Props) {
  const items = projects ?? placeholderProjects;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Our Work</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">주요 프로젝트</h2>
          </div>
          <Link
            href="/project"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors shrink-0"
          >
            전체 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* 프로젝트 카드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                href={`/project`}
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
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-white/90 text-blue-700">
                      {categoryLabel[project.category] ?? project.category}
                    </span>
                  </div>
                </div>

                {/* 텍스트 영역 */}
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{project.description}</p>
                  {project.date && (
                    <p className="mt-3 text-xs text-gray-400">{project.date}</p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
