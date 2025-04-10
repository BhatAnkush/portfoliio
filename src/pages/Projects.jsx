import { useState } from "react";
import images from "../components/Assets";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Simple Calculator",
      description:
        "A simple calculator application developed using Java Swing and event handling, capable of performing basic arithmetic operations such as addition, subtraction, multiplication, and division.",
      technologies: ["Java", "Swing"],
      image:
        "https://repository-images.githubusercontent.com/339268931/54d9dd80-73ae-11eb-81a0-cd36264018e6",
      github: "https://github.com/BhatAnkush/Simple-Calculator",
      external: null,
      category: "frontend",
    },
    {
      title: "Mentor-Mentee Database Management System",
      description:
        "A database management system designed for mentor-mentee interactions, allowing mentors to perform CRUD operations and mentees to view their updated marks and other relevant information.",
      technologies: ["PHP", "JavaScript", "CSS", "SCSS", "Hack"],
      image: images.mentor, // Using imported image from Assets
      github: "https://github.com/BhatAnkush/Mentor-Mentee",
      external: null,
      category: "fullstack",
    },
    {
      title: "SOCiO",
      description:
        "A social media application crafted with the power of React! Connect, share, and stay engaged with a vibrant community.",
      technologies: ["Reactjs", "Nodejs", "CSS"],
      image: images.socio, // Using imported image from Assets
      github: "https://github.com/BhatAnkush/SOCiO",
      external: null,
      category: "fullstack",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built with HTML5 and custom CSS3 animations.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image:
        "https://imgs.search.brave.com/Gdgw6Ki6SWkjnLLa_mB3Zv9-XtGmjO2qjMbMC11EUco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0",
      github: "https://github.com/BhatAnkush/BhatAnkush.github.io",
      external: "https://BhatAnkush.github.io",
      category: "frontend",
    },
    {
      title: "Diabetic Retinopathy Detection",
      description:
        "Machine learning techniques to detect diabetic retinopathy using fundus images of the retina.",
      technologies: [
        "Python",
        "Flask",
        "TensorFlow/Keras",
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      image:
        "https://imgs.search.brave.com/1GYM3LOIdsP9KrvqzD-7UxIYyEwAvsDbwrF3826C1u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy8wdnY4bW9j/Ni9vcGh0YWxtb2xv/Z3kvZjhlMDdlNGI4/NzY1ZDRmMWU0MjBj/YThmZGMxZDNlYjFm/YzlmNDcyNS0xMjAw/eDgwMC5qcGc_Zml0/PWNyb3AmYXV0bz1m/b3JtYXQ",
      github: "https://github.com/BhatAnkush/Final_Project",
      external: null,
      category: "fullstack",
    },
    {
      title: "Netflix Clone",
      description: "A Netflix Clone application.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image:
        "https://imgs.search.brave.com/UY8xRCocZrirw5j2WNGUgusWU-Euxq_usIMlKGW5Ndc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzL3A5YnZp/MTJ3YnhuZXljNmV5/aHd6LlBORw",
      github: "https://github.com/BhatAnkush/netflix_clone",
      external: null,
      category: "frontend",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.category === filter;
  });
  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="container">
        <style>
          {`
            .project-card {
              position: relative;
              background-color: var(--secondary-color);
              border-radius: 4px;
              box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
              transition: all 0.3s ease;
              overflow: hidden;
              height: 100%;
              display: flex;
              flex-direction: column;
            }
            
            .project-card:hover {
              transform: translateY(-10px);
              box-shadow: 0 20px 30px -15px rgba(2, 12, 27, 0.7);
            }
            
            .project-image-container {
              position: relative;
              overflow: hidden;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
            }
            
            .project-image {
              width: 100%;
              height: 200px;
              object-fit: cover;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
              transition: transform 0.3s ease;
            }
            
            .project-image-container:hover .project-image {
              transform: scale(1.05);
            }
            
            .project-content {
              padding: 25px;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
            }
            
            .project-title {
              font-size: 1.25rem;
              color: var(--white);
              margin-bottom: 10px;
            }
            
            .project-description {
              color: var(--text-secondary);
              font-size: 0.9rem;
              margin-bottom: 20px;
              flex-grow: 1;
            }
            
            .tech-list {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin-bottom: 20px;
              padding: 0;
              list-style: none;
            }
            
            .tech-item {
              font-family: var(--font-mono);
              font-size: 0.7rem;
              color: var(--text-secondary);
              background-color: rgba(100, 255, 218, 0.1);
              padding: 3px 8px;
              border-radius: 3px;
              transition: all 0.2s ease;
            }
            
            .tech-item:hover {
              color: var(--accent-color);
              background-color: rgba(100, 255, 218, 0.2);
            }
            
            .project-links {
              display: flex;
              gap: 15px;
            }
            
            .project-link {
              color: var(--white);
              font-size: 1rem;
              transition: all 0.2s ease;
              text-decoration: none;
              display: flex;
              align-items: center;
              gap: 5px;
            }
            
            .project-link:hover {
              color: var(--accent-color);
              transform: translateY(-2px);
            }
            
            .filter-container {
              display: flex;
              justify-content: center;
              margin-bottom: 40px;
            }
            
            .filter-buttons {
              display: flex;
              flex-wrap: wrap;
              justify-content: center;
              gap: 10px;
            }
            
            .filter-btn {
              font-size: 0.8rem;
              padding: 0.5rem 1rem;
              background-color: transparent;
              border: 1px solid var(--text-secondary);
              color: var(--text-secondary);
              border-radius: 4px;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            
            .filter-btn:hover {
              background-color: rgba(100, 255, 218, 0.05);
              border-color: var(--accent-color);
              color: var(--accent-color);
            }
            
            .filter-btn.active {
              background-color: rgba(100, 255, 218, 0.1);
              border-color: var(--accent-color);
              color: var(--accent-color);
            }
            
            .projects-grid {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 25px;
            }
            
            @media (max-width: 768px) {
              .projects-grid {
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              }
            }
            
            @media (max-width: 480px) {
              .filter-buttons {
                gap: 5px;
              }
              
              .filter-btn {
                font-size: 0.7rem;
                padding: 0.4rem 0.8rem;
              }
            }
          `}
        </style>

        <h2 className="section-title fade-in">
          <span className="number">03.</span> Some Things I've Built
        </h2>

        <div className="filter-container fade-in">
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === "frontend" ? "active" : ""}`}
              onClick={() => setFilter("frontend")}
            >
              Frontend
            </button>
            <button
              className={`filter-btn ${filter === "fullstack" ? "active" : ""}`}
              onClick={() => setFilter("fullstack")}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, i) => (
            <div key={i} className="project-card fade-in">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/320"; // Fallback image
                  }}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <ul className="tech-list">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="tech-item">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub repository for ${project.title}`}
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      GitHub
                    </a>
                  )}

                  {project.external && (
                    <a
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="project-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  )}
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
