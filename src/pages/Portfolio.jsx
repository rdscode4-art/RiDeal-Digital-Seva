import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PortfolioHero from '../components/PortfolioHero';
import PortfolioSection from '../components/PortfolioSection';
import StaticSocialMedia from '../components/staticsocialmedia/StaticSocialMedia';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | RiDeal Digital Seva — Our Recent Works</title>
        <meta
          name="description"
          content="Explore RiDeal Digital Seva ka premium portfolio — web development, e-commerce, mobile apps aur AI projects. Real clients ke liye real solutions."
        />
        <meta property="og:title" content="Portfolio | RiDeal Digital Seva" />
        <meta property="og:description" content="Hamara kaam dekhiye — websites, apps aur digital solutions jo brands ko aage lekar jaate hain." />
      </Helmet>

      <Header />

      <main style={{ background: '#111111', color: '#ffffff', overflowX: 'hidden' }}>
        <PortfolioHero />
        <StaticSocialMedia />
        <PortfolioSection />
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
