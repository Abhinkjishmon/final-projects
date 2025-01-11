import React from "react";
import { FaBriefcase, FaPassport, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const cardData = [
  {
    title: "Find Job",
    description:
      "Discover opportunities that suit your skills and aspirations.",
    link: "/find-job",
  },
  {
    title: "Visa and Immigration Help",
    description: "Get assistance with your visa and immigration processes.",
    link: "/visaImmigrationAssistance",
  },
  {
    title: "Find Accommodations",
    description: "Explore housing options tailored to your needs.",
    link: "/find-accommodations",
  },
];
const Card = ({ link, title, description }) => (
  <Link to={link}>
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-teal-500 hover:underline">
        View
      </a>
    </div>
  </Link>
);

const ExpatTools = () => {
  return (
    <div className="bg-gray-100 py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-8 text-center">
          Make your expat journey easier with our handy tools
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <Card
              key={index}
              link={card.link}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpatTools;
