import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const timeline = [
  {
    date: 'Present',
    title: '☁️ Cloud & DevOps Builder',
    desc: 'Building production-grade CI/CD pipelines, deploying on AWS & Azure, automating with Terraform and Ansible. Earning cloud certifications while completing 3rd year.',
  },
  {
    date: '2021 - 2023',
    title: '🏫 Intermediate - Shree Ram Public School',
    desc: 'Percentage: 85.0%',
  },
  {
    date: '2019 - 2021',
    title: '🏫 High School - The city Montessori school',
    desc: 'Percentage: 90.0%',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="experience section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Deployment Timeline
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          $ git log --oneline --graph
        </motion.p>

        <div className="timeline">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className="timeline-item glass-card"
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-date">{item.date}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
