import { useState, useEffect, useRef } from "react";

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
  const canvasRef = useRef(null);

  useEffect(() => {
    // Wait for title to complete before showing the rest of content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Adjust based on your typing duration

    return () => clearTimeout(timer);
  }, []);

  // Particle animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Particle properties
    const particlesArray = [];
    const numberOfParticles = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `hsla(${Math.random() * 60 + 250}, ${
          Math.random() * 50 + 30
        }%, ${Math.random() * 50 + 40}%, ${Math.random() * 0.5 + 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            opacityValue = 1 - distance / 120;
            ctx.strokeStyle = `rgba(148, 85, 255, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "100px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Particle animation canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0.4,
          zIndex: 0,
        }}
      ></canvas>

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: "800px" }}>
          <style>
            {`
            @keyframes blink-caret {
              from, to { border-color: transparent }
              50% { border-color: var(--accent-color) }
            }
            
            .content-fade-in {
              opacity: 0;
              transform: translateY(10px);
              transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .content-fade-in.visible {
              opacity: 1;
              transform: translateY(0);
            }
            
            .btn-primary {
              display: inline-block;
              color: var(--accent-color);
              background-color: transparent;
              border: 1px solid var(--accent-color);
              border-radius: 4px;
              padding: 1.25rem 1.75rem;
              font-size: 14px;
              font-family: var(--font-mono);
              line-height: 1;
              text-decoration: none;
              cursor: pointer;
              transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
              margin: 0;
              width: auto;
            }
            
            .btn-primary:hover {
              background-color: rgba(100, 255, 218, 0.1);
              outline: none;
            }
            `}
          </style>

          <p
            className="fade-in"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent-color)",
              margin: "0 0 20px 4px",
              fontSize: "1rem",
            }}
          >
            Hi, my name is
          </p>

          {/* Name on its own line */}
          <TypingText
            text="Ankush Bhat."
            speed={100}
            as="h1"
            className="fade-in"
            style={{
              fontSize: "clamp(40px, 8vw, 80px)",
              margin: "0",
              fontWeight: "600",
              color: "var(--white)",
              lineHeight: "1.1",
              display: "block",
              width: "100%",
            }}
          />

          {/* Title always on a new line */}
          <TypingText
            text="I build things for the web."
            speed={80}
            delay={1200} // Start after first line completes
            as="h2"
            className="fade-in"
            style={{
              fontSize: "clamp(40px, 8vw, 80px)",
              margin: "10px 0 30px 0", // Added top margin for spacing between lines
              fontWeight: "600",
              color: "var(--text-secondary)",
              lineHeight: "1.1",
              display: "block",
              width: "100%",
            }}
          />

          <p
            className={`content-fade-in ${showContent ? "visible" : ""}`}
            style={{
              maxWidth: "540px",
              marginBottom: "30px",
              color: "var(--text-secondary)",
              fontSize: "1.2rem",
              transitionDelay: "0.2s",
            }}
          >
            I'm a Software Engineer Intern with a passion for creating clean,
            user-friendly web applications. Currently, I'm gaining hands-on
            experience and building practical solutions at{" "}
            <a
              href="https://www.niveussolutions.com/"
              style={{ color: "var(--accent-color)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Niveus Solutions, part of NTT Data
            </a>
            .
          </p>

          <div
            className={`content-fade-in ${showContent ? "visible" : ""}`}
            style={{
              marginTop: "50px",
              transitionDelay: "0.4s",
            }}
          >
            <a
              href="#projects"
              className="btn-primary"
              style={{
                display: "inline-block",
                padding: "1.25rem 1.75rem",
                width: "auto",
              }}
            >
              Check out my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
