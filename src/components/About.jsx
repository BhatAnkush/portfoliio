
const About = () => {
  const skills = [
    'JavaScript (ES6+)', 
    'TypeScript', 
    'React', 
    'Node.js', 
    'Express', 
    'MongoDB', 
    'GraphQL',
    'Next.js'
  ];

  return (
    <section id="about" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          <span className="number">01.</span> About Me
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '50px'
        }}>
          <div className="fade-in">
            <p>
              Hello! My name is John and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2012 when I decided to try editing 
              custom Tumblr themes — turns out hacking together a custom reblog button taught 
              me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at 
              <a href="#" style={{ color: 'var(--accent-color)' }}> an advertising agency</a>,
              <a href="#" style={{ color: 'var(--accent-color)' }}> a start-up</a>,
              <a href="#" style={{ color: 'var(--accent-color)' }}> a huge corporation</a>, and
              <a href="#" style={{ color: 'var(--accent-color)' }}> a student-led design studio</a>.
              My main focus these days is building accessible, inclusive products and digital 
              experiences at <a href="#" style={{ color: 'var(--accent-color)' }}>Acme Inc</a> for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            
            <ul style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
              gap: '0 10px',
              padding: '0',
              margin: '20px 0 0',
              overflow: 'hidden',
              listStyle: 'none'
            }}>
              {skills.map((skill, i) => (
                <li key={i} style={{
                  position: 'relative',
                  marginBottom: '10px',
                  paddingLeft: '20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)'
                }}>
                  <span style={{
                    position: 'absolute',
                    left: '0',
                    color: 'var(--accent-color)'
                  }}>▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="fade-in" style={{ position: 'relative' }}>
            <div style={{
              position: 'relative',
              maxWidth: '300px',
              margin: '50px auto 0'
            }}>
              <div style={{
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                transition: 'var(--transition)',
                position: 'relative',
                zIndex: 1,
                borderRadius: '4px',
                backgroundColor: 'var(--accent-color)',
                '::after': {
                  content: '""',
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  background: 'transparent',
                  borderRadius: '4px',
                  transition: 'var(--transition)'
                },
                ':hover::after': {
                  backgroundColor: 'transparent',
                  border: `2px solid var(--accent-color)`
                }
              }}>
                <div style={{
                  filter: 'grayscale(100%) contrast(1)',
                  mixBlendMode: 'multiply',
                  transition: 'var(--transition)',
                  ':hover': {
                    filter: 'none',
                    mixBlendMode: 'normal'
                  }
                }}>
                  <img 
                    src="https://via.placeholder.com/300x300" 
                    alt="Ankush Bhat" 
                    style={{
                      borderRadius: '4px',
                      maxWidth: '100%',
                      verticalAlign: 'middle'
                    }}
                  />
                </div>
              </div>
              <div style={{
                position: 'absolute',
                top: '15px',
                left: '15px',
                width: '100%',
                height: '100%',
                border: `2px solid var(--accent-color)`,
                borderRadius: '4px',
                zIndex: -1
              }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
