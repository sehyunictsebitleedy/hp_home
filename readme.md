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

### / (홈) ✅ 완료
- Hero — 슬로건 + 그라디언트 텍스트 + CTA 버튼 (프로젝트 보기 / 문의하기) + 스크롤 힌트
- 핵심가치 — 스마트솔루션 / 고객가치창출 / 신뢰와전문성 3카드 그리드
- Project 미리보기 — `projects.json`의 featured 프로젝트 최대 3개
- Product 미리보기 — `products.json`의 featured 제품
- Contact 배너 — 그라디언트 배너 + 문의하기 / 전화 버튼

### /about ✅ 완료
- 페이지 헤더 — 파란 그라디언트 배경
- 회사소개 — 소개 텍스트 + 수치 카운터 (설립연도 / 프로젝트 수 / 고객사 / 협력사)
- 사업영역 — 6대 분야 카드 그리드
- 고객사/협력사 — 태그 형태 (고객사 13개, 협력사 9개)
- 연혁 — 좌우 교차 타임라인 (2013~2025, `history.json` 연동, 관리자에서 편집 가능)
- Contact 배너

### /product ✅ 완료
- 페이지 헤더 — 파란 그라디언트 배경 (SmartGeoKit ServiceLine)
- 제품/솔루션 목록 카드 그리드 (`src/data/products.json` 연동)
- 제품 소개서 통합 PDF 다운로드 버튼 (섹션 헤더 우측)
- Contact 배너

### /project ✅ 완료
- 페이지 헤더 — 파란 그라디언트 배경
<<<<<<< HEAD
- 연도 탭 — 연도별 프로젝트 필터 (동적 생성, `projects.json` 연동)
- 프로젝트 카드 그리드 — 제목 / 분야 / 고객사 / 설명
=======
- 연도별 탭 (전체 / 2024 / 2023 / ... 자동 생성) + 건수 표시
- 프로젝트 카드 그리드 — 분야 뱃지, 고객사, 연도 배지
- 데이터: `src/data/projects.json`
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
- Contact 배너

### /contact ✅ 완료
- 페이지 헤더 — 파란 그라디언트 배경
- 지도 — Google Maps embed (위도/경도 관리자에서 변경 가능, `contact.json` 연동)
- 연락처 정보 카드 — 주소 / 전화 / 이메일 / 업무시간
- 지도 앱 바로가기 — 카카오맵 / 네이버지도 링크
- 문의 폼 — 이름 / 회사 / 연락처 / 이메일 / 내용 (Resend 이메일 전송)

---

## 폴더 구조

