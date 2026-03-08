import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "세현아이씨티 | Leader of Smarter World",
  description: "스마트 IT 기술 기반의 IT Solution Provider Group. 최적의 스마트 솔루션 제공 서비스를 통한 고객 가치창출.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
