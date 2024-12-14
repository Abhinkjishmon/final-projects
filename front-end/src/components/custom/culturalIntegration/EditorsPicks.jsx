import React from "react";

const EditorsPicks = () => {
  const picks = [
    {
      title: "Health insurance in the UK",
      description:
        "Discover the different health insurance options in the UK, which allow you to access private treatment as an alternative to using the NHS.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "Dating in the UK: finding love as an expat",
      description:
        "Learn how to navigate the world of dating in the UK by understanding the culture and etiquette.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      title: "The UK education system",
      description:
        "Explore the UK education system and learn about the levels of schooling, parental involvement, graduating, and educational support.",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="w-full flex justify-between">
        <h2 className="text-2xl font-bold mb-8">Editor's picks</h2>
        <h className="text-l underline hover:cursor-pointer mb-8">See more</h>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {picks.map((pick, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={pick.image}
              alt={pick.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-lg font-semibold mb-2">{pick.title}</h3>
              <p className="text-gray-600 mb-4">{pick.description}</p>
              <a
                href={pick.link}
                className="text-black font-medium underline mt-auto"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsPicks;
