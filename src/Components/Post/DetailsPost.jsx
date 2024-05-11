

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function PostDetailsPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  return (
    <>
      <h1 className="text-center" style={{ color: 'darkgreen', marginTop: '100px' }}>Post Details</h1>

      <section id="gallery-single" className="gallery-single">
        <div className="container">
          <div className="row justify-content-between gy-4 mt-4">
            <div className="col-lg-12">
              <div className="portfolio-description center" >
                {post ? (
                  <div style={{ width: '80%', margin: 'auto', marginTop: '50px' }} className="testimonial-item">
                    <h2>{post.title}</h2>
                    <p>
                      <i className="bi bi-quote quote-icon-left"></i>
                      {post.body}
                      <i className="bi bi-quote quote-icon-right"></i>
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <img src="../../assets/img/images.png" className="testimonial-img" alt="" />
                        <h3>Abdulrahaman</h3>
                        <h4>Programmer</h4>
                      </div>
                      <div className="col-lg-6" style={{ marginTop: '20px' }}>
                        <Link to={`/updatepost/${post.id}`}>
                          <button className="btn btn-primary">Update Post</button>
                        </Link> 
                        <Link to={`/deletepost/${post.id}`}>
                          <button className="btn btn-danger">Delete Post</button>
                        </Link>
                      </div>

                    </div>

                  </div>
                ) : (
                  <p>Loading post details...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostDetailsPage;
