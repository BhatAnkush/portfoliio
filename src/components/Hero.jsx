
const Hero = () => {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '100px'
    }}>
      <div className="container">
        <div style={{ maxWidth: '800px' }}>
          <p className="fade-in" style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-color)',
            margin: '0 0 20px 4px',
            fontSize: '1rem'
          }}>
            Hi, my name is
          </p>
          
          <h1 className="fade-in" style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            margin: '0',
            fontWeight: '600',
            color: 'var(--white)',
            lineHeight: '1.1'
          }}>
            Ankush Bhat.
          </h1>
          
          <h2 className="fade-in" style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            margin: '0 0 30px 0',
            fontWeight: '600',
            color: 'var(--text-secondary)',
            lineHeight: '1.1'
          }}>
            I build things for the web.
          </h2>
          
          <p className="fade-in" style={{
            maxWidth: '540px',
            marginBottom: '30px',
            color: 'var(--text-secondary)',
            fontSize: '1.2rem'
          }}>
            I'm a software engineer-Intern specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products at{' '}
            <a href="https://www.niveussolutions.com/" style={{ color: 'var(--accent-color)' }} target="_blank"> @ Niveus Solutions part of NTT Data</a>.
          </p>
          
          <div className="fade-in" style={{ marginTop: '50px' }}>
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
