import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Marquee from '../components/Marque';
import WhyChooseUs from '../components/ChooseUs';
import WorkingProcess from '../components/WorkingProcess';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Marquee />
      <Services />
      <WhyChooseUs />
      <WorkingProcess />
      <Newsletter />
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Home;
