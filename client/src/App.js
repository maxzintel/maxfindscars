import React, { useState, useEffect } from 'react';
import MainContent from './components/MainContent';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the posts from your existing API route
    fetch('/')
      .then((response) => response.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return <MainContent posts={posts} />;
};

export default App;
