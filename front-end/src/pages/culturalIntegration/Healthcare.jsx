import { getBlogsByCategory } from "@/apiService.js/culturalfit.service";
import {
  BasicsSection,
  BlogCard,
  EmergencySection,
  HeroSection,
  InfoSection,
  ServiceSection,
} from "@/components/custom";
import AccessGuideSection from "@/components/custom/culturalIntegration/healthcare/AccessGuideSection";
import WomensHealthSection from "@/components/custom/culturalIntegration/healthcare/WomensHealthSection";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect, useState } from "react";
const Healthcare = () => {

  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await getBlogsByCategory("Healthcare");
    if (response.blogs) {
      setBlogs(response.blogs);
    }
  };

  useEffect(() => {
    scrollToTop();
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <BasicsSection />
      <ServiceSection />
      <WomensHealthSection />
      <AccessGuideSection />
      <InfoSection />
      <EmergencySection />

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Latest Healthcare Insights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
};

export default Healthcare;
