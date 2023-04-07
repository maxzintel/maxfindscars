import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Post = () => {
  const [post, setPost] = useState(null);
  const { slug, postId } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/posts/${slug}/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data.post));
  }, [slug, postId]);

  return (
    <div>
      <Header />
      {post ? (
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content.free.web }}></div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '30vh',
        }}>
          <img src={`${process.env.PUBLIC_URL}/logos/13.gif`} alt="Loading" />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Post;
