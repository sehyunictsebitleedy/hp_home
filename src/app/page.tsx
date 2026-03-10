import fs from "fs";
import path from "path";
import HeroSection from "@/components/sections/HeroSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ProjectPreviewSection from "@/components/sections/ProjectPreviewSection";
import ProductPreviewSection from "@/components/sections/ProductPreviewSection";
import ContactBanner from "@/components/sections/ContactBanner";
import { LocalProject } from "@/types";

function getFeaturedProjects(): LocalProject[] {
  const filePath = path.join(process.cwd(), "src/data/projects.json");
  const all: LocalProject[] = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  return all.filter((p) => p.featured).slice(0, 3);
}

export default function Home() {
  const projects = getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <ValuesSection />
      <ProjectPreviewSection projects={projects} />
      <ProductPreviewSection />
      <ContactBanner />
    </>
  );
}
