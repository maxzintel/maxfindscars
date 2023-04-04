import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import Post from './components/Post';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from your existing API route
    fetch('/recentposts')
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainContent posts={posts} />} />
        <Route path="/posts/:slug" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
