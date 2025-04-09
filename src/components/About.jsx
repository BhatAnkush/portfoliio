import images from "./Assets/index.js";

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
              Information Science. Having completed my Bachelor's in Engineering
              from Sahyadri College of Engineering & Management, Mangaluru, I am
              passionate about creating impactful web applications and
              solutions, particularly with technologies like React.js and
              Node.js.
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
              ,and currently working at
              <a
                href="https://www.niveussolutions.com/"
                style={{ color: "var(--accent-color)" }}
                target="_blank"
              >
                {" "}
                Niveus Solutions part of NTT Data
              </a>
              ,
            </p>
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

          <div className="fade-in" style={{ position: "relative" }}>
            <div
              style={{
                position: "relative",
                maxWidth: "300px",
                margin: "50px auto 0",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    borderRadius: "4px",
                    backgroundColor: "#64ffda", // Using your accent color directly
                    padding: "4px",
                    boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "2px",
                      overflow: "hidden",
                      lineHeight: "0",
                    }}
                  >
                    <img
                      src={images.aboutme}
                      alt="Ankush Bhat"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        filter: "grayscale(100%) contrast(1)",
                        mixBlendMode: "multiply",
                        transition: "all 0.5s ease",
                        WebkitTransition: "all 0.5s ease", // For Safari
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
                        transition: "all 0.5s ease",
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    border: "2px solid #64ffda",
                    borderRadius: "4px",
                    top: "15px",
                    left: "15px",
                    zIndex: "-1",
                    transition: "all 0.3s ease",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add hover styles using a stylesheet or CSS-in-JS */}
      <style>
        {`
          #about img:hover {
            filter: none !important;
            mix-blend-mode: normal !important;
          }
          
          #about div[style*="position: relative"]:hover {
            transform: translateY(-5px);
          }
          
          #about div[style*="background-color: #64ffda"]:hover {
            background-color: transparent !important;
            box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7) !important;
          }
          
          #about div[style*="rgba(100, 255, 218, 0.1)"]:hover {
            background-color: transparent !important;
          }
        `}
      </style>
    </section>
  );
};

export default About;
