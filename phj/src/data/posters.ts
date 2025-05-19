// src/data/posters.ts
import img1 from '../assets/posters/poster_1.jpg';
import img2 from '../assets/posters/poster_2.jpg';
import img3 from '../assets/posters/poster_3.jpg';
import img4 from '../assets/posters/poster_4.jpg';
import img5 from '../assets/posters/poster_5.jpg';

export interface PosterItem {
  id: string;
  img: string;
  title: string;
  description: string;
}

export const posterData: PosterItem[] = [
  { id: '1', img: img1, title: 'Dog',    description: '고요함을 표현한 AI 이미지'       },
  { id: '2', img: img2, title: 'Resonance',  description: '반향의 울림을 형상화'           },
  { id: '3', img: img3, title: 'Essence',    description: '본질을 탐구한 작품'             },
  { id: '4', img: img4, title: 'Void',       description: '공허 속의 시각적 표현'         },
  { id: '5', img: img5, title: 'Presence',   description: '존재감을 드러낸 디자인'         },
];
