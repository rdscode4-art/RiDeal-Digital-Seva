import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;800&display=swap" rel="stylesheet" />
      <style>{`
        .ph-section {
          width: 100%;
          min-height: 55vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          background: #050505;
          overflow: hidden;
          padding: 100px 20px 40px;
        }

        .ph-bg-gradient {
          position: absolute;
          width: 60vw;
          height: 60vw;
          background: radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%);
          top: -20%;
          left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
          z-index: 1;
        }

        .ph-content {
          position: relative;
          z-index: 2;
          text-align: center;
          max-width: 800px;
        }

        .ph-badge {
          display: inline-block;
          padding: 8px 16px;
          border-radius: 50px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #a5b4fc;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 24px;
          backdrop-filter: blur(10px);
        }

        .ph-title {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          margin-bottom: 24px;
          letter-spacing: -0.03em;
        }

        .ph-title-highlight {
          background: linear-gradient(135deg, rgba(10, 15, 30, 0.92) 0%, rgba(10, 15, 30, 0.75) 60%, rgba(37, 99, 235, 0.40) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ph-subtitle {
          font-size: 1.1rem;
          color: #9ca3af;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>

      <section className="ph-section">
        <div className="ph-bg-gradient" />
        
        <motion.div 
          className="ph-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="ph-badge">Our Works</span>
          </motion.div>
          
          <motion.h1 className="ph-title" variants={itemVariants}>
            Crafting Digital <br />
            <span className="ph-title-highlight">Masterpieces</span>
          </motion.h1>
          
          <motion.p className="ph-subtitle" variants={itemVariants}>
            Explore our curated collection of innovative projects, beautiful interfaces, and robust applications that solve real-world problems.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default PortfolioHero;
