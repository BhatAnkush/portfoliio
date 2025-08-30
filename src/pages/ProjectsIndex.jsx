import { useState, useEffect } from "react";
import images from "../components/Assets";

const ProjectsIndex = () => {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Comprehensive project data with detailed information
  const projects = [
    {
      id: "suny-art-school",
      title: "Suny Art School",
      category: "frontend",
      status: "Completed",
      duration: "2 weeks",
      year: "2023",
      description: "A modern, responsive website for an art school featuring clean design and intuitive navigation.",
      detailedDescription: "Developed a comprehensive marketing website for Suny Art School with a focus on showcasing artistic programs and student work. The site features a responsive design that adapts seamlessly across all devices, optimized image galleries, and accessible navigation patterns.",
      challenges: [
        "Creating an engaging visual hierarchy for diverse art content",
        "Implementing responsive image galleries with lazy loading",
        "Ensuring accessibility compliance for educational institution standards",
        "Optimizing performance for image-heavy content"
      ],
      solutions: [
        "Designed a modular CSS grid system for flexible content layouts",
        "Implemented progressive image loading with placeholder effects",
        "Added ARIA labels and keyboard navigation support",
        "Optimized images with modern formats and compression techniques"
      ],
      keyFeatures: [
        "Responsive design across all devices",
        "Interactive image galleries",
        "Contact forms with validation",
        "Course information sections",
        "Student portfolio showcase",
        "Accessibility-compliant navigation"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: images.suny,
      github: "https://github.com/dileepbaliga/MyWebSite",
      external: "https://sunyartschool.netlify.app/",
      featured: true
    },
    {
      id: "mentor-mentee-dms",
      title: "Mentor-Mentee Database Management System",
      category: "fullstack",
      status: "Completed",
      duration: "1 month",
      year: "2023",
      description: "A comprehensive database management system designed for educational mentor-mentee programs.",
      detailedDescription: "Built a robust database management system to facilitate mentor-mentee interactions in educational settings. The system provides role-based access control, allowing mentors to perform CRUD operations on student data while giving mentees secure access to view their progress and updates.",
      challenges: [
        "Designing a scalable relational database schema",
        "Implementing secure role-based authentication",
        "Creating intuitive interfaces for different user types",
        "Ensuring data privacy and security compliance"
      ],
      solutions: [
        "Developed normalized database structure with proper indexing",
        "Implemented JWT-based authentication with role middleware",
        "Created separate dashboard interfaces for mentors and mentees",
        "Added data encryption and audit logging features"
      ],
      keyFeatures: [
        "Role-based access control (Mentor/Mentee)",
        "CRUD operations for mentor dashboard",
        "Student progress tracking",
        "Secure authentication system",
        "Data visualization charts",
        "Export functionality for reports",
        "Real-time notifications",
        "Responsive admin interface"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "CSS", "SCSS", "Hack"],
      image: images.mentor,
      github: "https://github.com/BhatAnkush/Mentor-Mentee",
      external: null
    },
    {
      id: "socio",
      title: "SOCiO - Social Media Platform",
      category: "fullstack",
      status: "In Development",
      duration: "3 months",
      year: "2023",
      description: "A modern social media application built with React, focusing on community engagement and real-time interactions.",
      detailedDescription: "Developed a comprehensive social media platform that enables users to connect, share content, and engage with a vibrant community. The application features real-time messaging, content sharing, user profiles, and advanced interaction capabilities.",
      challenges: [
        "Implementing real-time communication features",
        "Managing complex state across multiple components",
        "Optimizing performance for large datasets",
        "Creating engaging user interaction patterns"
      ],
      solutions: [
        "Integrated WebSocket connections for real-time updates",
        "Implemented Redux for centralized state management",
        "Added virtualization for efficient list rendering",
        "Designed intuitive UI/UX with micro-interactions"
      ],
      keyFeatures: [
        "User authentication and profiles",
        "Real-time messaging system",
        "Content posting and sharing",
        "Like, comment, and share functionality",
        "Friend connections and followers",
        "News feed with infinite scroll",
        "Image and media upload",
        "Responsive mobile-first design",
        "Dark/light theme toggle"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "CSS"],
      image: images.socio,
      github: "https://github.com/BhatAnkush/SOCiO",
      external: null
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      category: "frontend",
      status: "Completed",
      duration: "3 weeks",
      year: "2023",
      description: "A responsive personal portfolio website showcasing projects and skills with modern animations.",
      detailedDescription: "Created a personal portfolio website to showcase development projects and professional experience. The site features smooth animations, responsive design, and optimized performance across all devices.",
      challenges: [
        "Creating smooth, performant animations",
        "Balancing visual appeal with loading speed",
        "Ensuring cross-browser compatibility",
        "Implementing SEO best practices"
      ],
      solutions: [
        "Used CSS transforms and GPU acceleration for smooth animations",
        "Optimized images and implemented lazy loading",
        "Added progressive enhancement and fallbacks",
        "Implemented semantic HTML and meta tags"
      ],
      keyFeatures: [
        "Smooth scroll animations",
        "Responsive grid layouts",
        "Interactive project showcases",
        "Contact form integration",
        "SEO optimized structure",
        "Fast loading performance"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
      image: "https://imgs.search.brave.com/Gdgw6Ki6SWkjnLLa_mB3Zv9-XtGmjO2qjMbMC11EUco/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc1/NDMxOTQ3L3Bob3Rv/L3BvcnRmb2xpby5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/OXBiMEFxY1dxaktJ/MmJKSl9wUmlkWnli/NWNLeHBkU1ZCNmRn/WU9wREx3ST0",
      github: "https://github.com/BhatAnkush/BhatAnkush.github.io",
      external: "https://BhatAnkush.github.io"
    },
    {
      id: "diabetic-retinopathy-detection",
      title: "Diabetic Retinopathy Detection System",
      category: "ai-ml",
      status: "Completed",
      duration: "4 months",
      year: "2023",
      description: "An AI-powered system for early detection of diabetic retinopathy using deep learning and medical imaging.",
      detailedDescription: "Developed a machine learning solution to detect diabetic retinopathy from fundus images of the retina. The system uses convolutional neural networks to analyze retinal images and provide early diagnosis, potentially preventing vision loss in diabetic patients.",
      challenges: [
        "Processing and analyzing high-resolution medical images",
        "Achieving high accuracy for medical diagnosis",
        "Handling imbalanced medical datasets",
        "Creating an intuitive interface for medical professionals"
      ],
      solutions: [
        "Implemented data augmentation and preprocessing pipelines",
        "Used transfer learning with pre-trained CNN models",
        "Applied SMOTE and class weighting techniques",
        "Designed a clean, professional web interface"
      ],
      keyFeatures: [
        "Deep learning image classification",
        "Batch image processing capability",
        "Confidence score reporting",
        "Medical report generation",
        "Image preprocessing tools",
        "Result visualization and analysis",
        "Secure patient data handling"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV", "HTML5", "CSS3", "JavaScript"],
      image: "https://imgs.search.brave.com/1GYM3LOIdsP9KrvqzD-7UxIYyEwAvsDbwrF3826C1u4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2FuaXR5LmlvL2lt/YWdlcy8wdnY4bW9j/Ni9vcGh0YWxtb2xv/Z3kvZjhlMDdlNGI4/NzY1ZDRmMWU0MjBj/YThmZGMxZDNlYjFm/YzlmNDcyNS0xMjAw/eDgwMC5qcGc_Zml0/PWNyb3AmYXV0bz1m/b3JtYXQ",
      github: "https://github.com/BhatAnkush/Final_Project",
      external: null
    },
    {
      id: "netflix-clone",
      title: "Netflix Clone",
      category: "frontend",
      status: "Completed",
      duration: "2 weeks",
      year: "2023",
      description: "A pixel-perfect recreation of Netflix's user interface with modern web technologies.",
      detailedDescription: "Built a comprehensive Netflix clone featuring the complete user interface, responsive design, and interactive elements. The project demonstrates advanced CSS skills, component architecture, and attention to detail in recreating a complex, production-quality interface.",
      challenges: [
        "Recreating complex Netflix UI components",
        "Implementing smooth carousel animations",
        "Managing responsive breakpoints for various screen sizes",
        "Optimizing performance for image-heavy content"
      ],
      solutions: [
        "Built modular CSS components with BEM methodology",
        "Created custom carousel with touch/swipe support",
        "Implemented CSS Grid and Flexbox for responsive layouts",
        "Used intersection observer for lazy loading"
      ],
      keyFeatures: [
        "Pixel-perfect Netflix UI recreation",
        "Responsive carousel components",
        "Hover effects and animations",
        "Mobile-first responsive design",
        "Search functionality interface",
        "Category browsing sections",
        "Video preview overlays"
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "https://imgs.search.brave.com/UY8xRCocZrirw5j2WNGUgusWU-Euxq_usIMlKGW5Ndc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YTIuZGV2LnRvL2R5/bmFtaWMvaW1hZ2Uv/d2lkdGg9ODAwLGhl/aWdodD0sZml0PXNj/YWxlLWRvd24sZ3Jh/dml0eT1hdXRvLGZv/cm1hdD1hdXRvL2h0/dHBzOi8vZGV2LXRv/LXVwbG9hZHMuczMu/YW1hem9uYXdzLmNv/bS91cGxvYWRzL2Fy/dGljbGVzL3A5YnZp/MTJ3YnhuZXljNmV5/aHd6LlBORw",
      github: "https://github.com/BhatAnkush/netflix_clone",
      external: null
    }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === "all") return true;
    return project.category === filter;
  });

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "frontend", label: "Frontend", count: projects.filter(p => p.category === "frontend").length },
    { id: "fullstack", label: "Full Stack", count: projects.filter(p => p.category === "fullstack").length },
    { id: "ai-ml", label: "AI/ML", count: projects.filter(p => p.category === "ai-ml").length }
  ];

  const featuredProject = projects.find(p => p.featured);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <section style={{ padding: "100px 0", minHeight: "100vh" }}>
      <style>
        {`
          .projects-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .projects-header {
            text-align: center;
            margin-bottom: 60px;
          }
          
          .projects-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
          }
          
          .projects-subtitle {
            font-size: 1.2rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .filter-section {
            display: flex;
            justify-content: center;
            margin-bottom: 50px;
            flex-wrap: wrap;
            gap: 15px;
          }
          
          .filter-btn {
            padding: 12px 24px;
            border: 2px solid transparent;
            background: rgba(255, 255, 255, 0.05);
            color: var(--text-secondary);
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
            position: relative;
            overflow: hidden;
          }
          
          .filter-btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(100, 255, 218, 0.1), transparent);
            transition: left 0.5s ease;
          }
          
          .filter-btn:hover::before {
            left: 100%;
          }
          
          .filter-btn:hover {
            border-color: var(--accent-color);
            color: var(--accent-color);
            transform: translateY(-2px);
          }
          
          .filter-btn.active {
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            border-color: var(--accent-color);
          }
          
          .filter-count {
            font-size: 0.8em;
            opacity: 0.7;
            margin-left: 8px;
          }
          
          .featured-project {
            margin-bottom: 80px;
            background: rgba(255, 255, 255, 0.02);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
          }
          
          .featured-project:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }
          
          .featured-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            padding: 40px;
            align-items: center;
          }
          
          .featured-image {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            transition: transform 0.3s ease;
          }
          
          .featured-project:hover .featured-image {
            transform: scale(1.02);
          }
          
          .featured-info h3 {
            font-size: 2rem;
            margin-bottom: 15px;
            color: var(--white);
          }
          
          .featured-badge {
            display: inline-block;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 600;
            margin-bottom: 15px;
          }
          
          .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
            gap: 30px;
            margin-top: 40px;
          }
          
          .project-card {
            background: rgba(255, 255, 255, 0.02);
            border-radius: 20px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
            border-color: var(--accent-color);
          }
          
          .project-image {
            width: 100%;
            height: 220px;
            object-fit: cover;
            transition: transform 0.3s ease;
          }
          
          .project-card:hover .project-image {
            transform: scale(1.05);
          }
          
          .project-content {
            padding: 25px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
          }
          
          .project-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
          }
          
          .project-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--white);
            line-height: 1.3;
          }
          
          .project-status {
            font-size: 0.7rem;
            padding: 4px 10px;
            border-radius: 12px;
            font-weight: 600;
            white-space: nowrap;
          }
          
          .status-completed {
            background: rgba(34, 197, 94, 0.2);
            color: #22c55e;
          }
          
          .status-development {
            background: rgba(249, 115, 22, 0.2);
            color: #f97316;
          }
          
          .project-description {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 20px;
            flex-grow: 1;
          }
          
          .project-meta {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-bottom: 20px;
          }
          
          .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 20px;
          }
          
          .tech-tag {
            background: rgba(100, 255, 218, 0.1);
            color: var(--accent-color);
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.7rem;
            font-weight: 500;
          }
          
          .project-links {
            display: flex;
            gap: 15px;
          }
          
          .project-link {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 8px;
            text-decoration: none;
            font-size: 0.8rem;
            font-weight: 500;
            transition: all 0.2s ease;
          }
          
          .link-github {
            background: rgba(255, 255, 255, 0.1);
            color: var(--white);
          }
          
          .link-github:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
          }
          
          .link-external {
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
          }
          
          .link-external:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(100, 255, 218, 0.3);
          }
          
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
          }
          
          .modal-content {
            background: var(--secondary-color);
            border-radius: 20px;
            max-width: 900px;
            max-height: 90vh;
            overflow-y: auto;
            border: 1px solid rgba(255, 255, 255, 0.1);
            position: relative;
          }
          
          .modal-header {
            padding: 30px 30px 0;
            position: sticky;
            top: 0;
            background: var(--secondary-color);
            z-index: 10;
          }
          
          .modal-close {
            position: absolute;
            top: 20px;
            right: 20px;
            background: none;
            border: none;
            color: var(--white);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 10px;
            border-radius: 50%;
            transition: all 0.2s ease;
          }
          
          .modal-close:hover {
            background: rgba(255, 255, 255, 0.1);
          }
          
          .modal-body {
            padding: 0 30px 30px;
          }
          
          .modal-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 15px;
            margin-bottom: 25px;
          }
          
          .modal-title {
            font-size: 2rem;
            margin-bottom: 15px;
            color: var(--white);
          }
          
          .modal-section {
            margin-bottom: 30px;
          }
          
          .modal-section h4 {
            color: var(--accent-color);
            font-size: 1.1rem;
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(100, 255, 218, 0.2);
            padding-bottom: 5px;
          }
          
          .modal-section ul {
            list-style: none;
            padding: 0;
          }
          
          .modal-section li {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 8px;
            padding-left: 20px;
            position: relative;
          }
          
          .modal-section li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: var(--accent-color);
          }
          
          @media (max-width: 768px) {
            .featured-content {
              grid-template-columns: 1fr;
              gap: 20px;
              padding: 20px;
            }
            
            .projects-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            
            .project-card {
              margin: 0 10px;
            }
            
            .filter-section {
              padding: 0 10px;
            }
            
            .modal-content {
              margin: 10px;
              max-height: 95vh;
            }
            
            .modal-header,
            .modal-body {
              padding: 20px;
            }
          }
        `}
      </style>

      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-title">My Work</h1>
          <p className="projects-subtitle">
            A collection of projects showcasing my journey in web development, 
            from frontend interfaces to full-stack applications and AI solutions.
          </p>
        </div>

        <div className="filter-section">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? "active" : ""}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
              <span className="filter-count">({category.count})</span>
            </button>
          ))}
        </div>

        {featuredProject && filter === "all" && (
          <div className="featured-project" onClick={() => setSelectedProject(featuredProject)}>
            <div className="featured-content">
              <div>
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title} 
                  className="featured-image"
                  onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                />
              </div>
              <div className="featured-info">
                <div className="featured-badge">Featured Project</div>
                <h3>{featuredProject.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {featuredProject.detailedDescription}
                </p>
                <div className="tech-stack">
                  {featuredProject.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
              />
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className={`project-status ${project.status === 'Completed' ? 'status-completed' : 'status-development'}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-meta">
                  <span>Duration: {project.duration}</span>
                  <span>{project.year}</span>
                </div>
                
                <div className="tech-stack">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="tech-tag">+{project.technologies.length - 3} more</span>
                  )}
                </div>
                
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link link-github"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      Code
                    </a>
                  )}
                  {project.external && (
                    <a 
                      href={project.external} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link link-external"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15,3 21,3 21,9"></polyline>
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

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <button className="modal-close" onClick={() => setSelectedProject(null)}>
                  ×
                </button>
              </div>
              <div className="modal-body">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="modal-image"
                  onError={(e) => { e.currentTarget.src = "/placeholder.svg"; }}
                />
                <h2 className="modal-title">{selectedProject.title}</h2>
                
                <div className="modal-section">
                  <h4>Project Overview</h4>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {selectedProject.detailedDescription}
                  </p>
                </div>

                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.keyFeatures?.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Challenges & Solutions</h4>
                  <div style={{ display: 'grid', gap: '20px' }}>
                    <div>
                      <h5 style={{ color: '#f97316', marginBottom: '10px' }}>Challenges:</h5>
                      <ul>
                        {selectedProject.challenges?.map((challenge, i) => (
                          <li key={i}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 style={{ color: '#22c55e', marginBottom: '10px' }}>Solutions:</h5>
                      <ul>
                        {selectedProject.solutions?.map((solution, i) => (
                          <li key={i}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-stack">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4>Project Links</h4>
                  <div className="project-links">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link link-github"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Source Code
                      </a>
                    )}
                    {selectedProject.external && (
                      <a 
                        href={selectedProject.external} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link link-external"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15,3 21,3 21,9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Visit Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsIndex;
