import { Link } from "react-router-dom";
import { FaArrowLeft, FaShareAlt, FaEnvelope, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

const BlogDetailsSection = ({ post }) => {
  if (!post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Blog link copied to clipboard!");
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        .bds-section {
          width: 100%;
          padding: 72px 0 96px;
          background: #fcfdfe;
          font-family: 'Barlow', sans-serif;
        }

        .bds-container {
          max-width: 840px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Back Button & Actions Row */
        .bds-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
          border-bottom: 1px solid #eef1f6;
          padding-bottom: 20px;
        }

        .bds-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4b5563;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .bds-back-btn:hover {
          color: #2563eb;
          transform: translateX(-3px);
        }

        .bds-share-actions {
          display: flex;
          gap: 10px;
        }
        .bds-share-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid rgba(37, 99, 235,0.15);
          background: #fff;
          color: #4b5563;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.22s ease;
        }
        .bds-share-btn:hover {
          color: #2563eb;
          border-color: #2563eb;
          background: rgba(37, 99, 235,0.05);
          transform: translateY(-2px);
        }

        /* Article Wrapper */
        .bds-article {
          background: #fff;
          border-radius: 24px;
          border: 1px solid #eef1f6;
          box-shadow: 0 10px 30px rgba(37, 99, 235,0.02);
          overflow: hidden;
        }

        /* Large Image */
        .bds-main-img-box {
          width: 100%;
          max-height: 440px;
          overflow: hidden;
        }
        .bds-main-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Content Area */
        .bds-body {
          padding: 44px 50px;
        }

        .bds-content {
          font-size: 17px;
          color: #2c3e50;
          line-height: 1.9;
          font-weight: 400;
        }
        .bds-content p {
          margin-bottom: 24px;
        }
        .bds-content h3 {
          font-size: 22px;
          font-weight: 800;
          color: #0a0f1e;
          margin: 40px 0 16px;
          position: relative;
          padding-left: 14px;
        }
        .bds-content h3::before {
          content: '';
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 4px;
          background: #2563eb;
          border-radius: 4px;
        }
        .bds-content ul {
          margin-bottom: 28px;
          padding-left: 24px;
        }
        .bds-content li {
          margin-bottom: 12px;
        }
        .bds-content strong {
          color: #2563eb;
          font-weight: 700;
        }
        
        .blog-quote {
          border-left: 4px solid #2563eb;
          padding: 8px 0 8px 24px;
          margin: 36px 0;
          font-style: italic;
          font-size: 19px;
          color: #4b5563;
          line-height: 1.7;
          font-weight: 600;
          background: #f8fafc;
          border-radius: 0 12px 12px 0;
        }

        /* Call To Action Box */
        .bds-cta-box {
          background: linear-gradient(135deg, rgba(37, 99, 235,0.04) 0%, rgba(26,106,191,0.06) 100%);
          border: 1.5px dashed rgba(37, 99, 235,0.22);
          border-radius: 18px;
          padding: 32px;
          margin-top: 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .bds-cta-text h4 {
          font-size: 18px;
          font-weight: 800;
          color: #0a0f1e;
          margin-bottom: 6px;
        }
        .bds-cta-text p {
          font-size: 14.5px;
          color: #4b5563;
          margin: 0;
          line-height: 1.5;
        }
        .bds-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 48px;
          padding: 0 28px;
          background: linear-gradient(135deg, #2563eb, #2563eb);
          color: #fff;
          font-size: 14.5px;
          font-weight: 700;
          text-decoration: none;
          border-radius: 50px;
          box-shadow: 0 6px 18px rgba(37, 99, 235,0.2);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          white-space: nowrap;
        }
        .bds-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(37, 99, 235,0.3);
        }

        /* Bottom Share Row */
        .bds-footer-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 48px;
          padding-top: 24px;
          border-top: 1px solid #eef1f6;
          flex-wrap: wrap;
          gap: 16px;
        }
        .bds-footer-share {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .bds-share-label {
          font-size: 14px;
          font-weight: 700;
          color: #4b5563;
        }

        @media (max-width: 768px) {
          .bds-body {
            padding: 30px 24px;
          }
          .bds-content {
            font-size: 15.5px;
          }
          .bds-cta-box {
            padding: 24px;
            flex-direction: column;
            align-items: stretch;
            text-align: center;
          }
          .bds-cta-btn {
            justify-content: center;
          }
        }
      `}</style>

      <section className="bds-section">
        <div className="bds-container">
          
          {/* Top Navigation Bar */}
          <div className="bds-top-bar">
            <Link to="/blog" className="bds-back-btn">
              <FaArrowLeft /> Back to Blogs
            </Link>
            
            <div className="bds-share-actions">
              <button className="bds-share-btn" onClick={handleShare} title="Copy link to clipboard">
                <FaShareAlt />
              </button>
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="bds-share-btn" title="Share on WhatsApp">
                <FaWhatsapp />
              </a>
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="bds-share-btn" title="Share on LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Full Article Card */}
          <article className="bds-article">
            
            {/* Top Image */}
            <div className="bds-main-img-box">
              <img src={post.image} alt={post.title} className="bds-main-img" />
            </div>

            {/* Main content body */}
            <div className="bds-body">
              <div className="bds-content" dangerouslySetInnerHTML={{ __html: post.content }} />

              {/* Consultation CTA Block */}
              <div className="bds-cta-box">
                <div className="bds-cta-text">
                  <h4>Need Custom Software Solutions?</h4>
                  <p>Speak with our tech experts at RiDeal Digital Seva to automate and scale your workflows.</p>
                </div>
                <Link to="/contact" className="bds-cta-btn">
                  Get In Touch
                </Link>
              </div>

              {/* Bottom footer controls */}
              <div className="bds-footer-bar">
                <Link to="/blog" className="bds-back-btn">
                  <FaArrowLeft /> Back to Blogs
                </Link>

                <div className="bds-footer-share">
                  <span className="bds-share-label">Share:</span>
                  <button className="bds-share-btn" onClick={handleShare} title="Copy link">
                    <FaShareAlt />
                  </button>
                  <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - " + window.location.href)}`} target="_blank" rel="noopener noreferrer" className="bds-share-btn" title="WhatsApp">
                    <FaWhatsapp />
                  </a>
                  <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`} className="bds-share-btn" title="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>

            </div>
          </article>

        </div>
      </section>
    </>
  );
};

export default BlogDetailsSection;
