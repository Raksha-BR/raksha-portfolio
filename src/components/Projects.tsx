import { projects } from "@/data/projects";
import { ExternalLink } from "lucide-react";
import {
  FaGithub,
  FaPython,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa6";
import { SiCplusplus, SiCmake, SiPytorch } from "react-icons/si";

function TechnologyIcon({ technology }: { technology: string }) {
  switch (technology) {
    case "C++":
      return <SiCplusplus />;
    case "Python":
      return <FaPython />;
    case "Linux":
      return <FaLinux />;
    case "Git":
      return <FaGitAlt />;
    case "CMake":
      return <SiCmake />;
    case "Machine Learning":
      return <SiPytorch />;
    default:
      return null;
  }
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-label">03 — PROJECTS</div>

      <h2 className="section-title">
        Things I&apos;ve
        <br />
        <span>built.</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="project-number">
                0{index + 1}
              </span>

              {project.featured && (
                <span className="project-featured">
                  FEATURED
                </span>
              )}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technology-list">
              {project.technologies.map((technology) => (
                <span key={technology}>
                  <TechnologyIcon technology={technology} />
                  {technology}
                </span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={17} />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={17} />
                  Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}