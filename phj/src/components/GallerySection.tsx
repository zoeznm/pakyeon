import { Link } from 'react-router-dom';
import '../styles/GallerySection.css';

import img1 from '../assets/posters/poster_1.jpg';
import img2 from '../assets/posters/poster_2.jpg';
import img3 from '../assets/posters/poster_3.jpg';
import img4 from '../assets/posters/poster_4.jpg';
import img5 from '../assets/posters/poster_5.jpg';

const posters = [img1, img2, img3, img4, img5];

export default function GallerySection() {
  return (
    <section className="gallery-section">
      {posters.map((src, idx) => (
        <Link key={idx} to={`/detail/${idx + 1}`} className="gallery-item">
          <div className="gallery-index">{idx + 1}</div>
          <img src={src} alt={`poster-${idx + 1}`} className="gallery-img" />
        </Link>
      ))}
    </section>
  );
}