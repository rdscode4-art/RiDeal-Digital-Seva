import { motion } from 'framer-motion';

// Placeholder Data for Portfolio Items
const portfolioItems = [
  {
    id: 1,
    title: "EcoVision Platform",
    category: "Web Application",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 2,
    title: "Nexus Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 3,
    title: "Aura Mobile App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 4,
    title: "FinTech Gateway",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 5,
    title: "Lumina AI Agent",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    link: "#"
  },
  {
    id: 6,
    title: "Ozone E-Commerce",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
    link: "#"
  }
];

const PortfolioSection = () => {
  return (
    <>
      <style>{`
        .ps-section {
          width: 100%;
          background: #050505;
          padding: 60px 5% 120px;
          font-family: 'Outfit', sans-serif;
        }

        .ps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 40px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .ps-card {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          cursor: pointer;
        }

        .ps-card:hover {
          border-color: rgba(129, 140, 248, 0.5);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 40px rgba(129, 140, 248, 0.1);
        }

        .ps-image-wrapper {
          width: 100%;
          height: 240px;
          overflow: hidden;
          position: relative;
        }

        .ps-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .ps-card:hover .ps-image {
          transform: scale(1.08);
        }

        .ps-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0) 100%);
          opacity: 0.8;
          z-index: 1;
        }

        .ps-content {
          position: relative;
          z-index: 2;
          padding: 30px;
          margin-top: -60px;
        }

        .ps-category {
          color: #818cf8;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 8px;
          display: block;
        }

        .ps-title {
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          margin: 0;
          transition: color 0.3s ease;
        }

        .ps-card:hover .ps-title {
          color: #e0e7ff;
        }

        .ps-arrow {
          position: absolute;
          bottom: 30px;
          right: 30px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: all 0.3s ease;
        }

        .ps-card:hover .ps-arrow {
          background: #818cf8;
          transform: rotate(-45deg);
        }

        @media (max-width: 768px) {
          .ps-grid {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 24px;
          }
          .ps-title {
            font-size: 20px;
          }
        }
      `}</style>

      <section className="ps-section">
        <div className="ps-grid">
          {portfolioItems.map((item, index) => (
            <motion.a
              href={item.link}
              key={item.id}
              className="ps-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="ps-image-wrapper">
                <img src={item.image} alt={item.title} className="ps-image" loading="lazy" />
                <div className="ps-overlay" />
              </div>
              <div className="ps-content">
                <span className="ps-category">{item.category}</span>
                <h3 className="ps-title">{item.title}</h3>
              </div>
              <div className="ps-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
