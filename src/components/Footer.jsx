
const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Instagram', url: 'https://instagram.com' }
  ];

  return (
    <footer>
      <div id="contact" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title fade-in" style={{ justifyContent: 'center' }}>
            <span className="number">04.</span> What's Next?
          </h2>
          
          <h3 className="fade-in" style={{
            fontSize: '3rem',
            margin: '0 0 20px',
            textAlign: 'center',
            color: 'var(--white)'
          }}>
            Get In Touch
          </h3>
          
          <p className="fade-in" style={{
            maxWidth: '600px',
            margin: '0 auto 50px',
            textAlign: 'center',
            color: 'var(--text-secondary)'
          }}>
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <div className="fade-in" style={{ textAlign: 'center' }}>
            <a 
              href="mailto:hello@example.com" 
              className="btn btn-primary"
              style={{ padding: '1.25rem 1.75rem', fontFamily: 'var(--font-mono)' }}
            >
              Say Hello
            </a>
          </div>
        </div>
      </div>
      
      <div style={{
        padding: '25px 0 10px',
        textAlign: 'center',
        color: 'var(--text-secondary)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.8rem'
      }}>
        <div className="fade-in" style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '0 0 10px',
          gap: '25px'
        }}>
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                transition: 'var(--transition)',
                ':hover': {
                  color: 'var(--accent-color)',
                  transform: 'translateY(-3px)'
                }
              }}
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <div className="fade-in">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--text-secondary)',
              transition: 'var(--transition)',
              ':hover': {
                color: 'var(--accent-color)'
              }
            }}
          >
            <p>Designed & Built by John Smith</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
