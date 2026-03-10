import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import ContactInfoSection from "@/components/sections/contact/ContactInfoSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import { ContactInfo } from "@/types";

export const metadata: Metadata = {
  title: "Contact | 세현아이씨티",
  description: "세현아이씨티에 문의하세요. 전화, 이메일, 온라인 문의 폼을 통해 연락하실 수 있습니다.",
};

function getContact(): ContactInfo {
  const filePath = path.join(process.cwd(), "src/data/contact.json");
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

export default function ContactPage() {
  const contact = getContact();

  return (
    <>
      {/* 페이지 헤더 */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-500 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white">오시는 길 &amp; 문의</h1>
          <p className="mt-4 text-blue-100 text-lg max-w-xl mx-auto">
            IT 솔루션 도입, 제품 문의, 프로젝트 협력 등 무엇이든 편하게 연락주세요.
          </p>
        </div>
      </section>

      <ContactInfoSection contact={contact} />
      <ContactFormSection />
    </>
  );
}
