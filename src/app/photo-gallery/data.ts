export type Wonder = {
  id: string;
  name: string;
  location: string;
  image: string;
};

export const WONDERS: Wonder[] = [
  {
    id: "great-wall",
    name: "Great Wall of China",
    location: "China",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/10/GreatWall_2004_Summer_4.jpg",
  },
  {
    id: "petra",
    name: "Petra",
    location: "Jordan",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Al_Khazneh_%28Petra%29.jpg",
  },
  {
    id: "christ-redeemer",
    name: "Christ the Redeemer",
    location: "Brazil",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
  },
  {
    id: "machu-picchu",
    name: "Machu Picchu",
    location: "Peru",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
  },
  {
    id: "chichen-itza",
    name: "Chichén Itzá",
    location: "Mexico",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/El_Castillo_%28Chichen_Itza%29.jpg",
  },
  {
    id: "colosseum",
    name: "Colosseum",
    location: "Italy",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Colosseo_2020.jpg",
  },
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    location: "India",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
  },
];
