import React, { useEffect } from "react";
import { FaCarSide, FaTshirt, FaLeaf, FaCheckCircle } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import StaticSocialMedia from "../components/staticsocialmedia/StaticSocialMedia";

const Branches = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const branchesData = [
    {
      id: "mobility",
      title: "RiDeal Mobility",
      icon: <FaCarSide />,
      color: "#2563eb", // Blue
      bg: "#eff6ff",
      desc1: "RiDeal Mobility offers safe, reliable, and affordable transportation solutions across India. Whether you need a daily city commute, airport transfer, or corporate fleet leasing, we've got you covered with professional drivers and modern vehicles.",
      desc2: "We understand that each journey matters. Our fleet of well-maintained vehicles, trained drivers, and 24/7 support ensures a seamless travel experience every time you ride with us.",
      featureDesc: "Our mobility specialists are available round the clock to assist you with bookings, route planning, and real-time tracking — ensuring you reach your destination safely and on time.",
      features: [
        "AC Cab Rides Across City & Outstation",
        "On-Time Airport Pick-Up & Drop-Off",
        "Corporate Fleet with Dedicated Drivers",
        "Zero-Emission EV Rides",
        "Tempo Traveller for Group Tours",
        "24/7 Customer Support & GPS Tracking"
      ],
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "laundry",
      title: "RiDeal Laundry India",
      icon: <FaTshirt />,
      color: "#06b6d4", // Cyan
      bg: "#ecfeff",
      desc1: "RiDeal Laundry India brings professional laundry and dry cleaning services right to your doorstep. We use eco-friendly detergents, advanced fabric care techniques, and offer same-day delivery to keep your clothes fresh and clean.",
      desc2: "We understand that each fabric needs special care. Our trained laundry professionals handle everything from delicate sarees to corporate uniforms with precision and hygiene.",
      featureDesc: "Our laundry specialists are available round the clock for pickups, with real-time order tracking and guaranteed next-day delivery on all standard orders.",
      features: [
        "Eco-Friendly Wash & Fold",
        "Dry Cleaning for Delicates",
        "Professional Steam Iron & Press",
        "Shoe & Bag Deep Cleaning",
        "Curtain & Carpet Wash",
        "Corporate Bulk Laundry"
      ],
      img: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1200&auto=format&fit=crop"
    },
    {
      id: "rifresh",
      title: "RiFresh India",
      icon: <FaLeaf />,
      color: "#22c55e", // Green
      bg: "#f0fdf4",
      desc1: "RiFresh India is a comprehensive multi-vendor hyper-local delivery platform dedicated to providing farm-fresh, organic fruits, vegetables, and specialty mushrooms. We partner directly with local organic farmers and trusted vendors to bring the healthiest, chemical-free produce straight to your doorstep.",
      desc2: "Our crown jewel is our selection of high-quality mushrooms. From everyday button and oyster mushrooms to exotic shiitake and milky mushrooms, we ensure they are cultivated in pristine conditions and delivered with maximum freshness.",
      featureDesc: "All our farmers and vendors are certified organic, adhering to the highest standards of cultivation. We operate on a hyper-local model, ensuring produce reaches you within hours of harvesting.",
      features: [
        "Organic White Button Mushrooms",
        "Gourmet Grey Oyster Mushrooms",
        "Medicinal Assorted Platter",
        "Chemical-Free Orchard Fruits",
        "Fresh Green Vegetables Box",
        "2-Hour Fast Home Delivery"
      ],
      img: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <Header />
      <StaticSocialMedia />
      
      <style>{`
        .branches-page {
          background: #f5f7fc;
          min-height: 100vh;
          font-family: 'Barlow', sans-serif;
          padding-bottom: 80px;
        }

        /* ── HERO ── */
        .br-hero {
          background: linear-gradient(135deg, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 60%, rgba(37, 99, 235, 0.40) 100%),
                      url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          padding: 160px 6% 100px;
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
        }

        .br-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 30px 30px;
        }

        .br-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .br-badge {
          display: inline-block;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,0.2);
        }

        .br-title {
          font-size: 48px;
          font-weight: 900;
          margin-bottom: 24px;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .br-subtitle {
          font-size: 18px;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
        }

        /* ── SECTIONS ── */
        .br-container {
          max-width: 1000px;
          margin: -40px auto 0;
          padding: 0 6%;
          position: relative;
          z-index: 3;
        }

        .br-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(37, 99, 235,0.06);
          margin-bottom: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid rgba(37, 99, 235,0.06);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .br-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(37, 99, 235,0.12);
        }

        .br-card.reverse {
          grid-template-columns: 1fr 1fr;
          direction: rtl;
        }
        .br-card.reverse > * {
          direction: ltr;
        }

        .br-img-box {
          position: relative;
          overflow: hidden;
          min-height: 300px;
        }

        .br-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .br-card:hover .br-img {
          transform: scale(1.05);
        }

        .br-content {
          padding: 30px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .br-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .br-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }

        .br-name {
          font-size: 26px;
          font-weight: 800;
          color: #0a0f1e;
        }

        .br-desc {
          font-size: 14.5px;
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 12px;
        }

        .br-features-box {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
        }

        .br-feat-desc {
          font-size: 13.5px;
          color: #6b7280;
          line-height: 1.5;
          margin-bottom: 16px;
          font-style: italic;
        }

        .br-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 20px;
        }

        .br-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 15px;
          color: #1f2937;
          font-weight: 600;
        }

        .br-item svg {
          margin-top: 3px;
          flex-shrink: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .br-card, .br-card.reverse {
            grid-template-columns: 1fr;
            direction: ltr;
          }
          .br-img-box {
            min-height: 300px;
          }
        }

        @media (max-width: 768px) {
          .br-hero { padding: 120px 5% 80px; }
          .br-title { font-size: 36px; }
          .br-content { padding: 30px 24px; }
          .br-name { font-size: 26px; }
          .br-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="branches-page">
        {/* Hero */}
        <section className="br-hero">
          <div className="br-hero-content">
            <span className="br-badge">Our Ventures</span>
            <h1 className="br-title">Expanding the RiDeal Ecosystem</h1>
            <p className="br-subtitle">
              Beyond IT, RiDeal operates specialized ventures across mobility, premium laundry, and hyper-local fresh produce delivery.
            </p>
          </div>
        </section>

        {/* Branches */}
        <div className="br-container">
          {branchesData.map((branch, index) => (
            <div className={`br-card ${index % 2 !== 0 ? 'reverse' : ''}`} key={branch.id}>
              
              <div className="br-img-box">
                <img src={branch.img} alt={branch.title} className="br-img" />
              </div>

              <div className="br-content">
                <div className="br-header">
                  <div className="br-icon" style={{ background: branch.bg, color: branch.color }}>
                    {branch.icon}
                  </div>
                  <h2 className="br-name">{branch.title}</h2>
                </div>
                
                <p className="br-desc">{branch.desc1}</p>
                <p className="br-desc">{branch.desc2}</p>

                <div className="br-features-box">
                  <p className="br-feat-desc">"{branch.featureDesc}"</p>
                  <div className="br-grid">
                    {branch.features.map((feat, i) => (
                      <div className="br-item" key={i}>
                        <FaCheckCircle style={{ color: branch.color }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Branches;
