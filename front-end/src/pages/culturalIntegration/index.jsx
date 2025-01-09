import React, { useEffect, useState } from "react";
import culturalIntegrationimg from "/images/culturalIntegration.png";
import {
  EditorsPicks,
  ExpatGuides,
  ExpatTools,
  ExplorePage,
  FaqSection,
  NewsletterSignup,
} from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { getFeaturedBlogs } from "@/apiService.js/culturalfit.service";

function CulturalIntergretion() {
  const [explorePageBlogs, setExplorePageBlogs] = useState([]);
  const [editorPageBlogs, setEditorPageBlogs] = useState([]);
  const fetchFeaturedBlogs = async () => {
    const response = await getFeaturedBlogs();
    if (response.blogs) {
      setExplorePageBlogs(response.blogs.slice(0,4));
      setEditorPageBlogs(response.blogs.slice(4));
    }
  };
  useEffect(() => {
    scrollToTop();
    fetchFeaturedBlogs();
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row items-center bg-gray-50 px-6 md:px-20 py-10">
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
            START YOUR JOURNEY
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-xl">
            Moving abroad? Use Expatica as your compass to guide you through
            every step of your new life.
          </p>
          <div className="mt-6">
            <div className="relative inline-block">
              <input
                type="text"
                placeholder="Choose your country"
                className="w-full md:w-96 px-4 py-3 pl-10 text-lg border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <svg
                className="w-6 h-6 absolute top-3 left-3 text-gray-500"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 2a8 8 0 1 0 4.906 14.32l4.387 4.387 1.414-1.414-4.387-4.387A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={culturalIntegrationimg}
            alt="Journey Illustration"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
      <ExpatGuides />
      <ExplorePage explorePageBlogs={explorePageBlogs} />
      <ExpatTools />
      <EditorsPicks editorPageBlogs={editorPageBlogs} />
      <NewsletterSignup />
      <FaqSection />
    </>
  );
}

export default CulturalIntergretion;
