import React from "react";
import { Heart, Clock } from "lucide-react";

function BlogCard({ blog, onLikeToggle }) {
  const {
    id,
    title,
    excerpt,
    author,
    coverImage,
    publishedDate,
    readTime,
    likes,
    isLiked,
  } = blog;

  const formattedDate = new Date(publishedDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-medium text-gray-900">{author.name}</p>
            <p className="text-sm text-gray-500">{formattedDate}</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
          <button
            onClick={() => onLikeToggle?.(id)}
            className="flex items-center space-x-1 group"
          >
            <Heart
              className={`w-4 h-4 ${
                isLiked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-400 group-hover:text-red-500"
              }`}
            />
            <span>{likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
