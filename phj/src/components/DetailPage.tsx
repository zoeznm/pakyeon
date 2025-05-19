// src/components/DetailPage.tsx
import { useParams, Link } from "react-router-dom";
import Navbar from "./Navbar"; // ← 추가
import { posterData, type PosterItem } from "../data/posters";
import "../styles/DetailPage.css";
import DescBar from "./DescBar";
import "../styles/DescBar.css";

export default function DetailPage() {
  const { id } = useParams<{ id: string }>();

  const data: PosterItem | undefined = posterData.find((p) => p.id === id);

  if (!data) {
    return (
      <>
        <Navbar isKorean={false} onToggleLanguage={() => {}} />{" "}
        {/* 여기도 넣어주세요 */}
        <div className="detail-not-found">
          <p>존재하지 않는 포스터입니다.</p>
          <Link to="/">Back to Home</Link>
        </div>
        <DescBar description="존재하지 않는 포스터입니다." tags={[]} genre="" />
      </>
    );
  }

  return (
    <>
      <Navbar isKorean={false} onToggleLanguage={() => {}} /> {/* 여기 */}
      <DescBar
        description={data.description}
        tags={data.tags}
        genre={data.genre}
      />
      <div className="detail-page">
        <img
          src={data.img}
          alt={data.genre} // ← data.title 또는 data.description 등 문자열로
          className="detail-img"
        />
      </div>
    </>
  );
}
