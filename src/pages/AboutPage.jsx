import { useState } from "react";
import assets from "../components/Assets";
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiMapPin, FiCalendar, FiDownload, FiExternalLink, FiAward, FiBriefcase, FiBookOpen, FiCode, FiGitBranch } from "react-icons/fi";

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const experience = [
    {
      role: "Cloud Associate Engineer",
      company: "Niveus Solutions (NTT DATA)",
      period: "Aug 2023 — Jul 2025",
      type: "Full-time",
      location: "Mangaluru, India",
      description: "Leading cloud solutions development and implementing modern web applications with focus on scalability and performance.",
      achievements: [
        "Led complete SDLC with Agile methodology for 5+ enterprise projects",
        "Built responsive UI components with React/Next.js improving user engagement by 40%",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Collaborated with cross-functional teams of 8+ developers",
        "Optimized application performance resulting in 25% faster load times"
      ],
      technologies: ["React", "Next.js", "TypeScript", "GCP", "Docker", "Node.js"]
    },
    {
      role: "Software Engineer Intern",
      company: "Niveus Solutions (NTT DATA)",
      period: "Feb 2023 — Aug 2023",
      type: "Internship",
      location: "Mangaluru, India",
      description: "Developed and maintained web applications while learning enterprise-level development practices.",
      achievements: [
        "Built 3+ React components for internal tools",
        "Participated in code reviews and sprint planning",
        "Learned cloud deployment with GCP services",
        "Contributed to documentation and testing procedures"
      ],
      technologies: ["React", "JavaScript", "CSS", "Git", "GCP"]
    },
    {
      role: "RPA Intern",
      company: "EvoluteIQ",
      period: "Feb 2024 — Apr 2024",
      type: "Internship",
      location: "Remote",
      description: "Worked on robotic process automation solutions and learned business process optimization.",
      achievements: [
        "Developed automation scripts for data processing",
        "Learned UiPath and automation best practices",
        "Assisted in client requirement analysis",
        "Created documentation for automation workflows"
      ],
      technologies: ["UiPath", "Python", "Excel", "Process Automation"]
    }
  ];

  const education = [
    { 
      degree: "Bachelor of Engineering - Information Science", 
      school: "Sahyadri College of Engineering", 
      period: "2018 — 2022",
      grade: "CGPA: 8.2/10",
      location: "Mangaluru, India",
      coursework: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "Web Technologies", "Computer Networks"]
    },
    { 
      degree: "Pre‑University Course (Science)", 
      school: "Canara PU College", 
      period: "2016 — 2018",
      grade: "Percentage: 82%",
      location: "Mangaluru, India",
      subjects: ["Physics", "Chemistry", "Mathematics", "Computer Science"]
    }
  ];

  const certificates = [
    {
      id: "niveus-internship",
      title: "Software Engineer Intern",
      issuer: "Niveus Solutions (NTT DATA)",
      date: "Nov 2024 - May 2025",
      description: "Successfully completed software engineering internship with focus on full-stack development and cloud technologies.",
      skills: ["React", "Node.js", "GCP", "Agile Development"],
      url: "https://media.licdn.com/dms/image/v2/D562DAQHuKH1is3Mkxw/profile-treasury-image-shrink_1280_1280/B56Zayqce.GoAQ-/0/1746754194415?e=1757142000&v=beta&t=MfrzHRpEn5HRQupEz7TK_bCFwnWiNh062jjpzr6vbU8"
    },
    {
      id: "evoluteiq-intern",
      title: "RPA Intern",
      issuer: "EvoluteIQ",
      date: "Feb 2024 - Apr 2024",
      description: "Completed internship in Robotic Process Automation with hands-on experience in UiPath and business process optimization.",
      skills: ["UiPath", "Process Automation", "Python", "Business Analysis"],
      url: "https://www.linkedin.com/in/ankushab/overlay/1717334641025/single-media-viewer?type=IMAGE"
    }
  ];

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: FiCode,
      items: ["JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "SCSS", "HTML5", "CSS3", "Responsive Design"]
    },
    backend: {
      title: "Backend Development",
      icon: FiGitBranch,
      items: ["Node.js", "Express.js", "REST APIs", "GraphQL", "Authentication", "JWT", "OAuth", "Microservices"]
    },
    databases: {
      title: "Databases",
      icon: FiGitBranch,
      items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Prisma", "Database Design", "Query Optimization"]
    },
    cloud: {
      title: "Cloud & DevOps",
      icon: FiGitBranch,
      items: ["Google Cloud Platform", "AWS", "Docker", "Kubernetes", "CI/CD", "Cloud Run", "Firebase", "Vercel"]
    },
    tools: {
      title: "Tools & Technologies",
      icon: FiGitBranch,
      items: ["Git", "GitHub", "VS Code", "Figma", "ESLint", "Prettier", "Jest", "Testing Library", "Webpack", "Vite"]
    }
  };

  const personalInfo = {
    location: "Mangaluru, Karnataka, India",
    timezone: "Asia/Kolkata (UTC+5:30)",
    languages: ["English", "Hindi", "Kannada", "Tulu"],
    availability: "Open to new opportunities",
    workType: "Remote, Hybrid, On-site"
  };

  const socialLinks = [
    { icon: FiGithub, label: "GitHub", url: "https://github.com/BhatAnkush", color: "#333" },
    { icon: FiLinkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/ankushab/", color: "#0077B5" },
    { icon: FiMail, label: "Email", url: "mailto:ankushbhataab@gmail.com", color: "#EA4335" },
    { icon: FiGlobe, label: "Portfolio", url: "#", color: "#00d4ff" }
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: FiBriefcase },
    { id: "experience", label: "Experience", icon: FiBriefcase },
    { id: "education", label: "Education", icon: FiBookOpen },
    { id: "skills", label: "Skills", icon: FiCode },
    { id: "certificates", label: "Certificates", icon: FiAward }
  ];

  return (
    <section style={{ padding: "100px 0", minHeight: "100vh" }}>
      <style>
        {`
          .about-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .about-header {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            backdrop-filter: blur(10px);
          }
          
          .profile-section {
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 30px;
            align-items: center;
          }
          
          .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid var(--accent-color);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .profile-info h1 {
            font-size: clamp(2rem, 4vw, 3rem);
            margin: 0 0 10px 0;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .profile-title {
            font-size: 1.3rem;
            color: var(--text-secondary);
            margin-bottom: 15px;
          }
          
          .profile-meta {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            margin-bottom: 20px;
          }
          
          .meta-chip {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .social-links {
            display: flex;
            gap: 15px;
          }
          
          .social-link {
            width: 45px;
            height: 45px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: var(--white);
            text-decoration: none;
            transition: all 0.3s ease;
            font-size: 1.1rem;
          }
          
          .social-link:hover {
            transform: translateY(-3px);
            border-color: var(--accent-color);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          
          .download-resume {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 20px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            text-decoration: none;
            border-radius: 12px;
            font-weight: 600;
            transition: all 0.3s ease;
          }
          
          .download-resume:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(100, 255, 218, 0.3);
          }
          
          .tabs-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            overflow: hidden;
          }
          
          .tabs-header {
            display: flex;
            background: rgba(255, 255, 255, 0.05);
            overflow-x: auto;
          }
          
          .tab-button {
            flex: 1;
            padding: 20px;
            background: none;
            border: none;
            color: var(--text-secondary);
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
            font-weight: 500;
            min-width: max-content;
          }
          
          .tab-button.active {
            color: var(--accent-color);
            background: rgba(100, 255, 218, 0.1);
            border-bottom: 3px solid var(--accent-color);
          }
          
          .tab-button:hover:not(.active) {
            color: var(--white);
            background: rgba(255, 255, 255, 0.05);
          }
          
          .tab-content {
            padding: 40px;
          }
          
          .intro-text {
            font-size: 1.1rem;
            line-height: 1.8;
            color: var(--text-secondary);
            margin-bottom: 30px;
          }
          
          .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
          }
          
          .info-card {
            background: rgba(255, 255, 255, 0.03);
            padding: 20px;
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.1);
          }
          
          .info-card h4 {
            color: var(--accent-color);
            margin: 0 0 10px 0;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .info-card p {
            color: var(--text-secondary);
            margin: 0;
            line-height: 1.5;
          }
          
          .experience-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 30px;
            margin-bottom: 25px;
            transition: all 0.3s ease;
          }
          
          .experience-item:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-2px);
          }
          
          .experience-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 15px;
          }
          
          .experience-title {
            flex: 1;
          }
          
          .experience-title h3 {
            color: var(--white);
            margin: 0 0 5px 0;
            font-size: 1.3rem;
          }
          
          .experience-title .company {
            color: var(--accent-color);
            font-weight: 600;
            margin-bottom: 5px;
          }
          
          .experience-meta {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
            font-size: 0.8rem;
            color: var(--text-secondary);
          }
          
          .experience-period {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 6px 12px;
            border-radius: 20px;
            font-weight: 500;
          }
          
          .experience-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 15px 0;
          }
          
          .achievements-list {
            margin: 20px 0;
            padding: 0;
            list-style: none;
          }
          
          .achievements-list li {
            color: var(--text-secondary);
            padding: 5px 0;
            padding-left: 20px;
            position: relative;
            line-height: 1.5;
          }
          
          .achievements-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-color);
            font-weight: bold;
          }
          
          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 20px;
          }
          
          .tech-tag {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.7rem;
            font-weight: 500;
          }
          
          .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
          }
          
          .skill-category {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
          }
          
          .skill-category:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-3px);
          }
          
          .skill-header {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
          }
          
          .skill-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
          }
          
          .skill-title {
            color: var(--white);
            font-size: 1.1rem;
            font-weight: 600;
            margin: 0;
          }
          
          .skill-items {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .skill-item {
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            transition: all 0.2s ease;
          }
          
          .skill-item:hover {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
          }
          
          .certificates-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 25px;
          }
          
          .certificate-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          
          .certificate-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
          }
          
          .certificate-card:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .certificate-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          
          .certificate-title {
            color: var(--white);
            font-size: 1.2rem;
            font-weight: 600;
            margin: 0 0 5px 0;
          }
          
          .certificate-issuer {
            color: var(--accent-color);
            font-weight: 500;
            margin-bottom: 5px;
          }
          
          .certificate-date {
            color: var(--text-secondary);
            font-size: 0.8rem;
            display: flex;
            align-items: center;
            gap: 5px;
          }
          
          .certificate-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin: 15px 0;
          }
          
          .certificate-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--accent-color);
            text-decoration: none;
            font-weight: 500;
            font-size: 0.9rem;
            transition: all 0.2s ease;
          }
          
          .certificate-link:hover {
            color: #00d4ff;
            transform: translateX(3px);
          }
          
          @media (max-width: 768px) {
            .profile-section {
              grid-template-columns: 1fr;
              text-align: center;
              gap: 20px;
            }
            
            .tabs-header {
              flex-direction: column;
            }
            
            .tab-content {
              padding: 20px;
            }
            
            .experience-header {
              flex-direction: column;
              align-items: flex-start;
            }
            
            .skills-grid,
            .certificates-grid {
              grid-template-columns: 1fr;
            }
            
            .profile-meta {
              justify-content: center;
            }
            
            .social-links {
              justify-content: center;
            }
          }
        `}
      </style>

      <div className="about-container">
        <div className="about-header">
          <div className="profile-section">
            <img
              src={assets.aboutme}
              alt="Ankush Bhat"
              className="profile-image"
            />
            <div className="profile-info">
              <h1>Ankush Bhat</h1>
              <div className="profile-title">Full Stack Developer & Cloud Engineer</div>
              <div className="profile-meta">
                <div className="meta-chip">
                  <FiMapPin size={14} />
                  {personalInfo.location}
                </div>
                <div className="meta-chip">
                  <FiCalendar size={14} />
                  {personalInfo.availability}
                </div>
              </div>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
            <a href={assets.Ankush_Ananth_Bhat} className="download-resume" download>
              <FiDownload />
              Download Resume
            </a>
          </div>
        </div>

        <div className="tabs-container">
          <div className="tabs-header">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="tab-content">
            {activeTab === "overview" && (
              <div>
                <p className="intro-text">
                  I'm Ankush, a passionate Full Stack Developer and Cloud Engineer based in Mangaluru, India. 
                  With over 2 years of experience in modern web development, I specialize in building scalable, 
                  user-centric applications using React, Next.js, and cloud technologies. I'm committed to 
                  writing clean, maintainable code and creating exceptional user experiences.
                </p>
                <p className="intro-text">
                  My journey in technology has taken me through various domains - from frontend development 
                  to cloud engineering and process automation. I thrive in collaborative environments and 
                  enjoy solving complex problems with innovative solutions.
                </p>
                
                <div className="info-grid">
                  <div className="info-card">
                    <h4>Location & Timezone</h4>
                    <p>{personalInfo.location}</p>
                    <p>{personalInfo.timezone}</p>
                  </div>
                  <div className="info-card">
                    <h4>Languages</h4>
                    <p>{personalInfo.languages.join(", ")}</p>
                  </div>
                  <div className="info-card">
                    <h4>Work Preferences</h4>
                    <p>{personalInfo.workType}</p>
                  </div>
                  <div className="info-card">
                    <h4>Availability</h4>
                    <p>{personalInfo.availability}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "experience" && (
              <div>
                {experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-title">
                        <h3>{exp.role}</h3>
                        <div className="company">{exp.company}</div>
                        <div className="experience-meta">
                          <span>{exp.type}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="experience-period">{exp.period}</div>
                    </div>
                    
                    <div className="experience-description">
                      {exp.description}
                    </div>

                    <ul className="achievements-list">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>

                    <div className="tech-tags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "education" && (
              <div>
                {education.map((edu, index) => (
                  <div key={index} className="experience-item">
                    <div className="experience-header">
                      <div className="experience-title">
                        <h3>{edu.degree}</h3>
                        <div className="company">{edu.school}</div>
                        <div className="experience-meta">
                          <span>{edu.location}</span>
                          <span>•</span>
                          <span>{edu.grade}</span>
                        </div>
                      </div>
                      <div className="experience-period">{edu.period}</div>
                    </div>
                    
                    {edu.coursework && (
                      <div>
                        <h4 style={{ color: 'var(--accent-color)', margin: '15px 0 10px 0' }}>
                          Key Coursework:
                        </h4>
                        <div className="tech-tags">
                          {edu.coursework.map((course, i) => (
                            <span key={i} className="tech-tag">{course}</span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.subjects && (
                      <div>
                        <h4 style={{ color: 'var(--accent-color)', margin: '15px 0 10px 0' }}>
                          Subjects:
                        </h4>
                        <div className="tech-tags">
                          {edu.subjects.map((subject, i) => (
                            <span key={i} className="tech-tag">{subject}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {activeTab === "skills" && (
              <div className="skills-grid">
                {Object.values(skills).map((category, index) => (
                  <div key={index} className="skill-category">
                    <div className="skill-header">
                      <div className="skill-icon">
                        <category.icon size={20} />
                      </div>
                      <h3 className="skill-title">{category.title}</h3>
                    </div>
                    <div className="skill-items">
                      {category.items.map((skill, i) => (
                        <span key={i} className="skill-item">{skill}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "certificates" && (
              <div className="certificates-grid">
                {certificates.map((cert, index) => (
                  <div key={index} className="certificate-card">
                    <div className="certificate-header">
                      <div>
                        <h3 className="certificate-title">{cert.title}</h3>
                        <div className="certificate-issuer">{cert.issuer}</div>
                        <div className="certificate-date">
                          <FiCalendar size={14} />
                          {cert.date}
                        </div>
                      </div>
                    </div>
                    
                    <div className="certificate-description">
                      {cert.description}
                    </div>

                    <div className="tech-tags">
                      {cert.skills.map((skill, i) => (
                        <span key={i} className="tech-tag">{skill}</span>
                      ))}
                    </div>

                    {cert.url && (
                      <a 
                        href={cert.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="certificate-link"
                      >
                        <FiExternalLink size={14} />
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
