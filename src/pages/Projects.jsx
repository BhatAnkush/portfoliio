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
      image: images.mentor, // Placeholder image; replace with actual if available
      github: "https://github.com/BhatAnkush/Mentor-Mentee",
      external: null,
      category: "fullstack",
    },
    {
      title: "SOCiO",
      description:
        " social media application crafted with the power of React! Connect, share, and stay engaged with a vibrant community.",
      technologies: ["Reactjs", "Nodejs", "CSS"],
      image: images.socio, // Placeholder image; replace with actual if available
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
      external: "#",
      category: "fullstack",
    },
    {
      title: "Netflix Clone",
      description: "A Netflix Clone application.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image:
        "https://imgs.search.brave.com/UY8xRCocZrirw5j2WNGUgusWU-Euxq_usIMlKGW5Ndc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzL3A5YnZp/MTJ3YnhuZXljNmV5/aHd6LlBORw",
      github: "https://github.com/BhatAnkush/netflix_clone",
      external: "#",
      category: "frontend",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" style={{ padding: "100px 0" }}>
      <div className="container">
        <h2 className="section-title fade-in">
          <span className="number">03.</span> Some Things I've Built
        </h2>

        <div
          className="fade-in"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <button
              className={`btn ${filter === "all" ? "btn-primary" : ""}`}
              onClick={() => setFilter("all")}
              style={{
                fontSize: "0.8rem",
                padding: "0.5rem 1rem",
                backgroundColor:
                  filter === "all" ? "rgba(100, 255, 218, 0.1)" : "transparent",
                color:
                  filter === "all"
                    ? "var(--accent-color)"
                    : "var(--text-secondary)",
                border:
                  filter === "all"
                    ? "1px solid var(--accent-color)"
                    : "1px solid var(--text-secondary)",
              }}
            >
              All
            </button>
            <button
              className={`btn ${filter === "frontend" ? "btn-primary" : ""}`}
              onClick={() => setFilter("frontend")}
              style={{
                fontSize: "0.8rem",
                padding: "0.5rem 1rem",
                backgroundColor:
                  filter === "frontend"
                    ? "rgba(100, 255, 218, 0.1)"
                    : "transparent",
                color:
                  filter === "frontend"
                    ? "var(--accent-color)"
                    : "var(--text-secondary)",
                border:
                  filter === "frontend"
                    ? "1px solid var(--accent-color)"
                    : "1px solid var(--text-secondary)",
              }}
            >
              Frontend
            </button>
            <button
              className={`btn ${filter === "backend" ? "btn-primary" : ""}`}
              onClick={() => setFilter("backend")}
              style={{
                fontSize: "0.8rem",
                padding: "0.5rem 1rem",
                backgroundColor:
                  filter === "backend"
                    ? "rgba(100, 255, 218, 0.1)"
                    : "transparent",
                color:
                  filter === "backend"
                    ? "var(--accent-color)"
                    : "var(--text-secondary)",
                border:
                  filter === "backend"
                    ? "1px solid var(--accent-color)"
                    : "1px solid var(--text-secondary)",
              }}
            >
              Backend
            </button>
            <button
              className={`btn ${filter === "fullstack" ? "btn-primary" : ""}`}
              onClick={() => setFilter("fullstack")}
              style={{
                fontSize: "0.8rem",
                padding: "0.5rem 1rem",
                backgroundColor:
                  filter === "fullstack"
                    ? "rgba(100, 255, 218, 0.1)"
                    : "transparent",
                color:
                  filter === "fullstack"
                    ? "var(--accent-color)"
                    : "var(--text-secondary)",
                border:
                  filter === "fullstack"
                    ? "1px solid var(--accent-color)"
                    : "1px solid var(--text-secondary)",
              }}
            >
              Full Stack
            </button>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {filteredProjects.map((project, i) => (
            <div
              key={i}
              className="fade-in"
              style={{
                position: "relative",
                backgroundColor: "var(--secondary-color)",
                borderRadius: "4px",
                boxShadow: "0 10px 30px -15px rgba(2, 12, 27, 0.7)",
                transition: "var(--transition)",
                ":hover": {
                  transform: "translateY(-10px)",
                },
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderTopLeftRadius: "4px",
                  borderTopRightRadius: "4px",
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    transition: "transform 0.3s ease",
                    ":hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
              </div>

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    fontSize: "1.25rem",
                    color: "var(--white)",
                    marginBottom: "10px",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                <ul
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "20px",
                  }}
                >
                  {project.technologies.map((tech, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.7rem",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Github Link for ${project.title}`}
                    style={{
                      color: "var(--white)",
                      fontSize: "1.2rem",
                      transition: "var(--transition)",
                      ":hover": {
                        color: "var(--accent-color)",
                      },
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
                      color: "var(--white)",
                      fontSize: "1.2rem",
                      transition: "var(--transition)",
                      ":hover": {
                        color: "var(--accent-color)",
                      },
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
