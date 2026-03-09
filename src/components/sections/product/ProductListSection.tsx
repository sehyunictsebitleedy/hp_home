"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Product } from "@/types";
import { urlFor } from "@/lib/sanity";

// Sanity 연결 전 임시 데이터
const placeholderProducts: Omit<Product, "_id" | "image">[] = [
  {
    name: "SmartGeoKit RMCP(Risk Monitoring Control Platform) Ver.1.0",
    slug: { current: "smart-factory-control" },
    description:
      "재해 복합 모니터링 지원 플랫폼<br />다양한 운영체제와 시스템 환경을 하나로 연계하여, 안정적인 실시간 모니터링과 유연한 맞춤형 커스터마이징을 제공하는 통합 운영 플랫폼입니다.",
    pdfFile: { asset: { url: "#" } },
    featured: true,
  },
  {
    name: "IoT 설비 모니터링 시스템",
    slug: { current: "iot-monitoring-system" },
    description:
      "산업용 IoT 센서와 엣지 컴퓨팅을 활용한 설비 상태 실시간 모니터링 및 예지보전 솔루션입니다. 이상 징후 조기 감지로 비계획적 설비 다운타임을 최소화합니다.",
    pdfFile: { asset: { url: "#" } },
    featured: true,
  },
  {
    name: "에너지 관리 시스템 (EMS)",
    slug: { current: "energy-management-system" },
    description:
      "공장·건물의 전력·가스·용수 사용량을 통합 계측하고 분석하여 에너지 비용을 절감하는 시스템입니다. 정부 에너지 진단 기준에 맞는 보고서를 자동 생성합니다.",
    featured: false,
  },
  {
    name: "생산실적 관리 시스템 (MES)",
    slug: { current: "mes-production-management" },
    description:
      "작업지시부터 완제품 출하까지 전 공정의 생산 실적을 실시간으로 집계·관리하는 MES 솔루션입니다. ERP 연동을 통해 생산·재고 정보를 일원화합니다.",
    pdfFile: { asset: { url: "#" } },
    featured: false,
  },
  {
    name: "품질검사 자동화 솔루션",
    slug: { current: "quality-inspection-automation" },
    description:
      "머신비전과 AI 딥러닝 기술을 결합한 외관 검사 자동화 솔루션입니다. 고속 라인에서도 미세 결함을 99% 이상의 정확도로 검출합니다.",
    featured: false,
  },
  {
    name: "스마트 물류 통합관리 플랫폼",
    slug: { current: "smart-logistics-platform" },
    description:
      "입·출고, 재고, 운송 전 과정을 하나의 플랫폼에서 관리하는 WMS/TMS 통합 솔루션입니다. 바코드·RFID·모바일 기기를 연동하여 물류 정확도와 효율을 높입니다.",
    featured: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface Props {
  products?: Product[];
}

export default function ProductListSection({ products }: Props) {
  const items = products ?? (placeholderProducts as unknown as Product[]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 섹션 헤더 */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
            Solutions &amp; Products
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            제품 · 솔루션
          </h2>
          <p className="mt-4 text-gray-500 text-base max-w-2xl">
            SmartGeoKit Series 제품들은 최신의 기술들을 사용하여 최적화 개발되었으며 2D GIS, 3D GIS, CAD Compare등 도면, 위치기반 업무의 표준화, 혁신을 선도합니다.<br />최신의 제품들과 업무 전문성으로 고객에게 다가가겠습니다.
          </p>
        </motion.div>

        {/* 제품 카드 그리드 */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {items.map((product) => (
            <motion.div
              key={product.slug.current}
              variants={itemVariants}
              className="flex flex-col rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              {/* 이미지 영역 */}
              <div className="relative h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                {product.image ? (
                  <Image
                    src={urlFor(product.image).width(600).height(400).url()}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <svg
                    className="w-16 h-16 text-blue-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                )}
              </div>

              {/* 텍스트 + 버튼 */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {product.description}
                </p>

                {/* PDF 다운로드 버튼 */}
                {product.pdfFile?.asset?.url && (
                  <a
                    href={product.pdfFile.asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    제품 소개서 다운로드 (PDF)
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
