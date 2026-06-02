import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import BlogDetailsHero from "../components/BlogDetailsHero";
import BlogDetailsSection from "../components/BlogDetailsSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { BLOG_POSTS } from "../data/blogData";

const BlogDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Blog post not found in DB");
        return res.json();
      })
      .then(data => {
        setPost(data);
      })
      .catch(err => {
        console.error("Error fetching dynamic blog details, checking static fallback:", err);
        const fallback = BLOG_POSTS.find(p => p.id === parseInt(id, 10));
        setPost(fallback);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div style={{
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Barlow', sans-serif",
          background: "#f5f7fc"
        }}>
          <h2 style={{ color: "#083878", fontWeight: 700 }}>Loading Article Details...</h2>
        </div>
        <Footer />
      </>
    );
  }

  // If post doesn't exist, show a clean, friendly fallback
  if (!post) {
    return (
      <>
        <Header />
        <div style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Barlow', sans-serif",
          background: "#f5f7fc",
          padding: "80px 24px",
          textAlign: "center"
        }}>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "#0a0f1e", marginBottom: "16px" }}>
            Post Not Found
          </h2>
          <p style={{ color: "#6b7280", fontSize: "16px", marginBottom: "28px", maxWidth: "480px" }}>
            The blog article you are looking for might have been moved, removed, or is temporarily unavailable.
          </p>
          <Link to="/blog" style={{
            display: "inline-flex",
            alignItems: "center",
            height: "48px",
            padding: "0 28px",
            background: "linear-gradient(135deg, #083878, #1a6abf)",
            color: "#fff",
            fontWeight: 700,
            borderRadius: "50px",
            textDecoration: "none",
            boxShadow: "0 6px 18px rgba(8,56,120,0.2)"
          }}>
            Back to Blogs
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <BlogDetailsHero post={post} />
      <BlogDetailsSection post={post} />
      <WhatsAppButton />
      <Footer />
    </>
  );
};

export default BlogDetails;
