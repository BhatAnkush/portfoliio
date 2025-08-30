import assets from "../components/Assets";
import { FiGithub, FiLinkedin, FiGlobe, FiMail } from "react-icons/fi";

const AboutPage = () => {
  const experience = [
    {
      role: "Cloud Associate Engineer",
      company: "Niveus Solutions (NTT DATA)",
      period: "Aug 2023 — Jul 2025",
      bullets: [
        "Led complete SDLC with Agile methodology",
        "Built responsive UI with React/Next",
      ],
    },
  ];

  const education = [
    { degree: "B.E. Information Science", school: "Sahyadri College of Engineering", period: "2018 — 2022" },
    { degree: "Pre‑University", school: "Canara PU College", period: "2016 — 2018" },
  ];

  const stacks = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind",
      "Radix",
      "Redux Toolkit",
      "React Query",
    ],
    backend: ["Node.js", "Express", "REST", "Auth"],
    databases: ["PostgreSQL", "SQLite", "MongoDB", "Redis"],
    tools: ["Git", "ESLint", "Jest", "Figma", "Vercel", "Netlify"],
    cloud: ["GCP", "Cloud Run", "Docker", "CI/CD"],
  };

  const Chip = ({ children }) => (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: 9999,
        border: "1px solid rgba(255,255,255,0.18)",
        background: "transparent",
        color: "var(--text-secondary)",
        fontSize: 12,
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </span>
  );

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      style={{
        color: "var(--text-secondary)",
        padding: "6px 0",
        display: "block",
      }}
    >
      {children}
    </a>
  );

  return (
    <section style={{ padding: "100px 0" }}>
      <div
        className="container"
        style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 24 }}
      >
        <aside style={{ position: "sticky", top: 90, alignSelf: "start" }}>
          <nav>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 }}>
              <li>
                <NavLink href="#introduction">Introduction</NavLink>
              </li>
              <li>
                <NavLink href="#work-experience">Work Experience</NavLink>
              </li>
              <li>
                <NavLink href="#education">Education</NavLink>
              </li>
              <li>
                <NavLink href="#technical-skills">Technical Skills</NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        <div>
          {/* Header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "72px 1fr",
              gap: 16,
              alignItems: "center",
            }}
          >
            <img
              src={assets.aboutme}
              alt="Ankush Bhat"
              style={{ width: 72, height: 72, borderRadius: 9999, objectFit: "cover" }}
            />
            <div>
              <h1 style={{ margin: 0, fontSize: "clamp(24px,4vw,36px)" }}>Ankush Bhat</h1>
              <div style={{ color: "var(--text-secondary)", marginTop: 2 }}>
                Cloud Associate Engineer
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
                <Chip>Asia/Kolkata</Chip>
                <Chip>English</Chip>
                <Chip>Hindi</Chip>
                <Chip>Kannada</Chip>
              </div>
              <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
                <a href="https://github.com/BhatAnkush" aria-label="GitHub" style={{ color: "var(--text-secondary)" }}>
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/ankushab/" aria-label="LinkedIn" style={{ color: "var(--text-secondary)" }}>
                  <FiLinkedin />
                </a>
                <a href="#" aria-label="Website" style={{ color: "var(--text-secondary)" }}>
                  <FiGlobe />
                </a>
                <a href="mailto:ankushbhataab@gmail.com" aria-label="Email" style={{ color: "var(--text-secondary)" }}>
                  <FiMail />
                </a>
              </div>
            </div>
          </div>

          {/* Intro */}
          <section id="introduction" style={{ marginTop: 24 }}>
            <h2 style={{ marginBottom: 8 }}>Introduction</h2>
            <p style={{ color: "var(--text-secondary)" }}>
              I’m Ankush, a passionate Frontend Developer based in Mangaluru, India. I
              specialize in building exceptional user experiences with React and Next.js,
              and I’m comfortable across the stack and cloud. I focus on performance,
              accessibility, and clean architecture.
            </p>
          </section>

          {/* Work Experience */}
          <section id="work-experience" style={{ marginTop: 24 }}>
            <h2 style={{ marginBottom: 8 }}>Work Experience</h2>
            {experience.map((e, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto",
                  gap: 12,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{e.company}</div>
                  <div style={{ color: "var(--text-secondary)" }}>{e.role}</div>
                  <ul style={{ marginTop: 6, paddingLeft: 18 }}>
                    {e.bullets.map((b, j) => (
                      <li key={j} style={{ color: "var(--text-secondary)" }}>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                  {e.period}
                </div>
              </div>
            ))}
          </section>

          {/* Education */}
          <section id="education" style={{ marginTop: 24 }}>
            <h2 style={{ marginBottom: 8 }}>Education</h2>
            <div style={{ display: "grid", gap: 12 }}>
              {education.map((ed, i) => (
                <div
                  key={i}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 12,
                    padding: "8px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600 }}>{ed.school}</div>
                    <div style={{ color: "var(--text-secondary)" }}>{ed.degree}</div>
                  </div>
                  <div style={{ color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
                    {ed.period}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills */}
          <section id="technical-skills" style={{ marginTop: 24 }}>
            <h2 style={{ marginBottom: 8 }}>Technical Skills</h2>
            <div style={{ display: "grid", gap: 16 }}>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Frontend Development</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {stacks.frontend.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Backend & Databases</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[...stacks.backend, ...stacks.databases].map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Cloud & DevOps</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {stacks.cloud.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Tools & Best Practices</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {stacks.tools.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
