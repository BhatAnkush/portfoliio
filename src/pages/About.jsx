import { useEffect } from "react";
import assets from "../components/Assets/index.js";

const About = () => {
  const skills = [
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express",
    "PostgreSQL",
    "RESTful API",
    "HTML5",
    "CSS3",
    "Git/Github",
    "Google Cloud",
  ];

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      #about img:hover {
        filter: none !important;
        mix-blend-mode: normal !important;
        transform: scale(1.03);
      }

      #about div[style*="maxWidth: 300px"]:hover > div {
        background-color: transparent !important;
        box-shadow: 0 20px 30px -10px rgba(2, 12, 27, 0.7) !important;
      }

      #about div[style*="top: 20px"]:hover {
        top: 10px !important;
        left: 10px !important;
      }

      #about div[style*="rgba(100, 255, 218, 0.1)"]:hover {
        background-color: transparent !important;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); // Cleanup on unmount
    };
  }, []);

  return (
    <section id="about" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2 className="section-title fade-in">
          <span className="number">01.</span> About Me
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "50px",
          }}
        >
          <div className="fade-in">
            <p>
              Hello! I'm{" "}
              <span
                style={{ color: "var(--accent-color)", fontWeight: "bold" }}
              >
                Ankush Ananth Bhat
              </span>
              , a Full-Stack Web developer with a strong foundation in
              Information Science.
            </p>

            <p>
              Fast-forward to today, and I've had the privilege of working at
              <a
                href="https://evoluteiq.com/"
                style={{ color: "var(--accent-color)" }}
                target="_blank"
              >
                {" "}
                EvoluteIQ
              </a>
              , and currently working at
              <a
                href="https://www.niveussolutions.com/"
                style={{ color: "var(--accent-color)" }}
                target="_blank"
              >
                {" "}
                Niveus Solutions part of NTT Data
              </a>
            </p>
            <div style={{ height: "10px" }}></div>
            <p>Here are a few technologies I've been working with recently:</p>

            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: 0,
                margin: "20px 0 0",
                listStyle: "none",
              }}
            >
              {skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "white",
                    backgroundImage: "var(--button-gradient)",
                    padding: "6px 10px",
                    borderRadius: 9999,
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                  }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="fade-in" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: 260, height: 260, borderRadius: 9999, background: "conic-gradient(from 180deg at 50% 50%, #60a5fa, #22d3ee, #1e3a8a, #60a5fa)", padding: 4 }}>
              <img
                src={assets.aboutme}
                alt="Ankush Bhat"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 9999,
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
