import React from "react";
import avathar from "/images/avathar.jpg";

const BlogCard = ({ category, title, description, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-video overflow-hidden">
      <img
        src={imageUrl || avathar}
        alt={title}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="p-6">
      <span className="text-blue-600 text-sm font-medium">{category}</span>
      <h3 className="text-gray-900 font-semibold text-xl mt-2 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
    </div>
  </div>
);
function ArticalPreview() {
  const articles = [
    {
      category: "Health",
      title: "Tips For Eating Healthy When You're Working From Home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      imageUrl: avathar,
    },
    {
      category: "Lifestyle",
      title: "Unsure About Wearing A Face Mask? Here's How And Why",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      imageUrl: avathar,
    },
    {
      category: "Health",
      title: "How Do Your Emotions Affect Your Physical Health?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      imageUrl: avathar,
    },
    {
      category: "Health",
      title: "Tips For Eating Healthy When You're Working From Home",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      imageUrl: avathar,
    },
    {
      category: "Lifestyle",
      title: "Unsure About Wearing A Face Mask? Here's How And Why",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      imageUrl: avathar,
    },
    {
      category: "Health",
      title: "How Do Your Emotions Affect Your Physical Health?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      imageUrl: avathar,
    },
  ];
  return (
    <div className="container mx-auto md:px-32 px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let’s Explore the Latest News & Articles
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay informed and inspired with updates, insights, and stories that
          matter to you.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <BlogCard
            key={index}
            category={article.category}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ArticalPreview;
