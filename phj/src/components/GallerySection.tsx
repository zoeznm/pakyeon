// src/components/GallerySection.tsx
import  { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../styles/GallerySection.css';

import img1 from '../assets/posters/poster_1.jpg';
import img2 from '../assets/posters/poster_2.jpg';
import img3 from '../assets/posters/poster_3.jpg';
import img4 from '../assets/posters/poster_4.jpg';
import img5 from '../assets/posters/poster_5.jpg';

const posters = [img1, img2, img3, img4, img5];

export default function GallerySection() {
  // section 엘리먼트를 가리키므로 HTMLElement로 충분합니다.
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const imgs = containerRef.current!.querySelectorAll<HTMLImageElement>('.gallery-img');
    const tl = gsap.timeline();
    tl.set(imgs, { clipPath: 'inset(100% 0% 0% 0%)' })
      .to(imgs, { clipPath: 'inset(0% 0 0 0)', duration: 2, ease: 'power2.out' });
  }, []);

  return (
    <section className="gallery-section" ref={containerRef}>
      {posters.map((src, idx) => (
        <Link key={idx} to={`/detail/${idx + 1}`} className="gallery-item">
          <div className="gallery-index">{idx + 1}</div>
          <img
            src={src}
            alt={`poster-${idx + 1}`}
            className="gallery-img"
          />
        </Link>
      ))}
    </section>
  );
}
