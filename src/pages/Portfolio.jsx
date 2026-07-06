import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShowcaseHero from '../components/showcase/ShowcaseHero';
import ShowcasePortfolio from '../components/showcase/ShowcasePortfolio';
import ShowcaseServices from '../components/showcase/ShowcaseServices';
import ShowcaseWhyUs from '../components/showcase/ShowcaseWhyUs';
import ShowcaseTestimonials from '../components/showcase/ShowcaseTestimonials';
import ShowcaseTechStack from '../components/showcase/ShowcaseTechStack';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio & Services | RiDeal Digital Seva</title>
        <meta name="description" content="Explore our premium portfolio of projects and services. We build AI-powered digital experiences for future businesses." />
      </Helmet>

      <Header />

      <main className="showcase-main" style={{ background: '#051432', color: '#ffffff', overflowX: 'hidden' }}>
        <ShowcaseHero />
        <ShowcasePortfolio />
        <ShowcaseServices />
        <ShowcaseWhyUs />
        <ShowcaseTestimonials />
        <ShowcaseTechStack />
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
