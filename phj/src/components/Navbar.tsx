// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
// 1. 원하는 로고 이미지를 불러옵니다.
import logo from '../assets/posters/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">©2025 pakyeon</div>

      {/* 2. 텍스트 대신 img 태그를 넣습니다. */}
      <Link to="/" className="navbar-center">
        <img src={logo} alt="開火 로고" className="navbar-logo" />
      </Link>
    </nav>
  );
}
