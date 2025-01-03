import React from "react";

const RelatedPosts = ({ posts }) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h4 className="font-semibold mb-2">{post.title}</h4>
              <p className="text-gray-600 text-sm">{post.excerpt}</p>
              <button className="text-blue-600 hover:text-blue-800 text-sm mt-2">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
