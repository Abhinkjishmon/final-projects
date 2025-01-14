import React, { useEffect, useState } from "react";
import avathar from "/images/avathar.jpg";
import { getLiveNews } from "@/apiService.js/liveNews.service";
import { Link } from "react-router-dom";

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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchLiveNews = async () => {
      const response = await getLiveNews();
      const data = response.results;
      const transformedArticles = data.map((article) => ({
        category: article.category?.[0] || "General",
        title: article.title,
        link: article.link,
        description: article.description,
        imageUrl: article.image_url || "default_image_url",
      }));

      setArticles(transformedArticles);
    };
    fetchLiveNews();
  }, []);
  return (
    <div className="container mx-auto md:px-32 px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Let’s Explore the Latest News
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay informed and inspired with updates, insights, and stories that
          matter to you.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link to={article.link}>
            <BlogCard
              key={index}
              category={article.category}
              title={article.title}
              description={article.description}
              imageUrl={article.imageUrl}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ArticalPreview;
