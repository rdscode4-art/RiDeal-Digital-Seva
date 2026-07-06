import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight, FaRocket, FaEye, FaHeart,
  FaCheckCircle, FaUsers, FaLaptopCode, FaBrain,
  FaCode, FaMobileAlt, FaChartLine, FaPaintBrush,
  FaRobot, FaDatabase, FaShieldAlt, FaCloud,
  FaGraduationCap, FaBriefcase,
} from "react-icons/fa";

/* ── MVV DATA ── */
const MVV = [
  {
    id: "mission",
    icon: <FaRocket />,
    label: "Our Mission",
    heading: "Empowering Businesses Through Technology",
    body: "At RiDeal Digital Seva, our mission is to deliver cutting-edge IT solutions — from ERP and CRM to AI-powered automation — that help businesses streamline operations, reduce costs, and scale faster. We are committed to making enterprise-grade technology accessible to every business, regardless of size.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    points: ["End-to-end digital transformation", "Affordable enterprise solutions", "Dedicated support & training"],
  },
  {
    id: "vision",
    icon: <FaEye />,
    label: "Our Vision",
    heading: "A Digitally Empowered India",
    body: "We envision a future where every Indian business — from startups to large enterprises — operates with the power of intelligent software. RiDeal Digital Seva aims to be the most trusted digital partner in India, bridging the gap between technology and business growth through innovation and integrity.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=900&auto=format&fit=crop",
    points: ["Technology for every business", "Innovation-first approach", "Long-term trusted partnerships"],
  },
  {
    id: "values",
    icon: <FaHeart />,
    label: "Our Values",
    heading: "Integrity, Innovation & Impact",
    body: "Our core values guide every decision we make. We believe in transparent communication, continuous innovation, and delivering real impact for our clients. We treat every project as our own — with passion, precision, and a relentless focus on quality and client satisfaction.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=900&auto=format&fit=crop",
    points: ["Transparency in every engagement", "Continuous learning & innovation", "Client success is our success"],
  },
];

/* ── STATS ── */
const STATS = [
  { icon: <FaUsers />, value: "500+", label: "Happy Clients" },
  { icon: <FaLaptopCode />, value: "1000+", label: "Projects Delivered" },
  { icon: <FaHeart />, value: "98%", label: "Client Satisfaction" },
  { icon: <FaCheckCircle />, value: "24/7", label: "Support Available" },
];

/* ── TEAMS ── */
const TEAMS = [
  {
    icon: <FaUsers />,
    role: "Chief Executive Officer (CEO)",
    degree: "B.Tech (CSE) & MBA (Technology Management)",
    experience: "10+ Years of Tech Leadership",
    desc: "Visionary leader driving innovation, growth, and client-centric digital transformation.",
    skills: ["Business Strategy", "IT Consulting", "Enterprise Growth"],
    color: "#083878",
  },
  {
    icon: <FaRocket />,
    role: "Project Manager (PM)",
    degree: "B.Tech & PMP® Certified",
    experience: "6+ Years in Agile Delivery",
    desc: "Managing complex project lifecycles, ensuring on-time delivery with zero compromise on quality.",
    skills: ["Agile & Scrum", "Risk Mitigation", "Sprint Planning"],
    color: "#0d4fa0",
  },
  {
    icon: <FaCode />,
    role: "Software Developer (SD)",
    degree: "MCA / B.Tech in CS",
    experience: "5+ Years in Full Stack Dev",
    desc: "Creating scalable, robust, and modern web and mobile applications with top performance.",
    skills: ["React / Node.js", "Next.js", "Web Architecture"],
    color: "#1560c0",
  },
  {
    icon: <FaPaintBrush />,
    role: "Designer & Creative (DC)",
    degree: "B.Des / Certified UI/UX Specialist",
    experience: "4+ Years in Digital Design",
    desc: "Designing stunning, intuitive user interfaces and layouts that prioritize accessibility and brand identity.",
    skills: ["Figma", "Prototyping", "Design Systems"],
    color: "#083878",
  },
  {
    icon: <FaShieldAlt />,
    role: "QA & QC Specialist (QA/QC)",
    degree: "B.Tech / BCA",
    experience: "4+ Years in Testing",
    desc: "Ensuring all applications are bug-free, highly secure, and meet the highest industry standards.",
    skills: ["Automation Testing", "Manual Testing", "Security Audits"],
    color: "#0d4fa0",
  },
  {
    icon: <FaCloud />,
    role: "DevOps & Cloud Specialist (DE)",
    degree: "B.Tech & AWS Certified",
    experience: "5+ Years in Cloud Infrastructure",
    desc: "Designing high-availability cloud setups, automating deployment pipelines, and ensuring secure scalability.",
    skills: ["AWS / Azure", "Docker & K8s", "CI/CD Pipelines"],
    color: "#1560c0",
  },
];

