
import {Link } from "react-router-dom";
import '../styles/DescBar.css';

interface DescBarProps {
  description: string;
  tags: string[];
  genre: string;
}

export default function DescBar({ description, tags, genre}: DescBarProps) {
  return (
    <div className="desc-bar">
      <div className="desc-row">
        <span className="desc-label">(Description)</span>
        <p className="desc-text">{description}</p>
      </div>
      <div className="desc-grid">
        <div className="desc-col">
          <span className="desc-label">(Tag)</span>
          <p className="desc-text">{tags.join(', ')}</p>
        </div>
        <div className="desc-col">
          <span className="desc-label">(Genre)</span>
          <p className="desc-text">{genre}</p>
        </div>
      </div>
      <div className="desc-grid">
        <div className="desc-col">
          <span className="desc-label">(Tag)</span>
          <p className="desc-text">{tags.join(', ')}</p>
        </div>
        <div className="desc-col">
          <span className="desc-label">(Genre)</span>
          <p className="desc-text">{genre}</p>
        </div>
      </div>
      <div className="desc-back">
      <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}
