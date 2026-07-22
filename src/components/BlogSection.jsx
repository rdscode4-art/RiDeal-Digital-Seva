import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaCalendarAlt, FaUser, FaClock, FaArrowRight } from "react-icons/fa";
import { BLOG_POSTS, CATEGORIES } from "../data/blogData";

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          setPosts(BLOG_POSTS);
        }
      })
      .catch(err => {
        console.error("Error loading dynamic blogs, falling back to static:", err);
        setPosts(BLOG_POSTS);
      })
      .finally(() => setLoading(false));
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = posts.filter(post => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Find the featured post that fits the current filters
  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const otherPosts = filteredPosts.filter(p => p.id !== (featuredPost ? featuredPost.id : null));

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "100px 20px", background: "#f5f7fc", fontFamily: "'Barlow', sans-serif" }}>
        <h2 style={{ color: "#2563eb", fontWeight: 700 }}>Loading Articles...</h2>
      </div>
    );
  }

  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        /* ── SECTION CONTAINER ── */
        .bl-sec {
          width: 100%;
          padding: 60px 0 90px;
          background: #f5f7fc;
          font-family: 'Barlow', sans-serif;
        }

        .bl-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 6%;
        }

        /* ── FILTERS & SEARCH ROW ── */
        .bl-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        /* Search input */
        .bl-search-box {
          position: relative;
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 320px;
          background: #fff;
          border: 1.5px solid rgba(37, 99, 235,0.15);
          border-radius: 50px;
          padding: 2px 6px 2px 18px;
          box-shadow: 0 4px 16px rgba(37, 99, 235,0.03);
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .bl-search-box:focus-within {
          border-color: #2563eb;
          box-shadow: 0 6px 20px rgba(37, 99, 235,0.1);
        }
        .bl-search-box input {
          border: none;
          outline: none;
          padding: 10px 0;
          font-size: 14px;
          color: #2563eb;
          font-weight: 500;
          width: 100%;
          font-family: 'Barlow', sans-serif;
        }
        .bl-search-box input::placeholder {
          color: rgba(37, 99, 235,0.4);
        }
        .bl-search-icon {
          color: #2563eb;
          margin-right: 12px;
          font-size: 14px;
        }

        /* Categories List */
        .bl-categories {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding: 4px 0;
          scrollbar-width: none; /* Firefox */
        }
        .bl-categories::-webkit-scrollbar {
          display: none; /* Safari & Chrome */
        }
        .bl-cat-pill {
          background: #fff;
          border: 1.5px solid rgba(37, 99, 235,0.12);
          color: #4b5563;
          padding: 8px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          white-space: nowrap;
          transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease, transform 0.2s ease;
        }
        .bl-cat-pill:hover {
          color: #2563eb;
          border-color: #2563eb;
          transform: translateY(-1px);
        }
        .bl-cat-pill.active {
          background: #2563eb;
          border-color: #2563eb;
          color: #fff;
          box-shadow: 0 6px 18px rgba(37, 99, 235,0.22);
        }

        /* ── FEATURED BLOG CARD ── */
        .bl-featured-card {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
          margin-bottom: 48px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #eef1f6;
        }
        .bl-featured-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 45px rgba(37, 99, 235,0.12);
        }

        .bl-feat-imgbox {
          position: relative;
          min-height: 340px;
          overflow: hidden;
        }
        .bl-feat-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .bl-featured-card:hover .bl-feat-img {
          transform: scale(1.05);
        }
        .bl-feat-badge {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #2563eb;
          color: #fff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 16px;
          border-radius: 30px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        .bl-feat-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
        }
        .bl-feat-meta {
          display: flex;
          gap: 20px;
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          flex-wrap: wrap;
        }
        .bl-meta-icon {
          color: #2563eb;
          margin-right: 6px;
        }
        .bl-feat-title {
          font-size: 28px;
          font-weight: 800;
          color: #0a0f1e;
          line-height: 1.25;
          margin: 0;
          transition: color 0.2s ease;
        }
        .bl-featured-card:hover .bl-feat-title {
          color: #2563eb;
        }
        .bl-feat-desc {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.7;
          margin: 0;
        }
        .bl-read-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #2563eb;
          font-weight: 700;
          font-size: 14.5px;
          text-decoration: none;
          margin-top: 8px;
          width: fit-content;
          transition: gap 0.25s ease;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .bl-read-btn:hover {
          gap: 12px;
          color: #2563eb;
        }

        /* ── BLOG GRID ── */
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 30px;
        }

        .bl-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0,0,0,0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #eef1f6;
          display: flex;
          flex-direction: column;
        }
        .bl-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(37, 99, 235,0.1);
        }

        .bl-card-imgbox {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        .bl-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s ease;
        }
        .bl-card:hover .bl-card-img {
          transform: scale(1.05);
        }
        .bl-card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          background: rgba(255,255,255,0.95);
          color: #2563eb;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }

        .bl-card-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }
        .bl-card-meta {
          display: flex;
          gap: 14px;
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
        }
        .bl-card-title {
          font-size: 19px;
          font-weight: 800;
          color: #0a0f1e;
          line-height: 1.35;
          margin: 0;
          transition: color 0.2s ease;
        }
        .bl-card:hover .bl-card-title {
          color: #2563eb;
        }
        .bl-card-desc {
          font-size: 13.5px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0;
        }

        /* ── NO RESULTS ── */
        .bl-no-results {
          text-align: center;
          padding: 60px 20px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.04);
        }
        .bl-no-results h3 {
          font-size: 22px;
          font-weight: 700;
          color: #0a0f1e;
          margin-bottom: 8px;
        }
        .bl-no-results p {
          color: #6b7280;
          margin-bottom: 20px;
        }
        .bl-reset-btn {
          background: #2563eb;
          color: #fff;
          border: none;
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .bl-reset-btn:hover {
          background: #2563eb;
        }

        /* ── RESPONSIVE DESIGN ── */
        @media (max-width: 900px) {
          .bl-featured-card {
            grid-template-columns: 1fr;
          }
          .bl-feat-imgbox {
            min-height: 250px;
          }
          .bl-feat-content {
            padding: 30px;
          }
          .bl-feat-title {
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .bl-controls {
            flex-direction: column;
            align-items: stretch;
            gap: 16px;
          }
          .bl-search-box {
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .bl-sec {
            padding: 40px 0 60px;
          }
        }
      `}</style>

      <section className="bl-sec">
        <div className="bl-container">
          
          {/* Controls Row */}
          <div className="bl-controls">
            
            {/* Category selection */}
            <div className="bl-categories">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`bl-cat-pill ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="bl-search-box">
              <FaSearch className="bl-search-icon" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>

          </div>

          {/* Featured Post */}
          {filteredPosts.length > 0 ? (
            <>
              {featuredPost && (
                <div className="bl-featured-card">
                  <div className="bl-feat-imgbox">
                    <img src={featuredPost.image} alt={featuredPost.title} className="bl-feat-img" />
                    <span className="bl-feat-badge">{featuredPost.category}</span>
                  </div>
                  <div className="bl-feat-content">
                    <div className="bl-feat-meta">
                      <span><FaUser className="bl-meta-icon" /> {featuredPost.author}</span>
                      <span><FaCalendarAlt className="bl-meta-icon" /> {featuredPost.date}</span>
                      <span><FaClock className="bl-meta-icon" /> {featuredPost.readTime}</span>
                    </div>
                    <h2 className="bl-feat-title">{featuredPost.title}</h2>
                    <p className="bl-feat-desc">{featuredPost.excerpt}</p>
                    <Link to={`/blog/${featuredPost.id}`} className="bl-read-btn">
                      Read Full Article <FaArrowRight />
                    </Link>
                  </div>
                </div>
              )}

              {/* Grid of Other Posts */}
              {otherPosts.length > 0 && (
                <div className="bl-grid">
                  {otherPosts.map(post => (
                    <article className="bl-card" key={post.id}>
                      <div className="bl-card-imgbox">
                        <img src={post.image} alt={post.title} className="bl-card-img" />
                        <span className="bl-card-badge">{post.category}</span>
                      </div>
                      <div className="bl-card-content">
                        <div className="bl-card-meta">
                          <span><FaCalendarAlt className="bl-meta-icon" /> {post.date}</span>
                          <span><FaClock className="bl-meta-icon" /> {post.readTime}</span>
                        </div>
                        <h3 className="bl-card-title">{post.title}</h3>
                        <p className="bl-card-desc">{post.excerpt}</p>
                        <Link to={`/blog/${post.id}`} className="bl-read-btn">
                          Read More <FaArrowRight />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* No Results Found */
            <div className="bl-no-results">
              <h3>No Articles Found</h3>
              <p>We couldn't find any articles matching your search query: "{searchQuery}"</p>
              <button className="bl-reset-btn" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                Clear Filters & Search
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  );
};

export default BlogSection;
