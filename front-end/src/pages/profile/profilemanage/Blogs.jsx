import { BlogsPage, ProfileSidebar } from "@/components/custom";
import React from "react";

function Blogs() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <ProfileSidebar />
      <div className="ml-[250px] md:ml-[80px] lg:ml-[250px] flex-1 transition-all duration-300">
        <BlogsPage />
      </div>
    </div>
  );
}

export default Blogs;
