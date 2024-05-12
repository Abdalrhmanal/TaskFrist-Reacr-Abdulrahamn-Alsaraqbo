import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Hedar from './layout/Headar';
import Footer from './layout/Footer';
import AddPage from './Components/Post/CreatePost.jsx';
import PostDetailsPage from './Components/Post/DetailsPost.jsx';
import UpdatePage from './Components/Post/UpdatePost.jsx';
import DeletePage from './Components/Post/DeletePost.jsx';
import Contact from './layout/Contact';
import About from './Home/About';

function App() {
  return (
    <Router>
      <Hedar />
      <Routes>
        // git All Posts
        <Route path="/" element={<>
          <Home />
        </>} />
        // create new post
        <Route path="/addpost" element={<>
          <AddPage />
        </>} />
        // get post details by id
        <Route path="/detailspost/:id" element={<>
          <PostDetailsPage />
        </>} />
        // update post by id
        <Route path="/updatepost/:id" element={<>
          <UpdatePage />
        </>} />
        // delete post by id
        <Route path="/deletepost/:id" element={<>
          <DeletePage />
        </>} />
        // contact page
        <Route path="/contact" element={<>
          <Contact />
        </>} />
        // about page
        <Route path="/about" element={<>
          <About />
        </>} />
      </Routes>
      {/* footer */}
      <Footer />
    </Router>
  );
}

export default App;
