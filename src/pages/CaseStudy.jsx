import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const CaseStudy = () => {
  const { id } = useParams();
  const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let project = projects.find((p) => p.id === id);
  if (!project) project = projects.find((p) => slugify(p.title) === id);

  if (!project) {
    return (
      <div className="container" style={{ padding: "100px 0" }}>
        <h2>Case Study Not Found</h2>
        <Link to="/" className="btn-gradient" style={{ padding: '0.6rem 0.9rem', borderRadius: 10 }}>Back Home</Link>
      </div>
    );
  }

  return (
    <section style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: 960 }}>
        <h1 className="gradient-text" style={{ fontSize: "clamp(28px,6vw,48px)", fontWeight: 800 }}>{project.title}</h1>
        <p style={{ color: 'var(--text-secondary)', marginTop: 10 }}>{project.description}</p>

        <div style={{ marginTop: 24 }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: 12 }} />
        </div>

        <h2 style={{ marginTop: 24 }}>Overview</h2>
        <p style={{ marginTop: 8, color: 'var(--text-secondary)' }}>{project.details}</p>

        <h3 style={{ marginTop: 24 }}>Tech Stack</h3>
        <ul style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 8, padding: 0, listStyle: 'none' }}>
          {project.tech.map((t) => (
            <li key={t} className="btn-gradient" style={{ padding: '6px 10px', borderRadius: 9999 }}>{t}</li>
          ))}
        </ul>

        <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-gradient" style={{ padding: '0.6rem 0.9rem', borderRadius: 10 }}>GitHub</a>
          )}
          {project.external && (
            <a href={project.external} target="_blank" rel="noopener noreferrer" className="btn-gradient" style={{ padding: '0.6rem 0.9rem', borderRadius: 10 }}>Live Demo</a>
          )}
          <Link to="/" className="btn" style={{ borderRadius: 10 }}>Back</Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
