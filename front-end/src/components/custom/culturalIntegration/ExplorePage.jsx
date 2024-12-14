import React from "react";

const ExplorePage = () => {
  const articles = [
    {
      title: "Where to live in the UK: the best places for expats",
      category: "Moving",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Moving to the UK: the ultimate checklist",
      category: "Moving",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The cost of living in the UK",
      category: "Moving",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto md:my-20 p-4">
      <h1 className="text-3xl font-bold mb-6">ExplorePage</h1>
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Large Image Section */}
        <div className="lg:col-span-2">
          <div className="relative h-64 lg:h-80">
            <img
              src="https://via.placeholder.com/800x400"
              alt="An introduction to the United Kingdom"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end p-4 rounded-lg">
              <h2 className="text-white text-lg lg:text-2xl font-bold">
                An introduction to the United Kingdom
              </h2>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="flex flex-col gap-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white shadow-md p-4 rounded-lg"
            >
              <img
                src={article.image}
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
