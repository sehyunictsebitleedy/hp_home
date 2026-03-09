import type { Metadata } from "next";
import ProductListSection from "@/components/sections/product/ProductListSection";
import ContactBanner from "@/components/sections/ContactBanner";

export const metadata: Metadata = {
  title: "Product | 세현아이씨티",
  description: "세현아이씨티의 스마트팩토리, IoT, MES 등 제품 및 솔루션 목록",
};

export default function ProductPage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Product
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            제품 · 솔루션
          </h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            세현아이씨티의 검증된 스마트 솔루션으로 현장의 디지털 전환을 실현하세요.
          </p>
        </div>
      </section>

      <ProductListSection />
      <ContactBanner />
    </>
  );
}
