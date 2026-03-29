import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'AWS', icon: '☁️', color: '#FF9900', bg: 'rgba(255,153,0,0.1)', border: 'rgba(255,153,0,0.25)', level: 'Intermediate' },
  { name: 'Azure', icon: '⚡', color: '#50e6ff', bg: 'rgba(0,120,212,0.1)', border: 'rgba(0,120,212,0.25)', level: 'Beginner' },
  { name: 'GCP', icon: '🌐', color: '#4285F4', bg: 'rgba(66,133,244,0.1)', border: 'rgba(66,133,244,0.25)', level: 'Beginner' },
  { name: 'Docker', icon: '🐳', color: '#2496ED', bg: 'rgba(36,150,237,0.1)', border: 'rgba(36,150,237,0.25)', level: 'Advanced' },
  { name: 'Kubernetes', icon: '☸️', color: '#326CE5', bg: 'rgba(50,108,229,0.1)', border: 'rgba(50,108,229,0.25)', level: 'Beginner' },
  { name: 'Terraform', icon: '🏗️', color: '#7B42BC', bg: 'rgba(123,66,188,0.1)', border: 'rgba(123,66,188,0.25)', level: 'Intermediate' },
  { name: 'Jenkins', icon: '🔧', color: '#D33833', bg: 'rgba(211,56,51,0.1)', border: 'rgba(211,56,51,0.25)', level: 'Advanced' },
  { name: 'Ansible', icon: '⚙️', color: '#EE0000', bg: 'rgba(238,0,0,0.1)', border: 'rgba(238,0,0,0.25)', level: 'Intermediate' },
  { name: 'Git', icon: '📦', color: '#F05032', bg: 'rgba(240,80,50,0.1)', border: 'rgba(240,80,50,0.25)', level: 'Advanced' },
  { name: 'Linux', icon: '🐧', color: '#FCC624', bg: 'rgba(252,198,36,0.1)', border: 'rgba(252,198,36,0.25)', level: 'Advanced' },
  { name: 'Java', icon: '☕', color: '#ED8B00', bg: 'rgba(237,139,0,0.1)', border: 'rgba(237,139,0,0.25)', level: 'Advanced' },
  { name: 'Python', icon: '🐍', color: '#3776AB', bg: 'rgba(55,118,171,0.1)', border: 'rgba(55,118,171,0.25)', level: 'Intermediate' },
  { name: 'CI/CD', icon: '🔄', color: '#34A853', bg: 'rgba(52,168,83,0.1)', border: 'rgba(52,168,83,0.25)', level: 'Advanced' },
  { name: 'Shell Script', icon: '💻', color: '#4EAA25', bg: 'rgba(78,170,37,0.1)', border: 'rgba(78,170,37,0.25)', level: 'Intermediate' },
  { name: 'Nginx', icon: '🌊', color: '#009639', bg: 'rgba(0,150,57,0.1)', border: 'rgba(0,150,57,0.25)', level: 'Intermediate' },
];

const levelColor = {
  'Beginner': '#FBBC04',
  'Intermediate': '#FF9900',
  'Advanced': '#34A853',
};

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="skills section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Tech Arsenal
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          $ kubectl get skills --all-namespaces
        </motion.p>

        <div className="skills-icon-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="skill-icon-card"
              style={{
                background: skill.bg,
                borderColor: skill.border,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05, type: 'spring', stiffness: 150 }}
              whileHover={{ scale: 1.08, y: -5 }}
            >
              <div className="skill-icon-emoji">{skill.icon}</div>
              <div className="skill-icon-name" style={{ color: skill.color }}>{skill.name}</div>
              <div className="skill-icon-level" style={{ color: levelColor[skill.level] }}>
                {skill.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
