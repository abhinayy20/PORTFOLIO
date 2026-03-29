import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  { icon: '📧', label: 'Email', href: 'mailto:yadavabhinay456@gmail.com', value: 'yadavabhinay456@gmail.com' },
  { icon: '💼', label: 'LinkedIn', href: '#', value: 'linkedin.com/in/abhinay' },
  { icon: '🐙', label: 'GitHub', href: 'https://github.com/abhinayy20', value: 'github.com/abhinayy20' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '50a7c1da-161c-4b86-b925-42ae8ad9266a',
          name: formState.name,
          email: formState.email,
          message: formState.message
        })
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact section-padding" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3>Let's Connect</h3>
            <p>Feel free to reach out for collaborations, opportunities, or just a friendly chat about DevOps!</p>
            <div className="social-links">
              {socials.map(s => (
                <a key={s.label} href={s.href} className="social-btn" target="_blank" rel="noreferrer">
                  <span>{s.icon}</span>
                  <span>{s.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-form glass-card"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formState.name}
                  onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                  id="contact-name"
                />
              </div>
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formState.email}
                  onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                  id="contact-email"
                />
              </div>
              <div className="input-group">
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  required
                  value={formState.message}
                  onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                  id="contact-message"
                />
              </div>
              <motion.button
                type="submit"
                className="btn primary-btn submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                id="submit-message-btn"
                disabled={loading || submitted}
                style={{ opacity: loading || submitted ? 0.7 : 1, cursor: loading || submitted ? 'not-allowed' : 'pointer' }}
              >
                {loading ? '⏳ Sending...' : submitted ? '✅ Message Sent!' : '🚀 Send Message'}
              </motion.button>
            </form>
            {submitted && (
              <motion.p
                className="success-msg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thanks! I'll get back to you soon.
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
