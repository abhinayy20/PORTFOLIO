import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import cer01 from '../assets/cer01abhi.jpeg';
import cer02 from '../assets/cer02abhi.jpeg';
import cer03 from '../assets/cer03abhi.jpeg';

const certificates = [
  { img: cer01, title: 'Certificate 1' },
  { img: cer02, title: 'Certificate 2' },
  { img: cer03, title: 'Certificate 3' },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certificates" className="section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certifications
        </motion.h2>
        <div className="projects-grid">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
            >
              <img
                src={cert.img}
                alt={cert.title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px', objectFit: 'contain' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
