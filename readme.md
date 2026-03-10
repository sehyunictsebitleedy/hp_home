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

- **참고 사이트**: https://u2clab.com/ / https://www.hyungji-elite.com/
- **톤**: 밝고 깔끔한 코퍼레이트
- **색상**: 화이트 기반 + 파란색 계열 그라디언트 포인트 컬러 (`#1d4ed8`)
- **폰트**: Pretendard (CDN)
- **레이아웃**: Sticky 헤더, 섹션 기반 스크롤
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

## 페이지 구조

### / (홈)
- Hero — 슬로건 + CTA 버튼 (프로젝트 보기 / 문의하기)
- 핵심가치 — 3카드 그리드
- Project 미리보기 — `projects.json`의 `featured: true` 항목 최대 3개
- Product 미리보기 — `products.json`의 `featured: true` 항목
- Contact 배너

### /about
- 회사소개 + 수치 카운터 (설립연도 / 프로젝트 수 / 고객사 / 협력사)
- 사업영역 — 6대 분야 카드
- 고객사·협력사 태그
- 연혁 타임라인 — `history.json` 연동 (2013~2025), 관리자에서 편집 가능

### /project
- 연도 탭 (전체 / 2024 / 2023 / ... 자동 생성) + 건수 표시
- 프로젝트 카드 그리드 — 분야 뱃지, 고객사, 연도 배지
- 데이터: `src/data/projects.json`

### /product
- 제품/솔루션 카드 그리드 — `src/data/products.json` 연동
- 제품 소개서 통합 PDF 다운로드 버튼

### /contact
- Google Maps embed (위도/경도 관리자에서 변경 가능)
- 연락처 카드 — 주소 / 전화 / 이메일 / 업무시간
- 카카오맵 / 네이버지도 바로가기 링크
- 문의 폼 — Resend 이메일 전송

---

## 폴더 구조

```
src/
├── app/
│   ├── about/page.tsx
│   ├── product/page.tsx
│   ├── project/page.tsx                    ← fs로 projects.json 읽어 컴포넌트에 전달
│   ├── contact/page.tsx                    ← fs로 contact.json 읽어 컴포넌트에 전달
│   ├── admin/
│   │   ├── page.tsx                        ← 관리자 로그인
│   │   └── dashboard/page.tsx              ← 관리자 대시보드 (탭 4개)
│   ├── api/
│   │   ├── admin/
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   ├── products/
│   │   │   │   ├── route.ts                ← GET / POST
│   │   │   │   └── [id]/route.ts           ← PUT / DELETE
│   │   │   ├── projects/
│   │   │   │   ├── route.ts                ← GET / POST
│   │   │   │   └── [id]/route.ts           ← PUT / DELETE
│   │   │   ├── history/
│   │   │   │   ├── route.ts                ← GET / POST
│   │   │   │   └── [id]/route.ts           ← PUT / DELETE
│   │   │   └── contact/
│   │   │       └── route.ts                ← GET / PUT
│   │   └── contact/
│   │       └── route.ts                    ← Resend 이메일 전송
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
│   │   ├── about/
│   │   │   ├── CompanyIntroSection.tsx
│   │   │   ├── BusinessSection.tsx
│   │   │   ├── ClientsSection.tsx
│   │   │   └── HistorySection.tsx
│   │   ├── project/
│   │   │   └── ProjectListSection.tsx      ← 연도 탭 + 카드 그리드
│   │   ├── product/
│   │   │   └── ProductListSection.tsx
│   │   └── contact/
│   │       ├── ContactInfoSection.tsx      ← 지도 + 연락처 카드
│   │       └── ContactFormSection.tsx      ← 문의 폼
│   └── ui/
│       └── CountUp.tsx
├── data/
│   ├── products.json                       ← 제품 (관리자 탭1)
│   ├── projects.json                       ← 프로젝트 (관리자 탭2)
│   ├── history.json                        ← 연혁 2013~2025 (관리자 탭3)
│   └── contact.json                        ← 위치·연락처 (관리자 탭4)
├── middleware.ts                           ← /admin/dashboard 세션 보호
└── types/
    └── index.ts                            ← LocalProduct, LocalProject, HistoryItem, ContactInfo
```

---

## 관리자 페이지

### 접속 방법

```
1. npm run dev 실행
2. http://localhost:3000/admin 접속
3. 비밀번호 입력 (.env.local의 ADMIN_PASSWORD, 기본값: sehyun1234)
4. 로그인 후 대시보드 자동 이동
```

> 미로그인 상태에서 `/admin/dashboard` 직접 접근 시 `middleware.ts`가 로그인 페이지로 리다이렉트

---

### 탭 1 — 제품 관리

| 필드 | 필수 | 설명 |
|------|------|------|
| 제품명 | ✅ | 카드 제목 |
| 설명 | | 카드 설명 |
| 이미지 URL | | 없으면 기본 아이콘 |
| PDF URL | | 등록 시 `PDF` 뱃지 표시 |
| 홈 화면 노출 | | 홈 제품 미리보기에 노출 |

### 탭 2 — 프로젝트 관리

| 필드 | 필수 | 설명 |
|------|------|------|
| 연도 | ✅ | `/project` 연도 탭 구분 기준 |
| 분야 | | 카드 뱃지 (스마트팩토리, GIS, SI 등) |
| 프로젝트명 | ✅ | 카드 제목 |
| 고객사 | | 카드에 표시 |
| 설명 | | 카드 설명 (2줄 말줄임) |
| 이미지 URL | | 카드 썸네일 |
| 홈 화면 노출 | | 홈 프로젝트 미리보기에 노출 (최대 3개) |

### 탭 3 — 연혁 관리

| 필드 | 필수 | 설명 |
|------|------|------|
| 연도 | ✅ | 중복 불가, 수정 후 변경 불가 |
| 주요 내용 | | 항목 여러 개, `+` / `X` 버튼으로 추가·삭제 |

### 탭 4 — 위치 설정

| 필드 | 필수 | 설명 |
|------|------|------|
| 장소명 | ✅ | 지도 카드에 표시 |
| 표시 주소 | ✅ | 연락처 카드 주소 |
| 위도 | ✅ | Google Maps embed 좌표 |
| 경도 | ✅ | Google Maps embed 좌표 |
| 전화번호 | | 전화 카드 |
| 팩스 | | 없으면 숨김 |
| 이메일 | | `mailto:` 링크 |
| 업무시간 | | 시계 아이콘 카드 |

> 위도/경도: [maps.google.com](https://maps.google.com) → 위치 우클릭 → "이 위치" 클릭 → 숫자 복사

---

### 운영 방식 (로컬 → 배포)

1. 로컬에서 `npm run dev` 실행
2. `http://localhost:3000/admin` 에서 데이터 수정
3. `git add src/data/ && git commit && git push`
4. Vercel 자동 배포 → 프로덕션 반영

> ⚠️ Vercel 배포 환경에서는 파일 시스템 쓰기가 불가능합니다.
> 데이터 수정은 **로컬에서 작업 후 커밋**하는 방식으로 운영합니다.

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

- [ ] Vercel 배포
- [ ] SEbitAI 외부 링크 URL 확정
- [ ] RESEND_API_KEY 발급 및 이메일 발신 도메인 설정
- [ ] 실제 위도/경도 값 확인 및 contact.json 업데이트
