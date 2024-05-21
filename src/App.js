import React from 'react';
import './App.css';
import Login from './components/Login';
import Blogs from './components/Blogs';
import AddBlogs from './components/AddBlogs';
import SingleBlog from './components/SingleBlog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>


    <Router>

      <Routes>

        <Route path="/" element={<Login/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<SingleBlog/>}/>
        <Route path="/addblogs" element={<AddBlogs/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;
