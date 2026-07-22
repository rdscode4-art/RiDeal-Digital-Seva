import Header from '../components/Header';
import BlogHero from '../components/BlogHero';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import StaticSocialMedia from '../components/staticsocialmedia/StaticSocialMedia';

const Blog = () => {
  return (
    <>
      <Header />
      <BlogHero/>
      <StaticSocialMedia/>
      <BlogSection/>
      <Footer />
    </>
  );
};

export default Blog;
