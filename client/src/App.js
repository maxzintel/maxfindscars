import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainContent from './components/MainContent';
import Post from './components/Post';
import GoogleAnalytics from './components/GoogleAnalytics';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from your existing API route
    fetch(`${process.env.REACT_APP_API_BASE_URL}/recentposts`)
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return (
    <Router>
      <GoogleAnalytics />
      <Routes>
        <Route path="/" element={<MainContent posts={posts} />} />
        <Route path="/posts/:slug/:postId" element={<Post />} />
      </Routes>
    </Router>
  );
};

export default App;
