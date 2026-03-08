import HeroSection from "@/components/sections/HeroSection";
import ValuesSection from "@/components/sections/ValuesSection";
import ProjectPreviewSection from "@/components/sections/ProjectPreviewSection";
import ProductPreviewSection from "@/components/sections/ProductPreviewSection";
import ContactBanner from "@/components/sections/ContactBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <ProjectPreviewSection />
      <ProductPreviewSection />
      <ContactBanner />
    </>
  );
}
