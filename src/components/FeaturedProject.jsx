import { ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";

const projects = [
  {
    title: "STI Guidance Office Web Record System",
    websiteUrl: "https://sti-record-management-system.vercel.app/",
    status: "Academic project",
    projectType: "Capstone project",
    image: "/images/dashboard.png",
    imageAlt:
      "Dashboard for the STI Guidance Office Web Record System, showing record summaries, an admin to-do list, and charts.",
    summary:
      "A web-based record management system developed for the Guidance Office of STI College Dasmariñas.",
    description:
      "The system brings student records and common Guidance Office workflows together, including submissions and student support records.",
    role: "UI/UX and frontend contribution as part of an academic project team.",
    features: [
      "Student 201 files",
      "Request slips",
      "Student wellness",
      "Teacher referral forms",
      "Submission history",
    ],
    technologyGroups: [
      { label: "Framework & UI", items: ["React"] },
      {
        label: "Languages & Styling",
        items: ["JavaScript", "HTML", "Tailwind CSS"],
      },
      { label: "Build Tooling", items: ["Vite"] },
    ],
  },
  {
    title: "Daldal: Realtime Messaging Web App",
    websiteUrl: "https://daldal-realtime-messaging-web-appli.vercel.app/",
    status: "Active development",
    projectType: "Collaborative project",
    image: "/images/daldal.png",
    imageAlt:
      "Daldal messaging web app sign-in screen with its Talk, laugh, Daldal welcome message.",
    summary:
      "A collaborative messaging web app that is just getting started and remains in active development.",
    description:
      "The planned experience includes live chat, instant notifications, dynamic message feeds using Supabase Realtime WebSockets, user search, friend requests, and multi-user group chat rooms.",
    role: "UI/UX and frontend developer, focused on interface design and frontend implementation.",
    features: [
      "Live chat and instant notifications",
      "Dynamic feeds with Supabase Realtime WebSockets",
      "User search and friend request workflows",
      "Multi-user group chat room creation",
    ],
    technologyGroups: [
      { label: "Framework", items: ["Next.js"] },
      {
        label: "Languages & Styling",
        items: ["TypeScript", "HTML", "Tailwind CSS"],
      },
      {
        label: "Frontend & UI integration",
        items: ["Supabase (Client / Realtime UI)"],
      },
    ],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#e3e4e9] bg-white shadow-[0_12px_35px_rgb(29_37_58_/_5%)]">
      <div className="bg-[#e9effc] p-3 sm:p-4">
        <img
          className="block aspect-[16/9] h-auto w-full rounded-sm bg-white object-contain"
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
        />
      </div>

      <div className="p-5 sm:p-6">
        <div className="mb-3 flex flex-wrap items-start gap-2">
          <span className="inline-flex rounded border border-[#ded3ff] bg-[#f3efff] px-[9px] py-1.5 text-[8px] font-extrabold uppercase tracking-[0.08em] text-[#7246d0]">
            {project.status}
          </span>
          <span className="inline-flex rounded border border-[#e6e7eb] bg-[#f7f8fa] px-[9px] py-1.5 text-[8px] font-bold uppercase tracking-[0.07em] text-[#565963]">
            {project.projectType}
          </span>
        </div>

        <h3 className="text-[23px] font-extrabold leading-tight tracking-[-0.055em] text-[#191a20] sm:text-[25px]">
          {project.title}
        </h3>
        <p className="mt-2 text-[11px] font-semibold leading-relaxed text-[#477ce5]">
          {project.summary}
        </p>
        <p className="mt-3 text-[10px] leading-[1.8] text-[#454953]">
          {project.description}
        </p>
        <div className="mt-4">
          {project.websiteUrl ? (
            <a
              className="project-website-link inline-flex min-h-9 items-center gap-2 rounded-md border border-[#477ce5] bg-[#477ce5] px-[15px] py-2 text-xs font-semibold transition"
              href={project.websiteUrl}
              rel="noreferrer"
              target="_blank"
            >
              Visit project website
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ) : (
            <button
              className="project-website-link inline-flex min-h-9 cursor-not-allowed items-center gap-2 rounded-md border border-[#477ce5] bg-[#477ce5] px-[15px] py-2 text-xs font-semibold opacity-60"
              disabled
              title="Add this project's URL to the websiteUrl field in FeaturedProject.jsx."
              type="button"
            >
              Project website link coming soon
              <ArrowUpRight size={13} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="mt-5 grid gap-5 border-t border-[#e9e9ed] pt-4 sm:grid-cols-2">
          <div>
            <h4 className="mb-2 text-[10px] font-extrabold text-[#22232a]">
              My role
            </h4>
            <p className="text-[10px] leading-[1.75] text-[#535761]">
              {project.role}
            </p>
          </div>

          <div>
            <h4 className="mb-2 text-[10px] font-extrabold text-[#22232a]">
              Key features
            </h4>
            <ul className="grid gap-[7px]">
              {project.features.map((feature) => (
                <li
                  className="flex gap-[7px] text-[10px] leading-[1.55] text-[#454953]"
                  key={feature}
                >
                  <Check
                    className="mt-0.5 shrink-0 text-[#477ce5]"
                    size={13}
                    aria-hidden="true"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:col-span-2">
            <h4 className="mb-2 text-[10px] font-extrabold text-[#22232a]">
              Technologies
            </h4>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.technologyGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-1.5 text-[9px] font-semibold text-[#565963]">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((technology) => (
                      <span
                        className="rounded border border-[#e0e5f0] bg-[#f5f7fb] px-2 py-1.5 text-[9px] font-semibold text-[#424650]"
                        key={technology}
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  {group.note && (
                    <p className="mt-1.5 text-[9px] leading-relaxed text-[#727580]">
                      {group.note}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function FeaturedProject() {
  return (
    <section className="section page-shell mx-auto max-w-6xl" id="work">
      <SectionHeading
        eyebrow="Selected projects"
        title="Academic work and a project in progress."
        description="A capstone system I contributed to on the frontend, alongside a messaging app currently in active development."
      />

      <div className="grid items-start gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProject;
