import { Code2, Computer, PanelsTopLeft } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const groups = [
  {
    title: "IT Support",
    description:
      "Practical exposure from my support internship, alongside foundational IT knowledge.",
    icon: Computer,
    skills: [
      "Hardware troubleshooting",
      "Software troubleshooting",
      "Windows",
      "Printer troubleshooting",
      "Basic networking",
      "Equipment deployment",
      "Preventive maintenance",
      "Microsoft 365",
      "Google Workspace",
      "Technical support",
    ],
  },
  {
    title: "UI/UX & Design",
    description:
      "Tools and methods I have used for visual design and interface work.",
    icon: PanelsTopLeft,
    skills: [
      "Figma",
      "Wireframing",
      "Prototyping",
      "UI design",
      "Canva",
      "Photoshop",
    ],
  },
  {
    title: "Web Development",
    description:
      "Foundational tools used in academic projects and ongoing learning.",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "SQL",
      "Git/GitHub",
      "Vite",
    ],
  },
];

function SkillsSection() {
  return (
    <section className="section page-shell mx-auto max-w-6xl" id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="A practical foundation, still growing."
        description="These are areas I have worked with or studied—not a claim of expert-level ability. I’m continuing to build confidence through practice and new opportunities."
      />

      <div className="skills-grid">
        {groups.map(({ title, description, icon: Icon, skills }) => (
          <article className="skill-card" key={title}>
            <div className="skill-card-top">
              <span className="skill-card-icon">
                <Icon size={17} aria-hidden="true" />
              </span>
              <h3>{title}</h3>
            </div>
            <p>{description}</p>
            <div className="skill-tags" aria-label={`${title} skills`}>
              {skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
