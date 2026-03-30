import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const certificates = [
  {
    title: 'Certificate 1',
    image: '/cert1.jpg',
    color: '#FF9900',
  },
  {
    title: 'DevOps on AWS',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~43AZQPG93F9D/CERTIFICATE_LANDING_PAGE~43AZQPG93F9D.jpeg',
    color: '#0078D4',
  },
  {
    title: 'Cloud Computing',
    image: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YZURLPWGV4GX/CERTIFICATE_LANDING_PAGE~YZURLPWGV4GX.jpeg',
    color: '#34A853',
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section id="certificates" className="certificates section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Certificates
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Professional certifications &amp; achievements
        </motion.p>

        <div className="certificates-grid">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="certificate-card glass-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              onClick={() => setSelectedImg(cert.image)}
              style={{ cursor: 'pointer' }}
            >
              <div className="cert-image-wrapper" style={{ borderColor: `${cert.color}44` }}>
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="cert-image"
                  loading="lazy"
                />
                <div className="cert-overlay">
                  <span className="cert-zoom-icon">🔍 View</span>
                </div>
              </div>
              <div className="cert-info">
                <div className="cert-dot" style={{ background: cert.color, boxShadow: `0 0 12px ${cert.color}` }} />
                <h3 style={{ color: cert.color }}>{cert.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            className="cert-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              className="cert-lightbox-content"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-lightbox-close" onClick={() => setSelectedImg(null)}>✕</button>
              <img src={selectedImg} alt="Certificate" className="cert-lightbox-img" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
