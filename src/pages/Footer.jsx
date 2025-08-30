import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const Footer = () => {
  const socials = [
    { name: "GitHub", url: "https://github.com/BhatAnkush", icon: <FiGithub size={18} /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/ankushab/", icon: <FiLinkedin size={18} /> },
    { name: "Instagram", url: "https://www.instagram.com/", icon: <FiInstagram size={18} /> },
  ];

  return (
    <footer aria-label="Site footer" style={{ marginTop: 60, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: 14 }}>© {new Date().getFullYear()} / 0x4nku5h</div>
        <div style={{ display: 'flex', gap: 12 }}>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              style={{
                width: 32,
                height: 32,
                borderRadius: 9999,
                display: 'grid',
                placeItems: 'center',
                color: 'var(--text-secondary)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
