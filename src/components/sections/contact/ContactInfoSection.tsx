"use client";

import { motion } from "framer-motion";
import { ContactInfo } from "@/types";

interface Props {
  contact: ContactInfo;
}

export default function ContactInfoSection({ contact }: Props) {
  const { placeName, address, lat, lng, phone, fax, email, hours } = contact;

  const kakaoUrl = `https://map.kakao.com/link/map/${encodeURIComponent(placeName)},${lat},${lng}`;
  const naverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(address)}`;
  const googleMapEmbed = `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed&hl=ko`;

  return (
    <section>
      {/* 지도 영역 */}
      <div className="w-full h-[460px] relative bg-gray-100">
        <iframe
          src={googleMapEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${placeName} 위치`}
        />

        {/* 지도 위 주소 오버레이 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-md px-4"
        >
          <div className="bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs text-blue-600 font-semibold mb-0.5">{placeName}</p>
              <p className="text-sm text-gray-700 font-medium leading-snug truncate">{address}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 연락처 정보 */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {/* 주소 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0 }}
              className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">주소</p>
                <p className="text-sm text-gray-800 font-medium leading-relaxed">{address}</p>
              </div>
            </motion.div>

            {/* 전화 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">전화</p>
                <a href={`tel:${phone.replace(/-/g, "")}`} className="text-sm text-gray-800 font-medium hover:text-blue-600 transition-colors">
                  {phone}
                </a>
                {fax && (
                  <>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mt-2 mb-1">팩스</p>
                    <p className="text-sm text-gray-800 font-medium">{fax}</p>
                  </>
                )}
              </div>
            </motion.div>

            {/* 이메일 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">이메일</p>
                <a href={`mailto:${email}`} className="text-sm text-gray-800 font-medium hover:text-blue-600 transition-colors break-all">
                  {email}
                </a>
              </div>
            </motion.div>

            {/* 업무시간 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-col items-start gap-3 p-6 rounded-2xl border border-gray-100 bg-gray-50"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">업무시간</p>
                <p className="text-sm text-gray-800 font-medium leading-relaxed">{hours}</p>
              </div>
            </motion.div>
          </div>

          {/* 지도 앱 바로가기 버튼 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            <a
              href={kakaoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FEE500] text-[#3C1E1E] font-semibold text-sm hover:brightness-95 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 3C6.477 3 2 6.477 2 10.954c0 2.795 1.617 5.257 4.078 6.797L5.1 21.37a.5.5 0 00.742.53l4.94-3.285A11.3 11.3 0 0012 18.91c5.523 0 10-3.477 10-7.956C22 6.477 17.523 3 12 3z" />
              </svg>
              카카오맵으로 보기
            </a>
            <a
              href={naverUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#03C75A] text-white font-semibold text-sm hover:brightness-95 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" />
              </svg>
              네이버지도로 보기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
