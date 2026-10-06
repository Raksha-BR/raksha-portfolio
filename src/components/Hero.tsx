"use client";

import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { motion } from "motion/react";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {profile.role.toUpperCase()}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {profile.name}
          <br />
          <span>{profile.tagline}</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Software Engineer focused on backend development, systems engineering, automation, testing, and building reliable software.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="button primary">
            View my work →
          </a>

          <a href="#contact" className="button secondary">
            Contact me
          </a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          )}

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={20} />
            </a>
          )}
        </motion.div>

        <a href="#about" className="scroll-indicator">
          <span>Scroll to explore</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}