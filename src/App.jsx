
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    // Intersection Observer for scroll animations
    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target);
        }
      });
    }, appearOptions);
    
    const faders = document.querySelectorAll('.fade-in');
    const sliders = document.querySelectorAll('.slide-in-left, .slide-in-right');
    
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
    
    sliders.forEach(slider => {
      appearOnScroll.observe(slider);
    });
    
    return () => {
      faders.forEach(fader => {
        appearOnScroll.unobserve(fader);
      });
      
      sliders.forEach(slider => {
        appearOnScroll.unobserve(slider);
      });
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="loading-screen">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
