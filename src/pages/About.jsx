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
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(140px, 200px))",
                gap: "0 10px",
                padding: "0",
                margin: "20px 0 0",
                overflow: "hidden",
                listStyle: "none",
              }}
            >
              {skills.map((skill, i) => (
                <li
                  key={i}
                  style={{
                    position: "relative",
                    marginBottom: "10px",
                    paddingLeft: "20px",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.9rem",
                    color: "var(--text-secondary)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: "0",
                      color: "var(--accent-color)",
                    }}
                  >
                    ▹
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Image section */}
          <div className="fade-in" style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                maxWidth: "300px",
                margin: "50px auto 0",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  width: "100%",
                  height: "100%",
                  border: "2px solid #64ffda",
                  borderRadius: "8px",
                  zIndex: -1,
                  transition: "all 0.4s ease",
                }}
              ></div>

              <div
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#64ffda",
                  padding: "6px",
                  transition: "all 0.4s ease",
                  boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "6px",
                    lineHeight: "0",
                  }}
                >
                  <img
                    src={assets.aboutme}
                    alt="Ankush Bhat"
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "6px",
                      filter: "grayscale(100%) contrast(1)",
                      mixBlendMode: "multiply",
                      transition: "all 0.4s ease",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(100, 255, 218, 0.1)",
                      mixBlendMode: "screen",
                      pointerEvents: "none",
                      transition: "all 0.4s ease",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
