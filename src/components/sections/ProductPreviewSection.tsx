"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { LocalProduct } from "@/types";

const placeholderProducts: LocalProduct[] = [
  {
    id: "1",
    name: "SmartGeoKit RMCP(Risk Monitoring Control Platform) Ver.1.0",
    slug: "smartgeokit-rmcp",
    description: "재해 복합 모니터링 지원 플랫폼. 다양한 운영체제와 시스템 환경을 하나로 연계하여 안정적인 실시간 모니터링을 제공하는 통합 운영 플랫폼입니다.",
    featured: true,
  },
  {
    id: "2",
    name: "SmartGeoKit AR Ver.1.0",
    slug: "smartgeokit-ar",
    description: "현장정보와 Digital 정보의 복합/중첩 구현 솔루션. 다양한 측위 기술을 활용해 현장 정보와 영상을 실시간 연계합니다.",
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
  products?: LocalProduct[];
}

export default function ProductPreviewSection({ products }: Props) {
  const items = products ?? placeholderProducts;

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
            <motion.div key={product.id} variants={itemVariants}>
              <Link
                href="/product"
                className="group flex flex-col sm:flex-row gap-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300"
              >
                {/* 이미지 */}
                <div className="relative w-full sm:w-32 h-32 shrink-0 rounded-xl overflow-hidden bg-white/10">
                  {product.image ? (
                    <Image
                      src={product.image}
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
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
