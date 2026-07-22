import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaArrowRight, FaSearch, FaTimes, FaBars } from "react-icons/fa";
import logoImage from "../assets/Logo3.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Certifications", to: "/certifications" },
  { label: "Our Ventures", to: "/branches" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const NavbarPage = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (to) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.trim().toLowerCase();
    if (!q) return;
    if (q.includes("service") || q.includes("erp") || q.includes("crm") || q.includes("hrms") || q.includes("web") || q.includes("app") || q.includes("ai") || q.includes("pos")) navigate("/services");
    else if (q.includes("about") || q.includes("team") || q.includes("mission") || q.includes("vision")) navigate("/about");
    else if (q.includes("contact") || q.includes("touch") || q.includes("phone") || q.includes("email")) navigate("/contact");
    else if (q.includes("blog") || q.includes("article") || q.includes("news")) navigate("/blog");
    else navigate("/services");
    setQuery(""); setSearchOpen(false); setMenuOpen(false);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        * { margin:0; padding:0; box-sizing:border-box; font-family:'Barlow',sans-serif; }

        .header {
          width: 90%;
          max-width: 1400px;
          margin: 20px auto;
          background: #ffffff; 
          position: fixed; 
          top: 0; 
          left: 0; right: 0; 
          z-index: 1000;
          border-radius: 50px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(12px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .header-inner {
          width: 100%; padding: 0 30px;
          display: flex; align-items: center; justify-content: space-between;
          height: 80px; gap: 16px;
        }

        /* LOGO */
        .logo { display:flex; align-items:center; text-decoration:none; flex-shrink:0; position: relative; }
        .logo::before {
          content: '';
          position: absolute;
          top: 4px; bottom: 4px; left: 4px; right: 4px;
          background: rgba(255, 255, 255, 0.2);
          filter: blur(12px);
          z-index: 0;
          border-radius: 8px;
        }
        .logo-img { height:80px; margin: -10px 0; width:auto; object-fit:contain; display:block; border-radius:8px; transition:opacity 0.2s ease; position: relative; z-index: 1; }
        .logo-img:hover { opacity:0.88; }

        /* DESKTOP NAV */
        .menu {
          display:flex; align-items:center; gap:2px; flex:1; justify-content:center;
        }
        .menu a {
          text-decoration:none; color:#111827; font-size:16px; font-weight:600;
          display:flex; align-items:center; padding:6px 14px; border-radius:6px;
          transition:color 0.2s ease; letter-spacing:0.1px; position:relative; white-space:nowrap;
        }
        .menu a:hover { color: #0ba249; }
        .menu .active { color: #0ba249; font-weight: 700; }
        .menu .active::after {
          content: ''; position: absolute; bottom: 0; left: 14px; right: 14px;
          height: 2px; background: #0ba249; border-radius: 2px;
        }

        .header.scrolled .menu a { color: #111827; }
        .header.scrolled .menu a:hover { color: #0ba249; }
        .header.scrolled .menu .active { color: #0ba249; }

        /* RIGHT ACTIONS */
        .nav-actions { display:flex; align-items:center; gap:6px; flex-shrink:0; }

        /* SEARCH */
        .search-wrapper { position:relative; display:flex; align-items:center; }
        .search-toggle {
          width:38px; height:38px; border:none; background:transparent; color:#111827;
          display:flex; align-items:center; justify-content:center; font-size:16px;
          cursor:pointer; border-radius:6px; transition:color 0.2s ease,background 0.2s ease;
        }
        .search-toggle:hover { color: #0ba249; background: rgba(11, 162, 73, 0.1); }
        .header.scrolled .search-toggle { color: #111827; }
        .header.scrolled .search-toggle:hover { color: #0ba249; background: rgba(11, 162, 73, 0.1); }

        .search-form {
          position: absolute; right: 44px; top: 50%; transform: translateY(-50%);
          display: flex; align-items: center; background: #0a0f1e;
          border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 50px; overflow: hidden;
          width: 0; opacity: 0; pointer-events: none;
          transition: width 0.28s ease, opacity 0.22s ease;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
        }
        .search-form.open { width: 220px; opacity: 1; pointer-events: all; }
        .search-form input {
          border: none; outline: none; padding: 9px 16px; font-size: 14px; color: #ffffff;
          font-family: 'Barlow', sans-serif; font-weight: 500; background: transparent; width: 100%;
        }
        .search-form input::placeholder { color: rgba(255, 255, 255, 0.4); }
        .search-submit {
          border: none; background: #0ba249; color: #fff; height: 100%; padding: 0 14px;
          cursor: pointer; display: flex; align-items: center; font-size: 13px; flex-shrink: 0;
          transition: background 0.2s ease;
        }
        .search-submit:hover { background: #087f39; }

        /* CTA */
        .cta-btn {
          height: 46px; padding: 0 24px; border: none; border-radius: 50px;
          background: linear-gradient(90deg, #2563eb, #0ba249);
          color: #fff; font-size: 15px; font-weight: 700;
          display: flex; align-items: center; gap: 8px; cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
          letter-spacing: 0.2px; flex-shrink: 0; font-family: 'Barlow', sans-serif;
          white-space: nowrap; text-decoration: none;
        }
        .cta-btn:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 8px 25px rgba(11, 162, 73, 0.4); 
        }
        .cta-btn svg { font-size:13px; transition:transform 0.22s ease; }
        .cta-btn:hover svg { transform:translateX(3px) translateY(-3px); }

        /* HAMBURGER */
        .hamburger {
          display:none; width:40px; height:40px; border:none; background:transparent;
          color:#111827; font-size:20px; cursor:pointer; align-items:center;
          justify-content:center; border-radius:6px; flex-shrink:0;
          transition:background 0.2s ease, color 0.2s ease;
        }
        .hamburger:hover { background: rgba(11, 162, 73, 0.1); color: #0ba249; }
        .header.scrolled .hamburger { color: #111827; }
        .header.scrolled .hamburger:hover { color: #0ba249; background: rgba(11, 162, 73, 0.1); }

        /* MOBILE DRAWER */
        .mobile-drawer {
          display:none; position:fixed; inset:0; z-index:9998;
        }
        .mobile-drawer.open { display:block; }

        .drawer-backdrop {
          position:absolute; inset:0; background:rgba(0,0,0,0.45);
          animation:drawerFadeIn 0.22s ease;
        }
        @keyframes drawerFadeIn { from{opacity:0} to{opacity:1} }

        .drawer-panel {
          position: absolute; top: 0; right: 0; bottom: 0; width: min(300px, 85vw);
          background: #0a0f1e; display: flex; flex-direction: column;
          box-shadow: -8px 0 32px rgba(0, 0, 0, 0.5);
          animation: drawerSlideIn 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
          overflow-y: auto;
          color: #ffffff;
        }
        @keyframes drawerSlideIn { from{transform:translateX(100%)} to{transform:translateX(0)} }

        .drawer-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        .drawer-logo { height: 96px; width: auto; object-fit: contain; border-radius: 6px; }
        .drawer-close {
          width: 36px; height: 36px; border: none; background: rgba(255, 255, 255, 0.05);
          color: #ffffff; font-size: 16px; border-radius: 50%; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s ease;
        }
        .drawer-close:hover { background: rgba(239, 68, 68, 0.2); color: #ef4444; }

        .drawer-nav {
          display: flex; flex-direction: column; padding: 16px 0; flex: 1;
        }
        .drawer-nav a {
          text-decoration: none; color: #cbd5e1; font-size: 16px; font-weight: 600;
          padding: 14px 24px; border-left: 3px solid transparent;
          transition: color 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }
        .drawer-nav a:hover { color: #2563eb; background: rgba(37, 99, 235, 0.05); border-left-color: #2563eb; }
        .drawer-nav a.active { color: #2563eb; font-weight: 700; background: rgba(37, 99, 235, 0.1); border-left-color: #2563eb; }

        .drawer-footer {
          padding: 20px 24px; border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .drawer-cta {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          width: 100%; height: 48px; 
          background: linear-gradient(90deg, #2563eb, #2563eb); 
          color: #fff;
          font-size: 15px; font-weight: 700; border: none; border-radius: 10px;
          cursor: pointer; text-decoration: none; font-family: 'Barlow', sans-serif;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .drawer-cta:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4); 
        }

        /* RESPONSIVE */
        @media (max-width:900px) {
          .header { width: 95%; margin: 15px auto; top: 15px; }
          .header-inner { height: 70px; padding: 0 20px; }
          .menu { display:none; }
          .search-wrapper { display:none; }
          .cta-btn { display:none; }
          .hamburger { display:flex; }
        }

        @media (max-width:480px) {
          .logo-img { height:81px; }
        }
      `}</style>

      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-inner">

          <Link to="/" className="logo">
            <img src={logoImage} alt="RiDeal Digital Seva - Custom Software Development Company" className="logo-img" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="menu" aria-label="Main Navigation">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} className={isActive(to) ? "active" : ""}>{label}</Link>
            ))}
          </nav>

          {/* DESKTOP RIGHT */}
          <div className="nav-actions">
            <div className="search-wrapper">
              <form className={`search-form ${searchOpen ? "open" : ""}`} onSubmit={handleSearch}>
                <input type="text" placeholder="Search pages..." value={query}
                  onChange={e => setQuery(e.target.value)} autoFocus={searchOpen} />
                <button type="submit" className="search-submit" aria-label="Search"><FaSearch /></button>
              </form>
              <button className="search-toggle" onClick={() => { setSearchOpen(o => !o); setQuery(""); }} aria-label="Toggle search">
                {searchOpen ? <FaTimes /> : <FaSearch />}
              </button>
            </div>
            <Link to="/contact" className="cta-btn">Get In Touch <FaArrowRight /></Link>
          </div>

          {/* HAMBURGER */}
          <button className="hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <FaBars />
          </button>

        </div>
      </header>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-backdrop" onClick={closeMenu} />
        <div className="drawer-panel">
          <div className="drawer-header">
            <img src={logoImage} alt="RiDeal Digital Seva" className="drawer-logo" />
            <button className="drawer-close" onClick={closeMenu} aria-label="Close menu"><FaTimes /></button>
          </div>
          <nav className="drawer-nav">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} className={isActive(to) ? "active" : ""} onClick={closeMenu}>{label}</Link>
            ))}
          </nav>
          <div className="drawer-footer">
            <Link to="/contact" className="drawer-cta" onClick={closeMenu}>
              Get Free IT Consultation <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavbarPage;
