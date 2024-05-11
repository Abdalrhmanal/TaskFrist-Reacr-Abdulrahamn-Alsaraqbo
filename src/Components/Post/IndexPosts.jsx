
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <>

      <div className="col-lg-12">
        <div className="portfolio-description center" >
          {posts.map(post => (
            <Link to={`/detailspost/${post.id}`}>
            <div key={post.id} className="testimonial-item">
              <h2>{post.title}</h2>
              <p>
                <i className="bi bi-quote quote-icon-left"></i>
                {post.body}
                <i className="bi bi-quote quote-icon-right"></i>
              </p>
              <div>
                <img src="assets/img/images.png" className="testimonial-img" alt="" />
                <h3>Abdulrahaman</h3>
                <h4>Programmer</h4>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>

    </>
  );
}

export default HomePage;

