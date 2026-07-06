import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import ServicesPage from './pages/Services';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Certifications from './pages/Certifications';
import Branches from './pages/Branches';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/about"    element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/blog"     element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
