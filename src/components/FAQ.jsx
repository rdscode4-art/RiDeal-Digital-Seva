import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQS = [
  {
    question: "What types of software development services do you offer?",
    answer: "We specialize in custom web development, mobile app development, CRM/ERP solutions, and enterprise software. Our team uses modern tech stacks like React, Node.js, and Python to build scalable digital products."
  },
  {
    question: "How long does it typically take to build a custom website?",
    answer: "The timeline depends on the complexity of the project. A standard business website can take 2-4 weeks, while a complex custom web application or e-commerce platform might take 8-12 weeks."
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes! We offer comprehensive maintenance and support packages to ensure your software remains secure, up-to-date, and optimized for performance long after the initial launch."
  },
  {
    question: "Can you help improve my existing website's SEO?",
    answer: "Absolutely. Our digital marketing experts provide complete SEO audits, on-page optimization, technical SEO fixes, and link-building strategies to significantly boost your search engine rankings."
  },
  {
    question: "Are your digital solutions scalable as my business grows?",
    answer: "Yes, scalability is a core principle in our development process. We utilize cloud infrastructure and modular architectures so your software can easily handle increased traffic and new feature integrations in the future."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <style>{`
        .faq-section {
          padding: 80px 6%;
          background: #f8fafc;
          font-family: 'Barlow', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .faq-header {
          text-align: center;
          max-width: 700px;
          margin-bottom: 50px;
        }

        .faq-tag {
          color: #3b82f6;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-block;
        }

        .faq-title {
          font-size: 42px;
          font-weight: 800;
          color: #1e293b;
          line-height: 1.2;
          margin-bottom: 16px;
        }

        .faq-subtitle {
          font-size: 17px;
          color: #64748b;
          line-height: 1.6;
        }

        .faq-container {
          width: 100%;
          max-width: 850px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item.open {
          border-color: #3b82f6;
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
        }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 28px;
          background: none;
          border: none;
          font-size: 18px;
          font-weight: 700;
          color: #1e293b;
          cursor: pointer;
          text-align: left;
          font-family: 'Barlow', sans-serif;
          transition: color 0.3s ease;
        }

        .faq-question:hover {
          color: #3b82f6;
        }

        .faq-icon {
          color: #3b82f6;
          font-size: 16px;
          transition: transform 0.4s ease;
          flex-shrink: 0;
          margin-left: 16px;
        }

        .faq-item.open .faq-icon {
          transform: rotate(180deg);
        }

        .faq-answer-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .faq-item.open .faq-answer-wrapper {
          max-height: 200px;
        }

        .faq-answer {
          padding: 0 28px 24px;
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .faq-title { font-size: 32px; }
          .faq-question { padding: 20px; font-size: 16px; }
          .faq-answer { padding: 0 20px 20px; }
        }
      `}</style>

      <div className="faq-header">
        <span className="faq-tag">Got Questions?</span>
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">Everything you need to know about our digital IT solutions, software services, and development processes.</p>
      </div>

      <div className="faq-container">
        {FAQS.map((faq, index) => (
          <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <FaChevronDown className="faq-icon" />
            </button>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
