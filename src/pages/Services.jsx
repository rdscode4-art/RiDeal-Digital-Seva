import Header from '../components/Header';
import ServicesHero from '../components/ServicesHero';
import Services from '../components/Services';
import Footer from '../components/Footer';import WhatsAppButton from '../components/WhatsAppButton';

const ServicesPage = () => {
  return (
    <>
      <Header />
      <ServicesHero />
      <Services layout="grid" />
       <WhatsAppButton />
      <Footer />
    </>
  );
};

export default ServicesPage;
