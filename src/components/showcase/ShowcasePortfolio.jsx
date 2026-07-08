import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, BookOpen } from 'lucide-react';

const projects = [
  { id: 1, title: "Divine Life Astro Power", desc: "A professional astrology & spiritual services platform offering online consultations, horoscopes, and divine life guidance.", tags: ["Web Development", "React", "UI/UX"], img: "/divine_life_astro_power.png", liveUrl: "https://divinelifeastropower.com" },
  { id: 2, title: "Vishwabandhu Welfare", desc: "A welfare organization website connecting donors with charitable causes, featuring donation tracking and program listings.", tags: ["Web Development", "WordPress", "NGO"], img: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=900&auto=format&fit=crop", liveUrl: "https://vishwabandhuwelfare.com" },
  { id: 3, title: "RiDeal Mobility", desc: "Full-featured cab & fleet booking platform with GPS tracking, corporate accounts, and real-time ride management.", tags: ["Web App", "React", "Maps API"], img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop", liveUrl: "https://ridealmobility.com" },
  { id: 4, title: "RiDeal Laundry India", desc: "On-demand laundry & dry cleaning service website with online booking, order tracking, and doorstep pickup/delivery.", tags: ["Web Development", "Booking System", "React"], img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=900&auto=format&fit=crop", liveUrl: "#" },
  { id: 5, title: "Fresh India", desc: "Hyper-local multi-vendor organic produce delivery platform connecting certified farmers with consumers for same-day delivery.", tags: ["E-Commerce", "Multi-Vendor", "Node.js"], img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=900&auto=format&fit=crop", liveUrl: "https://freshindia.com" },
  { id: 6, title: "Drishti Computer", desc: "A computer education institute website with course management, student registration, and online learning resources.", tags: ["Web Development", "CMS", "Education"], img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=900&auto=format&fit=crop", liveUrl: "https://drishticomputer.com" },
  { id: 7, title: "Ascenta Tour", desc: "PT. Ascenta Group Indonesia — a premium tour & travel booking platform for Open & Private Trips to Japan, Korea, Thailand, Europe and more.", tags: ["Next.js", "Travel Platform", "Booking System"], img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=900&auto=format&fit=crop", liveUrl: "https://www.ascentatour.com" },
  { id: 8, title: "TDEMS Group", desc: "Tanya Dream Engineering & Management Services Pvt. Ltd. — a corporate website for a leading engineering & project management firm.", tags: ["Web Development", "Corporate", "React"], img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop", liveUrl: "https://tdemsgroup.com" },
];

const ShowcasePortfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef(null);
  const cardWidth = 320;
  const gap = 24;

  const scrollTo = (index) => {
    const clamped = Math.max(0, Math.min(index, projects.length - 1));
    setActiveIndex(clamped);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: clamped * (cardWidth + gap), behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase-portfolio" className="sp-section">
      <style>{`
        .sp-section { padding: 60px 0; background: #051432; overflow: hidden; position: relative; }
        .sp-inner { padding: 0 5%; }
        .sp-header-row { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 50px; flex-wrap: wrap; gap: 20px; }
        .sp-badge { display: inline-block; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); color: #60a5fa; padding: 7px 18px; border-radius: 40px; font-size: 12px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 14px; }
        .sp-title { font-family: 'Barlow', sans-serif; font-size: clamp(2rem, 4vw, 3rem); font-weight: 800; color: #ffffff; margin-bottom: 10px; }
        .sp-title span { background: linear-gradient(90deg, #60a5fa, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .sp-subtitle { color: #64748b; font-size: 1rem; }
        .sp-nav-arrows { display: flex; gap: 12px; }
        .sp-arrow { width: 48px; height: 48px; border-radius: 50%; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.1); color: #fff; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.3s ease; flex-shrink: 0; }
        .sp-arrow:hover { background: #083878; border-color: #083878; transform: scale(1.05); }
        .sp-arrow:disabled { opacity: 0.25; cursor: not-allowed; transform: none; }
        .sp-track-wrap { overflow: hidden; }
        .sp-track { display: flex; gap: 24px; overflow-x: auto; scroll-behavior: smooth; -ms-overflow-style: none; scrollbar-width: none; padding-bottom: 10px; }
        .sp-track::-webkit-scrollbar { display: none; }
        .pc-card { flex-shrink: 0; width: 320px; background: rgba(255, 255, 255, 0.025); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 20px; overflow: hidden; transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); position: relative; backdrop-filter: blur(12px); }
        .pc-card:hover { border-color: rgba(96, 165, 250, 0.4); box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(96, 165, 250, 0.1); transform: translateY(-8px); }
        .pc-img-wrap { width: 100%; height: 180px; position: relative; overflow: hidden; }
        .pc-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .pc-card:hover .pc-img { transform: scale(1.06); }
        .pc-img-gradient { position: absolute; bottom: 0; left: 0; right: 0; height: 60%; background: linear-gradient(to top, rgba(5,20,50,0.95), transparent); }
        .pc-body { padding: 20px 24px 24px; }
        .pc-title { font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 8px; font-family: 'Barlow', sans-serif; }
        .pc-desc { color: #94a3b8; line-height: 1.5; font-size: 0.85rem; margin-bottom: 16px; }
        .pc-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 20px; }
        .pc-tag { background: rgba(96, 165, 250, 0.1); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.2); padding: 4px 12px; border-radius: 50px; font-size: 0.7rem; font-weight: 600; }
        .pc-actions { display: flex; gap: 10px; }
        .pc-btn { flex: 1; padding: 10px 0; text-align: center; border-radius: 8px; font-weight: 600; font-size: 0.85rem; cursor: pointer; transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; gap: 6px; font-family: 'Barlow', sans-serif; }
        .pc-btn-primary { background: #083878; color: white; border: 1px solid #083878; text-decoration: none; }
        .pc-btn-primary:hover { background: #0a4799; box-shadow: 0 8px 20px rgba(8,56,120,0.5); }
        .pc-btn-secondary { background: transparent; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.1); }
        .pc-btn-secondary:hover { background: rgba(255, 255, 255, 0.08); color: white; }
        .sp-dots { display: flex; gap: 8px; justify-content: center; margin-top: 36px; }
        .sp-dot { width: 8px; height: 8px; border-radius: 50%; background: rgba(255, 255, 255, 0.2); cursor: pointer; transition: all 0.3s ease; border: none; padding: 0; }
        .sp-dot.active { background: #60a5fa; width: 28px; border-radius: 4px; }
        @media (max-width: 600px) { .pc-card { width: 85vw; } .pc-img-wrap { height: 200px; } }
      `}</style>

      <div className="sp-inner">
        <div className="sp-header-row">
          <div>
            <span className="sp-badge">Our Projects</span>
            <h2 className="sp-title">Featured <span>Works</span></h2>
            <p className="sp-subtitle">Real projects we've delivered for our clients.</p>
          </div>
          <div className="sp-nav-arrows">
            <button className="sp-arrow" onClick={() => scrollTo(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous"><ChevronLeft size={20} /></button>
            <button className="sp-arrow" onClick={() => scrollTo(activeIndex + 1)} disabled={activeIndex === projects.length - 1} aria-label="Next"><ChevronRight size={20} /></button>
          </div>
        </div>

        <div className="sp-track-wrap">
          <div className="sp-track" ref={trackRef}>
            {projects.map((proj, index) => (
              <motion.div key={proj.id} className="pc-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5, delay: index * 0.07 }}>
                <div className="pc-img-wrap">
                  <img src={proj.img} alt={proj.title} className="pc-img" loading="lazy" />
                  <div className="pc-img-gradient" />
                </div>
                <div className="pc-body">
                  <h3 className="pc-title">{proj.title}</h3>
                  <p className="pc-desc">{proj.desc}</p>
                  <div className="pc-tags">{proj.tags.map(tag => <span key={tag} className="pc-tag">{tag}</span>)}</div>
                  <div className="pc-actions">
                    <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="pc-btn pc-btn-primary"><ExternalLink size={15} /> Live Preview</a>
                    <button className="pc-btn pc-btn-secondary"><BookOpen size={15} /> Case Study</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="sp-dots">
          {projects.map((_, i) => (
            <button key={i} className={`sp-dot ${i === activeIndex ? 'active' : ''}`} onClick={() => scrollTo(i)} aria-label={`Go to project ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcasePortfolio;
