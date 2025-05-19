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
    description: "화",
    tags: ["Anger", "DogBarking"],   // ← 배열 형태로 초기화
    genre: "Horror",
    date:"2025-05-14",
    feeling :"Angry"
  },
  {
    id: "2",
    img: img2,
    description: "대비",
    tags: ["contrast", "juxtaposition"],
    genre: "Abstract Expressionism",
    date:"2025-05-14",
    feeling :"tense"
  },
  {
    id: "3",
    img: img3,
    description: "욕망",
    tags: ["desire", "Mercedes-Benz"],
    genre: "Neo-Expressionism",
    date:"2025-05-14",
    feeling :"longing"
  },
  {
    id: "4",
    img: img4,
    description: "좆같은 졸준위",
    tags: ["Fuck", "You"],
    genre: "ignorant",
    date:"2025-05-14",
    feeling :"This fucking sucks"
  },
  {
    id: "5",
    img: img5,
    description: "초대",
    tags: ["invitation", "SHOW"],
    genre: "Art",
    date:"2025-06-07",
    feeling :"THX"
  },
  
];
