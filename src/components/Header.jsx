import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaArrowRight, FaSearch, FaTimes, FaBars } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home",     to: "/"         },
  { label: "About",    to: "/about"    },
  { label: "Services", to: "/services" },
  { label: "Blog",     to: "/blog"     },
  { label: "Contact",  to: "/contact"  },
];

const NavbarPage = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
          width:100%; background:#fff; position:sticky; top:0; z-index:1000;
          box-shadow:0 1px 12px rgba(0,0,0,0.07); border-bottom:1px solid #eef0f5;
        }

        .header-inner {
          width:100%; padding:0 6%;
          display:flex; align-items:center; justify-content:space-between;
          height:80px; gap:16px;
        }

        /* LOGO */
        .logo { display:flex; align-items:center; text-decoration:none; flex-shrink:0; }
        .logo-img { height:72px; width:auto; object-fit:contain; display:block; border-radius:8px; transition:opacity 0.2s ease; }
        .logo-img:hover { opacity:0.88; }

        /* DESKTOP NAV */
        .menu {
          display:flex; align-items:center; gap:2px; flex:1; justify-content:center;
        }
        .menu a {
          text-decoration:none; color:#1a1a2e; font-size:17px; font-weight:600;
          display:flex; align-items:center; padding:6px 14px; border-radius:6px;
          transition:color 0.2s ease; letter-spacing:0.1px; position:relative; white-space:nowrap;
        }
        .menu a:hover { color:#083878; }
        .menu .active { color:#083878; font-weight:700; }
        .menu .active::after {
          content:''; position:absolute; bottom:0; left:14px; right:14px;
          height:2px; background:#083878; border-radius:2px;
        }

        /* RIGHT ACTIONS */
        .nav-actions { display:flex; align-items:center; gap:6px; flex-shrink:0; }

        /* SEARCH */
        .search-wrapper { position:relative; display:flex; align-items:center; }
        .search-toggle {
          width:38px; height:38px; border:none; background:transparent; color:#1a1a2e;
          display:flex; align-items:center; justify-content:center; font-size:16px;
          cursor:pointer; border-radius:6px; transition:color 0.2s ease,background 0.2s ease;
        }
        .search-toggle:hover { color:#083878; background:rgba(8,56,120,0.06); }
        .search-form {
          position:absolute; right:44px; top:50%; transform:translateY(-50%);
          display:flex; align-items:center; background:#fff;
          border:1.5px solid rgba(8,56,120,0.25); border-radius:50px; overflow:hidden;
          width:0; opacity:0; pointer-events:none;
          transition:width 0.28s ease,opacity 0.22s ease;
          box-shadow:0 4px 16px rgba(8,56,120,0.1);
        }
        .search-form.open { width:220px; opacity:1; pointer-events:all; }
        .search-form input {
          border:none; outline:none; padding:9px 16px; font-size:14px; color:#083878;
          font-family:'Barlow',sans-serif; font-weight:500; background:transparent; width:100%;
        }
        .search-form input::placeholder { color:rgba(8,56,120,0.38); }
        .search-submit {
          border:none; background:#083878; color:#fff; height:100%; padding:0 14px;
          cursor:pointer; display:flex; align-items:center; font-size:13px; flex-shrink:0;
          transition:background 0.2s ease;
        }
        .search-submit:hover { background:#0a4799; }

        /* CTA */
        .cta-btn {
          height:42px; padding:0 20px; border:none; border-radius:8px;
          background:#083878; color:#fff; font-size:14.5px; font-weight:700;
          display:flex; align-items:center; gap:8px; cursor:pointer;
          transition:background 0.22s ease,transform 0.22s ease,box-shadow 0.22s ease;
          letter-spacing:0.2px; flex-shrink:0; font-family:'Barlow',sans-serif;
          white-space:nowrap; text-decoration:none;
        }
        .cta-btn:hover { background:#0a4799; transform:translateY(-1px); box-shadow:0 6px 20px rgba(8,56,120,0.3); }
        .cta-btn svg { font-size:13px; transition:transform 0.22s ease; }
        .cta-btn:hover svg { transform:translateX(3px); }

        /* HAMBURGER */
        .hamburger {
          display:none; width:40px; height:40px; border:none; background:transparent;
          color:#083878; font-size:20px; cursor:pointer; align-items:center;
          justify-content:center; border-radius:6px; flex-shrink:0;
          transition:background 0.2s ease;
        }
        .hamburger:hover { background:rgba(8,56,120,0.07); }

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
          position:absolute; top:0; right:0; bottom:0; width:min(300px,85vw);
          background:#fff; display:flex; flex-direction:column;
          box-shadow:-8px 0 32px rgba(0,0,0,0.15);
          animation:drawerSlideIn 0.28s cubic-bezier(0.34,1.56,0.64,1);
          overflow-y:auto;
        }
        @keyframes drawerSlideIn { from{transform:translateX(100%)} to{transform:translateX(0)} }

        .drawer-header {
          display:flex; align-items:center; justify-content:space-between;
          padding:18px 20px; border-bottom:1px solid #eef0f5;
        }
        .drawer-logo { height:52px; width:auto; object-fit:contain; border-radius:6px; }
        .drawer-close {
          width:36px; height:36px; border:none; background:rgba(8,56,120,0.07);
          color:#083878; font-size:16px; border-radius:50%; cursor:pointer;
          display:flex; align-items:center; justify-content:center;
          transition:background 0.2s ease;
        }
        .drawer-close:hover { background:#083878; color:#fff; }

        .drawer-nav {
          display:flex; flex-direction:column; padding:16px 0; flex:1;
        }
        .drawer-nav a {
          text-decoration:none; color:#1a1a2e; font-size:16px; font-weight:600;
          padding:14px 24px; border-left:3px solid transparent;
          transition:color 0.2s ease,background 0.2s ease,border-color 0.2s ease;
        }
        .drawer-nav a:hover { color:#083878; background:rgba(8,56,120,0.05); border-left-color:#083878; }
        .drawer-nav a.active { color:#083878; font-weight:700; background:rgba(8,56,120,0.06); border-left-color:#083878; }

        .drawer-footer {
          padding:20px 24px; border-top:1px solid #eef0f5;
        }
        .drawer-cta {
          display:flex; align-items:center; justify-content:center; gap:8px;
          width:100%; height:48px; background:#083878; color:#fff;
          font-size:15px; font-weight:700; border:none; border-radius:10px;
          cursor:pointer; text-decoration:none; font-family:'Barlow',sans-serif;
          transition:background 0.22s ease;
        }
        .drawer-cta:hover { background:#0a4799; }

        /* RESPONSIVE */
        @media (max-width:900px) {
          .menu { display:none; }
          .search-wrapper { display:none; }
          .cta-btn { display:none; }
          .hamburger { display:flex; }
          .header-inner { height:72px; padding:0 5%; }
        }

        @media (max-width:480px) {
          .header-inner { padding:0 16px; height:66px; }
          .logo-img { height:56px; }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">

          <Link to="/" className="logo">
            <img src="/logo.jpeg" alt="RiDeal Digital Seva" className="logo-img" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="menu">
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
            <img src="/logo.jpeg" alt="RiDeal Digital Seva" className="drawer-logo" />
            <button className="drawer-close" onClick={closeMenu} aria-label="Close menu"><FaTimes /></button>
          </div>
          <nav className="drawer-nav">
            {NAV_LINKS.map(({ label, to }) => (
              <Link key={to} to={to} className={isActive(to) ? "active" : ""} onClick={closeMenu}>{label}</Link>
            ))}
          </nav>
          <div className="drawer-footer">
            <Link to="/contact" className="drawer-cta" onClick={closeMenu}>
              Get In Touch <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarPage;
