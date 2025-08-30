import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiSend, FiPhone } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const params = new URLSearchParams({ subject: `Message from ${form.name}`, body: form.message, to: form.email });
    window.location.href = `mailto:ankushbhataab@gmail.com?${params.toString()}`;
    setTimeout(() => setStatus(""), 1000);
  };

  return (
    <section id="contact" style={{ padding: "100px 0" }}>
      <div className="container" style={{ maxWidth: 1100 }}>
        <h2 className="section-title" style={{ alignItems: 'baseline', gap: 8 }}>
          <span className="number">04.</span>
          <span className="gradient-text" style={{ fontWeight: 800 }}>Let's Connect</span>
          <span aria-hidden style={{ flex: 1, height: 2, background: "linear-gradient(90deg, transparent, var(--accent-color))", borderRadius: 2 }}></span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 24 }}>
          <form onSubmit={handleSubmit} aria-label="Contact form" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 20, backdropFilter: 'blur(10px)' }}>
            <div style={{ display: 'grid', gap: 12 }}>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Name</span>
                <input name="name" required value={form.name} onChange={handleChange}
                  style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.08)', color: 'var(--text-color)', outline: 'none' }} />
              </label>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Email</span>
                <input type="email" name="email" required value={form.email} onChange={handleChange}
                  style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.08)', color: 'var(--text-color)', outline: 'none' }} />
              </label>
              <label style={{ display: 'grid', gap: 6 }}>
                <span>Message</span>
                <textarea rows={6} name="message" required value={form.message} onChange={handleChange}
                  style={{ padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.18)', background: 'rgba(255,255,255,0.08)', color: 'var(--text-color)', outline: 'none', resize: 'vertical' }} />
              </label>
              <button type="submit" className="btn-gradient" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.75rem 1rem', borderRadius: 10 }}>
                <FiSend /> {status || 'Send Message'}
              </button>
            </div>
          </form>

          <div style={{ display: 'grid', gap: 12 }}>
            <div style={{ display: 'grid', gap: 12 }}>
              <a href="mailto:ankushbhataab@gmail.com" className="btn-gradient" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1rem', borderRadius: 12 }}>
                <FiMail /> ankushbhataab@gmail.com
              </a>
              <div className="btn-gradient" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1rem', borderRadius: 12 }}>
                <FiPhone /> +91-00000-00000
              </div>
              <a href="https://github.com/BhatAnkush" target="_blank" rel="noopener noreferrer" className="btn-gradient" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1rem', borderRadius: 12 }}>
                <FiGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/ankushab/" target="_blank" rel="noopener noreferrer" className="btn-gradient" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1rem', borderRadius: 12 }}>
                <FiLinkedin /> LinkedIn
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn-gradient" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0.75rem 1rem', borderRadius: 12 }}>
                <FiInstagram /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
