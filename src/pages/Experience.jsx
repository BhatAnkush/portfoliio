import { useState } from "react";

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);

  const jobs = [
    {
      title: "Software Engineer-Intern",
      company: "Niveus Solutions",
      logo: "https://niveussolutions.com/wp-content/uploads/2025/02/Niveus-ntt-data.png", // Add path to your logo image
      url: "https://www.niveussolutions.com/",
      date: "November 2024 - Present",
      description: [
        "Developed responsive UI components using React JS with Ant Design and PrimeReact libraries, ensuring consistent design patterns and optimal performance.",
        "Contributed to the development of library for multiple functions of a table component.",
        "Collaborated with cross-functional teams to gather requirements, debug issues, and implement front-end solutions aligned with needs in QA Data Validation for the Data Mod Team & Cloud Manager for the CloudOps Team.",
      ],
    },
    {
      title: "Intern",
      company: "EvoluteIQ",
      logo: "https://evoluteiq.com/wp-content/uploads/2021/12/EvoluteIQ-logo-180x51.png",
      url: "https://evoluteiq.com/",
      date: "February 2024 - April 2024",
      description: [
        "Worked on automating business processes using the EvoluteIQ Hyperautomation platform combining RPA, AI, ML, and workflow orchestration.",
        "Assisted in building UI components and integrations for low-code/no-code automation dashboards using React and Node.js.",
        "Collaborated with senior engineers to streamline data flows and automate repetitive tasks, reducing manual effort by over 30%.",
      ],
    },
  ];

  return (
    <section id="experience" style={{ padding: "100px 0" }}>
      <div className="container">
        <style>
          {`
            .logo-container {
              width: 50px;
              height: 50px;
              margin-bottom: 8px;
              border-radius: 50%;
              overflow: hidden;
              background-color: rgba(255, 255, 255, 0.9);
              padding: 5px;
              transition: all 0.3s ease;
            }
            
            .logo-container:hover {
              transform: translateY(-5px);
              box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
            }
            
            .logo-container.active {
              box-shadow: 0 0 0 2px var(--accent-color);
              transform: translateY(-3px);
            }
            
            .company-tab {
              background-color: transparent;
              padding: 10px 20px;
              margin-right: 10px;
              border-top: none;
              border-right: none;
              border-left: none;
              border-bottom: 2px solid transparent;
              cursor: pointer;
              display: flex;
              flex-direction: column;
              align-items: center;
              transition: all 0.3s ease;
              position: relative;
            }
            
            .company-tab.active {
              border-bottom: 2px solid var(--accent-color);
            }
            
            .company-tab:hover:not(.active) {
              border-bottom: 2px solid rgba(100, 255, 218, 0.5);
            }
            
            .job-panel {
              padding: 25px;
              border: 1px solid var(--text-secondary);
              border-radius: 8px;
              transition: all 0.3s ease;
              background-color: var(--secondary-color);
              box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
            }
            
            .job-panel:hover {
              box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
              transform: translateY(-5px);
            }
            
            .panel-logo-container {
              width: 40px;
              height: 40px;
              margin-right: 15px;
              border-radius: 4px;
              overflow: hidden;
              background-color: rgba(255, 255, 255, 0.9);
              padding: 5px;
              transition: all 0.3s ease;
            }
            
            .job-item {
              position: relative;
              padding-left: 30px;
              margin-bottom: 10px;
              color: var(--text-secondary);
              transition: transform 0.2s ease;
            }
            
            .job-item:hover {
              transform: translateX(5px);
              color: var(--white);
            }
            
            .job-marker {
              position: absolute;
              left: 0;
              color: var(--accent-color);
              transition: transform 0.2s ease;
            }
            
            .job-item:hover .job-marker {
              transform: scale(1.2);
            }
            
            .tabs-container {
              display: flex;
              flex-direction: row;
              list-style: none;
              padding: 0;
              margin: 0;
              border-bottom: 2px solid var(--text-secondary);
            }
            
            .company-name {
              font-family: var(--font-mono);
              font-size: 13px;
              transition: var(--transition);
            }
            
            .company-link {
              color: var(--accent-color);
              text-decoration: none;
              position: relative;
              display: inline-block;
              transition: all 0.3s ease;
            }
            
            .company-link:hover {
              text-decoration: underline;
              transform: translateY(-2px);
            }
            
            .job-date {
              font-family: var(--font-mono);
              font-size: 0.8rem;
              margin: 0;
              color: var(--text-secondary);
            }
          `}
        </style>

        <h2 className="section-title fade-in">
          <span className="number">02.</span> Where I've Worked
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "700px",
            margin: "0 auto",
          }}
          className="fade-in"
        >
          {/* Vertical tabs - Company logos */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <ul className="tabs-container" role="tablist" aria-label="Job tabs">
              {jobs.map((job, i) => (
                <li key={i}>
                  <button
                    id={`tab-${i}`}
                    role="tab"
                    aria-selected={activeTabId === i}
                    aria-controls={`panel-${i}`}
                    onClick={() => setActiveTabId(i)}
                    className={`company-tab ${
                      activeTabId === i ? "active" : ""
                    }`}
                  >
                    <div
                      className={`logo-container ${
                        activeTabId === i ? "active" : ""
                      }`}
                    >
                      <img
                        src={job.logo}
                        alt={`${job.company} logo`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                        onError={(e) => {
                          // Fallback for missing images
                          e.target.src = "./Assets/logos/placeholder-logo.png";
                        }}
                      />
                    </div>
                    <span
                      className="company-name"
                      style={{
                        color:
                          activeTabId === i
                            ? "var(--accent-color)"
                            : "var(--text-secondary)",
                      }}
                    >
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
                className="job-panel"
                style={{
                  display: activeTabId === i ? "block" : "none",
                  opacity: activeTabId === i ? 1 : 0,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <div className="panel-logo-container">
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      onError={(e) => {
                        // Fallback for missing images
                        e.target.src = "./Assets/logos/placeholder-logo.png";
                      }}
                    />
                  </div>

                  <div>
                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 500,
                        marginBottom: "5px",
                      }}
                    >
                      <span>{job.title}</span>
                      <span style={{ color: "var(--accent-color)" }}> @ </span>
                      <a
                        href={job.url}
                        className="company-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.company}
                      </a>
                    </h3>

                    <p className="job-date">{job.date}</p>
                  </div>
                </div>

                <ul
                  style={{ padding: 0, listStyle: "none", marginTop: "20px" }}
                >
                  {job.description.map((point, j) => (
                    <li key={j} className="job-item">
                      <span className="job-marker">▹</span>
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
