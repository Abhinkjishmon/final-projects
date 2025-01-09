import React, { useState } from "react";
import BlogCard from "./BlogCard";

export const moreBlogPosts = [
  {
    title: "Modern Teaching Methods in UK",
    excerpt:
      "How British schools are adapting to 21st-century educational needs.",
    author: "Dr. Michael Chen",
    authorImage:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    date: "2024-03-01",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "International Student Experience",
    excerpt:
      "Navigate the journey of studying in British institutions as an international student.",
    author: "Lisa Martinez",
    authorImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    date: "2024-02-28",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=500",
  },
];
const BlogSection = ({ blogs }) => {
  const [posts, setPosts] = useState(blogs.slice(0, 3));
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMore = () => {
    setPosts([...posts, ...blogs.slice(3)]);
    setShowLoadMore(false);
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Educational Insights
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {posts?.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            content={post.content}
            author={post.author}
            postDetails={post}
          />
        ))}
      </div>
      {showLoadMore && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Load More Articles
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
