// src/components/DetailPage.tsx
import  { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import gsap from "gsap";
import Navbar from "./Navbar";
import DescBar from "./DescBar";
import { posterData} from "../data/posters";
import "../styles/DetailPage.css";
import "../styles/DescBar.css";

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();
  const data = posterData.find((p) => p.id === id);

  const pageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);


  useEffect(() => {
    if (!imgRef.current) return;
  
    gsap.fromTo(
      imgRef.current,
      { clipPath: 'inset(100% 0% 0% 0%)' },        // 초기 상태: 위에서부터 100% 만큼 잘린 상태
      { clipPath: 'inset(0% 0% 0% 0%)',            // 최종 상태: 전부 보이도록
        duration: 1.5,
        ease: 'power2.out'
      }
    );
  }, []);

  if (!data) {
    return (
      <>
        <Navbar/>
        <div className="detail-not-found">
          <p>존재하지 않는 포스터입니다.</p>
          <Link to="/">Back to Home</Link>
        </div>
        <DescBar
          description="존재하지 않는 포스터입니다."
          tags={[]}
          genre=""
          date=""
          feeling=""
        />
      </>
    );
  }

  return (
    <>
      <Navbar/>
      <DescBar
        description={data.description}
        tags={data.tags}
        genre={data.genre}
        date={data.date}
        feeling={data.feeling}
      />

      <div className="detail-page" ref={pageRef}>
        <div className="detail-image-container">
          {/* 여기에 흰색 마스크 추가 */}
          <img
            ref={imgRef}
            src={data.img}
            alt={data.genre}
            className="detail-img"
          />
        </div>
      </div>
    </>
  );
}
