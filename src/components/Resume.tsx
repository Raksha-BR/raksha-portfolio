import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section className="resume-section">
      <div className="resume-content">
        <div className="resume-icon">
          <FileText size={28} />
        </div>

        <div>
          <p className="eyebrow">RESUME</p>

          <h2>Want the complete picture?</h2>

          <p>
            View my experience, technical skills, projects, and professional
            background in my resume.
          </p>
        </div>

        <a
          href="/resume/Raksha-BR-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button primary"
        >
          <Download size={17} />
          View Resume
        </a>
      </div>
    </section>
  );
}