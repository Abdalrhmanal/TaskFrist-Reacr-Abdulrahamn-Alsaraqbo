import React from 'react';
import { Link } from 'react-router-dom';

function Hedar() {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center  me-auto me-lg-0">
            <i className="bi bi-camera"></i>
            <h1>Posts</h1>
          </Link>

          <nav id="navbar" className="navbar">
            <ul>
              <li><Link to="/" classNameName="active">Home</Link></li>
              <li><a href="#">About</a></li>
              <li><Link to="/addpost">Add Post</Link></li>
              <li className="dropdown"><a href="#"><span>Config</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                <ul>
                  <li><Link to="/settings">Settings</Link></li>
                  <li><Link to="/profile">Profile</Link></li>
                  <hr />
                  <li><Link to="/logout">Logout</Link></li>
                </ul>
              </li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>

          <div className="header-social-links">
            <a href="https://twitter.com/AbdulrhmanSR51?t=MKMszXra3s-Hen1GeIejYQ&s=09" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100060889084046&mibextid=ZbWKwL" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagrsm.com" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="#https://www.linkedin.com/in/abdulrahman-al-saraqbi-7b91b5240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="linkedin"><i className="bi bi-linkedin"></i></a>
        </div>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

      </div>
    </header >
    </>
  );
};

export default Hedar;

