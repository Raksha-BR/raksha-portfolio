import { skills } from "@/data/skills";

const categories = [
  {
    title: "Languages",
    items: skills.languages,
  },
  {
    title: "Backend",
    items: skills.backend,
  },
  {
    title: "Systems & Tools",
    items: skills.systems,
  },
  {
    title: "Testing",
    items: skills.testing,
  },
  {
    title: "AI / ML",
    items: skills.ai,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-label">04 — SKILLS</div>

      <h2 className="section-title">Technical toolkit.</h2>

      <div className="skill-categories">
        {categories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3>{category.title}</h3>

            <div className="skills-list">
              {category.items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}