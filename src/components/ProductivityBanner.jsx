import dashboardImg from '../assets/dashboard_mockup.png';

const ProductivityBanner = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        .pb-section {
          width: 100%;
          padding: 20px 5%;
          background: #ffffff;
          font-family: 'Inter', sans-serif;
          display: flex;
          justify-content: center;
        }

        .pb-container {
          max-width: 1200px;
          width: 100%;
          background: #F4F8FB;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 30px 50px;
          gap: 40px;
        }

        .pb-content {
          flex: 1;
          max-width: 500px;
        }

        .pb-title {
          font-size: 38px;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.15;
          margin: 0 0 16px 0;
          letter-spacing: -1px;
        }

        .pb-desc {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 24px 0;
        }

        .pb-btn {
          background: #2563eb;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          padding: 10px 24px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        
        .pb-btn:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .pb-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          position: relative;
        }

        .pb-image {
          width: 100%;
          max-width: 480px;
          height: auto;
          object-fit: contain;
          mix-blend-mode: multiply; /* Helps blend white backgrounds of mockups */
        }

        @media (max-width: 968px) {
          .pb-container {
            flex-direction: column;
            text-align: center;
            padding: 40px 30px;
          }
          .pb-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .pb-title {
            font-size: 32px;
          }
          .pb-image-wrapper {
            justify-content: center;
            width: 100%;
          }
        }
        @media (max-width: 480px) {
          .pb-section { padding: 40px 20px; }
          .pb-container { padding: 30px 20px; }
          .pb-title { font-size: 28px; }
        }
      `}</style>

      <section className="pb-section">
        <div className="pb-container">
          <div className="pb-content">
            <h2 className="pb-title">Maximize Your Team's Productivity</h2>
            <p className="pb-desc">
              Detailighs UI highlights customize your count operation and automated prooesivity for more improve, and detallize and menty projectors.
            </p>
            <button className="pb-btn">
              UI Highlights
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          <div className="pb-image-wrapper">
            <img src={dashboardImg} alt="Productivity Dashboard" className="pb-image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductivityBanner;
