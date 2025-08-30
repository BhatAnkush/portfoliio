import { projects as data } from "../data/projects";

const ProjectsIndex = () => {
  const [featured, ...rest] = data;
  return (
    <section style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <h1 className="gradient-text" style={{ fontSize: "clamp(28px,6vw,48px)", fontWeight: 800 }}>Work</h1>

        {featured && (
          <a href={`/case-studies/${featured.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div style={{ marginTop: 16, display: 'grid', gap: 12 }}>
              <img src={featured.image} alt={featured.title} style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)' }} />
              <div style={{ display: 'grid', gap: 6 }}>
                <div style={{ fontSize: 20, fontWeight: 700 }}>{featured.title}</div>
                <div style={{ color: 'var(--text-secondary)' }}>{featured.description}</div>
              </div>
            </div>
          </a>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 18, marginTop: 22 }}>
          {rest.map((p) => (
            <a key={p.id} href={`/case-studies/${p.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 12, overflow: 'hidden', transition: 'transform 150ms ease' }}>
                <img src={p.image} alt={p.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                <div style={{ padding: 12 }}>
                  <div style={{ fontWeight: 600 }}>{p.title}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 6 }}>{p.description}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsIndex;
