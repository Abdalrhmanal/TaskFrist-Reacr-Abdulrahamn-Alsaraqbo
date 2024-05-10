import React from 'react';
import HomePage from '../Components/Post/HomePage';

function Home() {
  return (
    <>
      <main id="main" data-aos="fade" data-aos-delay="1500">
        <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>I'm <span>Jenny Wilson</span> a Professional Photographer from New York City</h2>
                <p>Blanditiis praesentium aliquam illum tempore incidunt debitis dolorem magni est deserunt sed qui libero. Qui voluptas amet.</p>
                <a href="contact.html" className="btn-get-started">Available for hire</a>
              </div>
            </div>
          </div>
        </section>
        <section id="gallery-single" className="gallery-single">
          <div className="container">
            <div className="row justify-content-between gy-4 mt-4">

              <div className="col-lg-8 custom-scrollbar" style={{ overflowY: 'auto', maxHeight: '800px' }}>
                <HomePage />
              </div>
              <div className="col-lg-4">
                <div className="container" style={{ display: 'flex' }}>
                  <div className="portfolio-info">
                    <h3>Project information</h3>
                    <ul>
                      <li><strong>Category</strong> <span>Nature Photography</span></li>
                      <li><strong>Client</strong> <span>ASU Company</span></li>
                      <li><strong>Project date</strong> <span>01 March, 2022</span></li>
                      <li><strong>Project URL</strong> <a href="#">www.example.com</a></li>
                      <li><a href="#" className="btn-visit align-self-start">Visit Website</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <a href="#" className="scroll-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
      </main>
    </>
  );
}

export default Home;
