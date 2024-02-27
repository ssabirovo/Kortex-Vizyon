interface iStep {
  step: string;
  title: string;
  description: string;
  img: string;
}

export const steps: iStep[] = [
  {
    step: "Step 1",
    title: "GATHERING",
    description:
      "The first step in cotton recycling is the collection of cotton waste and garments from all over the world.",
    img: "/src/assets/images/step1.png",
  },
  {
    step: "Step 2",
    title: "CLEANING",
    description:
      "Pre-consumer scraps and post-consumer materials are run through a machine that mechanically takes them back to fibers, which are inevitably weaker than virgin ones.",
    img: "/src/assets/images/step2.png",
  },
  {
    step: "Step 3",
    title: "CHIPPING",
    description:
      "Sorters remove foreign components, like buttons, zippers and all that is not recyclable",
    img: "/src/assets/images/step3.png",
  },
  {
    step: "Final",
    title: "Final Result",
    description:
      "After completion, recycled cotton exhibits a visual appearance that resembles this final product, showcasing its sustainable transformation and eco-friendly qualities in the fashion industry.",
    img: "/src/assets/images/step4.png",
  },
];
