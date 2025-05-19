// src/components/DetailPage.tsx
// import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { posterData, type PosterItem } from '../data/posters';  // <-- 경로와 타입 모두 명시
import '../styles/DetailPage.css';

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  // PosterItem[] 배열에서 id가 일치하는 객체를 찾습니다.
  const data: PosterItem | undefined = posterData.find((p) => p.id === id);

  if (!data) {
    return (
      <div className="detail-not-found">
        <p>존재하지 않는 포스터입니다.</p>
        <Link to="/">← 목록으로 돌아가기</Link>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <h1 className="detail-title">{data.title}</h1>
      <img src={data.img} alt={data.title} className="detail-img" />
      <p className="detail-desc">{data.description}</p>
      <Link to="/" className="detail-back">← 목록으로 돌아가기</Link>
    </div>
  );
}
