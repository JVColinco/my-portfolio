import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";

function HeroSection() {
  return (
    <section className="hero-section page-shell mx-auto max-w-6xl" id="top">
      <div className="hero-copy" id="about">
        <p className="eyebrow">FRESH BSIT GRADUATE · MAGNA CUM LAUDE</p>
        <h1 className="hero-title">
          Hi, I&apos;m <span>Jordan.</span>
        </h1>
        <p className="hero-description">
          I&apos;m a Magna Cum Laude IT graduate eager to start my professional
          career and gain hands-on industry experience. Backed by an IT support
          internship and 2+ years of visual and graphic design work, I focus on
          system troubleshooting, UI/UX design, and creating user-friendly
          digital interfaces. I enjoy connecting design with technology—making
          systems and interfaces simpler, more efficient, and easy to use.
        </p>
        <div className="hero-location">
          <MapPin size={14} aria-hidden="true" />
          STI College Dasmariñas graduate
        </div>
        <div className="hero-actions">
          <a className="button" href="#experience">
            Explore my experience <ArrowDown size={15} />
          </a>
          <a className="button button-secondary" href="#contact">
            Contact me <ArrowUpRight size={14} />
          </a>
        </div>
      </div>

      <figure className="profile-card">
        <div className="profile-image-frame">
          <img
            className="profile-image"
            src="/images/1X1Plain.White.Bg.png"
            alt="Profile photo placeholder. Replace with your own portrait."
          />
        </div>
        <figcaption className="profile-caption">
          <div>
            <strong>BSIT Graduate · Magna Cum Laude</strong>
            <span>Ready to learn · IT Support &amp; UI/UX Design</span>
          </div>
          <span className="profile-caption-mark" aria-hidden="true">
            IT
          </span>
        </figcaption>
      </figure>
    </section>
  );
}

export default HeroSection;
