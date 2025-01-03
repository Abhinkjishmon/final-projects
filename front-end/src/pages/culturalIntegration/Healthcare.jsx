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
import React from "react";
const Healthcare = () => {
  const blogs = [
    {
      title: "The Future of NHS Digital Transformation",
      excerpt:
        "Exploring how digital technologies are revolutionizing healthcare delivery in the UK...",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "March 15, 2024",
      author: "Dr. Sarah Johnson",
    },
    {
      title: "Mental Health Services in Post-Pandemic UK",
      excerpt:
        "Analysis of how mental health services have evolved since the pandemic...",
      image:
        "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "March 12, 2024",
      author: "James Wilson",
    },
    {
      title: "Innovation in UK Healthcare",
      excerpt:
        "Latest developments in medical research and healthcare innovation across the UK...",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      date: "March 10, 2024",
      author: "Emma Thompson",
    },
  ];

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
          {blogs.map((blog, index) => (
            <BlogCard key={index} post={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Healthcare;
