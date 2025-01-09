import { getBlogsByCategory } from "@/apiService.js/culturalfit.service";
import {
  AcademicExcellence,
  BlogSection,
  CulturalIntegration,
  EducationalHeritage,
} from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect, useState } from "react";

const EducationPage = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await getBlogsByCategory("Education");
    if (response.blogs) {
      setBlogs(response.blogs);
    }
  };

  useEffect(() => {
    fetchBlogs();
    scrollToTop();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1470"
          alt="UK Education"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Education in the United Kingdom
            </h1>
            <p className="text-xl">A World-Class Education System</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <EducationalHeritage />
        <CulturalIntegration />
        {blogs.length === 0 ? (
          <h1>No blogs found</h1>
        ) : (
          <BlogSection blogs={blogs} />
        )}
        <AcademicExcellence />
      </div>
    </div>
  );
};

export default EducationPage;
