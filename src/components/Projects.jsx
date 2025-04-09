
import { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with React, Node.js, and MongoDB. Features include product browsing, filtering, cart management, and payment processing.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      // image: 'https://via.placeholder.com/600x340',
      github: '#',
      external: '#',
      category: 'fullstack'
    },
    {
      title: 'Social Media Dashboard',
      description: 'A responsive dashboard that displays social media statistics and allows for content management across multiple platforms.',
      technologies: ['React', 'Redux', 'Chart.js', 'CSS Grid'],
      // image: 'https://via.placeholder.com/600x340',
      github: '#',
      external: '#',
      category: 'frontend'
    },
    {
      title: 'Task Management API',
      description: 'A RESTful API for task management with authentication, task CRUD operations, and team collaboration features.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
      // image: 'https://via.placeholder.com/600x340',
      github: '#',
      external: '#',
      category: 'backend'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React and custom CSS animations.',
      technologies: ['React', 'CSS', 'Framer Motion'],
      // image: 'https://via.placeholder.com/600x340',
      github: '#',
      external: '#',
      category: 'frontend'
    },
    {
      title: 'Weather Application',
      description: 'A weather application that provides current weather data and forecasts for any location using the OpenWeather API.',
      technologies: ['React', 'Context API', 'OpenWeather API'],
      // image: 'https://via.placeholder.com/600x340',
      github: '#',
      external: '#',
      category: 'frontend'
    },
    {
      title: 'Blog CMS',
      description: 'A content management system for blogs with features like article creation, editing, tagging, and publishing.',
      technologies: ['React', 'Node.js', 'GraphQL', 'PostgreSQL'],
      // image: 'https://via.placeholder.com/600x340',
      github: '#',
      external: '#',
      category: 'fullstack'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" style={{ padding: '100px 0' }}>
      <div className="container">
        <h2 className="section-title fade-in">
          <span className="number">03.</span> Some Things I've Built
        </h2>
        
        <div className="fade-in" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px'
          }}>
            <button 
              className={`btn ${filter === 'all' ? 'btn-primary' : ''}`}
              onClick={() => setFilter('all')}
              style={{
                fontSize: '0.8rem',
                padding: '0.5rem 1rem',
                backgroundColor: filter === 'all' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                color: filter === 'all' ? 'var(--accent-color)' : 'var(--text-secondary)',
                border: filter === 'all' ? '1px solid var(--accent-color)' : '1px solid var(--text-secondary)'
              }}
            >
              All
            </button>
            <button 
              className={`btn ${filter === 'frontend' ? 'btn-primary' : ''}`}
              onClick={() => setFilter('frontend')}
              style={{
                fontSize: '0.8rem',
                padding: '0.5rem 1rem',
                backgroundColor: filter === 'frontend' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                color: filter === 'frontend' ? 'var(--accent-color)' : 'var(--text-secondary)',
                border: filter === 'frontend' ? '1px solid var(--accent-color)' : '1px solid var(--text-secondary)'
              }}
            >
              Frontend
            </button>
            <button 
              className={`btn ${filter === 'backend' ? 'btn-primary' : ''}`}
              onClick={() => setFilter('backend')}
              style={{
                fontSize: '0.8rem',
                padding: '0.5rem 1rem',
                backgroundColor: filter === 'backend' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                color: filter === 'backend' ? 'var(--accent-color)' : 'var(--text-secondary)',
                border: filter === 'backend' ? '1px solid var(--accent-color)' : '1px solid var(--text-secondary)'
              }}
            >
              Backend
            </button>
            <button 
              className={`btn ${filter === 'fullstack' ? 'btn-primary' : ''}`}
              onClick={() => setFilter('fullstack')}
              style={{
                fontSize: '0.8rem',
                padding: '0.5rem 1rem',
                backgroundColor: filter === 'fullstack' ? 'rgba(100, 255, 218, 0.1)' : 'transparent',
                color: filter === 'fullstack' ? 'var(--accent-color)' : 'var(--text-secondary)',
                border: filter === 'fullstack' ? '1px solid var(--accent-color)' : '1px solid var(--text-secondary)'
              }}
            >
              Full Stack
            </button>
          </div>
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '25px'
        }}>
          {filteredProjects.map((project, i) => (
            <div 
              key={i} 
              className="fade-in"
              style={{
                position: 'relative',
                backgroundColor: 'var(--secondary-color)',
                borderRadius: '4px',
                boxShadow: '0 10px 30px -15px rgba(2, 12, 27, 0.7)',
                transition: 'var(--transition)',
                ':hover': {
                  transform: 'translateY(-10px)'
                }
              }}
            >
              <div style={{
                position: 'relative',
                overflow: 'hidden',
                borderTopLeftRadius: '4px',
                borderTopRightRadius: '4px'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '200px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '4px',
                    borderTopRightRadius: '4px',
                    transition: 'transform 0.3s ease',
                    ':hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                />
              </div>
              
              <div style={{ padding: '25px' }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  color: 'var(--white)',
                  marginBottom: '10px'
                }}>
                  {project.title}
                </h3>
                
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  marginBottom: '20px'
                }}>
                  {project.description}
                </p>
                
                <ul style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                  marginBottom: '20px'
                }}>
                  {project.technologies.map((tech, i) => (
                    <li key={i} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--text-secondary)'
                    }}>
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <div style={{
                  display: 'flex',
                  gap: '15px'
                }}>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Github Link for ${project.title}`}
                    style={{
                      color: 'var(--white)',
                      fontSize: '1.2rem',
                      transition: 'var(--transition)',
                      ':hover': {
                        color: 'var(--accent-color)'
                      }
                    }}
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`External Link for ${project.title}`}
                    style={{
                      color: 'var(--white)',
                      fontSize: '1.2rem',
                      transition: 'var(--transition)',
                      ':hover': {
                        color: 'var(--accent-color)'
                      }
                    }}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
