import React from 'react';
import HomePage from '../Components/Post/IndexPosts';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>


      <section id="gallery-single" className="gallery-single" style={{ marginTop: '100px' }}>
        <div className="container">
          <div className="row justify-content-between gy-4 mt-4">

            <div className="col-lg-8 custom-scrollbar" style={{ overflowY: 'auto', maxHeight: '800px' }}>
              <HomePage />
            </div>
            <div className="col-lg-4">
              <div className="container" style={{ display: 'flex' }}>
                <div className="portfolio-info">
                  <h3>Create a post with what you're thinking</h3>
                  <ul>
                    <li><strong>write</strong> <span>Do you want to write something?</span></li>
                    <li><strong>User Name</strong> <span>Abdulrahman</span></li>
                    <li><strong>Post date</strong> <span>{new Date().toLocaleDateString()}</span></li>
                    <li><strong>Email</strong> <a href="#">www.example.com</a></li>
                    <li><Link to="/addpost" className="btn-visit align-self-start">Create New Post</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}

export default Home;
