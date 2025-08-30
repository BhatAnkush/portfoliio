import { useState, useEffect } from 'react';
import Navbar from './pages/Navbar';
import Hero from './pages/Hero';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import CaseStudy from './pages/CaseStudy';
import Certificates from './pages/Certificates';
import AboutPage from './pages/AboutPage';
import ProjectsIndex from './pages/ProjectsIndex';

import { Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/use-theme';

function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

function SectionHome({ targetId }) {
  const location = useLocation();
  useEffect(() => {
    const t = setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => clearTimeout(t);
  }, [location, targetId]);
  return <Home />;
}

function App() {
  useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -100px 0px" };
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
        <div className="loading-screen"><div className="loader"></div></div>
      ) : (
        <>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/About" element={<AboutPage />} />
              <Route path="/work" element={<ProjectsIndex />} />
              <Route path="/projects" element={<ProjectsIndex />} />
              <Route path="/contact" element={<SectionHome targetId="contact" />} />
              <Route path="/case-studies/:id" element={<CaseStudy />} />
              <Route path="/certificates" element={<Certificates />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
