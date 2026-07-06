import { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaTimes, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

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
  { title: "School Management System", icon: "🏫", desc: "Digital platform for schools to manage students and staff.", features: ["Student records", "Fee management", "Attendance system", "Parent communication"], images: ["https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"] },
  { title: "HMS (Hospital Management System)", icon: "🏥", desc: "Software for hospitals and clinics to manage patients and operations.", features: ["Patient records", "Appointment booking", "Doctor management", "Billing system"], images: ["https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"] },
  { title: "AI Chatbot System", icon: "🤖", desc: "AI-based chatbot for customer support and automation.", features: ["Automated replies", "24/7 support", "NLP integration", "Multi-platform support"], images: ["https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop"] },
  { title: "OCR Document Scanner", icon: "📄", desc: "Extracts text and data from images or PDFs automatically.", features: ["Text extraction", "PDF scanning", "Data conversion", "Auto recognition"], images: ["https://images.unsplash.com/photo-1568667256549-094345857637?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"] },
  { title: "KYC Verification System", icon: "🪪", desc: "Used for identity verification and customer onboarding.", features: ["Aadhaar/PAN verification", "Face verification", "Document scanning", "Fraud detection"], images: ["https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop"] },
  { title: "ID Card Generator", icon: "🎫", desc: "Generates digital and printable ID cards automatically.", features: ["Template selection", "Bulk generation", "PDF export", "QR/barcode support"], images: ["https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop"] },
  { title: "Property Management System", icon: "🏠", desc: "Manages property listings, bookings, and clients.", features: ["Property listings", "Booking management", "Agent management", "Payment tracking"], images: ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"] },
  { title: "SCM (Supply Chain Management)", icon: "🔗", desc: "Manages procurement, suppliers, and product supply chains.", features: ["Supplier management", "Inventory tracking", "Warehouse operations", "Logistics monitoring"], images: ["https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"] },
  { title: "DMS (Document Management System)", icon: "📁", desc: "Stores and organizes digital documents securely.", features: ["File storage", "Access control", "Document sharing", "Search & indexing"], images: ["https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800&auto=format&fit=crop","https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"] },
];

const ServiceModal = ({ svc, onClose }) => {
  const [img, setImg] = useState(0);
  useEffect(() => { document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = ""; }; }, []);
  useEffect(() => {
    if (!svc.images.length) return;
    const iv = setInterval(() => setImg(p => (p + 1) % svc.images.length), 3000);
    return () => clearInterval(iv);
  }, [svc.images.length]);
  const handleKey = useCallback((e) => { if (e.key === "Escape") onClose(); }, [onClose]);
  useEffect(() => { window.addEventListener("keydown", handleKey); return () => window.removeEventListener("keydown", handleKey); }, [handleKey]);

  return (
    <div className="ssm-backdrop" onClick={onClose}>
      <div className="ssm-box" onClick={e => e.stopPropagation()}>
        <button className="ssm-close" onClick={onClose}><FaTimes /></button>
        <div className="ssm-imgbox">
          {svc.images.map((src, i) => <img key={i} src={src} alt={svc.title} className={`ssm-img${i === img ? " ssm-img-on" : ""}`} />)}
          <div className="ssm-img-overlay" />
          <div className="ssm-img-badge"><span className="ssm-img-icon">{svc.icon}</span><span className="ssm-img-title">{svc.title}</span></div>
          {svc.images.length > 1 && <div className="ssm-dots">{svc.images.map((_, i) => <span key={i} className={`ssm-dot${i === img ? " ssm-dot-on" : ""}`} onClick={() => setImg(i)} />)}</div>}
        </div>
        <div className="ssm-body">
          <div className="ssm-eyebrow">Our Services</div>
          <h2 className="ssm-title">{svc.icon} {svc.title}</h2>
          <p className="ssm-desc">{svc.desc}</p>
          <h3 className="ssm-feat-heading">Key Features</h3>
          <ul className="ssm-features">{svc.features.map((f, i) => <li key={i} className="ssm-feature"><FaCheckCircle className="ssm-feat-icon" />{f}</li>)}</ul>
          <Link to="/contact" className="ssm-cta" onClick={onClose}>Get Started <FaArrowRight /></Link>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ svc, index, onOpen }) => {
  const [imgIdx, setImgIdx] = useState(0);
  useEffect(() => {
    if (!svc.images.length) return;
    const t = setTimeout(() => { const iv = setInterval(() => setImgIdx(p => (p + 1) % svc.images.length), 3000); return () => clearInterval(iv); }, index * 350);
    return () => clearTimeout(t);
  }, [svc.images.length, index]);

  return (
    <motion.div className="svc-card" onClick={() => onOpen(svc)} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: (index % 4) * 0.08 }} role="button" tabIndex={0} onKeyDown={e => e.key === "Enter" && onOpen(svc)}>
      <div className="svc-img-wrap">
        {svc.images.map((src, i) => <img key={i} src={src} alt={svc.title} className={`svc-img${i === imgIdx ? " active" : ""}`} />)}
        <div className="svc-img-overlay" />
        <div className="svc-hint">Click to explore</div>
      </div>
      <div className="svc-body">
        <span className="svc-icon">{svc.icon}</span>
        <h3 className="svc-title">{svc.title}</h3>
        <p className="svc-desc">{svc.desc}</p>
        <div className="svc-feat-row">{svc.features.slice(0, 2).map((f, i) => <span key={i} className="svc-feat-tag">{f}</span>)}</div>
      </div>
    </motion.div>
  );
};

