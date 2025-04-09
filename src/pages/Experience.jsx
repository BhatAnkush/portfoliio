import { useState } from 'react';

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  
  const jobs = [
    {
      title: 'Software Engineer-Intern',
      company: 'Niveus Solutions',
      logo: 'https://niveussolutions.com/wp-content/uploads/2025/02/Niveus-ntt-data.png', // Add path to your logo image
      url: 'https://www.niveussolutions.com/',
      date: 'November 2024 - Present',
      description: [
        'Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistentdesign patterns and optimal performance.',
'Contributed to the development of library for multiple functions of a table component.',
'Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end solutionsaligned with needs in QA Data Validation for the Data Mod Team & Cloud Manager for the CloudOps Team.'
      ]
    },
    {
      title: 'Intern',
      company: 'EvoluteIQ',
      logo: 'https://evoluteiq.com/wp-content/uploads/2021/12/EvoluteIQ-logo-180x51.png',
      url: 'https://evoluteiq.com/',
      date: 'February 2024 - April 2024',
      description: [
        'Worked on automating business processes using the EvoluteIQ Hyperautomation platform combining RPA, AI, ML, and workflow orchestration.',
        'Assisted in building UI components and integrations for low-code/no-code automation dashboards using React and Node.js.',
        'Collaborated with senior engineers to streamline data flows and automate repetitive tasks, reducing manual effort by over 30%.'
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
          
          {/* Vertical tabs - Company logos */}
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
                      backgroundColor: 'transparent',
                      padding: '10px 20px',
                      marginRight: '10px',
                      borderBottom: activeTabId === i ? '2px solid var(--accent-color)' : 'none',
                      marginBottom: activeTabId === i ? '-2px' : '0',
                      transition: 'var(--transition)',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      marginBottom: '8px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: activeTabId === i ? '2px solid var(--accent-color)' : '2px solid transparent',
                      padding: '2px',
                      transition: 'var(--transition)'
                    }}>
                      <img 
                        src={job.logo}
                        alt={`${job.company} logo`}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                        onError={(e) => {
                          // Fallback for missing images
                          e.target.src = './Assets/logos/placeholder-logo.png';
                        }}
                      />
                    </div>
                    <span style={{
                      color: activeTabId === i ? 'var(--accent-color)' : 'var(--text-secondary)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '13px',
                      transition: 'var(--transition)'
                    }}>
                      {job.company}
                    </span>
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
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '15px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    marginRight: '15px',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <img 
                      src={job.logo}
                      alt={`${job.company} logo`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'
                      }}
                      onError={(e) => {
                        // Fallback for missing images
                        e.target.src = './Assets/logos/placeholder-logo.png';
                      }}
                    />
                  </div>
                  
                  <div>
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
                      margin: 0,
                      color: 'var(--text-secondary)'
                    }}>
                      {job.date}
                    </p>
                  </div>
                </div>

                <ul style={{ padding: 0, listStyle: 'none', marginTop: '20px' }}>
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