const AboutSection = () => {
  const [active, setActive] = useState("mission");
  const current = MVV.find(m => m.id === active);
  const [data, setData] = useState({
    title: "Empowering Businesses with Technology",
    subtitle: "We build digital experiences that drive growth, enhance efficiency, and solve real business challenges.",
    content: {
      storyText: "RiDeal Digital Seva is a premier IT solutions provider dedicated to serving startups, small businesses, and large enterprises alike. We combine tech innovation with robust software to make operations simpler and scaling faster.",
      missionText: "To simplify business operations through customized software solutions, allowing owners to focus entirely on growth.",
      visionText: "To be the leading global IT consulting and digital transformation agency, known for outstanding results and integrity."
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/sections/about-story")
      .then(res => res.json())
      .then(resData => {
        if (resData && resData.title) {
          setData(resData);
        }
      })
      .catch(err => console.warn("CMS About Story load failed, static fallback active:", err));
  }, []);

  const getMvvBody = (id) => {
    if (id === "mission" && data.content?.missionText) {
      return data.content.missionText;
    }
    if (id === "vision" && data.content?.visionText) {
      return data.content.visionText;
    }
    const item = MVV.find(m => m.id === id);
    return item ? item.body : "";
  };

  /* team cards animate in when section enters viewport */
  const teamRef = useRef(null);
  const [teamVisible, setTeamVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTeamVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (teamRef.current) obs.observe(teamRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes asFadeUp  { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes asImgIn   { from { opacity:0; transform:scale(0.96) translateX(20px); } to { opacity:1; transform:scale(1) translateX(0); } }
        @keyframes asFloat   { 0%,100% { transform:translateY(0); } 50% { transform:translateY(-8px); } }
        @keyframes asSpin    { to { transform:rotate(360deg); } }

        /* ── SECTION 1 — INTRO ── */
        .as-intro {
          width: 100%;
          background: #fff;
          padding: 90px 6%;
          font-family: 'Barlow', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .as-intro-wrap {
          display: flex;
          align-items: center;
          gap: 64px;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* left text */
        .as-intro-left { flex: 1; min-width: 0; }

        .as-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #083878;
          margin-bottom: 14px;
        }
        .as-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px; height: 2px;
          background: #083878;
          border-radius: 2px;
        }

        .as-intro-heading {
          font-size: 44px;
          font-weight: 900;
          color: #0a0f1e;
          line-height: 1.18;
          margin-bottom: 20px;
        }
        .as-intro-heading span {
          color: transparent;
          -webkit-text-stroke: 2px #083878;
          text-stroke: 2px #083878;
          position: relative;
          display: inline-block;
        }
        .as-intro-heading span::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 100%; height: 3px;
          background: linear-gradient(90deg, #083878, #1a6abf);
          border-radius: 4px;
        }

        .as-intro-desc {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.85;
          margin-bottom: 32px;
          max-width: 520px;
        }

        .as-intro-btn {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 50px;
          padding: 0 28px;
          background: linear-gradient(135deg, #083878, #1a6abf);
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Barlow', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 6px 22px rgba(8,56,120,0.3);
        }
        .as-intro-btn:hover { transform:translateY(-3px); box-shadow:0 14px 36px rgba(8,56,120,0.42); }
        .as-intro-btn svg { transition: transform 0.25s ease; }
        .as-intro-btn:hover svg { transform: translateX(4px); }

        /* right image grid */
        .as-intro-right {
          flex: 1;
          min-width: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 14px;
          position: relative;
        }

        .as-img-tall {
          grid-row: 1 / 3;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 14px 40px rgba(8,56,120,0.14);
        }
        .as-img-tall img { width:100%; height:100%; min-height:360px; object-fit:cover; display:block; transition:transform 0.45s ease; }
        .as-img-tall:hover img { transform:scale(1.05); }

        .as-img-sm {
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 10px 28px rgba(8,56,120,0.1);
        }
        .as-img-sm img { width:100%; height:175px; object-fit:cover; display:block; transition:transform 0.45s ease; }
        .as-img-sm:hover img { transform:scale(1.06); }

        /* floating badge */
        .as-badge-float {
          position: absolute;
          bottom: -16px; left: -20px;
          background: #fff;
          border-radius: 16px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 14px 40px rgba(8,56,120,0.16);
          border: 1.5px solid rgba(8,56,120,0.08);
          animation: asFloat 4s ease-in-out infinite;
          z-index: 2;
        }
        .as-badge-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          background: linear-gradient(135deg, #083878, #1a6abf);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; color: #fff; flex-shrink: 0;
        }
        .as-badge-val { font-size: 24px; font-weight: 900; color: #083878; line-height: 1; }
        .as-badge-lbl { font-size: 12px; color: #6b7280; font-weight: 600; margin-top: 2px; }

        /* ── STATS BAR ── */
        .as-stats {
          width: 100%;
          background: #083878;
          padding: 40px 6%;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .as-stats::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .as-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .as-stat-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          border-radius: 14px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          transition: background 0.25s ease, transform 0.25s ease;
          cursor: default;
        }
        .as-stat-item:hover { background:rgba(255,255,255,0.15); transform:translateY(-4px); }
        .as-stat-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(255,255,255,0.12);
          display: flex; align-items: center; justify-content: center;
          font-size: 20px; color: #fff; flex-shrink: 0;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .as-stat-item:hover .as-stat-icon { background:rgba(255,255,255,0.22); transform:rotate(-8deg) scale(1.1); }
        .as-stat-val { font-size: 28px; font-weight: 900; color: #fff; line-height: 1; }
        .as-stat-lbl { font-size: 13px; color: rgba(255,255,255,0.7); font-weight: 600; margin-top: 3px; }

        /* ── MVV SECTION ── */
        .as-mvv {
          width: 100%;
          background: #f0f4ff;
          padding: 90px 6%;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .as-mvv::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(8,56,120,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
          pointer-events: none;
        }

        .as-mvv-header {
          text-align: center;
          margin-bottom: 52px;
          position: relative;
          z-index: 1;
        }
        .as-mvv-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #083878;
          margin-bottom: 14px;
        }
        .as-mvv-eyebrow-line { width:32px; height:2px; background:#083878; border-radius:2px; }
        .as-mvv-heading {
          font-size: 44px;
          font-weight: 900;
          color: #0a0f1e;
          line-height: 1.18;
        }
        .as-mvv-heading span {
          color: transparent;
          -webkit-text-stroke: 2px #083878;
          text-stroke: 2px #083878;
          display: inline-block;
        }

        /* tab buttons */
        .as-mvv-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 52px;
          position: relative;
          z-index: 1;
          flex-wrap: wrap;
        }

        .as-mvv-tab {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 28px;
          border-radius: 50px;
          border: 2px solid rgba(8,56,120,0.15);
          background: #fff;
          color: #4b5563;
          font-size: 15px;
          font-weight: 700;
          font-family: 'Barlow', sans-serif;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 2px 10px rgba(8,56,120,0.06);
        }
        .as-mvv-tab:hover {
          border-color: #083878;
          color: #083878;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(8,56,120,0.14);
        }
        .as-mvv-tab.active {
          background: linear-gradient(135deg, #083878, #1a6abf);
          color: #fff;
          border-color: transparent;
          box-shadow: 0 8px 28px rgba(8,56,120,0.32);
          transform: translateY(-2px);
        }
        .as-mvv-tab-icon { font-size: 16px; }

        /* content panel */
        .as-mvv-panel {
          display: flex;
          align-items: center;
          gap: 60px;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          animation: asFadeUp 0.5s ease both;
        }

        /* image side */
        .as-mvv-img-wrap {
          flex: 1;
          min-width: 0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 56px rgba(8,56,120,0.18);
          position: relative;
        }
        .as-mvv-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(8,56,120,0.35) 100%);
          pointer-events: none;
        }
        .as-mvv-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
          animation: asImgIn 0.55s ease both;
        }
        .as-mvv-img-wrap:hover .as-mvv-img { transform: scale(1.04); }

        /* icon badge on image */
        .as-mvv-img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 2;
          background: #fff;
          border-radius: 14px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.18);
          animation: asFloat 4s ease-in-out infinite;
        }
        .as-mvv-img-badge-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: linear-gradient(135deg, #083878, #1a6abf);
          display: flex; align-items: center; justify-content: center;
          font-size: 18px; color: #fff;
        }
        .as-mvv-img-badge-text { font-size: 13px; font-weight: 700; color: #083878; }

        /* text side */
        .as-mvv-text { flex: 1; min-width: 0; }

        .as-mvv-tab-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(8,56,120,0.08);
          color: #083878;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          padding: 7px 16px;
          border-radius: 40px;
          margin-bottom: 18px;
          border: 1px solid rgba(8,56,120,0.15);
        }

        .as-mvv-title {
          font-size: 36px;
          font-weight: 900;
          color: #0a0f1e;
          line-height: 1.2;
          margin-bottom: 18px;
        }

        .as-mvv-body {
          font-size: 16px;
          color: #4b5563;
          line-height: 1.85;
          margin-bottom: 28px;
        }

        .as-mvv-points {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .as-mvv-point {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: #1e293b;
          font-weight: 600;
        }
        .as-mvv-point svg { color: #083878; font-size: 15px; flex-shrink: 0; }

        .as-mvv-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          height: 48px;
          padding: 0 26px;
          background: linear-gradient(135deg, #083878, #1a6abf);
          color: #fff;
          font-size: 14.5px;
          font-weight: 700;
          font-family: 'Barlow', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          box-shadow: 0 6px 20px rgba(8,56,120,0.28);
        }
        .as-mvv-cta:hover { transform:translateY(-3px); box-shadow:0 12px 32px rgba(8,56,120,0.4); }
        .as-mvv-cta svg { transition: transform 0.25s ease; }
        .as-mvv-cta:hover svg { transform: translateX(4px); }

        /* ── TEAM SECTION ── */
        .as-team {
          width: 100%;
          background: #fff;
          padding: 90px 6% 100px;
          font-family: 'Barlow', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle grid bg */
        .as-team::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(8,56,120,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,56,120,0.03) 1px, transparent 1px);
          background-size: 52px 52px;
          pointer-events: none;
        }

        /* glowing orb */
        .as-team::after {
          content: '';
          position: absolute;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(8,56,120,0.05) 0%, transparent 65%);
          top: -200px; right: -200px;
          pointer-events: none;
        }

        .as-team-header {
          text-align: center;
          margin-bottom: 56px;
          position: relative;
          z-index: 1;
        }

        .as-team-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #083878;
          margin-bottom: 14px;
        }
        .as-team-eyebrow-line { width:32px; height:2px; background:#083878; border-radius:2px; }

        .as-team-heading {
          font-size: 44px;
          font-weight: 900;
          color: #0a0f1e;
          line-height: 1.18;
          margin-bottom: 14px;
        }
        .as-team-heading span {
          color: transparent;
          -webkit-text-stroke: 2px #083878;
          text-stroke: 2px #083878;
          display: inline-block;
        }

        .as-team-subtext {
          font-size: 16px;
          color: #6b7280;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* grid */
        .as-team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto 56px;
          position: relative;
          z-index: 1;
        }

        /* sleek details for degree & experience */
        .as-team-info-badges {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          border-left: 2px solid rgba(8, 56, 120, 0.15);
          padding-left: 10px;
          position: relative;
          z-index: 1;
        }
        .as-team-info-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: #4b5563;
        }
        .as-team-info-icon {
          color: #083878;
          font-size: 14px;
          flex-shrink: 0;
        }

        /* card */
        @keyframes asCardIn {
          from { opacity:0; transform:translateY(36px) scale(0.96); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }

        .as-team-card {
          background: #fff;
          border: 1.5px solid rgba(8,56,120,0.08);
          border-radius: 20px;
          padding: 32px 24px 28px;
          position: relative;
          overflow: hidden;
          cursor: default;
          opacity: 0;
          transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1),
                      box-shadow 0.32s ease,
                      border-color 0.32s ease;
        }

        .as-team-card.visible {
          animation: asCardIn 0.55s ease both;
        }

        .as-team-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 56px rgba(8,56,120,0.14);
          border-color: rgba(8,56,120,0.22);
        }

        /* top accent bar */
        .as-team-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #083878, #1a6abf);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
          border-radius: 20px 20px 0 0;
        }
        .as-team-card:hover::before { transform: scaleX(1); }

        /* bg glow on hover */
        .as-team-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(8,56,120,0.03) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.32s ease;
          pointer-events: none;
          border-radius: 20px;
        }
        .as-team-card:hover::after { opacity: 1; }

        /* icon */
        .as-team-icon-wrap {
          width: 64px; height: 64px;
          border-radius: 16px;
          background: rgba(8,56,120,0.07);
          border: 1.5px solid rgba(8,56,120,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          color: #083878;
          margin-bottom: 20px;
          transition: background 0.3s ease, transform 0.3s ease,
                      border-color 0.3s ease, color 0.3s ease;
          position: relative;
          z-index: 1;
        }
        .as-team-card:hover .as-team-icon-wrap {
          background: linear-gradient(135deg, #083878, #1a6abf);
          color: #fff;
          border-color: transparent;
          transform: rotate(-8deg) scale(1.1);
        }

        .as-team-role {
          font-size: 17px;
          font-weight: 800;
          color: #0a0f1e;
          margin-bottom: 10px;
          line-height: 1.3;
          position: relative;
          z-index: 1;
          transition: color 0.25s ease;
        }
        .as-team-card:hover .as-team-role { color: #083878; }

        .as-team-desc {
          font-size: 13.5px;
          color: #6b7280;
          line-height: 1.7;
          margin-bottom: 18px;
          position: relative;
          z-index: 1;
        }

        /* skill tags */
        .as-team-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          position: relative;
          z-index: 1;
        }
        .as-team-skill {
          font-size: 11.5px;
          font-weight: 700;
          color: #083878;
          background: rgba(8,56,120,0.07);
          border: 1px solid rgba(8,56,120,0.12);
          padding: 4px 10px;
          border-radius: 20px;
          letter-spacing: 0.2px;
          transition: background 0.22s ease, color 0.22s ease;
        }
        .as-team-card:hover .as-team-skill {
          background: rgba(8,56,120,0.12);
        }

        /* CTA row */
        .as-team-cta-row {
          display: flex;
          justify-content: center;
          position: relative;
          z-index: 1;
        }

        .as-team-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          height: 52px;
          padding: 0 32px;
          background: linear-gradient(135deg, #083878 0%, #1a6abf 100%);
          color: #fff;
          font-size: 15px;
          font-weight: 800;
          font-family: 'Barlow', sans-serif;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          box-shadow: 0 8px 28px rgba(8,56,120,0.32);
          letter-spacing: 0.3px;
        }
        .as-team-cta:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 44px rgba(8,56,120,0.44);
        }
        .as-team-cta svg { transition: transform 0.28s ease; }
        .as-team-cta:hover svg { transform: translateX(5px); }

        /* ── RESPONSIVE ── */
        @media (max-width: 1000px) {
          .as-intro-wrap { flex-direction: column; gap: 44px; }
          .as-intro-heading { font-size: 36px; }
          .as-mvv-panel { flex-direction: column; gap: 36px; }
          .as-mvv-heading { font-size: 34px; }
          .as-stats-grid { grid-template-columns: repeat(2, 1fr); }
          .as-team-grid { grid-template-columns: repeat(2, 1fr); }
          .as-team-heading { font-size: 34px; }
        }
        @media (max-width: 600px) {
          .as-intro { padding: 60px 20px; }
          .as-mvv { padding: 60px 20px; }
          .as-stats { padding: 36px 20px; }
          .as-team { padding: 60px 20px 70px; }
          .as-intro-heading { font-size: 26px; }
          .as-mvv-heading { font-size: 24px; }
          .as-mvv-title { font-size: 22px; }
          .as-mvv-img { height: 220px; }
          .as-stats-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
          .as-stat-val { font-size: 22px; }
          .as-intro-right { grid-template-columns: 1fr; }
          .as-img-tall { grid-row: auto; }
          .as-img-tall img { min-height: 200px; }
          .as-img-sm img { height: 150px; }
          .as-badge-float { left: 0; bottom: 0; position: relative; margin-top: 12px; }
          .as-team-grid { grid-template-columns: 1fr; }
          .as-team-heading { font-size: 24px; }
          .as-mvv-tab { padding: 10px 18px; font-size: 14px; }
        }
        @media (max-width: 380px) {
          .as-intro-heading { font-size: 22px; }
          .as-mvv-heading { font-size: 20px; }
          .as-stats-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── INTRO ── */}
      <section className="as-intro">
        <div className="as-intro-wrap">

          <div className="as-intro-left">
            <p className="as-eyebrow">About RiDeal Digital Seva</p>
            <h2 className="as-intro-heading">
              {data.title.includes("Technology") ? (
                <>
                  {data.title.replace("Technology", "")}
                  <br />
                  <span>Technology</span>
                </>
              ) : (
                data.title
              )}
            </h2>
            <p className="as-intro-desc">
              {data.content?.storyText || `RiDeal Digital Seva is a full-service IT company delivering innovative software solutions — ERP, CRM, HRMS, Web & App Development, Digital Marketing, and AI-powered automation. We help businesses of all sizes modernize operations, boost efficiency, and achieve sustainable growth. With 10+ years of experience and 500+ happy clients, we are committed to making technology work for you.`}
            </p>
            <a href="/contact" className="as-intro-btn">
              Work With Us <FaArrowRight />
            </a>
          </div>

          <div className="as-intro-right">
            <div className="as-img-tall">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="Team collaboration" />
            </div>
            <div className="as-img-sm">
              <img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop" alt="AI technology" />
            </div>
            <div className="as-img-sm">
              <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" alt="Digital solutions" />
            </div>
            <div className="as-badge-float">
              <div className="as-badge-icon">🚀</div>
              <div>
                <div className="as-badge-val">1000+</div>
                <div className="as-badge-lbl">Projects Delivered</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="as-stats">
        <div className="as-stats-grid">
          {STATS.map((s, i) => (
            <div className="as-stat-item" key={i}>
              <div className="as-stat-icon">{s.icon}</div>
              <div>
                <div className="as-stat-val">{s.value}</div>
                <div className="as-stat-lbl">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION / VISION / VALUES ── */}
      <section className="as-mvv">

        <div className="as-mvv-header">
          <div className="as-mvv-eyebrow">
            <span className="as-mvv-eyebrow-line" />
            Our Foundation
            <span className="as-mvv-eyebrow-line" />
          </div>
          <h2 className="as-mvv-heading">
            Mission, Vision &amp; <span>Values</span>
          </h2>
        </div>

        {/* clickable tabs */}
        <div className="as-mvv-tabs">
          {MVV.map(m => (
            <button
              key={m.id}
              className={`as-mvv-tab ${active === m.id ? "active" : ""}`}
              onClick={() => setActive(m.id)}
            >
              <span className="as-mvv-tab-icon">{m.icon}</span>
              {m.label}
            </button>
          ))}
        </div>

        {/* content panel — re-animates on tab change via key */}
        <div className="as-mvv-panel" key={active}>

          <div className="as-mvv-img-wrap">
            <img className="as-mvv-img" src={current.image} alt={current.label} />
            <div className="as-mvv-img-badge">
              <div className="as-mvv-img-badge-icon">{current.icon}</div>
              <div className="as-mvv-img-badge-text">{current.label}</div>
            </div>
          </div>

          <div className="as-mvv-text">
            <div className="as-mvv-tab-label">
              {current.icon} &nbsp; {current.label}
            </div>
            <h3 className="as-mvv-title">{current.heading}</h3>
            <p className="as-mvv-body">{getMvvBody(active)}</p>
            <div className="as-mvv-points">
              {current.points.map((p, i) => (
                <div className="as-mvv-point" key={i}>
                  <FaCheckCircle /> {p}
                </div>
              ))}
            </div>
            <a href="/contact" className="as-mvv-cta">
              Learn More <FaArrowRight />
            </a>
          </div>

        </div>
      </section>
      {/* ── TEAM SECTION ── */}
      <section className="as-team" ref={teamRef}>

        <div className="as-team-header">
          <div className="as-team-eyebrow">
            <span className="as-team-eyebrow-line" />
            Our Expertise
            <span className="as-team-eyebrow-line" />
          </div>
          <h2 className="as-team-heading">
            Meet Our <span>Expert Teams</span>
          </h2>
          <p className="as-team-subtext">
            Dedicated specialists across every discipline — working together to
            deliver world-class digital solutions for your business.
          </p>
        </div>

        <div className="as-team-grid">
          {TEAMS.map((t, i) => (
            <div
              key={i}
              className={`as-team-card ${teamVisible ? "visible" : ""}`}
              style={{ animationDelay: teamVisible ? `${i * 0.08}s` : "0s" }}
            >
              <div className="as-team-icon-wrap">{t.icon}</div>
              <h3 className="as-team-role">{t.role}</h3>
              
              {/* Sleek details for Degree & Experience */}
              <div className="as-team-info-badges">
                <div className="as-team-info-badge degree" title="Academic Qualification">
                  <FaGraduationCap className="as-team-info-icon" />
                  <span>{t.degree}</span>
                </div>
                <div className="as-team-info-badge experience" title="Professional Experience">
                  <FaBriefcase className="as-team-info-icon" />
                  <span>{t.experience}</span>
                </div>
              </div>

              <p className="as-team-desc">{t.desc}</p>
              <div className="as-team-skills">
                {t.skills.map((s, j) => (
                  <span key={j} className="as-team-skill">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="as-team-cta-row">
          <Link to="/contact" className="as-team-cta">
            Connect With Our Team <FaArrowRight />
          </Link>
        </div>

      </section>
    </>
  );
};

export default AboutSection;
