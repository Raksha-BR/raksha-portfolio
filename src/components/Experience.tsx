import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-label">02 — EXPERIENCE</div>

      <h2 className="section-title">
        Professional
        <br />
        <span>experience.</span>
      </h2>

      <div className="experience-list">
        {experience.map((job) => (
          <article
            className="experience-card"
            key={`${job.company}-${job.role}`}
          >
            <div className="experience-header">
              <p className="company">{job.company}</p>
              <p className="experience-period">{job.period}</p>
            </div>

            <div className="experience-body">
              <h3>{job.role}</h3>

              <p className="experience-description">
                {job.description}
              </p>

              <ul className="experience-achievements">
                {job.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}