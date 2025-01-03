import {
  AcademicExcellence,
  BlogSection,
  CulturalIntegration,
  EducationalHeritage,
} from "@/components/custom";
import React from "react";

const EducationPage = () => {
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
        <BlogSection />
        <AcademicExcellence />
      </div>
    </div>
  );
};

export default EducationPage;
