import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-label">01 — ABOUT</div>

      <div className="about-grid">
        <div>
          <h2 className="section-title">
            Building software with
            <br />
            <span>engineering depth.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I&apos;m {profile.name}, a Software Engineer focused on building
            reliable software, backend systems, and production-quality
            engineering solutions.
          </p>

          <p>
            My interests span systems programming, backend development,
            automation, testing, and AI-enabled engineering. I enjoy
            understanding problems deeply, designing maintainable solutions,
            and turning ideas into software that can actually be used.
          </p>

          <p>
            I&apos;m continuously strengthening my fundamentals while building
            practical projects across software engineering, systems, and
            machine learning.
          </p>

          <div className="about-details">
            <div>
              <span>Based in</span>
              <strong>{profile.location}</strong>
            </div>

            <div>
              <span>Focus</span>
              <strong>Software Engineering</strong>
            </div>

            <div>
              <span>Interests</span>
              <strong>Backend · Systems · AI</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}