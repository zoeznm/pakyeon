import {Link } from 'react-router-dom';
import '../styles/Navbar.css';

interface NavbarProps {
  isKorean: boolean;
  onToggleLanguage: () => void;
}

export default function Navbar({ isKorean, onToggleLanguage }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-left">©2025 pakyeon</div>
      <Link to="/" className="navbar-center">開火</Link>
      <div className="navbar-right">
        <button className="language-toggle" onClick={onToggleLanguage}>
          {isKorean ? 'ENG' : 'KOR'}
        </button>
      </div>
    </nav>
  );
}