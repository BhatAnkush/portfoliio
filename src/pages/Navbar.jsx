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
    <>
      {/* Desktop header */}
      {!isMobile && (
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
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                position: "static",
                margin: 0,
                background:
                  theme === "light"
                    ? "rgba(255,255,255,0.92)"
                    : "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border:
                  theme === "light"
                    ? "1px solid rgba(0,0,0,0.06)"
                    : "1px solid rgba(255,255,255,0.15)",
                boxShadow:
                  theme === "light"
                    ? "0 6px 18px rgba(0,0,0,0.12)"
                    : "0 8px 24px rgba(0,0,0,0.2)",
                borderRadius: "9999px",
                minWidth: 320,
                height: "48px",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 8px",
                gap: "4px",
              }}
              className="nav-links"
            >
              {/* Home icon button */}
              <li style={{ padding: "6px" }}>
                <Link
                  to="/"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    display: "grid",
                    placeItems: "center",
                    background:
                      theme === "light" ? "#efefef" : "rgba(0,0,0,0.08)",
                    color: "var(--text-color)",
                  }}
                >
                  <FiHome />
                </Link>
              </li>

              {/* separator */}
              <li
                aria-hidden
                style={{
                  width: 1,
                  height: 24,
                  background:
                    theme === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.15)",
                }}
              />

              {/* About */}
              <li>
                <Link
                  to="/about"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 9999,
                  }}
                >
                  <FiUser /> <span>About</span>
                </Link>
              </li>

              {/* Work */}
              <li>
                <Link
                  to="/work"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    borderRadius: 9999,
                  }}
                >
                  <FiGrid /> <span>Work</span>
                </Link>
              </li>

              {/* separator */}
              <li
                aria-hidden
                style={{
                  width: 1,
                  height: 24,
                  background:
                    theme === "light"
                      ? "rgba(0,0,0,0.08)"
                      : "rgba(255,255,255,0.15)",
                }}
              />

              {/* Theme toggle inside pill */}
              <li>
                <button
                  aria-label="Toggle theme"
                  onClick={toggleTheme}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 9999,
                    display: "grid",
                    placeItems: "center",
                    background:
                      theme === "light" ? "#efefef" : "rgba(0,0,0,0.08)",
                    color: "var(--text-color)",
                    border: "none",
                  }}
                >
                  {theme === "light" ? <FiMoon /> : <FiSun />}
                </button>
              </li>
            </ul>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                position: "absolute",
                right: 16,
              }}
            >
              <div aria-label="Clock" style={{ fontSize: 12, opacity: 0.85 }}>
                <Clock />
              </div>
            </div>
          </nav>
        </header>
      )}

      {/* Mobile bottom navigation */}
      {isMobile && (
        <nav
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              margin: 0,
              padding: 0,
              listStyle: "none",
              background:
                theme === "light"
                  ? "rgba(255,255,255,0.95)"
                  : "rgba(255,255,255,0.08)",
              backdropFilter: "blur(15px)",
              border:
                theme === "light"
                  ? "1px solid rgba(0,0,0,0.06)"
                  : "1px solid rgba(255,255,255,0.15)",
              boxShadow:
                theme === "light"
                  ? "0 8px 32px rgba(0,0,0,0.12)"
                  : "0 8px 32px rgba(0,0,0,0.3)",
              borderRadius: "24px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 8px",
              gap: "4px",
            }}
            className="nav-links-mobile"
          >
            {/* Home icon button */}
            <li style={{ padding: "6px" }}>
              <Link
                to="/"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9999,
                  display: "grid",
                  placeItems: "center",
                  background:
                    theme === "light" ? "#efefef" : "rgba(0,0,0,0.08)",
                  color: "var(--text-color)",
                  textDecoration: "none",
                }}
              >
                <FiHome />
              </Link>
            </li>

            {/* separator */}
            <li
              aria-hidden
              style={{
                width: 1,
                height: 24,
                background:
                  theme === "light"
                    ? "rgba(0,0,0,0.08)"
                    : "rgba(255,255,255,0.15)",
              }}
            />

            {/* About */}
            <li>
              <Link
                to="/about"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 9999,
                  color: "var(--text-color)",
                  textDecoration: "none",
                }}
              >
                <FiUser /> <span>About</span>
              </Link>
            </li>

            {/* Work */}
            <li>
              <Link
                to="/work"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 12px",
                  borderRadius: 9999,
                  color: "var(--text-color)",
                  textDecoration: "none",
                }}
              >
                <FiGrid /> <span>Work</span>
              </Link>
            </li>

            {/* separator */}
            <li
              aria-hidden
              style={{
                width: 1,
                height: 24,
                background:
                  theme === "light"
                    ? "rgba(0,0,0,0.08)"
                    : "rgba(255,255,255,0.15)",
              }}
            />

            {/* Theme toggle inside pill */}
            <li>
              <button
                aria-label="Toggle theme"
                onClick={toggleTheme}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 9999,
                  display: "grid",
                  placeItems: "center",
                  background:
                    theme === "light" ? "#efefef" : "rgba(0,0,0,0.08)",
                  color: "var(--text-color)",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {theme === "light" ? <FiMoon /> : <FiSun />}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
