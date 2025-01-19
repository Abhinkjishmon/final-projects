import React, { useEffect } from "react";
import { BlogCard } from "../..";


const BlogSection = ({ title, description, image, blogPosts }) => {
  return (
    <section className="py-16">
      <div className={`flex flex-col gap-8 mb-12`}>
        <div className="flex-1">
          <div className="max-w">
            <div className="flex items-center gap-3 mb-4">
              <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={image}
            alt={title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {blogPosts?.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            content={post.content}
            author={post.author}
            postDetails={post}
          />
        ))}
      </div>
    </section>
  );
};
export default BlogSection;
