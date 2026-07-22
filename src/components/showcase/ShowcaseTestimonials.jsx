import { motion } from 'framer-motion';

const testimonials = [
  { id: 1, name: "Rahul Sharma", role: "CEO at TechFlow", review: "The digital transformation they delivered was flawless. Our efficiency increased by 300% within the first quarter.", rating: 5 },
  { id: 2, name: "Amit Singh", role: "Founder, Bloom", review: "Their UI/UX design is unmatched. The team truly understands modern aesthetics and user psychology.", rating: 5 },
  { id: 3, name: "Priya Patel", role: "Director of IT, HealthPlus", review: "A highly reliable and professional team. They built our secure infrastructure ahead of schedule.", rating: 5 },
  { id: 4, name: "Neha Gupta", role: "VP Engineering", review: "Exceptional code quality and scalable architecture. Highly recommended for complex SaaS applications.", rating: 5 },
];

const ShowcaseTestimonials = () => (
  <section className="testi-section">
    <style>{`
      .testi-section { padding: 60px 0; background: #051432; overflow: hidden; font-family: 'Barlow', sans-serif; }
      .testi-header { text-align: center; margin-bottom: 60px; padding: 0 5%; }
      .testi-badge { display: inline-block; background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.12); color: #93c5fd; padding: 9px 24px; border-radius: 40px; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; }
      .testi-title { font-size: 3rem; font-weight: 800; color: #fff; }
      .testi-track-wrap { display: flex; overflow: hidden; }
      .testi-track { display: flex; gap: 28px; padding: 20px 5%; }
      .testi-card { min-width: 400px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); border-radius: 20px; padding: 36px; backdrop-filter: blur(10px); transition: all 0.3s ease; flex-shrink: 0; }
      .testi-card:hover { background: rgba(255,255,255,0.07); border-color: rgba(37, 99, 235,0.2); transform: translateY(-8px); }
      .testi-top { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
      .testi-name { color: #fff; font-size: 1.1rem; font-weight: 700; }
      .testi-role { color: #64748b; font-size: 0.85rem; }
      .testi-text { color: #94a3b8; line-height: 1.7; font-style: italic; margin-bottom: 18px; }
      .testi-stars { color: #fbbf24; font-size: 1.1rem; letter-spacing: 2px; }
      @media (max-width:600px) { .testi-card { min-width: 300px; padding: 24px; } .testi-title { font-size: 2rem; } }
    `}</style>

    <div className="testi-header">
      <span className="testi-badge">Client Stories</span>
      <h2 className="testi-title">Client Success Stories</h2>
    </div>

    <div className="testi-track-wrap">
      <motion.div className="testi-track" animate={{ x: [0, -1100] }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }}>
        {[...testimonials, ...testimonials].map((t, i) => (
          <div key={i} className="testi-card">
            <div className="testi-top">
              <div><div className="testi-name">{t.name}</div><div className="testi-role">{t.role}</div></div>
            </div>
            <p className="testi-text">"{t.review}"</p>
            <div className="testi-stars">{'★'.repeat(t.rating)}</div>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ShowcaseTestimonials;
