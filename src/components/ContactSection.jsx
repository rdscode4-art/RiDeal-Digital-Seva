import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaArrowRight, FaCheckCircle } from "react-icons/fa";

// ── EmailJS credentials (optional — fill in to enable direct email sending) ──
// Sign up free at https://www.emailjs.com, create a Gmail service + template,
// then replace the three values below. Until then, the form uses mailto: fallback.
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";
const EMAILJS_CONFIGURED  =
  EMAILJS_SERVICE_ID  !== "YOUR_SERVICE_ID" &&
  EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
  EMAILJS_PUBLIC_KEY  !== "YOUR_PUBLIC_KEY";

const TO_EMAIL = "info@ridealdigitalseva.com";

const ContactSection = () => {
  const formRef = useRef(null);
  const [form, setForm]       = useState({ name: "", email: "", message: "" });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: "General Inquiry",
          message: form.message
        })
      });

      if (!response.ok) {
        throw new Error("API submit failed");
      }

      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.warn("Backend submit failed, falling back to mailto protocol:", err);
      
      // Fall back to mailto: fallback (works without any backend)
      const subject = encodeURIComponent(`Contact Form — ${form.name}`);
      const body    = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
      
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes csFadeUp  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes csSpin    { to { transform:rotate(360deg); } }
        @keyframes csSuccess { 0% { transform:scale(0.7); opacity:0; } 60% { transform:scale(1.1); } 100% { transform:scale(1); opacity:1; } }
        @keyframes csRipple  { from { transform:scale(0); opacity:0.4; } to { transform:scale(4); opacity:0; } }

        /* ── SECTION ── */
        .cs-section {
          width: 100%;
          background: #f0f4ff;
          padding: 90px 6%;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* dot-grid */
        .cs-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(8,56,120,0.06) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        /* ── LAYOUT ── */
        .cs-wrap {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: stretch;
          gap: 44px;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* ── LEFT ── */
        .cs-left {
          flex: 1;
          min-width: 0;
          animation: csFadeUp 0.7s ease both;
        }

        .cs-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #083878;
          margin-bottom: 12px;
        }
        .cs-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 2px;
          background: #083878;
          border-radius: 2px;
        }

        .cs-heading {
          font-size: 40px;
          font-weight: 900;
          color: #0a0f1e;
          text-transform: uppercase;
          line-height: 1.15;
          margin-bottom: 10px;
          letter-spacing: 0.5px;
        }
        .cs-heading span {
          color: transparent;
          -webkit-text-stroke: 2px #083878;
          text-stroke: 2px #083878;
          display: inline-block;
        }

        .cs-subtext {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 400px;
        }

        /* ── INFO CARDS ── */
        .cs-info-card {
          display: flex;
          align-items: center;
          gap: 18px;
          background: #fff;
          border: 1.5px solid rgba(8,56,120,0.08);
          border-radius: 14px;
          padding: 20px 22px;
          margin-bottom: 16px;
          cursor: default;
          position: relative;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.28s ease,
                      border-color 0.28s ease;
        }

        /* left accent bar */
        .cs-info-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: #083878;
          border-radius: 4px 0 0 4px;
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform 0.28s ease;
        }

        .cs-info-card:hover {
          transform: translateX(6px);
          box-shadow: 0 10px 32px rgba(8,56,120,0.12);
          border-color: rgba(8,56,120,0.22);
        }

        .cs-info-card:hover::before { transform: scaleY(1); }

        .cs-info-icon {
          width: 52px; height: 52px;
          border-radius: 12px;
          background: rgba(8,56,120,0.07);
          border: 1.5px solid rgba(8,56,120,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #083878;
          font-size: 19px;
          flex-shrink: 0;
          transition: background 0.28s ease, color 0.28s ease,
                      transform 0.28s ease, border-color 0.28s ease;
        }

        .cs-info-card:hover .cs-info-icon {
          background: #083878;
          color: #fff;
          border-color: #083878;
          transform: rotate(-8deg) scale(1.1);
        }

        .cs-info-body h4 {
          font-size: 15px;
          font-weight: 800;
          color: #0a0f1e;
          margin-bottom: 4px;
        }

        .cs-info-body p {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
        }

        /* ── RIGHT — form ── */
        .cs-right {
          flex: 1.05;
          min-width: 0;
          background: linear-gradient(145deg, #083878 0%, #0c4a9e 50%, #1560c0 100%);
          border-radius: 20px;
          padding: 38px 34px 34px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(8,56,120,0.3);
          animation: csFadeUp 0.7s 0.15s ease both;
        }

        /* dot-grid overlay */
        .cs-right::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px);
          background-size: 22px 22px;
          pointer-events: none;
          border-radius: 20px;
        }

        /* glowing orb top-right */
        .cs-right::after {
          content: '';
          position: absolute;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%);
          top: -80px; right: -80px;
          pointer-events: none;
        }

        /* decorative ring */
        .cs-form-ring {
          position: absolute;
          width: 100px; height: 100px;
          border-radius: 50%;
          border: 14px solid rgba(255,255,255,0.1);
          bottom: 24px; right: -28px;
          pointer-events: none;
          animation: csFadeUp 1s ease both;
        }

        .cs-form-eyebrow {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
          margin-bottom: 8px;
          position: relative;
          z-index: 1;
        }

        .cs-form-heading {
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 28px;
          line-height: 1.15;
          position: relative;
          z-index: 1;
        }

        /* ── FIELDS ── */
        .cs-field-wrap {
          position: relative;
          z-index: 1;
          margin-bottom: 14px;
        }

        .cs-field {
          width: 100%;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid rgba(255,255,255,0.18);
          border-radius: 10px;
          padding: 13px 16px;
          font-size: 14px;
          color: #fff;
          font-family: 'Barlow', sans-serif;
          font-weight: 500;
          outline: none;
          transition: border-color 0.22s ease, background 0.22s ease,
                      box-shadow 0.22s ease;
          display: block;
        }

        .cs-field::placeholder { color: rgba(255,255,255,0.42); }

        .cs-field:hover {
          border-color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.13);
        }

        .cs-field:focus {
          border-color: rgba(255,255,255,0.65);
          background: rgba(255,255,255,0.18);
          box-shadow: 0 0 0 3px rgba(255,255,255,0.08);
        }

        textarea.cs-field {
          resize: none;
          height: 112px;
        }

        /* ── SUBMIT ── */
        .cs-submit-wrap {
          position: relative;
          z-index: 1;
          margin-top: 6px;
          overflow: hidden;
          border-radius: 10px;
        }

        .cs-submit {
          width: 100%;
          height: 52px;
          border: 1.5px solid rgba(255,255,255,0.45);
          border-radius: 10px;
          background: transparent;
          color: #fff;
          font-size: 14.5px;
          font-weight: 800;
          font-family: 'Barlow', sans-serif;
          letter-spacing: 0.6px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease,
                      transform 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .cs-submit:hover:not(:disabled) {
          background: #fff;
          color: #083878;
          border-color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.18);
        }

        .cs-submit:active:not(:disabled) { transform: translateY(0); }

        .cs-submit:disabled { opacity: 0.75; cursor: not-allowed; }

        .cs-submit svg { transition: transform 0.25s ease; }
        .cs-submit:hover:not(:disabled) svg { transform: translateX(4px); }

        /* spinner */
        .cs-spinner {
          width: 18px; height: 18px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: csSpin 0.7s linear infinite;
        }
        .cs-submit:hover .cs-spinner {
          border-color: rgba(8,56,120,0.3);
          border-top-color: #083878;
        }

        /* success state */
        .cs-success {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          animation: csSuccess 0.5s ease both;
          position: relative;
          z-index: 1;
          padding: 14px 0;
        }

        .cs-success svg { font-size: 20px; color: #4ade80; }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .cs-wrap { flex-direction: column; }
          .cs-heading { font-size: 28px; }
          .cs-form-heading { font-size: 22px; }
        }
        @media (max-width: 600px) {
          .cs-section { padding: 50px 20px; }
          .cs-heading { font-size: 24px; }
          .cs-right { padding: 24px 18px; }
          .cs-form-heading { font-size: 20px; }
        }
        @media (max-width: 380px) {
          .cs-section { padding: 40px 14px; }
          .cs-heading { font-size: 20px; }
        }
      `}</style>

      <section className="cs-section">
        <div className="cs-wrap">

          {/* ── LEFT ── */}
          <div className="cs-left">
            <p className="cs-eyebrow">Contact Info</p>
            <h2 className="cs-heading">Get In <span>Touch</span></h2>
            <p className="cs-subtext">
              Have a project in mind or need support? Drop us a message
              and our team will get back to you within 24 hours.
            </p>

            <div className="cs-info-card">
              <div className="cs-info-icon"><FaMapMarkerAlt /></div>
              <div className="cs-info-body">
                <h4>Location</h4>
                <p>3rd floor, office no. T-04, Building No. 59/60, E Block, Noida Sector 3, Noida, Uttar Pradesh 201301</p>
              </div>
            </div>

            <div className="cs-info-card">
              <div className="cs-info-icon"><FaEnvelope /></div>
              <div className="cs-info-body">
                <h4>Email</h4>
                <p>info@ridealdigitalseva.com</p>
              </div>
            </div>

            <div className="cs-info-card">
              <div className="cs-info-icon"><FaPhoneAlt /></div>
              <div className="cs-info-body">
                <h4>Phone</h4>
                <p>+91 90279 53810</p>
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="cs-right">
            <div className="cs-form-ring" />

            <p className="cs-form-eyebrow">Write To Us</p>
            <h3 className="cs-form-heading">Send Us A Message</h3>

            <form ref={formRef} onSubmit={submit}>
              <div className="cs-field-wrap">
                <input className="cs-field" type="text" name="name"
                  placeholder="Your Name" value={form.name}
                  onChange={handle} required />
              </div>
              <div className="cs-field-wrap">
                <input className="cs-field" type="email" name="email"
                  placeholder="Your Email" value={form.email}
                  onChange={handle} required />
              </div>
              <div className="cs-field-wrap">
                <textarea className="cs-field" name="message"
                  placeholder="Your Message" value={form.message}
                  onChange={handle} required />
              </div>

              <div className="cs-submit-wrap">
                {sent ? (
                  <div className="cs-success">
                    <FaCheckCircle /> Message sent! We'll be in touch soon.
                  </div>
                ) : (
                  <>
                    {error && (
                      <p style={{ color:"#fca5a5", fontSize:"13px", marginBottom:"10px", position:"relative", zIndex:1 }}>
                        {error}
                      </p>
                    )}
                    <button type="submit" className="cs-submit" disabled={loading}>
                      {loading
                        ? <><div className="cs-spinner" /> Sending...</>
                        : <>Send Now <FaArrowRight /></>
                      }
                    </button>
                  </>
                )}
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  );
};

export default ContactSection;
