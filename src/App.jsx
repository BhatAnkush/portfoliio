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
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px"
      };

      const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        });
      }, appearOptions);

      const faders = document.querySelectorAll('.fade-in');
      const sliders = document.querySelectorAll('.slide-in-left, .slide-in-right');

      faders.forEach(el => appearOnScroll.observe(el));
      sliders.forEach(el => appearOnScroll.observe(el));

      return () => {
        faders.forEach(el => appearOnScroll.unobserve(el));
        sliders.forEach(el => appearOnScroll.unobserve(el));
      };
    }
  }, [isLoading]);

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
