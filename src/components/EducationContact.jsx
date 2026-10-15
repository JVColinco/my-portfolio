import { ArrowUpRight, Award, Mail } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:jordanvincentcolinco@gmail.com",
    placeholder: "jordanvincentcolinco@gmail.com",
  },
  {
    icon: ArrowUpRight,
    label: "GitHub",
    href: "https://github.com/JVColinco",
    placeholder: "JVColinco",
  },
  {
    icon: ArrowUpRight,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jordan-vincent-b-colinco/",
    placeholder: "Jordan Vincent Colinco",
  },
  {
    icon: ArrowUpRight,
    label: "Resume",
    href: "/Jordan-Vincent-Colinco-Resume-IT.pdf",
    placeholder: "Jordan-Vincent-Colinco-Resume-IT.pdf",
  },
];

function EducationContact() {
  return (
    <>
      <section className="section page-shell closing-section mx-auto max-w-6xl">
        <div className="closing-grid">
          <article className="education-card">
            <p className="eyebrow">Education</p>
            <h2 className="education-degree">
              Bachelor of Science in Information Technology
            </h2>
            <p className="education-school">
              STI College Dasmariñas · Graduated July 2026
            </p>
            <span className="honor-badge">
              <Award size={15} aria-hidden="true" />
              Magna Cum Laude
            </span>
          </article>

          <div className="contact-copy" id="contact">
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">Let&apos;s start a conversation.</h2>
            <p>
              I&apos;m looking for an entry-level opportunity where I can
              contribute, keep learning, and grow my practical IT experience.
            </p>
            <div className="contact-links">
              {contactLinks.map(({ icon: Icon, label, href, placeholder }) => (
                <a
                  className="contact-link"
                  href={href}
                  key={label}
                  aria-label={`${label}: ${placeholder}`}
                  target={
                    label === "GitHub" || label === "LinkedIn"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    label === "GitHub" || label === "LinkedIn"
                      ? "noreferrer"
                      : undefined
                  }
                >
                  <Icon size={15} aria-hidden="true" />
                  <span>
                    {label} <span aria-hidden="true">· {placeholder}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner page-shell mx-auto max-w-6xl">
          <span>Fresh graduate. Practical mindset. Always learning.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}

export default EducationContact;
