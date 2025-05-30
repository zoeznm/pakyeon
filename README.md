# Pakyeon Graduation Fashion Show Invitation
- 인터랙티브 웹 초대장: 스크롤 애니메이션과 3D 인트로로 구현된 졸업 패션쇼 초대장

## 🖥️ 데모
https://pakyeon.vercel.app/

## 📑 목차
- [프로젝트 소개](#프로젝트-소개)
- [핵심 기능](#핵심-기능)
- [사용 스택](#사용-스택)
- [설치 및 실행](#설치-및-실행)
- [폴더 구조](#폴더-구조)
- [배포](#배포)
- [라이선스](#라이선스)

## 프로젝트 소개
친구의 졸업 패션쇼를 단순 텍스트 초대장이 아닌,  
웹으로 미리 체험할 수 있는 인터랙티브 초대장으로 구현했습니다.  
스크롤 애니메이션을 통해 패션쇼의 감각적인 연출을 웹에서 재현합니다.

## 핵심 기능
- 로더 스크린: 000→100 카운트업 + wipe 페이드 아웃  
- 메뉴바: 브랜드 로고, 반응형 레이아웃  
- 정보 바: Overview / Edited / D-day 자동 계산  
- 갤러리: 5개 포스터 wipe 애니메이션 + 상세 페이지 이동  
- 상세 페이지: 이미지 wipe 애니메이션 + 설명·태그·장르·날짜·감성 표시  

## 사용 스택
- **프레임워크**: React, TypeScript, Vite  
- **애니메이션**: GSAP, clip-path wipe  
- **라우팅**: React Router  
- **스타일링**: CSS + @font-face  
- **배포**: Vercel

## 설치 및 실행

```bash
# 1. 레포 클론
git clone https://github.com/your-username/your-repo.git
cd phj

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 빌드
npm run build

# 5. 빌드 결과 미리보기
npm run preview

## 제작 후 배운 점
- Lenis와 ScrollTrigger 연동으로 부드러운 스크롤 UX  
- React 컴포넌트 구조화 및 TypeScript 적용  
- Vite 프로젝트 설정 및 빌드 파이프라인 이해  
- Vercel 정적 사이트 호스팅 경험

## 라이선스
MIT © 2025 Pakyeon
 
