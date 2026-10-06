export type Certification = {
  title: string;
  issuer: string;
  date?: string;
  image?: string;
  verificationUrl?: string;
  skills?: string[];
};

export const certifications: Certification[] = [
  {
    title: "Brainstorming with AI",
    issuer: "SoloLearn",
    image: "/certificates/Brainstorm_with_AI.jpg",
    skills: ["AI", "Programming"],
  },
  {
    title: "C++",
    issuer: "SoloLearn",
    image: "/certificates/CPP.jpg",
    skills: ["C++", "Programming"],
  },
  {
    title: "Generative AI",
    issuer: "SoloLearn",
    image: "/certificates/Gen_AI.jpg",
    skills: ["Generative AI", "Programming"],
  },
  {
    title: "C",
    issuer: "SoloLearn",
    image: "/certificates/Intro_C.jpg",
    skills: ["C", "Programming"],
  },
  {
    title: "C#",
    issuer: "SoloLearn",
    image: "/certificates/Intro_C#.jpg",
    skills: ["C#", "Programming"],
  },
  {
    title: "SQL",
    issuer: "SoloLearn",
    image: "/certificates/Intro_SQL.jpg",
    skills: ["SQL", "Programming"],
  },
];