import React, { useState } from "react";
import BlogCard from "./BlogCard";

 const initialBlogPosts = [
  {
    title: "British Academic Traditions",
    excerpt:
      "Explore the rich traditions that make British education unique, from formal halls to academic dress.",
    author: "Dr. Sarah Thompson",
    authorImage:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    date: "2024-03-15",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "Student Life in British Universities",
    excerpt:
      "Experience the vibrant campus culture, societies, and social life in UK universities.",
    author: "Prof. James Wilson",
    authorImage:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    date: "2024-03-10",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&q=80&w=500",
  },
  {
    title: "The British Boarding School Experience",
    excerpt:
      "Inside look at the unique culture and traditions of British boarding schools.",
    author: "Emma Roberts",
    authorImage:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    date: "2024-03-05",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500",
  },
];

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
const BlogSection = () => {
  const [posts, setPosts] = useState(initialBlogPosts);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const handleLoadMore = () => {
    setPosts([...posts, ...moreBlogPosts]);
    setShowLoadMore(false);
  };

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-12">
        Educational Insights
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
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
