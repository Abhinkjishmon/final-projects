import React, { useEffect, useRef, useState } from "react";
import culturalIntegrationimg from "/images/culturalIntegration.png";
import {
  EditorsPicks,
  EventNotices,
  ExpatGuides,
  ExpatTools,
  ExplorePage,
  FaqSection,
  LandingSection,
  NewsletterSignup,
} from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import { getFeaturedBlogs } from "@/apiService.js/culturalfit.service";

function CulturalIntergretion() {
  const expatGuidesRef = useRef(null);

  const scrollToExpatGuides = () => {
    if (expatGuidesRef.current) {
      expatGuidesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [explorePageBlogs, setExplorePageBlogs] = useState([]);
  const [editorPageBlogs, setEditorPageBlogs] = useState([]);
  const fetchFeaturedBlogs = async () => {
    const response = await getFeaturedBlogs();
    if (response.blogs) {
      setExplorePageBlogs(response.blogs.slice(0, 4));
      setEditorPageBlogs(response.blogs.slice(4));
    }
  };
  useEffect(() => {
    scrollToTop();
    fetchFeaturedBlogs();
  }, []);

  return (
    <>
      <LandingSection onGetStartedClick={scrollToExpatGuides} />
      <div ref={expatGuidesRef}>
        <ExpatGuides />
      </div>
      <ExplorePage explorePageBlogs={explorePageBlogs} />
      <ExpatTools />
      <EventNotices />
      <EditorsPicks editorPageBlogs={editorPageBlogs} />
      <NewsletterSignup />
      <FaqSection />
    </>
  );
}

export default CulturalIntergretion;
