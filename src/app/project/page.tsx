import type { Metadata } from "next";
<<<<<<< HEAD
import fs from "fs";
import path from "path";
import ProjectListSection from "@/components/sections/project/ProjectListSection";
import ContactBanner from "@/components/sections/ContactBanner";
import { LocalProject } from "@/types";

export const metadata: Metadata = {
  title: "Project | 세현아이씨티",
  description: "세현아이씨티의 주요 프로젝트 수행 실적",
};

function getProjects(): LocalProject[] {
  const filePath = path.join(process.cwd(), "src/data/projects.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export default function ProjectPage() {
  const projects = getProjects();

=======
import ProjectListSection from "@/components/sections/project/ProjectListSection";
import ContactBanner from "@/components/sections/ContactBanner";

export const metadata: Metadata = {
  title: "Project | 세현아이씨티",
  description: "세현아이씨티의 주요 프로젝트 및 납품 실적",
};

export default function ProjectPage() {
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
  return (
    <>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Project</p>
<<<<<<< HEAD
          <h1 className="text-4xl sm:text-5xl font-bold text-white">프로젝트 실적</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            다양한 산업 분야에서 쌓아온 세현아이씨티의 프로젝트 수행 실적입니다.
=======
          <h1 className="text-4xl sm:text-5xl font-bold text-white">프로젝트</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            다양한 산업 분야에서 쌓아온 세현아이씨티의 프로젝트 실적입니다.
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
          </p>
        </div>
      </section>

<<<<<<< HEAD
      <ProjectListSection projects={projects} />
=======
      <ProjectListSection />
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
      <ContactBanner />
    </>
  );
}
