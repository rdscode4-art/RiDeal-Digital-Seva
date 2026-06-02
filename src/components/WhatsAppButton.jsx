import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919027953810";

const WhatsAppButton = () => {
  return (
    <>
      <style>{`
        @keyframes waPulse {
          0%, 100% {
            box-shadow: 0 6px 24px rgba(37,211,102,0.45),
                        0 0 0 0 rgba(37,211,102,0.4);
          }
          50% {
            box-shadow: 0 6px 24px rgba(37,211,102,0.45),
                        0 0 0 14px rgba(37,211,102,0);
          }
        }

        .wa-btn {
          position: fixed;
          bottom: 32px;
          left: 28px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #25D366;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          z-index: 9999;
          text-decoration: none;
          animation: waPulse 2.5s ease-in-out infinite;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .wa-btn:hover {
          transform: scale(1.12) translateY(-3px);
          box-shadow: 0 14px 36px rgba(37,211,102,0.55);
          animation: none;
        }
      `}</style>

      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        className="wa-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
};

export default WhatsAppButton;
