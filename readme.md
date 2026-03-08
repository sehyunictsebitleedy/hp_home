# 세현아이씨티 홈페이지 리뉴얼

기존 홈페이지: http://sehyunict.com

---

## 기술 스택

| 항목 | 선택 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| 스타일 | Tailwind CSS v4 |
| 애니메이션 | Framer Motion |
| CMS | Sanity (next-sanity) |
| 이메일 전송 | Resend (Next.js API Route 연동) |
| 폼 | React Hook Form |
| 배포 | Vercel (예정) |

---

## 디자인 방향

- **참고 사이트**: https://u2clab.com/
- **톤**: 밝고 깔끔한 코퍼레이트
- **색상**: 화이트 기반 + 파란색 계열 그라디언트 포인트 컬러 (`#1d4ed8`)
- **폰트**: Pretendard (CDN)
- **레이아웃**: Sticky 헤더, 섹션 기반 스크롤
- **애니메이션**: 스크롤 진입 시 fade-in, 숫자 카운터 (CountUp)
- **반응형**: 모바일 우선
- **언어**: 한국어

---

## 메뉴 구조

- About
- Project
- Product
- Contact Us

---

## 페이지 & 섹션 구조

### / (홈)
- Hero — 슬로건 + 그라디언트 텍스트 + CTA 버튼 (프로젝트 보기 / 문의하기) + 스크롤 힌트
- 핵심가치 — 스마트솔루션 / 고객가치창출 / 신뢰와전문성 3카드 그리드
- Project 미리보기 — 최근 프로젝트 카드 3개
- Product 미리보기 — 파란 배경 제품 카드 2개
- Contact 배너 — 그라디언트 배너 + 문의하기 / 전화 버튼

### /about ✅ 완료
- 페이지 헤더 — 파란 그라디언트 배경
- 회사소개 — 소개 텍스트 + 수치 카운터 (설립연도 / 프로젝트 수 / 고객사 / 협력사)
- 사업영역 — 6대 분야 카드 그리드 (기존 business 페이지 내용)
- 고객사/협력사 — 태그 형태 (고객사 13개, 협력사 9개)
- 연혁 — 좌우 교차 타임라인 (2010~2024, 임시데이터 → Sanity 연결 후 교체 예정)
- Contact 배너

### /project (미구현)
- 페이지 헤더
- 프로젝트 목록 (카드 그리드)
- 분야별 필터

### /product (미구현)
- 페이지 헤더
- 제품/솔루션 목록
- PDF 다운로드

### /contact (미구현)
- 페이지 헤더
- 연락처 정보 + 지도
- 문의 폼 (Resend 이메일 전송)

---

## 폴더 구조

```
src/
├── app/
│   ├── about/page.tsx
│   ├── project/          (미구현)
│   ├── product/          (미구현)
│   ├── contact/          (미구현)
│   ├── api/contact/      (미구현 - Resend 이메일 API)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── ProjectPreviewSection.tsx
│   │   ├── ProductPreviewSection.tsx
│   │   ├── ContactBanner.tsx
│   │   └── about/
│   │       ├── CompanyIntroSection.tsx
│   │       ├── BusinessSection.tsx
│   │       ├── ClientsSection.tsx
│   │       └── HistorySection.tsx
│   └── ui/
│       └── CountUp.tsx
├── lib/
│   └── sanity.ts
├── sanity/
│   └── schemas/
│       ├── project.ts
│       ├── product.ts
│       └── company.ts
└── types/
    └── index.ts
```

---

## Sanity CMS 스키마

| 스키마 | 필드 |
|--------|------|
| 프로젝트 | 제목, 분야, 설명, 이미지, 날짜, 홈노출 여부 |
| 제품 | 이름, 설명, 이미지, PDF 파일, 홈노출 여부 |
| 회사정보 | 비전, 미션, 소개, 수치 데이터, 연혁 |

---

## 환경변수 (.env.local)

```
NEXT_PUBLIC_SANITY_PROJECT_ID=   ← sanity.io에서 프로젝트 생성 후 입력
NEXT_PUBLIC_SANITY_DATASET=production
RESEND_API_KEY=                  ← resend.com에서 발급
CONTACT_EMAIL=asset.manager@sehyunict.com
```

---

## 남은 작업

- [ ] /project 페이지 구현
- [ ] /product 페이지 구현
- [ ] /contact 페이지 + 문의 폼 (Resend 연동)
- [ ] Sanity 프로젝트 생성 및 Project ID 입력
- [ ] Sanity Studio 설정 (/studio 라우트)
- [ ] 임시 데이터 → Sanity 연동으로 교체
- [ ] Vercel 배포
