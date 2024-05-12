import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <section id="hero" className="hero d-flex flex-column justify-content-center align-items-center" data-aos="fade" data-aos-delay="1500">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h2>I'm <span>Abdulrahman Sraqbi</span> From beautiful green Syria</h2>
              <p>This is the first task in React, which is a web application that is responsive to all screens in order to view, add, modify, and delete posts.</p>
              <a href="#" className="btn-get-started">Check out the app</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

