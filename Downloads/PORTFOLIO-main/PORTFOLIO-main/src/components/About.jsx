import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { number: '10+', label: 'Projects Built' },
  { number: '3rd', label: 'Year Student' },
  { number: '5+', label: 'Tools Mastered' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.15 }
    })
  };

  return (
    <section id="about" className="about section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="about-content glass-card"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p>
            Hello! I am a 3rd-year university student with an intense passion for DevOps, cloud computing, and system automation.
          </p>
          <p>
            I enjoy optimizing software delivery pipelines and building resilient infrastructure. My journey is fueled by continuous learning and hands-on experimentation with modern DevOps tooling.
          </p>
          <p>
            My ultimate career goal is to become a highly skilled DevOps Engineer, bridging the gap between development and operations to deliver seamless tech solutions.
          </p>

          <div className="about-stats">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                className="stat-item"
                custom={i}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
              >
                <div className="stat-number">{s.number}</div>
                <div className="stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
