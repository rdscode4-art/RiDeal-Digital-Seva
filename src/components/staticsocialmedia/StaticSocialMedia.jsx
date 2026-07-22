import { useState, useEffect } from "react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const StaticSocialMedia = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPastHero = window.scrollY > 350;
      
      // Calculate how close the user is to the bottom of the page
      // Assuming footer height is around 400px-500px, we hide it when they are within 500px of the bottom
      const isNearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 500;

      if (isPastHero && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .static-social-bar {
          position: fixed;
          top: 50%;
          left: 14px;
          display: flex;
          flex-direction: column;
          z-index: 9999;
          gap: 6px;
          transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;
        }

        .show-bar {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(-50%) translateX(0);
        }

        .hide-bar {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(-50%) translateX(-20px);
        }
        
        .social-btn {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 18px;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 50%;
          box-shadow: 2px 4px 12px rgba(0,0,0,0.15);
        }

        .social-btn:hover {
          transform: scale(1.15) translateY(-2px);
          box-shadow: 2px 6px 16px rgba(0,0,0,0.25);
        }

        .btn-whatsapp { background: #25D366; }
        .btn-facebook { background: #1877F2; }
        .btn-instagram { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); }
        .btn-youtube { background: #FF0000; }
        .btn-linkedin { background: #0A66C2; }
        .btn-twitter { background: #000000; }

        @media (max-width: 768px) {
          .static-social-bar {
            top: auto;
            bottom: 15px;
            left: 50%;
            flex-direction: row;
            gap: 12px;
            padding: 8px 16px;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(8px);
            border-radius: 40px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.15);
          }
          .show-bar {
            transform: translateX(-50%) translateY(0);
          }
          .hide-bar {
            transform: translateX(-50%) translateY(50px);
          }
          .social-btn {
            width: 36px;
            height: 36px;
            font-size: 16px;
            box-shadow: none;
          }
        }
      `}</style>
      <div className={`static-social-bar ${isVisible ? "show-bar" : "hide-bar"}`}>
        <a href="https://wa.me/919027953810" className="social-btn btn-whatsapp" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61583579480455" className="social-btn btn-facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/ridealdigitalseva/" className="social-btn btn-instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@ridealdigitalseva1" className="social-btn btn-youtube" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
        <a href="https://www.linkedin.com/company/rideal-digital-seva/?viewAsMember=true" className="social-btn btn-linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>

      </div>
    </>
  );
};

export default StaticSocialMedia;
