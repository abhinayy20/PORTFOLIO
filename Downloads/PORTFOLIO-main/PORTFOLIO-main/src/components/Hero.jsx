import { useCallback } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const cloudIcons = [
  { label: 'AWS', icon: '☁️', cls: 'aws-icon' },
  { label: 'Azure', icon: '⚡', cls: 'azure-icon' },
  { label: 'GCP', icon: '🌐', cls: 'gcp-icon' },
  { label: 'Docker', icon: '🐳', cls: 'docker-icon' },
  { label: 'K8s', icon: '☸️', cls: 'k8s-icon' },
];

export default function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Abhinay_CV.pdf';
    link.download = 'Abhinay_Kumar_Yadav_CV.pdf';
    link.click();
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.7, delay: i * 0.12, ease: 'easeOut' }
    })
  };

  return (
    <section id="home" className="hero">
      <div className="hero-particles">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            particles: {
              number: { value: 50, density: { enable: true, area: 800 } },
              color: { value: ['#FF9900', '#0078D4', '#4285F4', '#34A853', '#2496ED'] },
              shape: { type: 'circle' },
              opacity: { value: 0.3, random: true },
              size: { value: { min: 1, max: 3 } },
              links: { enable: true, distance: 130, color: '#FF9900', opacity: 0.1, width: 1 },
              move: { enable: true, speed: 0.8, direction: 'none', random: true, out_mode: 'out' },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'grab' },
                onClick: { enable: true, mode: 'push' },
              },
              modes: {
                grab: { distance: 140, links: { opacity: 0.3 } },
                push: { quantity: 3 },
              },
            },
          }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
      </div>

      <div className="hero-split">
        {/* Left: Text Content */}
        <div className="hero-text">
          <motion.div className="cloud-icons" custom={0} variants={fadeUp} initial="hidden" animate="visible">
            {cloudIcons.map((c, i) => (
              <motion.div
                key={c.label}
                className={`cloud-icon-item ${c.cls}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                title={c.label}
              >
                {c.icon}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="terminal-tag" custom={1} variants={fadeUp} initial="hidden" animate="visible">
            ~/devops-engineer
          </motion.div>

          <motion.p className="greeting" custom={2} variants={fadeUp} initial="hidden" animate="visible">
            Hello World, I am
          </motion.p>

          <motion.h1 className="name" custom={3} variants={fadeUp} initial="hidden" animate="visible">
            Abhinay Kumar Yadav
          </motion.h1>

          <motion.div className="typed-wrapper" custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <TypeAnimation
              sequence={[
                '$ deploying → DevOps Engineer',
                2500,
                '$ scaling → Cloud Architect',
                2500,
                '$ automating → CI/CD Specialist',
                2500,
                '$ containerizing → Docker Expert',
                2500,
                '$ provisioning → AWS & Azure & GCP',
                2500,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div className="terminal-line" custom={5} variants={fadeUp} initial="hidden" animate="visible">
            <span className="prompt">abhinay@cloud</span>:<span style={{ color: '#4285F4' }}>~</span>$ <span className="cmd">build --scalable --automated</span>
          </motion.div>

          <motion.div className="cta-buttons" custom={6} variants={fadeUp} initial="hidden" animate="visible">
            <a href="#projects" className="btn primary-btn" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              🚀 View Projects
            </a>
            <a href="#contact" className="btn secondary-btn" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              📬 Contact Me
            </a>
            <button className="btn download-btn" onClick={handleDownload} id="download-cv-btn">
              📄 Download CV
            </button>
          </motion.div>
        </div>

        {/* Right: Profile Picture */}
        <motion.div
          className="hero-profile"
          initial={{ opacity: 0, scale: 0.7, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
        >
          <div className="profile-ring">
            <div className="profile-ring-inner">
              {/* Replace src with your actual photo path in /public */}
              <img
                src="/profile.jpg"
                alt="Abhinay Kumar Yadav"
                className="profile-photo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="profile-fallback" style={{ display: 'none' }}>
                AKY
              </div>
            </div>
          </div>

          {/* Floating tech badges around profile */}
          <motion.div
            className="floating-badge fb-aws"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            ☁️ AWS
          </motion.div>
          <motion.div
            className="floating-badge fb-azure"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ⚡ Azure
          </motion.div>
          <motion.div
            className="floating-badge fb-docker"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            🐳 Docker
          </motion.div>
          <motion.div
            className="floating-badge fb-terraform"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            🏗️ Terraform
          </motion.div>
        </motion.div>
      </div>

      <motion.div className="scroll-indicator" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
        <span>SCROLL</span>
        <div className="scroll-arrow" />
      </motion.div>
    </section>
  );
}
