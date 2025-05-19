import { useState, useEffect } from "react";
import "../styles/InfoBar.css";

export default function InfoBar() {
  const targetDate = new Date(2025, 5, 7); // 6월은 month=5
  const [days, setDays] = useState(0);

  useEffect(() => {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const d = Math.ceil(diff / (1000 * 60 * 60 * 24));
    setDays(d > 0 ? d : 0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="info-bar">
      <div className="info-col_1">
        <div className="info-title">(Overview)</div>
        <div className="contents">An image created with</div>
        <div className="contents">Carefully selected works</div>
        <div className="contents">Personal hobby works</div>
      </div>
      <div className="info-col_2">
        <div className="info-title">(Edited)</div>
        <div className="contents">@hyunjunpark_</div>
        <div className="contents">@matomabo</div>
      </div>
      <div className="info-col_3">
        <div className="info-title">(D-day)</div>
        <div className="dday">D-{days}</div>
      </div>
    </div>
  );
}
