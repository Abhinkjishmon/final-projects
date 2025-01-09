import React from "react";
import {
  FaGraduationCap,
  FaMoneyBillAlt,
  FaHeartbeat,
  FaHome,
  FaUserFriends,
  FaCar,
  FaTruck,
  FaBriefcase,
  FaAddressBook,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ExpatGuides = () => {
  const guides = [
    {
      icon: <FaGraduationCap size={32} />,
      title: "Education",
      path: "/culturalIntergretion/education",
    },
    {
      icon: <FaMoneyBillAlt size={32} />,
      title: "Finance",
      path: "/culturalIntergretion/finance",
    },
    {
      icon: <FaHeartbeat size={32} />,
      title: "Healthcare",
      path: "/culturalIntergretion/healthcare",
    },
    {
      icon: <FaHome size={32} />,
      title: "Housing",
      path: "/culturalIntergretion/housing",
    },
    {
      icon: <FaUserFriends size={32} />,
      title: "Lifestyle",
      path: "/culturalIntergretion/lifestyle",
    },
    {
      icon: <FaCar size={32} />,
      title: "Living",
      path: "/culturalIntergretion/living",
    }
  ];

  return (
    <div className="container mx-auto py-12 px-32">
      <h1 className="text-3xl font-bold mb-8">Expat guides</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {guides.map((guide, index) => (
          <Link to={guide.path}>
            <a
              key={index}
              href={`/${guide.title.toLowerCase()}`}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-100 transition-colors duration-300"
            >
              <div className="mb-4 text-green-600">{guide.icon}</div>
              <h3 className="text-lg font-medium">{guide.title}</h3>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ExpatGuides;
