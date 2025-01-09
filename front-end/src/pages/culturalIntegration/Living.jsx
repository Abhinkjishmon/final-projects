import React, { useEffect, useState } from "react";
import { BlogCard, LivingHero, WhyChooseUK } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { getBlogsByCategory } from "@/apiService.js/culturalfit.service";


function Living() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await getBlogsByCategory("Living");
    if (response.blogs) {
      setBlogs(response.blogs);
    }
  };
  useEffect(() => {
    scrollToTop(), fetchBlogs();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <LivingHero />
      <WhyChooseUK />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Essential Guides for Living in the UK
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive guides covering every aspect of life in
            the United Kingdom. From practical advice to cultural insights,
            we're here to help you thrive in your new home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs?.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              content={post.content}
              author={post.author}
              postDetails={post}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Living;
