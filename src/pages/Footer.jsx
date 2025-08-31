import { FiGithub, FiLinkedin, FiGlobe, FiMail } from "react-icons/fi";
import { useState, useEffect } from "react";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/BhatAnkush",
      icon: <FiGithub size={18} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankushab/",
      icon: <FiLinkedin size={18} />,
    },
    {
      name: "Website",
      url: "https://bhatankush.onrender.com/",
      icon: <FiGlobe size={18} />,
    },
    {
      name: "Email",
      url: "mailto:ankushbhataab@gmail.com",
      icon: <FiMail size={18} />,
    },
  ];

  if (isMobile) {
    return (
      <footer
        aria-label="Site footer"
        style={{
          marginTop: 60,
          marginBottom: 100, // Space for bottom nav
          padding: "20px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          {/* Copyright and name */}
          <div
            style={{
              color: "var(--text-secondary)",
              fontSize: 14,
              marginBottom: 16,
              fontFamily: "var(--font-mono)",
            }}
          >
            © 2025 / 0x4nku5h
          </div>

          {/* Social icons */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 9999,
                  display: "grid",
                  placeItems: "center",
                  color: "var(--text-secondary)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.2s ease",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  }

  // Desktop footer (original design)
  return (
    <footer
      aria-label="Site footer"
      style={{ marginTop: 60, borderTop: "1px solid rgba(255,255,255,0.12)" }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px 0",
        }}
      >
        <div style={{ color: "var(--text-secondary)", fontSize: 14 }}>
          © {new Date().getFullYear()} / 0x4nku5h
        </div>
        <div style={{ display: "flex", gap: 12 }}>
          {socials.slice(0, 3).map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              style={{
                width: 32,
                height: 32,
                borderRadius: 9999,
                display: "grid",
                placeItems: "center",
                color: "var(--text-secondary)",
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
