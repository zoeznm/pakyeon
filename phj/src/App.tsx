// src/App.tsx
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoaderScreen from './components/LoaderScreen';
import Navbar from './components/Navbar';
import InfoBar from './components/InfoBar';
import GallerySection from './components/GallerySection';
import DetailPage from './components/DetailPage';

export default function App() {
  const [loaded, setLoaded] = useState(false);  // 당장은 로더 생략

  return (
    loaded ? (
      <Routes>
        {/* 메인 갤러리 페이지 */}
        <Route path="/" element={
          <>
            <Navbar/>
            <InfoBar />
            <GallerySection />
          </>
        }/>
        {/* 상세 페이지: /detail/1, 2, ... */}
        <Route path="/detail/:id" element={<DetailPage />} />
      </Routes>
    ) : (
      <LoaderScreen onComplete={() => setLoaded(true)} />
    )
  );
}
