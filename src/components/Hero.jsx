import { useState, useEffect, useRef } from 'react';

const TypingText = ({ text, speed = 100, delay = 0, className, style, as: Component = 'div' }) => {
  const [displayedText, setDisplayedText] = useState('');
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
        borderRight: isComplete ? 'none' : '0.15em solid var(--accent-color)',
        animation: isComplete ? 'none' : 'blink-caret 0.75s step-end infinite',
        overflow: 'hidden'
      }}
    >
      {displayedText}
    </Component>
  );
};

const Hero = () => {
  const [showContent, setShowContent] = useState(false);
  
  useEffect(() => {
    // Wait for title to complete before showing the rest of content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000); // Adjust based on your typing duration
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
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
            `}
          </style>
          
          <p className="fade-in" style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-color)',
            margin: '0 0 20px 4px',
            fontSize: '1rem'
          }}>
            Hi, my name is
          </p>
          
          {/* Name on its own line */}
          <TypingText 
            text="Ankush Bhat."
            speed={100}
            as="h1"
            className="fade-in"
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              margin: '0',
              fontWeight: '600',
              color: 'var(--white)',
              lineHeight: '1.1',
              display: 'block',
              width: '100%'
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
              fontSize: 'clamp(40px, 8vw, 80px)',
              margin: '10px 0 30px 0', // Added top margin for spacing between lines
              fontWeight: '600',
              color: 'var(--text-secondary)',
              lineHeight: '1.1',
              display: 'block',
              width: '100%'
            }}
          />
          
          <p className={`content-fade-in ${showContent ? 'visible' : ''}`} style={{
  maxWidth: '540px',
  marginBottom: '30px',
  color: 'var(--text-secondary)',
  fontSize: '1.2rem',
  transitionDelay: '0.2s'
}}>
  I'm a Software Engineer Intern with a passion for creating clean, user-friendly web applications. 
  Currently, I'm gaining hands-on experience and building practical solutions at{' '}
  <a href="https://www.niveussolutions.com/" style={{ color: 'var(--accent-color)' }} target="_blank" rel="noopener noreferrer">
    Niveus Solutions, part of NTT Data
  </a>.
</p>

          
          <div className={`content-fade-in ${showContent ? 'visible' : ''}`} style={{ 
            marginTop: '50px',
            transitionDelay: '0.4s'
          }}>
            <a href="#projects" className="btn btn-primary" style={{ padding: '1.25rem 1.75rem' }}>
              Check out my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;