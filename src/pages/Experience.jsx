
import { useState } from 'react';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  
  const jobs = [
    {
      title: 'Senior Software Engineer',
      company: 'Acme Inc',
      url: '#',
      date: 'January 2021 - Present',
      description: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, JavaScript, React, and Node.js',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Interfaced with clients on a weekly basis, providing technological expertise'
      ]
    },
    {
      title: 'Front-End Developer',
      company: 'TechStart',
      url: '#',
      date: 'March 2019 - December 2020',
      description: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser"
      ]
    },
    {
      title: 'UI/UX Designer',
      company: 'WebStudio',
      url: '#',
      date: 'July 2017 - February 2019',
      description: [
        'Developed and maintained code for in-house and client websites primarily using HTML, CSS, and jQuery',
        'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
        'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
      ]
    }
  ];

  return (
    <section id="experience" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          <span className="number">02.</span> Where I've Worked
        </h2>
        
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '700px',
          margin: '0 auto'
        }} className="fade-in">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px'
          }}>
            <ul style={{
              display: 'flex',
              flexDirection: 'row',
              listStyle: 'none',
              padding: '0',
              margin: '0',
              borderBottom: '2px solid var(--text-secondary)'
            }} role="tablist" aria-label="Job tabs">
              {jobs.map((job, i) => (
                <li key={i}>
                  <button
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={activeTabId === i}
                    aria-controls={`panel-${i}`}
                    onClick={() => setActiveTabId(i)}
                    style={{
                      backgroundColor: activeTabId === i ? 'var(--secondary-color)' : 'transparent',
                      color: activeTabId === i ? 'var(--accent-color)' : 'var(--text-secondary)',
                      padding: '10px 20px',
                      marginRight: '10px',
                      borderBottom: activeTabId === i ? '2px solid var(--accent-color)' : 'none',
                      marginBottom: activeTabId === i ? '-2px' : '0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      transition: 'var(--transition)',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {job.company}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Job details - Stacked vertically */}
          <div>
            {jobs.map((job, i) => (
              <div
                key={i}
                id={`panel-${i}`}
                role="tabpanel"
                aria-labelledby={`tab-${i}`}
                style={{
                  display: activeTabId === i ? 'block' : 'none',
                  padding: '20px',
                  border: '1px solid var(--text-secondary)',
                  borderRadius: '4px',
                  transition: 'var(--transition)',
                  backgroundColor: 'var(--secondary-color)',
                  opacity: activeTabId === i ? 1 : 0
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 500,
                  marginBottom: '5px'
                }}>
                  <span>{job.title}</span>
                  <span style={{ color: 'var(--accent-color)' }}> @ </span>
                  <a href={job.url} style={{ color: 'var(--accent-color)' }}>
                    {job.company}
                  </a>
                </h3>

                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  marginBottom: '25px',
                  color: 'var(--text-secondary)'
                }}>
                  {job.date}
                </p>

                <ul style={{ padding: 0, listStyle: 'none' }}>
                  {job.description.map((point, j) => (
                    <li key={j} style={{
                      position: 'relative',
                      paddingLeft: '30px',
                      marginBottom: '10px',
                      color: 'var(--text-secondary)'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: '0',
                        color: 'var(--accent-color)'
                      }}>▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
