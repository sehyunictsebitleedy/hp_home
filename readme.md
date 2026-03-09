# 세현아이씨티 홈페이지 리뉴얼

기존 홈페이지: http://sehyunict.com

---

## 기술 스택

| 항목 | 선택 |
|------|------|
| 프레임워크 | Next.js 16 (App Router) |
| 스타일 | Tailwind CSS v4 |
| 애니메이션 | Framer Motion |
| 데이터 | JSON 파일 (`src/data/`) + 자체 관리자 페이지 |
| 이메일 전송 | Resend (Next.js API Route 연동) |
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
- SEbitAI (외부 새창 링크 — URL 미정)

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
- 사업영역 — 6대 분야 카드 그리드
- 고객사/협력사 — 태그 형태 (고객사 13개, 협력사 9개)
- 연혁 — 좌우 교차 타임라인 (2010~2024)
- Contact 배너

### /product ✅ 완료
- 페이지 헤더 — 파란 그라디언트 배경 (SmartGeoKit ServiceLine)
- 제품/솔루션 목록 카드 그리드 (`src/data/products.json` 연동)
- 제품 소개서 통합 PDF 다운로드 버튼 (섹션 헤더 우측)
- Contact 배너

### /project (미구현)
- 페이지 헤더
- 프로젝트 목록 (카드 그리드)
- 분야별 필터

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
│   ├── product/page.tsx
│   ├── project/              (미구현)
│   ├── contact/              (미구현)
│   ├── admin/
│   │   ├── page.tsx          ← 관리자 로그인
│   │   └── dashboard/page.tsx ← 제품 관리 대시보드
│   ├── api/
│   │   ├── admin/
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   └── products/
│   │   │       ├── route.ts      ← GET / POST
│   │   │       └── [id]/route.ts ← PUT / DELETE
│   │   └── contact/          (미구현 - Resend 이메일 API)
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
│   │   ├── product/
│   │   │   └── ProductListSection.tsx
│   │   └── about/
│   │       ├── CompanyIntroSection.tsx
│   │       ├── BusinessSection.tsx
│   │       ├── ClientsSection.tsx
│   │       └── HistorySection.tsx
│   └── ui/
│       └── CountUp.tsx
├── data/
│   └── products.json         ← 제품 데이터 (관리자 페이지에서 수정)
├── middleware.ts              ← /admin/dashboard 접근 보호
└── types/
    └── index.ts
```

---

## 관리자 페이지

### 접속 방법

개발 서버 실행 후 브라우저에서 접속:

```
http://localhost:3000/admin
```

### 비밀번호

`.env.local`의 `ADMIN_PASSWORD` 값 사용 (기본값: `sehyun1234`)

### 기능

| 필드 | 설명 |
|------|------|
| 제품명 | 필수 |
| 설명 | 카드에 표시되는 제품 설명 |
| 이미지 URL | 외부 이미지 URL (없으면 기본 아이콘 표시) |
| PDF URL | 제품별 개별 PDF 링크 (선택) |
| 홈 화면 노출 | 체크 시 홈 ProductPreview 섹션에 노출 |

- 추가 / 수정 / 삭제
- 변경 내용은 `src/data/products.json`에 즉시 저장
- PDF URL 등록 시 목록에 `PDF` 뱃지 표시

### 운영 방식 (로컬 → 배포)

1. 로컬에서 `npm run dev` 실행
2. `http://localhost:3000/admin` 에서 제품 추가/수정
3. `git add src/data/products.json && git commit && git push`
4. Vercel 자동 배포 → 프로덕션 반영

> ⚠️ Vercel 배포 환경에서는 파일 시스템 쓰기가 불가능합니다.
> 제품 데이터 수정은 **로컬에서 작업 후 커밋**하는 방식으로 운영합니다.

---

## 환경변수 (.env.local)

```
RESEND_API_KEY=          ← resend.com에서 발급
CONTACT_EMAIL=leedy@sehyunict.com
ADMIN_PASSWORD=          ← 관리자 페이지 비밀번호
ADMIN_SESSION_TOKEN=     ← 세션 토큰 (임의 문자열)
```

---

## 남은 작업

- [ ] /project 페이지 구현
- [ ] /contact 페이지 + 문의 폼 (Resend 연동)
- [ ] Vercel 배포
