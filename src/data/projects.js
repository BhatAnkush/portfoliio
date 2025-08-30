import images from "../components/Assets";

export const projects = [
  {
    id: "suny-art-school",
    title: "Suny Art School",
    description: "Website for an art school built with HTML, CSS, and JavaScript.",
    details:
      "Developed a responsive marketing site with clean information architecture, optimized images, and accessible navigation.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: images.suny,
    github: "https://github.com/dileepbaliga/MyWebSite",
    external: "https://sunyartschool.netlify.app/",
  },
  {
    id: "mentor-mentee-dms",
    title: "Mentor-Mentee DBMS",
    description:
      "A system for mentor-mentee interactions with mentor CRUD and mentee views.",
    details:
      "Designed relational schema, implemented CRUD, authentication, and role-based views. Deployed with performance-minded caching.",
    tech: ["PHP", "JavaScript", "CSS", "SCSS", "Hack"],
    image: images.mentor,
    github: "https://github.com/BhatAnkush/Mentor-Mentee",
    external: null,
  },
  {
    id: "socio",
    title: "SOCiO",
    description:
      "A social app crafted with React: connect, share, and engage.",
    details:
      "Built modular React components, state management, and API integration. Focused on responsiveness and UX.",
    tech: ["React", "Node.js", "CSS"],
    image: images.socio,
    github: "https://github.com/BhatAnkush/SOCiO",
    external: null,
  },
];
