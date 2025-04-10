import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/BhatAnkush",
      icon: <FiGithub size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankushab/",
      icon: <FiLinkedin size={20} />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/AnkushB68271082",
      icon: <FiTwitter size={20} />,
    },
  ];

  return (
    <footer style={{ backgroundColor: "var(--secondary-color)" }}>
      <div
        id="contact"
        style={{
          padding: "100px 0",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          className="container"
          style={{ maxWidth: "1000px", margin: "0 auto" }}
        >
          <h2
            className={`section-title ${isVisible ? "fade-in" : ""}`}
            style={{
              justifyContent: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <span className="number">04.</span> What's Next?
          </h2>

          <h3
            className={isVisible ? "fade-in" : ""}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              margin: "0 0 20px",
              textAlign: "center",
              color: "var(--white)",
              fontWeight: 600,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            Get In Touch
          </h3>

          <p
            className={isVisible ? "fade-in" : ""}
            style={{
              maxWidth: "600px",
              margin: "0 auto 50px",
              textAlign: "center",
              color: "var(--text-secondary)",
              lineHeight: 1.5,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s",
            }}
          >
            I'm currently looking for new opportunities. Whether you have a
            question, want to collaborate, or just want to say hi, I'll do my
            best to get back to you!
          </p>

          <div
            className={isVisible ? "fade-in" : ""}
            style={{
              textAlign: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 0.6s ease-out 0.6s, transform 0.6s ease-out 0.6s",
            }}
          >
            <a
              href="mailto:ankushbhataab@gmail.com"
              className="btn btn-primary"
              style={{
                padding: "1.25rem 1.75rem",
                fontFamily: "var(--font-mono)",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                transition: "all 0.3s ease",
                ":hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px -10px rgba(100, 255, 218, 0.3)",
                },
              }}
            >
              <FiMail size={18} />
              Say Hello
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          padding: "30px 0 20px",
          textAlign: "center",
          color: "var(--text-secondary)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          className={isVisible ? "fade-in" : ""}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 0 20px",
            gap: "25px",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out 0.8s",
          }}
        >
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              style={{
                color: "var(--text-secondary)",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
                ":hover": {
                  color: "var(--accent-color)",
                  transform: "translateY(-3px)",
                },
              }}
            >
              {link.icon}
              <span style={{ fontSize: "0.7rem" }}>{link.name}</span>
            </a>
          ))}
        </div>

        <div
          className={isVisible ? "fade-in" : ""}
          style={{
            opacity: isVisible ? 1 : 0,
            transition: "opacity 0.6s ease-out 1s",
          }}
        >
          <a
            href="https://github.com/BhatAnkush"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text-secondary)",
              transition: "all 0.3s ease",
              textDecoration: "none",
              ":hover": {
                color: "var(--accent-color)",
              },
            }}
          >
            <p>Designed & Built by Ankush Bhat</p>
            <p style={{ marginTop: "5px", fontSize: "0.7rem" }}>
              © {new Date().getFullYear()} All Rights Reserved
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
