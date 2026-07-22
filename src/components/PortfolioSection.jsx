import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code2, Globe, Smartphone, ShoppingCart, Cpu, BookOpen, X } from 'lucide-react';

const categories = ['All', 'Web Development', 'E-Commerce', 'Mobile App', 'AI Integration', 'Education', 'Corporate'];

const portfolioItems = [
  {
    id: 1,
    title: "Divine Life Astro Power",
    category: "Web Development",
    desc: "Professional astrology & spiritual services platform with online consultations, horoscope readings, and divine life guidance.",
    tags: ["React", "UI/UX", "SEO"],
    image: "https://images.unsplash.com/photo-1617396900799-f4ec2b43c7d3?q=80&w=900&auto=format&fit=crop",
    liveUrl: "https://divinelifeastropower.com",
    icon: <Globe size={18} />,
    color: "#2563eb",
  },
  {
    id: 2,
    title: "Vishwabandhu Welfare",
    category: "Web Development",
    desc: "NGO website connecting donors with charitable causes, featuring donation tracking, program listings and impact reports.",
    tags: ["WordPress", "NGO", "Donation"],
    image: "https://images.unsplash.com/photo-1593113616828-6f22bca04804?q=80&w=900&auto=format&fit=crop",
    liveUrl: "https://vishwabandhuwelfare.com",
    icon: <Globe size={18} />,
    color: "#2563eb",
  },
  {
    id: 3,
    title: "RiDeal Mobility",
    category: "Web Development",
    desc: "Full-featured cab & fleet booking platform with GPS tracking, corporate accounts, and real-time ride management system.",
    tags: ["React", "Maps API", "Booking"],
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=900&auto=format&fit=crop",
    liveUrl: "https://ridealmobility.com",
    icon: <Smartphone size={18} />,
    color: "#2563eb",
  },
  {
    id: 4,
    title: "RiDeal Laundry India",
    category: "Web Development",
    desc: "On-demand laundry & dry cleaning service with online booking, order tracking, and doorstep pickup/delivery.",
    tags: ["React", "Booking System", "UI/UX"],
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=900&auto=format&fit=crop",
    liveUrl: "#",
    icon: <Globe size={18} />,
    color: "#2563eb",
  },
  {
    id: 5,
    title: "Fresh India",
    category: "E-Commerce",
    desc: "Hyper-local multi-vendor organic produce delivery platform connecting certified farmers with urban consumers for same-day delivery.",
    tags: ["Multi-Vendor", "Node.js", "E-Commerce"],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=900&auto=format&fit=crop",
    liveUrl: "#",
    icon: <ShoppingCart size={18} />,
    color: "#2563eb",
  },
  {
    id: 6,
    title: "Drishti Computer",
    category: "Education",
    desc: "Computer education institute website with course management, student registration, and comprehensive online learning resources.",
    tags: ["CMS", "Education", "Portals"],
    image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?q=80&w=900&auto=format&fit=crop",
    liveUrl: "https://drishticomputer.com",
    icon: <BookOpen size={18} />,
    color: "#2563eb",
  },
  {
    id: 7,
    title: "Ascenta Tour",
    category: "Web Development",
    desc: "Premium tour & travel booking platform for Open & Private Trips to Japan, Korea, Thailand, Europe and more — PT. Ascenta Group Indonesia.",
    tags: ["Next.js", "Travel", "Booking"],
    image: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=900&auto=format&fit=crop",
    liveUrl: "https://www.ascentatour.com",
    icon: <Globe size={18} />,
    color: "#2563eb",
  },
  {
    id: 8,
    title: "TDEMS Group",
    category: "Corporate",
    desc: "Corporate website for Tanya Dream Engineering & Management Services Pvt. Ltd. — a leading engineering & project management firm.",
    tags: ["React", "Corporate", "UI/UX"],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=900&auto=format&fit=crop",
    liveUrl: "https://tdemsgroup.com",
    icon: <Code2 size={18} />,
    color: "#2563eb",
  },
  {
    id: 9,
    title: "AI Business Dashboard",
    category: "AI Integration",
    desc: "Intelligent business analytics dashboard with AI-powered insights, predictive analytics, and automated reporting for enterprises.",
    tags: ["AI/ML", "React", "Analytics"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=900&auto=format&fit=crop",
    liveUrl: "#",
    icon: <Cpu size={18} />,
    color: "#2563eb",
  },
];

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filtered = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap" rel="stylesheet" />
      <style>{`
        .ps-section {
          width: 100%;
          background: #0a0f1e;
          padding: 80px 5% 100px;
          font-family: 'Outfit', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle background texture */
        .ps-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 40% at 50% 100%, rgba(37, 99, 235, 0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Section Header */
        .ps-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .ps-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 16px;
        }

        .ps-heading {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 900;
          color: #ffffff;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .ps-heading span {
          background: linear-gradient(90deg, #2563eb, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ps-desc {
          font-size: 1rem;
          color: #666;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* Filter Tabs */
        .ps-filters {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        .ps-filter-btn {
          padding: 9px 20px;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          color: #888;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.5px;
        }

        .ps-filter-btn:hover {
          border-color: rgba(37, 99, 235, 0.5);
          color: #60a5fa;
          background: rgba(37, 99, 235, 0.06);
        }

        .ps-filter-btn.active {
          background: #2563eb;
          border-color: #2563eb;
          color: #ffffff;
          font-weight: 700;
          box-shadow: 0 0 20px rgba(37, 99, 235, 0.4);
        }

        /* Grid */
        .ps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 28px;
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* Card */
        .ps-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
          group: true;
        }

        .ps-card:hover {
          border-color: rgba(37, 99, 235, 0.4);
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(37, 99, 235, 0.12);
        }

        .ps-img-wrap {
          width: 100%;
          height: 220px;
          overflow: hidden;
          position: relative;
        }

        .ps-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          filter: brightness(0.85);
        }

        .ps-card:hover .ps-img {
          transform: scale(1.07);
          filter: brightness(0.95);
        }

        .ps-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 30%, rgba(17, 17, 17, 0.95) 100%);
          z-index: 1;
        }

        .ps-category-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(10, 15, 30, 0.85);
          border: 1px solid rgba(37, 99, 235, 0.35);
          border-radius: 50px;
          color: #60a5fa;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          backdrop-filter: blur(10px);
        }

        .ps-card-body {
          padding: 24px;
        }

        .ps-card-title {
          font-size: 1.3rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .ps-card:hover .ps-card-title {
          color: #60a5fa;
        }

        .ps-card-desc {
          font-size: 0.875rem;
          color: #666;
          line-height: 1.6;
          margin-bottom: 18px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ps-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 20px;
        }

        .ps-tag {
          padding: 4px 10px;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.2);
          color: #60a5fa;
          font-size: 11px;
          font-weight: 600;
          border-radius: 50px;
          letter-spacing: 0.5px;
        }

        .ps-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 18px;
        }

        .ps-view-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #888;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          background: none;
          border: none;
          font-family: 'Outfit', sans-serif;
          transition: color 0.3s ease;
        }

        .ps-view-btn:hover {
          color: #60a5fa;
        }

        .ps-live-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 18px;
          background: #2563eb;
          color: #ffffff;
          border-radius: 50px;
          font-size: 12px;
          font-weight: 800;
          text-decoration: none;
          transition: all 0.3s ease;
          letter-spacing: 0.5px;
        }

        .ps-live-btn:hover {
          background: #1d4ed8;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.45);
          transform: scale(1.04);
        }

        /* Modal Overlay */
        .ps-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(8px);
        }

        .ps-modal {
          background: #0d1225;
          border: 1px solid rgba(37, 99, 235, 0.25);
          border-radius: 24px;
          max-width: 680px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
        }

        .ps-modal-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 20px 20px 0 0;
        }

        .ps-modal-body {
          padding: 32px;
        }

        .ps-modal-cat {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 12px;
        }

        .ps-modal-title {
          font-size: 2rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: -0.03em;
        }

        .ps-modal-desc {
          font-size: 1rem;
          color: #888;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .ps-modal-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .ps-modal-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ps-modal-live {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 24px;
          background: #2563eb;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'Outfit', sans-serif;
        }

        .ps-modal-live:hover {
          background: #1d4ed8;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.45);
        }

        .ps-modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .ps-modal-close:hover {
          background: rgba(37, 99, 235, 0.2);
          border-color: #2563eb;
          color: #60a5fa;
        }

        /* CTA Section */
        .ps-cta {
          text-align: center;
          margin-top: 80px;
          padding: 60px 40px;
          background: rgba(37, 99, 235, 0.05);
          border: 1px solid rgba(37, 99, 235, 0.15);
          border-radius: 24px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }

        .ps-cta::before {
          content: '';
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .ps-cta-title {
          font-size: clamp(1.6rem, 4vw, 2.4rem);
          font-weight: 900;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
          position: relative;
        }

        .ps-cta-sub {
          font-size: 1rem;
          color: #666;
          margin-bottom: 28px;
          position: relative;
        }

        .ps-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 36px;
          background: #2563eb;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
          border-radius: 50px;
          text-decoration: none;
          font-family: 'Outfit', sans-serif;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
          position: relative;
        }

        .ps-cta-btn:hover {
          background: #1d4ed8;
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.5);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .ps-grid { grid-template-columns: 1fr; gap: 20px; }
          .ps-section { padding: 60px 5% 80px; }
          .ps-modal-body { padding: 24px; }
          .ps-modal-title { font-size: 1.5rem; }
          .ps-cta { padding: 40px 24px; margin-top: 60px; }
        }
      `}</style>

      <section className="ps-section">
        {/* Header */}
        <motion.div
          className="ps-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
        >
          <span className="ps-label">Our Portfolio</span>
          <h2 className="ps-heading">Some Recent <span>Works</span></h2>
          <p className="ps-desc">Har project ek real client ka real solution hai. Yahan dekhiye humara kaam.</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="ps-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`ps-filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="ps-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                className="ps-card"
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="ps-img-wrap">
                  <img src={item.image} alt={item.title} className="ps-img" loading="lazy" />
                  <div className="ps-img-overlay" />
                  <span className="ps-category-badge">
                    {item.icon}
                    {item.category}
                  </span>
                </div>

                <div className="ps-card-body">
                  <h3 className="ps-card-title">{item.title}</h3>
                  <p className="ps-card-desc">{item.desc}</p>
                  <div className="ps-tags">
                    {item.tags.map(tag => (
                      <span key={tag} className="ps-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="ps-card-footer">
                    <button className="ps-view-btn">
                      View Details →
                    </button>
                    {item.liveUrl !== '#' && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ps-live-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={13} />
                        Live Site
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="ps-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="ps-cta-title">Aapka Project Next Ho Sakta Hai 🚀</h3>
          <p className="ps-cta-sub">Agar aap bhi apna digital dream project banana chahte hain, toh aaj hi baat karein.</p>
          <a href="/contact" className="ps-cta-btn">
            Start Your Project <ExternalLink size={15} />
          </a>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="ps-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="ps-modal"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: 40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="ps-modal-close" onClick={() => setSelectedItem(null)}>
                <X size={16} />
              </button>
              <img src={selectedItem.image} alt={selectedItem.title} className="ps-modal-img" />
              <div className="ps-modal-body">
                <span className="ps-modal-cat">{selectedItem.icon} {selectedItem.category}</span>
                <h2 className="ps-modal-title">{selectedItem.title}</h2>
                <p className="ps-modal-desc">{selectedItem.desc}</p>
                <div className="ps-modal-tags">
                  {selectedItem.tags.map(tag => (
                    <span key={tag} className="ps-tag">{tag}</span>
                  ))}
                </div>
                <div className="ps-modal-actions">
                  {selectedItem.liveUrl !== '#' ? (
                    <a
                      href={selectedItem.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ps-modal-live"
                    >
                      <ExternalLink size={16} /> Live Preview Dekhein
                    </a>
                  ) : (
                    <a href="/contact" className="ps-modal-live">
                      Project Ke Baare Mein Baat Karein →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PortfolioSection;
