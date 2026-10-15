import { Check } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const responsibilities = [
  "Provided Level 1 support to staff and students, escalating issues when needed.",
  "Troubleshot hardware, software, printers, projectors, and connectivity issues.",
  "Installed software, drivers, Windows updates, and Sophos tools; assisted with Windows upgrades.",
  "Helped deploy equipment for classrooms, events, and enrollment activities.",
  "Completed daily room inspections, equipment inventory checks, and preventive maintenance.",
  "Performed basic hardware checks, including RAM, GPU, and no-display troubleshooting.",
];

function ExperienceSection() {
  return (
    <section className="section page-shell mx-auto max-w-6xl" id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Learning by helping people get back to work."
        description="My internship gave me a practical introduction to day-to-day campus IT support. I worked through a range of common issues and learned when to resolve something and when to ask for help."
      />

      <article className="experience-card">
        <div>
          <div className="experience-meta">
            <span className="meta-chip">Internship</span>
            <span className="meta-chip meta-chip-neutral">Jan — May 2026</span>
          </div>
          <h3 className="experience-title">Technical Support Intern</h3>
          <p className="experience-place">
            Far Eastern University – Cavite · Information Technology and Support
            Services (ITS)
          </p>
          <p className="experience-summary">
            Supported staff and students with everyday technology needs while
            assisting the IT team with equipment readiness, maintenance, and
            basic troubleshooting.
          </p>
          <div className="experience-facts">
            <div className="fact-card">
              <strong>~486</strong>
              <span>internship hours completed</span>
            </div>
            <div className="fact-card">
              <strong>Level 1</strong>
              <span>support experience</span>
            </div>
          </div>
        </div>

        <ul className="responsibility-list">
          {responsibilities.map((responsibility) => (
            <li key={responsibility}>
              <Check size={14} aria-hidden="true" />
              <span>{responsibility}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}

export default ExperienceSection;
