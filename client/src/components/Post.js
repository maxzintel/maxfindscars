import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Not yet working.
const Post = () => {
  const [post, setPost] = useState(null);
  const { slug, postId } = useParams();

  useEffect(() => {
    fetch(`/api/posts/${slug}/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data.post));
  }, [slug, postId]);

  return (
    <div>
      {post ? (
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.content.free.web }}></div>
        </div>
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
        }}>
          <img src='./img/13.gif' alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Post;
