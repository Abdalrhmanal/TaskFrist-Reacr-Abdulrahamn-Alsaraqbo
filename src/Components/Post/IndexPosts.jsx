
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading posts...</div>;
  }
  return (
    <>

      <div className="col-lg-12">
        <div className="portfolio-description center" >
          {posts.map(post => (
            <div key={post.id} className="testimonial-item">
              <Link to={`/detailspost/${post.id}`}>

                <h2>{post.title}</h2>
                <p>
                  <i className="bi bi-quote quote-icon-left"></i>
                  {post.body}
                  <i className="bi bi-quote quote-icon-right"></i>
                </p>
              </Link>
              <div className="row">
                <div className="col-lg-6">
                  <img src="assets/img/images.png" className="testimonial-img" alt="" />
                  <h3>Abdulrahaman</h3>
                  <h4>Programmer</h4>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col text-end" style={{ marginTop: '35px' }}>
                      <p onClick={() => setPosts(posts => posts.map(p => p.id === post.id ? { ...p, liked: !p.liked } : p))}>
                        <Link> likes {post.liked ? 1 : 0} <i className={`bi bi-heart-fill ${post.liked ? 'text-danger glow' : ''}`}></i></Link>
                      </p>
                    </div>
                    <div className="col text-end" style={{ marginTop: '35px' }}>
                      <Link to={`/detailspost/${post.id}`}>
                        <p>comments <i className="bi bi-chat"></i></p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}

export default HomePage;

