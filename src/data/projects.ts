export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "ORBIT",
    description:
      "A modular backend and systems-engineering project built in modern C++ with a focus on clean architecture, component design, build automation, testing, and reliable software design.",
    technologies: [
      "C++",
      "CMake",
      "Linux",
      "Git",
      "Testing",
    ],
    github: "https://github.com/Raksha-BR/ORBIT",
    demo: "",
    featured: true,
  },
  {
  title: "Rice Grain Detection",
  description:
    "A computer vision system for detecting and counting individual rice grains from images using a YOLO-based object detection pipeline.",
  technologies: [
    "Python",
    "YOLO",
    "Computer Vision",
    "Machine Learning",
  ],
  github: "",
  demo: "",
  featured: true,
},
];