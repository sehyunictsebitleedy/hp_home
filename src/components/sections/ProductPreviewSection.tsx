"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { urlFor } from "@/lib/sanity";

// Sanity 연결 전 임시 데이터
const placeholderProducts: Omit<Product, "_id" | "image">[] = [
  {
    name: "스마트팩토리 통합관제 솔루션",
    slug: { current: "smart-factory-control" },
    description: "생산 현장의 모든 데이터를 실시간으로 수집·분석하여 최적의 생산 환경을 구현하는 통합 플랫폼",
    featured: true,
  },
  {
    name: "IoT 설비 모니터링 시스템",
    slug: { current: "iot-monitoring-system" },
    description: "산업용 IoT 센서와 엣지 컴퓨팅을 활용한 설비 상태 실시간 모니터링 및 예지보전 솔루션",
    featured: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface Props {
  products?: Product[];
}

export default function ProductPreviewSection({ products }: Props) {
  const items = products ?? (placeholderProducts as unknown as Product[]);

  return (
    <section className="py-24 bg-blue-700">
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
            <span className="text-sm font-semibold text-blue-200 uppercase tracking-widest">Our Products</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-white">주요 제품</h2>
          </div>
          <Link
            href="/product"
            className="text-sm font-semibold text-blue-200 hover:text-white flex items-center gap-1 transition-colors shrink-0"
          >
            전체 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>

        {/* 제품 카드 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((product) => (
            <motion.div key={product.slug.current} variants={itemVariants}>
              <Link
                href={`/product/${product.slug.current}`}
                className="group flex flex-col sm:flex-row gap-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300"
              >
                {/* 이미지 */}
                <div className="relative w-full sm:w-32 h-32 shrink-0 rounded-xl overflow-hidden bg-white/10">
                  {product.image ? (
                    <Image
                      src={urlFor(product.image).width(300).height(300).url()}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* 텍스트 */}
                <div className="flex flex-col justify-center">
                  <h3 className="font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-blue-200 leading-relaxed line-clamp-2">{product.description}</p>
                  {product.pdfFile && (
                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-blue-300">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      PDF 자료 있음
                    </span>
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
