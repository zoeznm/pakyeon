// src/components/LoaderScreen.tsx
import { useEffect, useState, useRef } from 'react';
import '../styles/LoaderScreen.css';
import gsap from 'gsap';

interface LoaderScreenProps {
  /** 로딩 애니메이션이 끝난 뒤 호출될 콜백 */
  onComplete: () => void;
}

export default function LoaderScreen({ onComplete }: LoaderScreenProps) {
  const [progress, setProgress] = useState(0);
  const screenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 0부터 100까지 2.5초 동안 카운트업
    const duration = 2.5; // seconds
    const steps = 100;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000;
      const pct = Math.min(elapsed / duration, 1);
      const value = Math.floor(pct * steps);
      setProgress(value);

      if (pct < 1) {
        requestAnimationFrame(animate);
      } else {
        // 완료되면 화면 축소 애니메이션 후 onComplete 호출
        gsap.to(screenRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onComplete, 
        });
      }
    };

    requestAnimationFrame(animate);
  }, [onComplete]);

  // progress를 세 자리 숫자(000)로 표시
  const label = progress.toString().padStart(3, '0');

  return (
    <div className="loader-screen" ref={screenRef}>
      <div className="loader-count">{label}</div>
    </div>
  );
}
