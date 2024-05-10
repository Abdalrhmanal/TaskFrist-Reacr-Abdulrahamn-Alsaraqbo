import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home';
import Hedar from './layout/Headar';
import Footer from './layout/Footer';
import AddPage from './Components/Post/AddPage';
import PostDetailsPage from './Components/Post/PostDetailsPage';
import UpdatePage from './Components/Post/UpdatePage';
import DeletePage from './Components/Post/DeletePage.jsx';


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

      </Routes>
      {/* footer */}
      <Footer />
    </Router>
  );
}

export default App;
