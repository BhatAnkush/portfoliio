import { useState } from "react";
import { FiSend, FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending message...");
    
    // Simulate form submission
    setTimeout(() => {
      const params = new URLSearchParams({ 
        subject: form.subject || `Message from ${form.name}`, 
        body: `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}` 
      });
      window.location.href = `mailto:ankushbhataab@gmail.com?${params.toString()}`;
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
      
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "ankushbhataab@gmail.com",
      link: "mailto:ankushbhataab@gmail.com"
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+91 6360751937",
      link: "tel:+916360751937"
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Available for Remote Work",
      link: null
    }
  ];

  const socialLinks = [
    { icon: FiLinkedin, label: "LinkedIn", link: "https://linkedin.com/in/ankush-bhat", color: "#0077B5" },
    { icon: FiGithub, label: "GitHub", link: "https://github.com/BhatAnkush", color: "#333" },
    { icon: FiInstagram, label: "Instagram", link: "https://instagram.com/ankushbhat", color: "#E4405F" }
  ];

  return (
    <section id="contact" style={{ padding: "100px 0", minHeight: "100vh" }}>
      <style>
        {`
          .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .contact-header {
            text-align: center;
            margin-bottom: 80px;
          }
          
          .contact-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 800;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 20px;
          }
          
          .contact-subtitle {
            font-size: 1.3rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto 30px;
            line-height: 1.6;
          }
          
          .contact-description {
            color: var(--text-secondary);
            max-width: 500px;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .contact-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
          }
          
          .contact-form-section {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 40px;
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
          }
          
          .contact-form-section:hover {
            border-color: rgba(100, 255, 218, 0.3);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          }
          
          .form-title {
            font-size: 1.8rem;
            color: var(--white);
            margin-bottom: 10px;
          }
          
          .form-subtitle {
            color: var(--text-secondary);
            margin-bottom: 30px;
            line-height: 1.5;
          }
          
          .form-group {
            margin-bottom: 25px;
          }
          
          .form-label {
            display: block;
            color: var(--white);
            font-weight: 500;
            margin-bottom: 8px;
            font-size: 0.9rem;
          }
          
          .form-input, .form-textarea {
            width: 100%;
            padding: 15px 18px;
            border: 2px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            color: var(--white);
            font-size: 1rem;
            transition: all 0.3s ease;
            outline: none;
          }
          
          .form-input:focus, .form-textarea:focus {
            border-color: var(--accent-color);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 3px rgba(100, 255, 218, 0.1);
          }
          
          .form-textarea {
            resize: vertical;
            min-height: 120px;
            font-family: inherit;
          }
          
          .submit-btn {
            width: 100%;
            padding: 15px 20px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
            border: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
          
          .submit-btn:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(100, 255, 218, 0.3);
          }
          
          .submit-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          .status-message {
            text-align: center;
            margin-top: 15px;
            padding: 10px;
            border-radius: 8px;
            font-weight: 500;
          }
          
          .status-success {
            color: #22c55e;
            background: rgba(34, 197, 94, 0.1);
          }
          
          .status-sending {
            color: var(--accent-color);
            background: rgba(100, 255, 218, 0.1);
          }
          
          .contact-info-section {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          
          .contact-info-card {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 20px;
            padding: 30px;
            transition: all 0.3s ease;
          }
          
          .contact-info-card:hover {
            border-color: rgba(100, 255, 218, 0.3);
            transform: translateY(-5px);
          }
          
          .info-title {
            font-size: 1.5rem;
            color: var(--white);
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          
          .contact-methods {
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          
          .contact-method {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 15px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.03);
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
          }
          
          .contact-method:hover {
            background: rgba(100, 255, 218, 0.1);
            transform: translateX(5px);
          }
          
          .method-icon {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--primary-color);
            font-size: 1.1rem;
          }
          
          .method-info {
            flex: 1;
          }
          
          .method-label {
            font-size: 0.8rem;
            color: var(--text-secondary);
            margin-bottom: 2px;
          }
          
          .method-value {
            color: var(--white);
            font-weight: 500;
          }
          
          .social-links {
            display: flex;
            gap: 15px;
            flex-wrap: wrap;
          }
          
          .social-link {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            transition: all 0.3s ease;
            color: var(--white);
            font-size: 1.2rem;
          }
          
          .social-link:hover {
            transform: translateY(-3px);
            border-color: var(--accent-color);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          
          .cta-section {
            text-align: center;
            margin-top: 60px;
            padding: 40px;
            background: linear-gradient(135deg, rgba(100, 255, 218, 0.1), rgba(0, 212, 255, 0.1));
            border-radius: 20px;
            border: 1px solid rgba(100, 255, 218, 0.2);
          }
          
          .cta-title {
            font-size: 1.8rem;
            color: var(--white);
            margin-bottom: 15px;
          }
          
          .cta-text {
            color: var(--text-secondary);
            margin-bottom: 25px;
            line-height: 1.6;
          }
          
          .cta-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            flex-wrap: wrap;
          }
          
          .cta-btn {
            padding: 12px 25px;
            border-radius: 25px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          
          .cta-primary {
            background: linear-gradient(135deg, var(--accent-color), #00d4ff);
            color: var(--primary-color);
          }
          
          .cta-secondary {
            background: transparent;
            color: var(--accent-color);
            border: 2px solid var(--accent-color);
          }
          
          .cta-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          }
          
          @media (max-width: 768px) {
            .contact-grid {
              grid-template-columns: 1fr;
              gap: 40px;
            }
            
            .contact-form-section,
            .contact-info-card {
              padding: 25px;
            }
            
            .contact-header {
              margin-bottom: 50px;
            }
            
            .social-links {
              justify-content: center;
            }
            
            .cta-buttons {
              flex-direction: column;
              align-items: center;
            }
            
            .cta-btn {
              width: 200px;
              justify-content: center;
            }
          }
          
          @media (max-width: 480px) {
            .contact-methods {
              gap: 15px;
            }
            
            .contact-method {
              padding: 12px;
            }
            
            .method-icon {
              width: 35px;
              height: 35px;
            }
          }
        `}
      </style>

      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Let's Work Together</h1>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
          <p className="contact-description">
            I'm always interested in new opportunities, collaborations, and challenging projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-section">
            <h2 className="form-title">Send a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Tell me about your project, timeline, budget, or any questions you have..."
                  rows={5}
                />
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                <FiSend />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {status && (
                <div className={`status-message ${status.includes('success') ? 'status-success' : 'status-sending'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>

          <div className="contact-info-section">
            <div className="contact-info-card">
              <h3 className="info-title">
                <FiMail />
                Contact Information
              </h3>
              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  info.link ? (
                    <a key={index} href={info.link} className="contact-method">
                      <div className="method-icon">
                        <info.icon />
                      </div>
                      <div className="method-info">
                        <div className="method-label">{info.label}</div>
                        <div className="method-value">{info.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div key={index} className="contact-method">
                      <div className="method-icon">
                        <info.icon />
                      </div>
                      <div className="method-info">
                        <div className="method-label">{info.label}</div>
                        <div className="method-value">{info.value}</div>
                      </div>
                    </div>
                  )
                ))}
              </div>
            </div>

            <div className="contact-info-card">
              <h3 className="info-title">
                <FiLinkedin />
                Connect With Me
              </h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
                Follow me on social media for updates on my latest projects and tech insights.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.label}
                    style={{ '--hover-color': social.color }}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-text">
            I'm currently available for new projects and collaborations. 
            Let's discuss how we can work together to bring your vision to life.
          </p>
          <div className="cta-buttons">
            <a href="mailto:ankushbhataab@gmail.com" className="cta-btn cta-primary">
              <FiMail />
              Email Me Directly
            </a>
            <a href="/work" className="cta-btn cta-secondary">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