const ShowcaseServices = () => {
  const [selected, setSelected] = useState(null);
  return (
    <section id="showcase-services" className="svc-section">
      <style>{`
        .svc-section { padding: 60px 5%; background: #051432; font-family: 'Barlow', sans-serif; }
        .svc-header { text-align: center; margin-bottom: 70px; }
        .svc-badge { display: inline-block; background: rgba(96, 165, 250, 0.1); border: 1px solid rgba(96, 165, 250, 0.2); color: #60a5fa; padding: 9px 24px; border-radius: 40px; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 20px; }
        .svc-main-title { font-size: clamp(2.2rem, 4vw, 3rem); font-weight: 800; color: #ffffff; margin-bottom: 16px; }
        .svc-main-title span { background: linear-gradient(90deg, #60a5fa, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .svc-main-sub { color: #94a3b8; font-size: 1.05rem; line-height: 1.7; max-width: 700px; margin: 0 auto; }
        .svc-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 24px; max-width: 1300px; margin: 0 auto; }
        .svc-card { background: rgba(255, 255, 255, 0.025); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 20px; overflow: hidden; cursor: pointer; transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275); position: relative; backdrop-filter: blur(12px); }
        .svc-card:hover { transform: translateY(-10px); background: rgba(255, 255, 255, 0.05); border-color: rgba(96, 165, 250, 0.35); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px rgba(96, 165, 250, 0.08); }
        .svc-img-wrap { position: relative; width: 100%; height: 160px; overflow: hidden; background: rgba(8,56,120,0.1); }
        .svc-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; transition: opacity 0.85s ease; }
        .svc-img.active { opacity: 1; }
        .svc-card:hover .svc-img.active { transform: scale(1.06); transition: transform 0.6s ease, opacity 0.85s ease; }
        .svc-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(5,20,50,0.6) 0%, transparent 60%); z-index: 1; }
        .svc-hint { position: absolute; bottom: 10px; right: 12px; z-index: 2; background: rgba(8,56,120,0.85); color: #fff; font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 20px; opacity: 0; transition: opacity 0.3s; pointer-events: none; }
        .svc-card:hover .svc-hint { opacity: 1; }
        .svc-body { padding: 18px 20px 22px; }
        .svc-icon { font-size: 26px; display: block; margin-bottom: 10px; }
        .svc-title { font-size: 0.98rem; font-weight: 700; color: #e2e8f0; margin-bottom: 8px; line-height: 1.3; }
        .svc-desc { font-size: 0.83rem; color: #64748b; line-height: 1.6; margin-bottom: 12px; }
        .svc-feat-row { display: flex; gap: 6px; flex-wrap: wrap; }
        .svc-feat-tag { background: rgba(96, 165, 250, 0.08); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.15); padding: 3px 10px; border-radius: 20px; font-size: 0.73rem; font-weight: 600; }
        /* Modal */
        @keyframes ssm-in { from { opacity:0; transform:scale(0.92) translateY(24px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .ssm-backdrop { position:fixed; inset:0; background:rgba(5,15,40,0.75); z-index:9999; display:flex; align-items:center; justify-content:center; padding:20px; backdrop-filter:blur(8px); }
        .ssm-box { background:#0a0f1e; border: 1px solid rgba(255,255,255,0.1); border-radius:22px; width:100%; max-width:680px; max-height:90vh; overflow-y:auto; position:relative; box-shadow:0 32px 80px rgba(0,0,0,0.3); animation:ssm-in 0.28s cubic-bezier(0.34,1.56,0.64,1); }
        .ssm-close { position:absolute; top:14px; right:14px; z-index:2; width:36px; height:36px; border-radius:50%; border:none; background:rgba(255,255,255,0.1); color:#fff; font-size:14px; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.2s; }
        .ssm-close:hover { background:#083878; color:#fff; transform:rotate(90deg); }
        .ssm-imgbox { position:relative; width:100%; height:220px; overflow:hidden; border-radius:22px 22px 0 0; background:#dce8f7; }
        .ssm-img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0; transition:opacity 0.85s ease; }
        .ssm-img-on { opacity:1; }
        .ssm-img-overlay { position:absolute; inset:0; background:linear-gradient(180deg,transparent 40%,rgba(8,56,120,0.55) 100%); }
        .ssm-img-badge { position:absolute; bottom:16px; left:20px; display:flex; align-items:center; gap:10px; }
        .ssm-img-icon { font-size:28px; }
        .ssm-img-title { font-size:18px; font-weight:800; color:#fff; text-shadow:0 2px 8px rgba(0,0,0,0.3); }
        .ssm-dots { position:absolute; bottom:10px; right:16px; display:flex; gap:6px; }
        .ssm-dot { width:7px; height:7px; border-radius:50%; background:rgba(255,255,255,0.4); cursor:pointer; transition:background 0.25s; }
        .ssm-dot-on { background:#fff; }
        .ssm-body { padding:28px 32px 36px; font-family:'Barlow',sans-serif; }
        .ssm-eyebrow { font-size:11px; font-weight:800; letter-spacing:2.5px; text-transform:uppercase; color:#60a5fa; margin-bottom:10px; }
        .ssm-title { font-size:22px; font-weight:900; color:#fff; margin-bottom:14px; }
        .ssm-desc { font-size:15px; color:#94a3b8; line-height:1.8; margin-bottom:24px; }
        .ssm-feat-heading { font-size:13px; font-weight:800; color:#60a5fa; text-transform:uppercase; letter-spacing:1.5px; margin-bottom:14px; }
        .ssm-features { list-style:none; display:flex; flex-direction:column; gap:10px; margin-bottom:28px; }
        .ssm-feature { display:flex; align-items:center; gap:10px; font-size:15px; color:#cbd5e1; font-weight:500; }
        .ssm-feat-icon { color:#60a5fa; font-size:14px; flex-shrink:0; }
        .ssm-cta { display:inline-flex; align-items:center; gap:9px; height:48px; padding:0 26px; background:linear-gradient(135deg,#60a5fa,#3b82f6); color:#fff; font-size:15px; font-weight:700; font-family:'Barlow',sans-serif; border:none; border-radius:50px; cursor:pointer; text-decoration:none; transition:transform 0.25s,box-shadow 0.25s; box-shadow:0 6px 20px rgba(96,165,250,0.28); }
        .ssm-cta:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(96,165,250,0.4); }
        @media (max-width:600px) { .ssm-body { padding:20px; } .svc-grid { grid-template-columns:1fr; } }
      `}</style>

      <div className="svc-header">
        <span className="svc-badge">What We Build</span>
        <h2 className="svc-main-title">Our <span>Comprehensive Services</span></h2>
        <p className="svc-main-sub">From ERP and CRM to AI-powered tools, logistics, healthcare, and beyond — end-to-end software solutions that simplify complexity and drive measurable growth.</p>
      </div>

      <div className="svc-grid">
        {allServices.map((svc, i) => <ServiceCard key={i} svc={svc} index={i} onOpen={setSelected} />)}
      </div>

      {selected && <ServiceModal svc={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default ShowcaseServices;
