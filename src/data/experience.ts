export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
};

export const experience: Experience[] = [
  {
    company: "Dell Technologies",
    role: "Software Engineer II",
    period: "September 2025 — August 2026",
    description:
      "Worked on backend development for enterprise software, contributing to production engineering and software development.",
    achievements: [
      "Developed and maintained backend functionality.",
      "Worked on production software development and engineering workflows.",
      "Contributed to debugging and resolving software issues.",
    ],
  },
  {
    company: "Dell Technologies",
    role: "Graduate Intern",
    period: "November 2024 — August 2025",
    description:
      "Worked on tools automation, developing solutions to improve engineering workflows and reduce repetitive tasks.",
    achievements: [
      "Developed automation tools to improve engineering workflows.",
      "Worked on scripting and tooling for engineering tasks.",
      "Contributed to automation-driven improvements during the internship.",
    ],
  },
];