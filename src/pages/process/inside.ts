import step1 from "/src/assets/images/step1.webp";
import step2 from "/src/assets/images/step2.webp";
import step3 from "/src/assets/images/step3.webp";
import step4 from "/src/assets/images/step4.webp";

interface iStep {
  step: string;
  title: string;
  description: string;
  img: string;
}

export const steps: iStep[] = [
  {
    step: "process.step1.step",
    title: "process.step1.title",
    description: "process.step1.description",
    img: step1,
  },
  {
    step: "process.step2.step",
    title: "process.step2.title",
    description: "process.step2.description",
    img: step2,
  },
  {
    step: "process.step3.step",
    title: "process.step3.title",
    description: "process.step3.description",
    img: step3,
  },
  {
    step: "process.step4.step",
    title: "process.step4.title",
    description: "process.step4.description",
    img: step4,
  },
];
