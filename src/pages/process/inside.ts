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
    img: "/src/assets/images/step1.png",
  },
  {
    step: "process.step2.step",
    title: "process.step2.title",
    description: "process.step2.description",
    img: "/src/assets/images/step2.png",
  },
  {
    step: "process.step3.step",
    title: "process.step3.title",
    description: "process.step3.description",
    img: "/src/assets/images/step3.png",
  },
  {
    step: "process.step4.step",
    title: "process.step4.title",
    description: "process.step4.description",
    img: "/src/assets/images/step4.png",
  },
];
