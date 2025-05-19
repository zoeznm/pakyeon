// src/data/posters.ts
import img1 from "../assets/posters/poster_1.jpg";
import img2 from "../assets/posters/poster_2.jpg";
import img3 from "../assets/posters/poster_3.jpg";
import img4 from "../assets/posters/poster_4.jpg";
import img5 from "../assets/posters/poster_5.jpg";

export interface PosterItem {
  id: string;
  img: string;
  description: string;
  tags: string[];   // ← string[] 로 변경
  genre: string;
  date : string;
  feeling : string;
}

export const posterData: PosterItem[] = [
  {
    id: "1",
    img: img1,
    description: "고요함을 표현한 AI 이미지",
    tags: ["AI", "Minimal"],   // ← 배열 형태로 초기화
    genre: "Abstract",
    date:"2025-05-13",
    feeling :"angry"
  },
  {
    id: "2",
    img: img2,
    description: "반향의 울림을 형상화",
    tags: ["Sound", "Echo"],
    genre: "Expressionism",
    date:"2025-05-13",
    feeling :"angry"
  },
  {
    id: "3",
    img: img3,
    description: "반향의 울림을 형상화",
    tags: ["Sound", "Echo"],
    genre: "Expressionism",
    date:"2025-05-13",
    feeling :"angry"
  },
  {
    id: "4",
    img: img4,
    description: "반향의 울림을 형상화",
    tags: ["Sound", "Echo"],
    genre: "Expressionism",
    date:"2025-05-13",
    feeling :"angry"
  },
  {
    id: "5",
    img: img5,
    description: "반향의 울림을 형상화",
    tags: ["Sound", "Echo"],
    genre: "Expressionism",
    date:"2025-05-13",
    feeling :"angry"
  },
  
];
