// RecentPosts.js
import React from 'react';
import { Link } from 'react-router-dom';

const RecentPosts = ({ posts }) => {
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December',
    ];
    const monthName = monthNames[date.getMonth()];
    return `${monthName} ${date.getDate()}, ${date.getFullYear()}`;
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-3">RECENTLY FOUND CARS:</h3>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-4 pb-4 border-b border-gray-300">
            <Link to={{ pathname: `/posts/${post.slug}/${post.id}`}}>
              <p className="text-sm font-semibold">{formatDate(post.publish_date)}</p>
              <h4 className="text-lg font-semibold">{post.title}</h4>
              <p className="text-sm">{post.preview_text}</p>
            </Link>
          </div>
        ))
      ) : (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '10vh',
        }}>
          <img src='./logos/13.gif' alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
