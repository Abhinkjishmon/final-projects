import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  console.log(post)
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>

        <div className="flex items-center space-x-4 mb-4">
          <img
            src={post?.authorImage}
            alt={post?.author}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">{post?.author}</p>
            <p className="text-sm text-gray-500">{post?.date}</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{post?.readTime}</span>
          <Link to={"/culturalIntergretion/education/view-blog"}>
            <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
              Read More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
