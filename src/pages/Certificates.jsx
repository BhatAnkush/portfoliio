import data from "../data/certificates.json";

const Certificates = () => {
  return (
    <section style={{ padding: "100px 0" }}>
      <div className="container">
        <h2 className="section-title" style={{ alignItems: 'baseline', gap: 8 }}>
          <span className="number">CS.</span>
          <span className="gradient-text" style={{ fontWeight: 800 }}>Certificates & Recognition</span>
          <span aria-hidden style={{ flex: 1, height: 2, background: "linear-gradient(90deg, transparent, var(--accent-color))", borderRadius: 2 }}></span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
          {data.map((c) => (
            <a key={c.id} href={c.url} target="_blank" rel="noopener noreferrer" style={{
              display: 'block', padding: 16, borderRadius: 12, background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(6px)', textDecoration: 'none', color: 'inherit'
            }}>
              <div style={{ fontWeight: 600 }}>{c.title}</div>
              <div style={{ color: 'var(--text-secondary)', marginTop: 6 }}>{c.issuer}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 4 }}>{c.date}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
