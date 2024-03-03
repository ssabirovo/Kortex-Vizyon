import card1 from "/src/assets/images/card1.svg";
import card2 from "/src/assets/images/card2.svg";
import card3 from "/src/assets/images/card3.svg";

interface card {
  imgUrl: string;
  title: string;
  description: string;
}

export const whyCards: card[] = [
  {
    imgUrl: card1,
    title: "main.why.card1.title",
    description: "main.why.card1.description",
  },
  {
    imgUrl: card2,
    title: "main.why.card2.title",
    description: "main.why.card2.description",
  },
  {
    imgUrl: card3,
    title: "main.why.card3.title",
    description: "main.why.card3.description",
  },
];
