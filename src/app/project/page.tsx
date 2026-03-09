import type { Metadata } from "next";
import ProjectListSection from "@/components/sections/project/ProjectListSection";
import ContactBanner from "@/components/sections/ContactBanner";

export const metadata: Metadata = {
  title: "Project | 세현아이씨티",
  description: "세현아이씨티의 주요 프로젝트 및 납품 실적",
};

export default function ProjectPage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Project</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">프로젝트</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            다양한 산업 분야에서 쌓아온 세현아이씨티의 프로젝트 실적입니다.
          </p>
        </div>
      </section>

      <ProjectListSection />
      <ContactBanner />
    </>
  );
}
