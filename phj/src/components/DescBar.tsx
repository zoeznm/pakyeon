// src/components/DescBar.tsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import '../styles/DescBar.css';

interface DescBarProps {
  description: string;
  tags: string[];
  genre: string;
  date: string;
  feeling: string;
}

export default function DescBar({
  description,
  tags,
  genre,
  date,
  feeling,
}: DescBarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const texts = containerRef.current.querySelectorAll<HTMLElement>('.wipe-text');
    texts.forEach((el, i) => {
      // 초기 상태: 오른쪽에서 잘린 상태
      gsap.set(el, { clipPath: 'inset(0 100% 0 0)' });
      // 애니메이션: 왼쪽에서부터 보이도록
      gsap.to(el, {
        clipPath: 'inset(0 0% 0 0)',
        duration: 0.5,
        ease: 'power2.out',
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <div className="desc-bar" ref={containerRef}>
      <div className="desc-row">
        <span className="desc-label wipe-text">(Description)</span>
        <p className="desc-text wipe-text">{description}</p>
      </div>
      <div className="desc-grid">
        <div className="desc-col">
          <span className="desc-label wipe-text">(Tag)</span>
          <p className="desc-text wipe-text">{tags.join(', ')}</p>
        </div>
        <div className="desc-col">
          <span className="desc-label wipe-text">(Genre)</span>
          <p className="desc-text wipe-text">{genre}</p>
        </div>
      </div>
      <div className="desc-grid">
        <div className="desc-col">
          <span className="desc-label wipe-text">(Feeling)</span>
          <p className="desc-text wipe-text">{feeling}</p>
        </div>
        <div className="desc-col">
          <span className="desc-label wipe-text">(Date)</span>
          <p className="desc-text wipe-text">{date}</p>
        </div>
      </div>
      <div className="desc-back wipe-text">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
