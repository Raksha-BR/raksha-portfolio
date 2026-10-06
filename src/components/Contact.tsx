import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="eyebrow">06 — CONTACT</p>

      <h2>
        Let&apos;s build something
        <br />
        <span>interesting.</span>
      </h2>

      {profile.email && (
        <a
          href={`mailto:${profile.email}`}
          className="button primary"
        >
          Get in touch →
        </a>
      )}
    </section>
  );
}