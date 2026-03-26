import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const techColor = {
  'Jenkins': 'aws-tech', 'Docker': 'docker-tech', 'Git': 'default-tech',
  'Groovy': 'default-tech', 'Terraform': 'gcp-tech', 'AWS': 'aws-tech',
  'VPC': 'aws-tech', 'IAM': 'aws-tech', 'Ansible': 'azure-tech',
  'Linux': 'default-tech', 'YAML': 'default-tech', 'SSH': 'default-tech',
  'EC2': 'aws-tech', 'S3': 'aws-tech', 'Azure': 'azure-tech',
  'GCP': 'gcp-tech', 'K8s': 'docker-tech',
};

const projects = [
  {
    icon: '🐳',
    iconTheme: 'aws-theme',
    title: 'hello-world-eb-docker',
    desc: 'CI/CD Pipeline for Deploying Containerized node.js Application on the Cloud using Elastic Beanstalk and Docker.',
    tech: ['Docker', 'AWS', 'Node.js', 'CI/CD'],
    link: 'https://github.com/abhinayy20/hello-world-eb-docker',
  },
  {
    icon: '🏗️',
    iconTheme: 'gcp-theme',
    title: 'multi-pipeline',
    desc: 'Multi-stage deployment pipeline orchestration using advanced HCL and Terraform configurations for infrastructure deployment.',
    tech: ['HCL', 'Terraform', 'Pipelines', 'IaC'],
    link: 'https://github.com/abhinayy20/multi-pipeline',
  },
  {
    icon: '🐧',
    iconTheme: 'azure-theme',
    title: 'linux-jenkins',
    desc: 'Linux shell scripts and Jenkins configuration setups for automating server operations and build processes.',
    tech: ['Shell', 'Linux', 'Jenkins', 'Automation'],
    link: 'https://github.com/abhinayy20/linux-jenkins',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="projects section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          $ ls ~/projects --deployed
        </motion.p>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="project-card glass-card"
              initial={{ opacity: 0, y: 60 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              <div>
                <div className="project-header">
                  <div className={`project-icon ${proj.iconTheme}`}>{proj.icon}</div>
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '1.2rem' }}>{proj.title}</h3>
                </div>
                <div className="project-content">
                  <p>{proj.desc}</p>
                </div>
              </div>
              <div>
                <div className="tech-stack">
                  {proj.tech.map(t => (
                    <span key={t} className={techColor[t] || 'default-tech'}>{t}</span>
                  ))}
                </div>
                <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
