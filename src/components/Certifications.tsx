import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-label">05 — CERTIFICATIONS</div>

      <h2 className="section-title">
        Continuous
        <br />
        <span>learning.</span>
      </h2>

      <div className="certifications-grid">
        {certifications.map((certificate) => (
          <article
            className="certification-card"
            key={certificate.title}
          >
            {certificate.image && (
              <div className="certificate-image-wrapper">
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  className="certificate-image"
                />
              </div>
            )}

            <div className="certificate-content">
              <p className="certificate-type">
                {certificate.issuer}
              </p>

              <h3>{certificate.title}</h3>

              {certificate.date && (
                <p className="certificate-date">
                  {certificate.date}
                </p>
              )}

              {certificate.skills &&
                certificate.skills.length > 0 && (
                  <div className="certificate-skills">
                    {certificate.skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                )}

              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  <ExternalLink size={16} />
                  Verify certificate
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}