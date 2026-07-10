import Header from '../components/Header';
import ServicesHero from '../components/ServicesHero';
import Services from '../components/Services';
import Footer from '../components/Footer';
import StaticSocialMedia from '../components/staticsocialmedia/StaticSocialMedia';

const ServicesPage = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <StaticSocialMedia />
      <Services layout="grid" />
      <Footer />
    </>
  );
};

export default ServicesPage;
