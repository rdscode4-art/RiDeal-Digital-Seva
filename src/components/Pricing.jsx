import { useState, useEffect } from "react";
import { FaCheck, FaTimes, FaArrowRight, FaInfoCircle } from "react-icons/fa";

const PLANS = [
  {
    title: "Regular Plans",
    monthly: 99,
    yearly: 79,
    featured: false,
  },
  {
    title: "Premium Plans",
    monthly: 59,
    yearly: 45,
    featured: true,
  },
  {
    title: "Business Plans",
    monthly: 39,
    yearly: 29,
    featured: false,
  },
  {
    title: "Cloud Startup",
    monthly: 29,
    yearly: 19,
    featured: false,
  },
];

const FEATURES = [
  { text: "100 GB SSD Storage",        included: true  },
  { text: "Weekly Backups",             included: true  },
  { text: "Unlimited Free SSL",         included: true  },
  { text: "24/7 System Monitoring",     included: true  },
  { text: "Free Domain ($9.99 Value)",  included: true  },
  { text: "Dedicated IP Address",       included: false },
  { text: "20+ Payment Methods",        included: false },
];

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const [useCMS, setUseCMS] = useState(false);
  const [data, setData] = useState({
    title: "Our Pricing Plans",
    subtitle: "Transparent packages tailored to your business needs",
    content: []
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/pricing-plans")
      .then(res => res.json())
      .then(resData => {
        if (resData && Array.isArray(resData.content)) {
          setData(resData);
          setUseCMS(true);
        }
      })
      .catch(err => {
        console.warn("CMS Pricing load failed, using static fallback:", err);
      });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <style>{`
        /* ── SECTION ── */
        .pricing-section {
          width: 100%;
          background: #f0f3ff;
          padding: 90px 6% 100px;
          position: relative;
          overflow: hidden;
          font-family: 'Barlow', sans-serif;
        }

        /* background blobs */
        .pricing-blob {
          position: absolute;
          border-radius: 50%;
          background: #dde3f8;
          pointer-events: none;
        }
        .pricing-blob-tl {
          width: 480px; height: 480px;
          top: -200px; left: -180px;
        }
        .pricing-blob-br {
          width: 560px; height: 560px;
          bottom: -220px; right: -200px;
        }

        /* ── HEADER ── */
        .pricing-header {
          text-align: center;
          margin-bottom: 48px;
          position: relative;
          z-index: 1;
        }

        .pricing-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #2563eb;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .pricing-eyebrow-line {
          width: 36px;
          height: 1.5px;
          background: #2563eb;
          border-radius: 2px;
        }

        .pricing-heading {
          font-size: 46px;
          font-weight: 800;
          color: #0a0f1e;
          line-height: 1.2;
          margin-bottom: 32px;
        }

        /* ── TOGGLE ── */
        .pricing-toggle-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
        }

        .pricing-toggle {
          display: flex;
          align-items: center;
          background: #fff;
          border: 1.5px solid #d4d9f5;
          border-radius: 50px;
          padding: 4px;
          box-shadow: 0 2px 10px rgba(37, 99, 235,0.08);
        }

        .toggle-btn {
          padding: 8px 24px;
          border-radius: 50px;
          border: none;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.22s ease, color 0.22s ease;
          font-family: 'Barlow', sans-serif;
          letter-spacing: 0.2px;
        }

        .toggle-btn.active {
          background: #2563eb;
          color: #fff;
        }

        .toggle-btn.inactive {
          background: transparent;
          color: #6b7280;
        }

        .pricing-save-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #2563eb;
          font-size: 14px;
          font-weight: 700;
        }

        .save-arrow {
          font-size: 22px;
          line-height: 1;
          transform: scaleX(-1);
          display: inline-block;
          color: #2563eb;
          opacity: 0.7;
        }

        /* ── GRID ── */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        /* ── CARD ── */
        .pricing-card {
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid #dde3f8;
          overflow: hidden;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(37, 99, 235,0.13);
        }

        .pricing-card.featured {
          border-color: #2563eb;
          box-shadow: 0 12px 40px rgba(37, 99, 235,0.18);
        }

        /* ── RIBBON ── */
        .pricing-ribbon-wrap {
          display: flex;
          justify-content: center;
          padding-top: 0;
        }

        .pricing-ribbon {
          width: 76%;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 13.5px;
          font-weight: 700;
          letter-spacing: 0.3px;
          clip-path: polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%);
        }

        .pricing-ribbon.default  { background: #2563eb; }
        .pricing-ribbon.featured { background: #051f4a; }

        /* ── CARD BODY ── */
        .pricing-body {
          padding: 24px 28px 28px;
        }

        /* old price + save badge row */
        .pricing-meta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .pricing-old {
          font-size: 14px;
          color: #9ca3af;
          text-decoration: line-through;
          font-weight: 500;
        }

        .pricing-save {
          background: #eef1ff;
          color: #2563eb;
          font-size: 11px;
          font-weight: 800;
          padding: 3px 10px;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }

        /* main price */
        .pricing-price {
          text-align: center;
          margin-bottom: 16px;
          line-height: 1;
        }

        .pricing-price-val {
          font-size: 56px;
          font-weight: 800;
          color: #0a1f4e;
        }

        .pricing-price-val sup {
          font-size: 26px;
          font-weight: 700;
          vertical-align: super;
        }

        .pricing-price-val sub {
          font-size: 16px;
          font-weight: 500;
          color: #9ca3af;
          vertical-align: baseline;
        }

        /* desc */
        .pricing-desc {
          font-size: 14px;
          color: #9ca3af;
          text-align: center;
          line-height: 1.7;
          padding-bottom: 20px;
          border-bottom: 1px solid #eef0f8;
          margin-bottom: 20px;
        }

        /* features */
        .pricing-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          color: #374151;
        }

        .feature-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .feature-check {
          color: #2563eb;
          font-size: 14px;
          flex-shrink: 0;
        }

        .feature-cross {
          color: #ef4444;
          font-size: 13px;
          flex-shrink: 0;
        }

        .feature-info {
          color: #c4c9e0;
          font-size: 13px;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .feature-info:hover {
          color: #2563eb;
        }

        /* CTA button */
        .pricing-btn {
          width: 100%;
          height: 50px;
          border: none;
          border-radius: 50px;
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: 0.6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.22s ease, transform 0.22s ease,
                      box-shadow 0.22s ease;
          font-family: 'Barlow', sans-serif;
        }

        .pricing-btn.default {
          background: #2563eb;
          color: #fff;
        }

        .pricing-btn.default:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 99, 235,0.3);
        }

        .pricing-btn.featured-btn {
          background: #051f4a;
          color: #fff;
        }

        .pricing-btn.featured-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(5,31,74,0.35);
        }

        .pricing-btn svg {
          transition: transform 0.22s ease;
        }

        .pricing-btn:hover svg {
          transform: translateX(3px);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .pricing-grid { grid-template-columns: repeat(2, 1fr); }
          .pricing-heading { font-size: 38px; }
        }

        @media (max-width: 640px) {
          .pricing-section { padding: 60px 20px 70px; }
          .pricing-grid { grid-template-columns: 1fr; }
          .pricing-heading { font-size: 30px; }
        }
      `}</style>

      <section className="pricing-section">

        {/* bg blobs */}
        <div className="pricing-blob pricing-blob-tl" />
        <div className="pricing-blob pricing-blob-br" />

        {/* ── HEADER ── */}
        <div className="pricing-header">

          <div className="pricing-eyebrow">
            <span className="pricing-eyebrow-line" />
            OUR PRICING
            <span className="pricing-eyebrow-line" />
          </div>

          <h2 className="pricing-heading">{data.title}</h2>
          {useCMS && data.subtitle && (
            <p style={{ color: "#6b7280", marginTop: "-20px", marginBottom: "32px", fontSize: "16px" }}>{data.subtitle}</p>
          )}

          {/* toggle - only show on static fallback, or if custom configured */}
          {!useCMS && (
            <div className="pricing-toggle-row">
              <div className="pricing-toggle">
                <button
                  className={`toggle-btn ${billing === "monthly" ? "active" : "inactive"}`}
                  onClick={() => setBilling("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`toggle-btn ${billing === "yearly" ? "active" : "inactive"}`}
                  onClick={() => setBilling("yearly")}
                >
                  Yearly
                </button>
              </div>

              <div className="pricing-save-badge">
                <span className="save-arrow">↩</span>
                Save 25%
              </div>
            </div>
          )}

        </div>

        {/* ── CARDS ── */}
        <div className="pricing-grid" style={{ gridTemplateColumns: useCMS ? "repeat(3, 1fr)" : "repeat(4, 1fr)" }}>
          {useCMS ? (
            data.content.map((plan, i) => {
              const isPremium = plan.name.toLowerCase().includes("premium") || plan.name.toLowerCase().includes("enterprise");
              return (
                <div
                  key={i}
                  className={`pricing-card ${isPremium ? "featured" : ""}`}
                >
                  {/* ribbon */}
                  <div className="pricing-ribbon-wrap">
                    <div className={`pricing-ribbon ${isPremium ? "featured" : "default"}`}>
                      {plan.name}
                    </div>
                  </div>

                  <div className="pricing-body">
                    {/* price */}
                    <div className="pricing-price" style={{ marginTop: "16px" }}>
                      <span className="pricing-price-val" style={{ fontSize: "38px" }}>
                        {plan.price}
                      </span>
                    </div>

                    {/* desc */}
                    <p className="pricing-desc">
                      Professional business service package custom tailored for your scaling needs.
                    </p>

                    {/* features */}
                    <ul className="pricing-features">
                      {Array.isArray(plan.features) && plan.features.map((feat, j) => (
                        <li key={j} className="pricing-feature">
                          <div className="feature-left">
                            <FaCheck className="feature-check" />
                            <span>{feat}</span>
                          </div>
                          <FaInfoCircle className="feature-info" />
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button className={`pricing-btn ${isPremium ? "featured-btn" : "default"}`} onClick={() => window.location.href = "/contact"}>
                      GET STARTED NOW
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            PLANS.map((plan, i) => (
              <div
                key={i}
                className={`pricing-card ${plan.featured ? "featured" : ""}`}
              >
                {/* ribbon */}
                <div className="pricing-ribbon-wrap">
                  <div className={`pricing-ribbon ${plan.featured ? "featured" : "default"}`}>
                    {plan.title}
                  </div>
                </div>

                <div className="pricing-body">

                  {/* old price + save */}
                  <div className="pricing-meta">
                    <span className="pricing-old">120.99</span>
                    <span className="pricing-save">SAVE 75%</span>
                  </div>

                  {/* main price */}
                  <div className="pricing-price">
                    <span className="pricing-price-val">
                      <sup>$</sup>
                      {billing === "monthly" ? plan.monthly : plan.yearly}
                      <sub>/mo</sub>
                    </span>
                  </div>

                  {/* desc */}
                  <p className="pricing-desc">
                    Integer sapien ne sapien sollicitudin ultrices
                    cras tempor id lorem et
                  </p>

                  {/* features */}
                  <ul className="pricing-features">
                    {FEATURES.map((f, j) => (
                      <li key={j} className="pricing-feature">
                        <div className="feature-left">
                          {f.included
                            ? <FaCheck className="feature-check" />
                            : <FaTimes className="feature-cross" />
                          }
                          <span>{f.text}</span>
                        </div>
                        <FaInfoCircle className="feature-info" />
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className={`pricing-btn ${plan.featured ? "featured-btn" : "default"}`} onClick={() => window.location.href = "/contact"}>
                    GET STARTED NOW
                    <FaArrowRight />
                  </button>

                </div>
              </div>
            ))
          )}
        </div>

      </section>
    </>
  );
};

export default Pricing;
