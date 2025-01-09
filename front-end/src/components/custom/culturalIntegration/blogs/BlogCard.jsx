import { formatDate } from "@/utils/date";
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ postDetails, content, author, title }) => {
  console.log(postDetails);
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img
        src={content.find((item) => item.type === "image").content}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">
          {content.find((item) => item.type === "text")?.content.slice(0, 200)}
          {content.find((item) => item.type === "text")?.content.length > 200 &&
            "..."}
        </p>

        <div className="flex items-center space-x-4 mb-4">
          <img
            src={author?.profileImg}
            alt={author.fullname}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-medium text-gray-900">{author.fullname}</p>
            <p className="text-sm text-gray-500">
              {formatDate(postDetails?.createdAt)}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link to={`/culturalIntergretion/education/view-blog/${postDetails?._id}`}>
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
