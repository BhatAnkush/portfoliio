import { useState, useEffect } from "react";
import assets from "../components/Assets";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768
  );

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);

    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const isMobile = windowWidth <= 768;

  return (
    <header
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        padding: "0 2rem",
        height: "70px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "var(--transition)",
        backgroundColor: scrolled ? "rgba(10, 25, 47, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(2, 12, 27, 0.7)" : "none",
      }}
    >
      <div
        className="logo"
        style={{
          fontFamily: "var(--font-mono)",
          fontWeight: "bold",
          fontSize: "1.5rem",
          color: "var(--accent-color)",
        }}
      >
        <a href="#home">AB.</a>
      </div>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <ul
          style={{
            display: isMobile ? (mobileMenuOpen ? "flex" : "none") : "flex",
            flexDirection: isMobile ? "column" : "row",
            position: isMobile ? "absolute" : "static",
            top: isMobile ? "70px" : "auto",
            right: isMobile ? "0" : "auto",
            backgroundColor: isMobile
              ? "var(--secondary-color)"
              : "transparent",
            width: isMobile ? "70%" : "auto",
            height: isMobile ? "100vh" : "auto",
            alignItems: isMobile ? "center" : "center",
            justifyContent: isMobile ? "flex-start" : "center",
            padding: isMobile ? "2rem" : "0",
          }}
          className="nav-links"
        >
          <li
            style={{
              margin: "0 1.5rem",
              padding: "0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
              <span
                style={{
                  color: "var(--accent-color)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                01.{" "}
              </span>
              Home
            </a>
          </li>
          <li
            style={{
              margin: "0 1.5rem",
              padding: "0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              <span
                style={{
                  color: "var(--accent-color)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                02.{" "}
              </span>
              About
            </a>
          </li>
          <li
            style={{
              margin: "0 1.5rem",
              padding: "0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            <a
              href="#experience"
              onClick={(e) => handleNavClick(e, "experience")}
            >
              <span
                style={{
                  color: "var(--accent-color)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                03.{" "}
              </span>
              Experience
            </a>
          </li>
          <li
            style={{
              margin: "0 1.5rem",
              padding: "0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              <span
                style={{
                  color: "var(--accent-color)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                04.{" "}
              </span>
              Projects
            </a>
          </li>
          <li
            style={{
              margin: "0 1.5rem",
              padding: "0.5rem 0",
              fontSize: "0.9rem",
            }}
          >
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              <span
                style={{
                  color: "var(--accent-color)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                05.{" "}
              </span>
              Contact
            </a>
          </li>
          <li style={{ marginLeft: "1.5rem" }}>
            <a
              href={assets.resume}
              download="Ankush_Ananth_Bhat_Resume.pdf"
              className="btn btn-primary"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="mobile-menu-btn"
          onClick={toggleMenu}
          style={{
            display: isMobile ? "block" : "none",
            fontSize: "1.5rem",
            color: "var(--accent-color)",
            background: "none",
            border: "none",
          }}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
