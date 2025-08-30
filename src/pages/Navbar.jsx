import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/use-theme";
import { FiSun, FiMoon, FiHome, FiUser, FiGrid } from "react-icons/fi";
import Clock from "../components/Clock";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      className="navbar"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 100,
        padding: "0 1rem",
        height: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "var(--transition)",
        backgroundColor: scrolled ? "rgba(0,0,0,0.0)" : "transparent",
        backdropFilter: scrolled ? "blur(6px)" : "none",
        boxShadow: scrolled ? "0 8px 20px rgba(0,0,0,0.15)" : "none",
      }}
    >
      <div
        className="logo"
        style={{
          position: "absolute",
          left: 16,
          fontFamily: "var(--font-mono)",
          fontWeight: "bold",
          fontSize: "1.2rem",
          color: "var(--accent-color)",
        }}
      >
        <a href="/">0x4nku5h</a>
      </div>

      <nav
        style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <ul
          style={{
            display: isMobile ? (mobileMenuOpen ? "flex" : "none") : "flex",
            flexDirection: isMobile ? "column" : "row",
            position: isMobile ? "absolute" : "static",
            top: isMobile ? "70px" : "auto",
            right: isMobile ? "0" : "auto",
            margin: 0,
            background: theme === 'light' ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.08)',
            backdropFilter: "blur(10px)",
            border: theme === 'light' ? '1px solid rgba(0,0,0,0.06)' : '1px solid rgba(255,255,255,0.15)',
            boxShadow: theme === 'light' ? '0 6px 18px rgba(0,0,0,0.12)' : '0 8px 24px rgba(0,0,0,0.2)',
            borderRadius: isMobile ? "0" : "9999px",
            minWidth: isMobile ? "70%" : 320,
            height: isMobile ? "100vh" : "48px",
            alignItems: "center",
            justifyContent: "center",
            padding: isMobile ? "2rem" : "0 8px",
            gap: isMobile ? "12px" : "4px",
          }}
          className="nav-links"
        >
          {/* Home icon button */}
          <li style={{ padding: "6px" }}>
            <Link to="/" style={{ width: 36, height: 36, borderRadius: 9999, display: 'grid', placeItems: 'center', background: theme === 'light' ? '#efefef' : 'rgba(0,0,0,0.08)', color: 'var(--text-color)' }}>
              <FiHome />
            </Link>
          </li>

          {/* separator */}
          <li aria-hidden style={{ width: 1, height: 24, background: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)' }} />

          {/* About */}
          <li>
            <Link to="/about" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 9999 }}>
              <FiUser /> <span>About</span>
            </Link>
          </li>

          {/* Work */}
          <li>
            <Link to="/projects" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', borderRadius: 9999 }}>
              <FiGrid /> <span>Work</span>
            </Link>
          </li>

          {/* separator */}
          <li aria-hidden style={{ width: 1, height: 24, background: theme === 'light' ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.15)' }} />

          {/* Theme toggle inside pill */}
          <li>
            <button aria-label="Toggle theme" onClick={toggleTheme} style={{ width: 36, height: 36, borderRadius: 9999, display: 'grid', placeItems: 'center', background: theme === 'light' ? '#efefef' : 'rgba(0,0,0,0.08)', color: 'var(--text-color)', border: 'none' }}>
              {theme === 'light' ? <FiMoon /> : <FiSun />}
            </button>
          </li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "12px", position: 'absolute', right: 16 }}>
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
          <div aria-label="Clock" style={{ fontSize: 12, opacity: 0.85 }}>
            <Clock />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
