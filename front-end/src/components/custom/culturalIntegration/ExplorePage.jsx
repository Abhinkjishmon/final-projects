import React from "react";

const ExplorePage = ({ explorePageBlogs }) => {
  return (
    <div className="max-w-7xl mx-auto md:my-20 p-4">
      <h1 className="text-3xl font-bold mb-6">ExplorePage</h1>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="relative h-64 lg:h-80">
            <img
              src={
                explorePageBlogs[3]?.content.find(
                  (item) => item.type === "image"
                ).content
              }
              alt="An introduction to the United Kingdom"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 rounded-lg">
              <h2 className="text-white text-lg lg:text-2xl font-bold">
                {explorePageBlogs[3]?.title}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {explorePageBlogs?.slice(0, 3).map((article, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white shadow-md p-4 rounded-lg"
            >
              <img
                src={
                  article?.content.find((item) => item.type === "image").content
                }
                alt={article.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div>
                <p className="text-green-500 text-sm font-medium">
                  {article.category}
                </p>
                <h3 className="text-md font-semibold">{article.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
