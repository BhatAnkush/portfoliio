import images from "./Assets/index.js"
const About = () => {
  const skills = [
    'JavaScript (ES6+)',  
    'React.js', 
    'Node.js', 
    'Express', 
    'PostgreSQL',
    'RESTful API', 
    'HTML5/CSS3',
    'Git/Github',
    
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
            Hello! I'm Ankush Ananth Bhat, a Web developer with a strong foundation in Information Science. 
              Having completed my Bachelor's in Engineering from Sahyadri College of Engineering & Management, 
              Mangaluru, I am passionate about creating impactful web applications and solutions, particularly 
              with technologies like React.js and Node.js.
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at 
              <a href="https://evoluteiq.com/" style={{ color: 'var(--accent-color)' }} target="_blank"> EvoluteIQ</a>,and currently working at 
              <a href="https://www.niveussolutions.com/" style={{ color: 'var(--accent-color)' }} target="_blank"> Niveus Solutions part of NTT Data</a>,
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
                    src={images.aboutme}
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
