import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FaTimes, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const allServices = [
  { title: "ERP (Enterprise Resource Planning)", icon: "🏢", desc: "ERP software manages multiple business operations in one system like HR, sales, inventory, accounts, and reporting.", features: ["Inventory management", "Employee management", "Billing & accounting", "Reports & analytics", "Multi-user access"], images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"] },
  { title: "CRM (Customer Relationship Management)", icon: "🤝", desc: "CRM helps businesses manage customers, leads, sales, and communication.", features: ["Lead tracking", "Sales pipeline", "Customer history", "Follow-up reminders", "Auto email integration"], images: ["https://images.unsplash.com/photo-1556745757-8d76bdb6984b?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop"] },
  { title: "HRMS (Human Resource Management System)", icon: "👥", desc: "HRMS manages employees, attendance, payroll, and HR operations.", features: ["Employee records", "Attendance tracking", "Salary management", "Leave management", "Recruitment process"], images: ["https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop"] },
  { title: "EMS (Employee Management System)", icon: "🧑‍💼", desc: "EMS helps companies monitor and manage employee activities and performance.", features: ["Employee tracking", "Task monitoring", "Performance reports", "Department management"], images: ["https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"] },
  { title: "PMS (Project Management System)", icon: "📋", desc: "PMS helps teams manage projects, deadlines, and tasks efficiently.", features: ["Task assignment", "Deadline tracking", "Team collaboration", "Progress analytics"], images: ["https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop"] },
  { title: "LMS (Lead Management System)", icon: "🎯", desc: "LMS helps businesses organize and manage customer leads.", features: ["Lead collection", "Auto follow-ups", "Conversion tracking", "Sales reporting"], images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=800&auto=format&fit=crop"] },
  { title: "CMS (Content Management System)", icon: "🖥️", desc: "CMS allows users to manage website content without coding knowledge.", features: ["Content publishing", "Media management", "SEO tools", "User roles"], images: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"] },
  { title: "Dialer CRM", icon: "📞", desc: "CRM integrated with calling systems for sales and support teams.", features: ["Call recording", "Auto dialer", "Call analytics", "Customer timeline"], images: ["https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop"] },
  { title: "Customer Support System", icon: "🎧", desc: "Helps businesses manage customer queries and complaints.", features: ["Ticket management", "Live chat", "Customer feedback", "Support analytics"], images: ["https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop"] },
  { title: "Billing Management System", icon: "💰", desc: "Software for invoices, payments, and billing operations.", features: ["Invoice generation", "GST calculation", "Payment tracking", "Financial reports"], images: ["https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop"] },
  { title: "POS (Point of Sale)", icon: "🛒", desc: "Retail billing software used in shops and stores.", features: ["Barcode scanning", "Inventory tracking", "Billing system", "Sales reports"], images: ["https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=800&auto=format&fit=crop"] },
  { title: "Delivery Management System", icon: "🚚", desc: "Used to manage deliveries, orders, and delivery agents.", features: ["Order tracking", "Rider management", "Live location", "Delivery analytics"], images: ["https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop"] },
  { title: "Fleet Management System", icon: "🚛", desc: "Manages vehicles, drivers, and logistics operations.", features: ["Vehicle tracking", "Driver management", "Fuel monitoring", "Route optimization"], images: ["https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop"] },
  { title: "School Management System", icon: "🏫", desc: "Digital platform for schools to manage students and staff.", features: ["Student records", "Fee management", "Attendance system", "Parent communication"], images: ["https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop"] },
  { title: "HMS (Hospital Management System)", icon: "🏥", desc: "Software for hospitals and clinics to manage patients and operations.", features: ["Patient records", "Appointment booking", "Doctor management", "Billing system"], images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"] },
  { title: "AI Chatbot System", icon: "🤖", desc: "AI-based chatbot for customer support and automation.", features: ["Automated replies", "24/7 support", "NLP integration", "Multi-platform support"], images: ["https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"] },
  { title: "OCR Document Scanner", icon: "📄", desc: "Extracts text and data from images or PDFs automatically.", features: ["Text extraction", "PDF scanning", "Data conversion", "Auto recognition"], images: ["https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"] },
  { title: "KYC Verification System", icon: "🪪", desc: "Used for identity verification and customer onboarding.", features: ["Aadhaar/PAN verification", "Face verification", "Document scanning", "Fraud detection"], images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop"] },
  { title: "ID Card Generator", icon: "🎫", desc: "Generates digital and printable ID cards automatically.", features: ["Template selection", "Bulk generation", "PDF export", "QR/barcode support"], images: ["https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"] },
  { title: "Property Management System", icon: "🏠", desc: "Manages property listings, bookings, and clients.", features: ["Property listings", "Booking management", "Agent management", "Payment tracking"], images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"] },
  { title: "SCM (Supply Chain Management)", icon: "🔗", desc: "Manages procurement, suppliers, and product supply chains.", features: ["Supplier management", "Inventory tracking", "Warehouse operations", "Logistics monitoring"], images: ["https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"] },
  { title: "DMS (Document Management System)", icon: "📁", desc: "Stores and organizes digital documents securely.", features: ["File storage", "Access control", "Document sharing", "Search & indexing"], images: ["https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"] },
];

const s1 = allServices.slice(0, 11);
const s2 = allServices.slice(11, 22);
const CW = 300, GAP = 22, N = 4;
const SLIDER_W = N * CW + (N - 1) * GAP;

/* ── Modal ── */
const ServiceModal = ({ svc, onClose }) => {
  const [img, setImg] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  useEffect(() => {
    if (!svc.images.length) return;
    const iv = setInterval(() => setImg(p => (p + 1) % svc.images.length), 3000);
    return () => clearInterval(iv);
  }, [svc.images.length]);

  const handleKey = useCallback((e) => { if (e.key === "Escape") onClose(); }, [onClose]);
  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="sm-backdrop" onClick={onClose}>
      <div className="sm-box" onClick={e => e.stopPropagation()}>
        <button className="sm-close" onClick={onClose} aria-label="Close"><FaTimes /></button>

        {/* image */}
        <div className="sm-imgbox">
          {svc.images.map((src, i) => (
            <img key={i} src={src} alt={svc.title}
              className={`sm-img${i === img ? " sm-img-on" : ""}`} />
          ))}
          <div className="sm-img-overlay" />
          <div className="sm-img-badge">
            <span className="sm-img-icon">{svc.icon}</span>
            <span className="sm-img-title">{svc.title}</span>
          </div>
          {svc.images.length > 1 && (
            <div className="sm-dots">
              {svc.images.map((_, i) => (
                <span key={i} className={`sm-dot${i === img ? " sm-dot-on" : ""}`}
                  onClick={() => setImg(i)} />
              ))}
            </div>
          )}
        </div>

        {/* body */}
        <div className="sm-body">
          <div className="sm-eyebrow">Our Services</div>
          <h2 className="sm-title">{svc.icon} {svc.title}</h2>
          <p className="sm-desc">{svc.desc}</p>

          <h3 className="sm-feat-heading">Key Features</h3>
          <ul className="sm-features">
            {svc.features.map((f, i) => (
              <li key={i} className="sm-feature">
                <FaCheckCircle className="sm-feat-icon" />
                {f}
              </li>
            ))}
          </ul>

          <Link to="/contact" className="sm-cta" onClick={onClose}>
            Get Started <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

/* ── Service Card ── */
const SCard = ({ svc, idx, onOpen }) => {
  const [img, setImg] = useState(0);
  useEffect(() => {
    if (!svc.images.length) return;
    const t = setTimeout(() => {
      const iv = setInterval(() => setImg(p => (p + 1) % svc.images.length), 3000);
      return () => clearInterval(iv);
    }, idx * 350);
    return () => clearTimeout(t);
  }, [svc.images.length, idx]);

  return (
    <div className="sv-card" onClick={() => onOpen(svc)} role="button" tabIndex={0}
      onKeyDown={e => e.key === "Enter" && onOpen(svc)}>
      <div className="sv-imgbox">
        {svc.images.length > 0 ? (
          <>
            {svc.images.map((src, i) => (
              <img key={i} src={src} alt={svc.title}
                className={`sv-img${i === img ? " sv-img-on" : ""}`} />
            ))}
            <div className="sv-dots">
              {svc.images.map((_, i) => (
                <span key={i} className={`sv-dot${i === img ? " sv-dot-on" : ""}`} />
              ))}
            </div>
          </>
        ) : (
          <div className="sv-imgbox-placeholder"><span>{svc.icon}</span></div>
        )}
        <div className="sv-card-hover-hint">Click to learn more</div>
      </div>
      <div className="sv-cbody">
        <span className="sv-cicon">{svc.icon}</span>
        <h3 className="sv-ctitle">{svc.title}</h3>
        <p className="sv-cdesc">{svc.desc}</p>
      </div>
    </div>
  );
};

/* ── Main Component ── */
const Services = ({ layout = "slider" }) => {
  const [selected, setSelected] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/services")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setServices(data);
        } else {
          setServices(allServices);
        }
      })
      .catch(err => {
        console.error("Error loading dynamic services, falling back to static:", err);
        setServices(allServices);
      })
      .finally(() => setLoading(false));
  }, []);

  const s1 = services.slice(0, Math.ceil(services.length / 2));
  const s2 = services.slice(Math.ceil(services.length / 2));

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px", background: "#f5f7fc", fontFamily: "'Barlow', sans-serif" }}>
        <h2 style={{ color: "#083878", fontWeight: 700 }}>Loading Services...</h2>
      </div>
    );
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        /* ── SECTION ── */
        .sv-sec { width:100%; padding:80px 0 90px; background:#f5f7fc; font-family:'Barlow',sans-serif; }

        /* ── HEADER ── */
        .sv-hd { text-align:center; padding:0 7%; margin-bottom:52px; }
        .sv-badge { display:inline-block; background:#dce8f7; color:#083878; padding:9px 24px; border-radius:40px; font-size:14px; font-weight:700; margin-bottom:16px; }
        .sv-hd h1 { font-size:50px; font-weight:800; color:#111827; margin-bottom:14px; line-height:1.2; }
        .shiny-text {
          background: linear-gradient(
            120deg,
            #083878 0%,
            #083878 30%,
            #1a6abf 42%,
            #3b82f6 48%,
            #60a5fa 50%,
            #3b82f6 52%,
            #1a6abf 58%,
            #083878 70%,
            #083878 100%
          ) !important;
          background-size: 200% auto !important;
          background-repeat: repeat !important;
          color: transparent !important;
          -webkit-background-clip: text !important;
          background-clip: text !important;
          animation: shineSweep 10s linear infinite !important;
          display: inline !important;
          font-weight: 800 !important;
        }
        @keyframes shineSweep {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
        .sv-hd p  { max-width:800px; margin:0 auto; color:#6b7280; font-size:17px; line-height:1.8; }

        /* ── ROW / VIEWPORT ── */
        .sv-row { display:flex; justify-content:center; margin-bottom:24px; }
        .sv-vp  { width:${SLIDER_W}px; overflow:hidden; position:relative; border-radius:18px; }
        .sv-vp::before,.sv-vp::after { content:''; position:absolute; top:0; bottom:0; width:50px; z-index:4; pointer-events:none; }
        .sv-vp::before { left:0;  background:linear-gradient(to right,#f5f7fc,transparent); }
        .sv-vp::after  { right:0; background:linear-gradient(to left, #f5f7fc,transparent); }

        /* ── TRACK ── */
        .sv-track { display:flex; gap:${GAP}px; padding:14px 0; width:max-content; }
        .sv-ltr { animation:svLTR ${s1.length * 3}s linear infinite; }
        .sv-ltr:hover { animation-play-state:paused; }
        .sv-rtl { animation:svRTL ${s2.length * 3.5}s linear infinite; }
        .sv-rtl:hover { animation-play-state:paused; }
        @keyframes svLTR { from{transform:translateX(0)} to{transform:translateX(-${s1.length*(CW+GAP)}px)} }
        @keyframes svRTL { from{transform:translateX(-${s2.length*(CW+GAP)}px)} to{transform:translateX(0)} }

        /* ── CARD ── */
        .sv-card { flex-shrink:0; width:${CW}px; background:#fff; border-radius:18px; overflow:hidden; box-shadow:0 6px 22px rgba(0,0,0,0.08); transition:transform 0.28s ease,box-shadow 0.28s ease; cursor:pointer; position:relative; }
        .sv-card:hover { transform:translateY(-7px); box-shadow:0 18px 40px rgba(8,56,120,0.18); }
        .sv-card:hover .sv-card-hover-hint { opacity:1; }

        .sv-card-hover-hint { position:absolute; top:8px; right:10px; background:rgba(8,56,120,0.85); color:#fff; font-size:11px; font-weight:700; padding:4px 10px; border-radius:20px; opacity:0; transition:opacity 0.25s ease; pointer-events:none; z-index:3; letter-spacing:0.3px; }

        .sv-imgbox { position:relative; width:100%; height:160px; overflow:hidden; background:#dce8f7; }
        .sv-imgbox-placeholder { width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#dce8f7,#eef3fb); font-size:48px; }
        .sv-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity 0.85s ease; }
        .sv-img-on { opacity:1; }
        .sv-dots { position:absolute; bottom:7px; left:50%; transform:translateX(-50%); display:flex; gap:5px; z-index:2; }
        .sv-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,0.45); transition:background 0.3s; }
        .sv-dot-on { background:#fff; }
        .sv-cbody  { padding:16px 18px 20px; }
        .sv-cicon  { font-size:24px; display:block; margin-bottom:7px; }
        .sv-ctitle { font-size:15px; font-weight:700; color:#111827; margin-bottom:7px; line-height:1.3; }
        .sv-cdesc  { font-size:12.5px; color:#6b7280; line-height:1.6; }

        /* ── MODAL BACKDROP ── */
        @keyframes smBackdropIn { from{opacity:0} to{opacity:1} }
        @keyframes smBoxIn { from{opacity:0;transform:scale(0.92) translateY(24px)} to{opacity:1;transform:scale(1) translateY(0)} }

        .sm-backdrop {
          position:fixed; inset:0; background:rgba(5,15,40,0.72);
          z-index:9999; display:flex; align-items:center; justify-content:center;
          padding:20px; backdrop-filter:blur(4px);
          animation:smBackdropIn 0.22s ease;
        }
        .sm-box {
          background:#fff; border-radius:22px; width:100%; max-width:680px;
          max-height:90vh; overflow-y:auto; position:relative;
          box-shadow:0 32px 80px rgba(0,0,0,0.28);
          animation:smBoxIn 0.28s cubic-bezier(0.34,1.56,0.64,1);
        }
        .sm-box::-webkit-scrollbar { width:5px; }
        .sm-box::-webkit-scrollbar-thumb { background:rgba(8,56,120,0.2); border-radius:4px; }

        /* close btn */
        .sm-close {
          position:absolute; top:14px; right:14px; z-index:2;
          width:36px; height:36px; border-radius:50%; border:none;
          background:rgba(255,255,255,0.9); color:#083878; font-size:15px;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; box-shadow:0 2px 10px rgba(0,0,0,0.15);
          transition:background 0.2s ease, transform 0.2s ease;
        }
        .sm-close:hover { background:#083878; color:#fff; transform:rotate(90deg); }

        /* modal image */
        .sm-imgbox { position:relative; width:100%; height:220px; overflow:hidden; border-radius:22px 22px 0 0; background:#dce8f7; }
        .sm-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity 0.85s ease; }
        .sm-img-on { opacity:1; }
        .sm-img-overlay { position:absolute; inset:0; background:linear-gradient(180deg,transparent 40%,rgba(8,56,120,0.55) 100%); }
        .sm-img-badge { position:absolute; bottom:16px; left:20px; display:flex; align-items:center; gap:10px; }
        .sm-img-icon  { font-size:28px; }
        .sm-img-title { font-size:18px; font-weight:800; color:#fff; text-shadow:0 2px 8px rgba(0,0,0,0.3); }
        .sm-dots { position:absolute; bottom:10px; right:16px; display:flex; gap:6px; }
        .sm-dot { width:7px; height:7px; border-radius:50%; background:rgba(255,255,255,0.45); cursor:pointer; transition:background 0.25s; }
        .sm-dot-on { background:#fff; }

        /* modal body */
        .sm-body { padding:28px 32px 32px; }
        .sm-eyebrow { font-size:11px; font-weight:800; letter-spacing:2.5px; text-transform:uppercase; color:#083878; margin-bottom:10px; }
        .sm-title { font-size:26px; font-weight:900; color:#0a0f1e; margin-bottom:14px; line-height:1.2; }
        .sm-desc  { font-size:15px; color:#4b5563; line-height:1.8; margin-bottom:24px; }
        .sm-feat-heading { font-size:14px; font-weight:800; color:#083878; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:14px; }
        .sm-features { list-style:none; display:flex; flex-direction:column; gap:10px; margin-bottom:28px; }
        .sm-feature  { display:flex; align-items:center; gap:10px; font-size:15px; color:#1e293b; font-weight:500; }
        .sm-feat-icon { color:#083878; font-size:14px; flex-shrink:0; }
        .sm-cta {
          display:inline-flex; align-items:center; gap:9px;
          height:48px; padding:0 26px;
          background:linear-gradient(135deg,#083878,#1a6abf);
          color:#fff; font-size:15px; font-weight:700;
          font-family:'Barlow',sans-serif; border:none; border-radius:50px;
          cursor:pointer; text-decoration:none;
          transition:transform 0.25s ease,box-shadow 0.25s ease;
          box-shadow:0 6px 20px rgba(8,56,120,0.28);
        }
        .sm-cta:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(8,56,120,0.4); }
        .sm-cta svg { transition:transform 0.25s ease; }
        .sm-cta:hover svg { transform:translateX(4px); }

        /* ── GRID LAYOUT ── */
        .sv-grid { display:grid; grid-template-columns:repeat(4, 1fr); gap:24px; max-width:1300px; margin:0 auto; padding:0 20px; }
        .sv-grid .sv-card { width:100%; display:flex; flex-direction:column; flex-shrink:initial; }

        /* ── RESPONSIVE ── */
        @media(max-width:1300px){ .sv-vp{width:calc(3*${CW}px + 2*${GAP}px);} }
        @media(max-width:1100px) { .sv-grid { grid-template-columns:repeat(3, 1fr); } }
        @media(max-width:980px) { .sv-vp{width:calc(2*${CW}px + ${GAP}px);} .sv-hd h1{font-size:36px;} }
        @media(max-width:850px) { .sv-grid { grid-template-columns:repeat(2, 1fr); } }
        @media(max-width:660px) { .sv-vp{width:${CW}px;} .sv-hd h1{font-size:28px;} }
        @media(max-width:550px) { .sv-grid { grid-template-columns:1fr; } }
        @media(max-width:600px) { .sm-body{padding:20px;} .sm-title{font-size:20px;} .sm-imgbox{height:170px;} }
      `}</style>

      <section className="sv-sec">
        <div className="sv-hd">
          <span className="sv-badge">What We Do</span>
          <h1>
            <span className="shiny-text">Our Comprehensive Services</span>
          </h1>
          <p>From ERP and CRM to AI-powered tools, logistics, healthcare, and beyond — end-to-end software solutions that simplify complexity and drive measurable growth.</p>
        </div>

        {layout === "grid" ? (
          <div className="sv-grid">
            {services.map((svc, i) => (
              <SCard key={i} svc={svc} idx={i} onOpen={setSelected} />
            ))}
          </div>
        ) : (
          <>
            <div className="sv-row">
              <div className="sv-vp">
                <div className="sv-track sv-ltr">
                  {[...s1, ...s1].map((svc, i) => (
                    <SCard key={i} svc={svc} idx={i % s1.length} onOpen={setSelected} />
                  ))}
                </div>
              </div>
            </div>

            <div className="sv-row">
              <div className="sv-vp">
                <div className="sv-track sv-rtl">
                  {[...s2, ...s2].map((svc, i) => (
                    <SCard key={i} svc={svc} idx={i % s2.length} onOpen={setSelected} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </section>

      {selected && <ServiceModal svc={selected} onClose={() => setSelected(null)} />}
    </>
  );
};

export default Services;
