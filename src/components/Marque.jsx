const Marquee = () => {
  const services = [
    "WEB DEVELOPMENT",
    "UI/UX DESIGN",
    "BRANDING",
    "CYBER SECURITY",
    "WEBSITE DESIGN",
    "DIGITAL MARKETING",
    "MOBILE APP DEVELOPMENT",
    "SEO OPTIMIZATION",
    "SOFTWARE SOLUTIONS",
    "ERP SERVICES",
  ];

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        .marquee-section {
          width: 100%;
          background: #2563eb;
          overflow: hidden;
          padding: 10px 0;
        }

        .marquee-track {
          display: flex;
          width: max-content;
          animation: scroll 25s linear infinite;
        }

        .marquee-content {
          display: flex;
          align-items: center;
          white-space: nowrap;
        }

        .marquee-item {
          display: inline-flex;
          align-items: center;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          font-family: 'Barlow', sans-serif;
          padding: 0 28px;
          gap: 28px;
        }

        .star {
          color: rgba(255,255,255,0.55);
          font-size: 10px;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @media (max-width: 768px) {
          .marquee-section { padding: 8px 0; }
          .marquee-item { font-size: 11px; padding: 0 18px; gap: 18px; }
        }
      `}</style>

      <section className="marquee-section">
        <div className="marquee-track">

          <div className="marquee-content">
            {services.map((item, i) => (
              <span className="marquee-item" key={i}>
                {item}
                <span className="star">✦</span>
              </span>
            ))}
          </div>

          {/* duplicate for seamless loop */}
          <div className="marquee-content">
            {services.map((item, i) => (
              <span className="marquee-item" key={i + "dup"}>
                {item}
                <span className="star">✦</span>
              </span>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default Marquee;
