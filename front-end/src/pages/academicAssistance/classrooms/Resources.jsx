import { Rightbar, Sidebar } from "@/components/custom";
import React, { useState } from "react";
import { FaFileAlt, FaImage, FaVideo } from "react-icons/fa";

function Resources() {
  const [resources, setResources] = useState([
    {
      id: 1,
      type: "video",
      name: "React Basics",
      description: "Learn the fundamentals of React.js.",
      url: "https://example.com/react-basics",
    },
    {
      id: 2,
      type: "file",
      name: "JavaScript Cheat Sheet",
      description: "A handy JavaScript reference guide.",
      url: "https://example.com/js-cheatsheet.pdf",
    },
    {
      id: 3,
      type: "image",
      name: "CSS Grid Layout",
      description: "An overview of CSS Grid layout.",
      url: "https://example.com/css-grid.png",
    },
  ]);

  const handleViewOrDownload = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="flex h-screen bg-gray-50 ">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="w-full mx-auto space-y-6">
          <div className="min-h-screen bg-gray-100 p-6">
            {/* Heading Section */}
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Resources</h1>
            </div>

            {/* Resources Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
                >
                  {/* Icon and Resource Type */}
                  <div className="flex items-center gap-2 mb-4">
                    {resource.type === "video" && (
                      <FaVideo className="text-blue-500 text-2xl" />
                    )}
                    {resource.type === "file" && (
                      <FaFileAlt className="text-green-500 text-2xl" />
                    )}
                    {resource.type === "image" && (
                      <FaImage className="text-orange-500 text-2xl" />
                    )}
                    <h2 className="text-lg font-semibold text-gray-800">
                      {resource.name}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4">{resource.description}</p>

                  {/* View/Download Button */}
                  <button
                    onClick={() => handleViewOrDownload(resource.url)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
                  >
                    {resource.type === "video" ? "Watch" : "View / Download"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Rightbar />
    </div>
  );
}

export default Resources;
