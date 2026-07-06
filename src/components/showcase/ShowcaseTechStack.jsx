import { motion } from 'framer-motion';

const techStack = ["React JS", "Next JS", "Node JS", "MongoDB", "Tailwind CSS", "WordPress", "AWS Cloud", "Docker", "PostgreSQL", "GraphQL", "Figma", "TypeScript", "Flutter", "React Native", "Swift", "Kotlin"];

const ShowcaseTechStack = () => (
  <section className="tech-section">
    <style>{`
      .tech-section { padding: 60px 5%; background: #051432; font-family: 'Barlow', sans-serif; }
      .tech-box { max-width: 1200px; margin: 0 auto; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 30px; padding: 80px 40px; text-align: center; backdrop-filter: blur(20px); position: relative; overflow: hidden; }
      .tech-box::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle at center, rgba(8,56,120,0.4) 0%, transparent 40%); pointer-events: none; z-index: 0; }
      .tech-title { font-size: 2.5rem; font-weight: 800; color: white; margin-bottom: 16px; position: relative; z-index: 2; }
      .tech-subtitle { color: #94a3b8; font-size: 1.1rem; margin-bottom: 50px; position: relative; z-index: 2; }
      .tech-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; position: relative; z-index: 2; }
      .tech-pill { background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: #e2e8f0; padding: 14px 28px; border-radius: 50px; font-weight: 600; font-size: 1rem; backdrop-filter: blur(10px); transition: all 0.3s ease; cursor: default; }
      .tech-pill:hover { background: #083878; color: white; border-color: #60a5fa; transform: translateY(-5px); box-shadow: 0 10px 20px rgba(8,56,120,0.5); }
      @media (max-width:768px) { .tech-box { padding: 40px 20px; } .tech-title { font-size: 2rem; } .tech-pill { padding: 10px 20px; font-size: 0.9rem; } }
    `}</style>

    <motion.div className="tech-box" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
      <h2 className="tech-title">Modern Technology Stack</h2>
      <p className="tech-subtitle">We leverage bleeding-edge technologies to build future-proof solutions.</p>
      <div className="tech-grid">
        {techStack.map((tech, i) => (
          <motion.div key={tech} className="tech-pill" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default ShowcaseTechStack;
