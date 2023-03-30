// RecentPosts.js
import React from 'react';

const RecentPosts = ({ posts }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-3">RECENTLY FOUND CARS:</h3>
      {posts && posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.id} className="mb-4">
            <h4 className="text-lg font-semibold">{post.title}</h4>
            <p className="text-sm">Posted on: {post.date}</p>
          </div>
        ))
      ) : (
        <div className="mb-4">
          <h4 className="text-lg font-semibold">DONT LOOK HERE</h4>
          <p className="text-sm">Max has not finished coding this feature.</p>
        </div>
      )}
    </div>
  );
};

export default RecentPosts;