```
src/
├── app/
<<<<<<< HEAD
│   ├── about/
│   │   └── page.tsx                        ← About 페이지
│   ├── product/
│   │   └── page.tsx                        ← Product 페이지
│   ├── project/
│   │   └── page.tsx                        ← Project 페이지 (연도 탭)
│   ├── contact/
│   │   └── page.tsx                        ← Contact 페이지
│   ├── admin/
│   │   ├── page.tsx                        ← 관리자 로그인
│   │   └── dashboard/
│   │       └── page.tsx                    ← 관리자 대시보드 (탭 4개)
│   ├── api/
│   │   ├── admin/
│   │   │   ├── login/route.ts              ← 로그인 (쿠키 세션 발급)
│   │   │   ├── logout/route.ts             ← 로그아웃 (쿠키 삭제)
│   │   │   ├── products/
│   │   │   │   ├── route.ts                ← GET(목록) / POST(추가)
│   │   │   │   └── [id]/route.ts           ← PUT(수정) / DELETE(삭제)
│   │   │   ├── projects/
│   │   │   │   ├── route.ts                ← GET(목록) / POST(추가)
│   │   │   │   └── [id]/route.ts           ← PUT(수정) / DELETE(삭제)
│   │   │   ├── history/
│   │   │   │   ├── route.ts                ← GET(목록) / POST(연도 추가)
│   │   │   │   └── [id]/route.ts           ← PUT(수정) / DELETE(삭제)
│   │   │   └── contact/
│   │   │       └── route.ts                ← GET(조회) / PUT(위치·연락처 수정)
│   │   └── contact/
│   │       └── route.ts                    ← Resend 이메일 전송 API
│   ├── layout.tsx                          ← 공통 레이아웃 (Header, Footer)
│   ├── page.tsx                            ← 홈 페이지
│   ├── globals.css
│   └── favicon.ico
=======
│   ├── about/page.tsx
│   ├── product/page.tsx
│   ├── project/page.tsx
│   ├── contact/              (미구현)
│   ├── admin/
│   │   ├── page.tsx          ← 관리자 로그인
│   │   └── dashboard/page.tsx ← 프로젝트/제품 관리 대시보드 (탭)
│   ├── api/
│   │   ├── admin/
│   │   │   ├── login/route.ts
│   │   │   ├── logout/route.ts
│   │   │   ├── products/
│   │   │   │   ├── route.ts      ← GET / POST
│   │   │   │   └── [id]/route.ts ← PUT / DELETE
│   │   │   └── projects/
│   │   │       ├── route.ts      ← GET / POST
│   │   │       └── [id]/route.ts ← PUT / DELETE
│   │   └── contact/          (미구현 - Resend 이메일 API)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
├── components/
│   ├── layout/
│   │   ├── Header.tsx                      ← Sticky 헤더, 모바일 메뉴
│   │   └── Footer.tsx
│   ├── sections/
<<<<<<< HEAD
│   │   ├── HeroSection.tsx                 ← 홈 히어로
│   │   ├── ValuesSection.tsx               ← 홈 핵심가치
│   │   ├── ProjectPreviewSection.tsx       ← 홈 프로젝트 미리보기
│   │   ├── ProductPreviewSection.tsx       ← 홈 제품 미리보기
│   │   ├── ContactBanner.tsx               ← 공통 하단 CTA 배너
│   │   ├── about/
│   │   │   ├── CompanyIntroSection.tsx     ← 회사소개 + 수치 카운터
│   │   │   ├── BusinessSection.tsx         ← 사업영역 6대 분야
│   │   │   ├── ClientsSection.tsx          ← 고객사·협력사 태그
│   │   │   └── HistorySection.tsx          ← 연혁 타임라인 (history.json)
=======
│   │   ├── HeroSection.tsx
│   │   ├── ValuesSection.tsx
│   │   ├── ProjectPreviewSection.tsx
│   │   ├── ProductPreviewSection.tsx
│   │   ├── ContactBanner.tsx
│   │   ├── project/
│   │   │   └── ProjectListSection.tsx  ← 연도별 탭 + 카드 그리드
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
│   │   ├── product/
│   │   │   └── ProductListSection.tsx      ← 제품 카드 그리드 (products.json)
│   │   ├── project/
│   │   │   └── ProjectListSection.tsx      ← 연도 탭 + 프로젝트 카드 (projects.json)
│   │   └── contact/
│   │       ├── ContactInfoSection.tsx      ← 지도 + 연락처 카드 + 지도앱 링크
│   │       └── ContactFormSection.tsx      ← 문의 폼 (Resend 연동)
│   └── ui/
│       └── CountUp.tsx                     ← 숫자 카운트업 애니메이션
├── data/
<<<<<<< HEAD
│   ├── products.json                       ← 제품 데이터 (관리자 탭1)
│   ├── projects.json                       ← 프로젝트 데이터 (관리자 탭2)
│   ├── history.json                        ← 연혁 데이터 2013~2025 (관리자 탭3)
│   └── contact.json                        ← 위치·연락처 데이터 (관리자 탭4)
├── middleware.ts                            ← /admin/dashboard 세션 접근 보호
└── types/
    └── index.ts                            ← LocalProduct, LocalProject,
                                               HistoryItem, ContactInfo 타입 정의
=======
│   ├── products.json         ← 제품 데이터 (관리자 페이지에서 수정)
│   └── projects.json         ← 프로젝트 데이터 (관리자 페이지에서 수정)
├── middleware.ts              ← /admin/dashboard 접근 보호
└── types/
    └── index.ts              ← LocalProject, LocalProduct 등
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
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

<<<<<<< HEAD
### 탭 1 — 제품 관리 (`products.json`)

제품 목록을 관리합니다. `/product` 페이지와 홈 제품 미리보기 섹션에 반영됩니다.

| 필드 | 필수 | 설명 |
|------|------|------|
| 제품명 | ✅ | 카드 제목 |
| 설명 | | 카드에 표시되는 제품 설명 |
| 이미지 URL | | 외부 이미지 URL (없으면 기본 아이콘) |
| PDF URL | | 제품별 개별 소개서 PDF 링크, 등록 시 `PDF` 뱃지 표시 |
| 홈 화면 노출 | | 체크 시 홈 제품 미리보기 섹션에 노출 |

**동작**: 추가 / 수정 / 삭제 → `src/data/products.json` 즉시 저장

---

### 탭 2 — 프로젝트 관리 (`projects.json`)

프로젝트 수행 실적을 관리합니다. `/project` 페이지(연도 탭)와 홈 프로젝트 미리보기에 반영됩니다.

| 필드 | 필수 | 설명 |
|------|------|------|
| 연도 | ✅ | `/project` 페이지 연도 탭 구분 기준 |
| 분야 | | 카드 뱃지 표시 (스마트팩토리, IoT, SI 등) |
| 프로젝트명 | ✅ | 카드 제목 |
| 고객사 | | 카드에 파란색으로 표시 |
| 설명 | | 카드 설명 (2줄 말줄임) |
| 이미지 URL | | 카드 상단 썸네일 |
| 홈 화면 노출 | | 체크 시 홈 프로젝트 미리보기에 노출 (최대 3개) |

**동작**: 연도별 필터 / 추가 / 수정 / 삭제 → `src/data/projects.json` 즉시 저장

---

### 탭 3 — 연혁 관리 (`history.json`)

About 페이지의 연혁 타임라인을 관리합니다.

| 필드 | 필수 | 설명 |
|------|------|------|
| 연도 | ✅ | 타임라인 연도 (중복 불가, 수정 불가) |
| 주요 내용 | | 항목 여러 개 입력 가능, `+` 버튼으로 추가, `X` 버튼으로 개별 삭제 |

**동작**: 추가 / 수정 / 삭제 → `src/data/history.json` 즉시 저장, 자동 내림차순 정렬

---

### 탭 4 — 위치 설정 (`contact.json`)

Contact 페이지의 지도 위치와 연락처 정보를 관리합니다.

**지도 위치**

| 필드 | 필수 | 설명 |
|------|------|------|
| 장소명 | ✅ | 지도 오버레이 카드에 표시 |
| 표시 주소 | ✅ | 연락처 카드 주소란에 표시 |
| 위도 (Latitude) | ✅ | Google Maps embed 좌표 |
| 경도 (Longitude) | ✅ | Google Maps embed 좌표 |

> 위도/경도 찾는 법: [maps.google.com](https://maps.google.com) → 위치 우클릭 → "이 위치" 클릭 → 숫자 복사

**연락처 정보**
=======
### 탭 구성

- **프로젝트 관리** (기본 탭)
- **제품 관리**

### 프로젝트 관리 필드

| 필드 | 설명 |
|------|------|
| 프로젝트명 | 필수 |
| 연도 | 필수, 기본값: 현재연도 |
| 분야 | 드롭다운 선택 (스마트팩토리/GIS/SI/방재·재난 등) |
| 고객사 | 고객사명 |
| 설명 | 카드에 표시되는 설명 |
| 이미지 URL | 없으면 연도 텍스트 표시 |

### 제품 관리 필드
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128

| 필드 | 설명 |
|------|------|
| 전화번호 | 전화 아이콘 카드 + 우상단 전화 버튼 |
| 팩스 | 전화 카드 하단에 추가 표시 (없으면 숨김) |
| 이메일 | 이메일 카드, `mailto:` 링크 |
| 업무시간 | 시계 아이콘 카드 |

<<<<<<< HEAD
**동작**: 저장 → `src/data/contact.json` 즉시 저장, Contact 페이지 즉시 반영

---

=======
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
### 운영 방식 (로컬 → 배포)

1. 로컬에서 `npm run dev` 실행
2. `http://localhost:3000/admin` 에서 데이터 추가/수정
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

<<<<<<< HEAD
=======
- [ ] /contact 페이지 + 문의 폼 (Resend 연동)
>>>>>>> cfe0f2f50737d6f8537130e286f19a605672d128
- [ ] Vercel 배포
- [ ] SEbitAI 외부 링크 URL 확정
- [ ] RESEND_API_KEY 발급 및 이메일 발신 도메인 설정
- [ ] 실제 위도/경도 값 확인 및 contact.json 업데이트
