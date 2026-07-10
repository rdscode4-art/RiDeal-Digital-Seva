import Header from '../components/Header';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import HomeServices from '../components/HomeServices';
import Marquee from '../components/Marque';
import ValueMatrix from '../components/ValueMatrix';
import SimpleSteps from '../components/SimpleSteps';
import ProductivityBanner from '../components/ProductivityBanner';
import Footer from '../components/Footer';
import StaticSocialMedia from '../components/staticsocialmedia/StaticSocialMedia';
import Testimonial from '../components/Testimonial';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <StaticSocialMedia />
      <Stats />
      <Marquee />
      <HomeServices />
      <ValueMatrix />
      <SimpleSteps />
      <Testimonial />
      <FAQ />
      <ProductivityBanner />
      <Footer />
    </>
  );
};

export default Home;
