import { motion } from 'framer-motion';

const timeline = [
  { year: "2020", title: "Inception & Vision", desc: "Started with a small team and a bold vision to build digital excellence across India." },
  { year: "2022", title: "100+ Projects Delivered", desc: "Crossed 100 successful projects, serving clients from diverse industries nationwide." },
  { year: "2024", title: "AI Integration Era", desc: "Pioneered AI-driven development and intelligent system architecture for our clients." },
  { year: "2026", title: "Industry Leaders", desc: "Recognized as a top-tier digital transformation partner with 250+ happy clients." },
];

const ShowcaseWhyUs = () => (
  <section className="wyu-section">
    <style>{`
      .wyu-section { padding: 60px 5%; background: #051432; font-family: 'Barlow', sans-serif; }
      .wyu-header { text-align: center; margin-bottom: 80px; }
      .wyu-badge { display: inline-block; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); color: #60a5fa; padding: 9px 24px; border-radius: 40px; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; }
      .wyu-title { font-size: 3rem; font-weight: 800; color: white; margin-bottom: 15px; }
      .wyu-timeline { max-width: 800px; margin: 0 auto; position: relative; }
      .wyu-timeline::before { content: ''; position: absolute; top: 0; bottom: 0; left: 50%; transform: translateX(-50%); width: 2px; background: rgba(255, 255, 255, 0.1); }
      .wyu-item { display: flex; justify-content: space-between; align-items: center; margin-bottom: 60px; position: relative; }
      .wyu-item:nth-child(even) { flex-direction: row-reverse; }
      .wyu-card { width: 45%; background: rgba(255, 255, 255, 0.02); padding: 30px; border-radius: 16px; border: 1px solid rgba(255, 255, 255, 0.05); backdrop-filter: blur(10px); transition: all 0.3s ease; }
      .wyu-card:hover { transform: translateY(-5px); border-color: rgba(96, 165, 250, 0.3); background: rgba(255, 255, 255, 0.04); }
      .wyu-year { color: #60a5fa; font-size: 1.2rem; font-weight: 800; margin-bottom: 10px; }
      .wyu-card-title { color: white; font-size: 1.3rem; font-weight: 700; margin-bottom: 10px; }
      .wyu-card-desc { color: #94a3b8; line-height: 1.6; font-size: 0.95rem; }
      .wyu-dot { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 20px; height: 20px; background: #083878; border: 4px solid #60a5fa; border-radius: 50%; box-shadow: 0 0 20px rgba(96, 165, 250, 0.5); z-index: 2; }
      .wyu-spacer { width: 45%; }
      @media (max-width: 768px) {
        .wyu-timeline::before { left: 20px; }
        .wyu-item, .wyu-item:nth-child(even) { flex-direction: column; align-items: flex-start; padding-left: 60px; }
        .wyu-card { width: 100%; }
        .wyu-spacer { display: none; }
        .wyu-dot { left: 20px; }
        .wyu-title { font-size: 2.2rem; }
      }
    `}</style>

    <div className="wyu-header">
      <span className="wyu-badge">Why Choose Us</span>
      <h2 className="wyu-title">Our Journey to Excellence</h2>
    </div>

    <div className="wyu-timeline">
      {timeline.map((item, i) => (
        <motion.div key={i} className="wyu-item" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
          <div className="wyu-card">
            <div className="wyu-year">{item.year}</div>
            <h3 className="wyu-card-title">{item.title}</h3>
            <p className="wyu-card-desc">{item.desc}</p>
          </div>
          <div className="wyu-dot" />
          <div className="wyu-spacer" />
        </motion.div>
      ))}
    </div>
  </section>
);

export default ShowcaseWhyUs;
