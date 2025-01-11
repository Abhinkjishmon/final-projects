import React from "react";
import { Link } from "react-router-dom";

const EditorsPicks = ({ editorPageBlogs }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold mb-8">Editor's picks</h2>
        <h className="text-l underline hover:cursor-pointer mb-8">See more</h>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {editorPageBlogs?.map((pick, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={pick?.content.find((item) => item.type === "image").content}
              alt={pick.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{pick.title}</h3>

              <p className="text-gray-600 mb-4">
                {pick?.content
                  .find((item) => item.type === "text")
                  ?.content.slice(0, 200)}
                {pick?.content.find((item) => item.type === "text")?.content
                  .length > 200 && "..."}
              </p>
              <Link
                to={`/culturalIntergretion/education/view-blog/${pick?._id}`}
                className="text-black font-medium underline mt-auto"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPicks;
