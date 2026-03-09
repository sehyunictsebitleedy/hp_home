import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import ProductListSection from "@/components/sections/product/ProductListSection";
import ContactBanner from "@/components/sections/ContactBanner";
import { LocalProduct } from "@/types";

export const metadata: Metadata = {
  title: "Product | 세현아이씨티",
  description: "세현아이씨티의 SmartGeoKit 제품 및 솔루션 목록",
};

function getProducts(): LocalProduct[] {
  const filePath = path.join(process.cwd(), "src/data/products.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export default function ProductPage() {
  const products = getProducts();

  return (
    <>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">
            Product
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            SmartGeoKit ServiceLine
          </h1>
          <p className="mt-4 text-blue-100 text-lg mx-auto">
            스마트 IT 기술로 고객의 가치를 창출하는 IT Solution Provider
          </p>
        </div>
      </section>

      <ProductListSection products={products} />
      <ContactBanner />
    </>
  );
}
