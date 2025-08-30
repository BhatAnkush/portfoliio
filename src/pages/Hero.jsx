import { useState, useEffect, useRef } from "react";
import assets from "../components/Assets";

const TypingText = ({
  text,
  speed = 100,
  delay = 0,
  className,
  style,
  as: Component = "div",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const startTyping = () => {
      let currentIndex = 0;
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeoutRef.current = setTimeout(typeNextChar, speed);
        } else {
          setIsComplete(true);
        }
      };

      typeNextChar();
    };

    const delayTimeout = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [text, speed, delay]);

  return (
    <Component
      className={className}
      style={{
        ...style,
        borderRight: isComplete ? "none" : "0.15em solid var(--accent-color)",
        animation: isComplete ? "none" : "blink-caret 0.75s step-end infinite",
        overflow: "hidden",
      }}
    >
      {displayedText}
    </Component>
  );
};

const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  const avatarRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const translate = Math.min(12, y * 0.04);
      if (avatarRef.current) {
        avatarRef.current.style.transform = `translateY(${translate}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center" }}>
          <style>
            {`
            .intro-up { opacity: 0; transform: translateY(20px); animation: intro 800ms ease forwards; }
            .intro-up.delay-1 { animation-delay: 200ms; }
            .intro-up.delay-2 { animation-delay: 400ms; }
            .intro-up.delay-3 { animation-delay: 600ms; }
            @keyframes intro { to { opacity: 1; transform: translateY(0); } }

            .avatar-ring {
              width: 160px; height: 160px; border-radius: 9999px; padding: 3px;
              background: conic-gradient(from 180deg at 50% 50%, #60a5fa, #22d3ee, #1e3a8a, #60a5fa);
              margin: 0 auto 18px; display: grid; place-items: center;
              transition: transform 400ms ease;
            }
            .avatar-ring:hover { transform: scale(1.03) rotate(2deg); }
            .avatar-img { width: 100%; height: 100%; border-radius: 9999px; object-fit: cover; display: block; }

            .scroll-indicator { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); color: var(--text-color); opacity: 0.7; }
            .scroll-indicator span { display: inline-block; animation: bounce 1.2s infinite; }
            @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }
          `}
          </style>

          <div className={showContent ? "intro-up" : ""}>
            <div className="avatar-ring" ref={avatarRef} style={{ width: 132, height: 132 }}>
              <img src={assets.aboutme} alt="Ankush Bhat" className="avatar-img" />
            </div>
          </div>

          <h1 className={`gradient-text ${showContent ? "intro-up delay-1" : ""}`} style={{ fontSize: "clamp(40px, 7vw, 72px)", fontWeight: 800, letterSpacing: 0.5, marginTop: 8 }}>
            Passionate Frontend Developer
          </h1>
          <h2 className={showContent ? "intro-up delay-2" : ""} style={{ fontSize: "clamp(16px, 2.6vw, 22px)", color: "var(--text-secondary)", marginTop: 8 }}>
            Full‑Stack & Cloud Enthusiast
          </h2>

          <div className={showContent ? "intro-up delay-3" : ""} style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <a href="#projects" className="btn-gradient" style={{ padding: "0.9rem 1.25rem", borderRadius: 9999 }}>
              View Work
            </a>
            <a href="/case-studies/suny-art-school" className="btn" style={{ borderRadius: 9999 }}>
              Featured Case Study
            </a>
          </div>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to About" className="scroll-indicator">
        <span>↓</span>
      </a>
    </section>
  );
};

export default Hero;
