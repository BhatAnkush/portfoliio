import images from "../components/Assets";

export const projects = [
  {
    id: "suny-art-school",
    title: "Suny Art School",
    description:
      "Website for an art school built with HTML, CSS, and JavaScript.",
    details:
      "Developed a responsive marketing site with clean information architecture, optimized images, and accessible navigation.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: images.suny,
    github: "https://github.com/dileepbaliga/MyWebSite",
    external: "https://sunyartschool.netlify.app/",
  },
  {
    id: "socio",
    title: "SOCiO",
    description: "A social app crafted with React: connect, share, and engage.",
    details:
      "Built modular React components, state management, and API integration. Focused on responsiveness and UX.",
    tech: ["React", "Node.js", "CSS"],
    image: images.socio,
    github: "https://github.com/BhatAnkush/SOCiO",
    external: null,
  },
  {
    id: "abudance-solar",
    title: "Abudance Solar",
    description: "Corporate website for a solar energy solutions provider.",
    details:
      "Developed a clean, professional website highlighting solar solutions, services, and sustainability. Focused on responsive layouts and optimized performance.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: images.abundance,
    github: null,
    external: "https://www.dhxnush.com/work/abudancesolar",
  },
];
