import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// Not yet working.
const Post = () => {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const location = useLocation();
  const postId = location.state.postId;

  useEffect(() => {
    fetch(`/posts/${slug}/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data.post));
  }, [slug, postId]);

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content.free.web}</p>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Post;
