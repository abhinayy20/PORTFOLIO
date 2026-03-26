import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const education = [
  {
    icon: '🎓',
    level: 'High School (Class X)',
    school: 'The City Montessori School',
    percentage: '78%',
    color: '#ff9900',
  },
  {
    icon: '📚',
    level: 'Intermediate (Class XII)',
    school: 'Shri Ram Public School',
    percentage: '68%',
    color: '#00d4ff',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="experience section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Academic background &amp; qualifications
        </motion.p>

        <div className="timeline">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              className="timeline-item glass-card"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              <div className="timeline-dot" style={{ background: item.color }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <div className="timeline-date" style={{ color: item.color }}>
                    {item.level}
                  </div>
                  <h3 style={{ marginTop: '0.3rem' }}>
                    {item.icon} {item.school}
                  </h3>
                </div>
                <div
                  style={{
                    background: `linear-gradient(135deg, ${item.color}22, ${item.color}44)`,
                    border: `1.5px solid ${item.color}88`,
                    borderRadius: '12px',
                    padding: '0.4rem 1rem',
                    color: item.color,
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    letterSpacing: '0.05em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.percentage}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
