import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import CompanyIntroSection from "@/components/sections/about/CompanyIntroSection";
import BusinessSection from "@/components/sections/about/BusinessSection";
import ClientsSection from "@/components/sections/about/ClientsSection";
import HistorySection from "@/components/sections/about/HistorySection";
import ContactBanner from "@/components/sections/ContactBanner";
import { HistoryItem } from "@/types";

export const metadata: Metadata = {
  title: "About | 세현아이씨티",
  description: "세현아이씨티 회사소개, 사업영역, 연혁, 주요 고객사 및 협력사",
};

function getHistory(): HistoryItem[] {
  const filePath = path.join(process.cwd(), "src/data/history.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export default function AboutPage() {
  const history = getHistory();

  return (
    <>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">About</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">세현아이씨티 소개</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            스마트 IT 기술로 고객의 가치를 창출하는 IT Solution Provider
          </p>
        </div>
      </section>

      <CompanyIntroSection />
      <BusinessSection />
      <ClientsSection />
      <HistorySection history={history} />
      <ContactBanner />
    </>
  );
}
