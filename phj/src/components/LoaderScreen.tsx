import React, { useEffect, useRef } from 'react';
import '../styles/LoaderScreen.css';
import gsap from 'gsap';

export default function LoaderScreen() {
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // LOADING 텍스트 블러 애니메이션은 CSS에서 자동 실행
    // 로딩 후 화면 축소(hollow) 효과
    const screen = screenRef.current;
    if (!screen) return;
    // 3초 후 로더 제거
    const tl = gsap.timeline({ delay: 3 });
    tl.to(screen, {
      height: 0,
      duration: 0.5,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <div className="loader-screen" ref={screenRef}>
      <div className="loader-center">
        <div className="loading">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} style={{ '--i': i } as React.CSSProperties}>
              {'pakyeon'[i]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}