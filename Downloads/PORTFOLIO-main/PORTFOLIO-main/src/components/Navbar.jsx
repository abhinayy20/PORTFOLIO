import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const links = ['Home','About','Skills','Projects','Education','Certificates','Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (link) => {
    setMenuOpen(false);
    document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="glass-nav" style={{ boxShadow: scrolled ? '0 2px 30px rgba(255,153,0,0.06)' : 'none' }}>
      <div className="nav-container">
        <motion.div
          className="logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="aws">A</span><span className="azure">K</span><span className="gcp">Y</span><span style={{ color: '#fff' }}>.</span>
        </motion.div>

        <ul className={`nav-links ${menuOpen ? 'nav-active' : ''}`}>
          {links.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <a href={`#${link.toLowerCase()}`} onClick={(e) => { e.preventDefault(); handleNavClick(link); }}>
                {link}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="nav-actions">
          <motion.a
            href="https://github.com/abhinayy20"
            className="btn github-btn"
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            ⌘ GitHub
          </motion.a>
        </div>

        <div className={`hamburger ${menuOpen ? 'toggle' : ''}`} onClick={() => setMenuOpen(!menuOpen)} id="hamburger-btn">
          <div className="line1" /><div className="line2" /><div className="line3" />
        </div>
      </div>
    </nav>
  );
}
