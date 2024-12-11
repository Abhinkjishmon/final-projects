import React from "react";
import {
  Activity,
  Star,
  CircleDot,
  HomeIcon,
  BriefcaseBusiness,
  LucideGlobe2,
} from "lucide-react";
import { Link } from "react-router-dom";

const ServiceCard = ({ title, icon: Icon, description, path }) => (
  <Link to={path}>
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
          title === "Find Accommodations"
            ? "bg-green-100"
            : title === "Part-Time Jobs"
            ? "bg-red-100"
            : title === "Cultural Integration"
            ? "bg-blue-100"
            : title === "Visa & Immigration Assistance"
            ? "bg-teal-100"
            : title === "Academic Assistance"
            ? "bg-orange-100"
            : "bg-cyan-100"
        }`}
      >
        <Icon
          className={`w-6 h-6 ${
            title === "Find Accommodations"
              ? "text-green-600"
              : title === "Part-Time Jobs"
              ? "text-red-600"
              : title === "Cultural Integration"
              ? "text-blue-600"
              : title === "Visa & Immigration Assistance"
              ? "text-teal-600"
              : title === "Academic Assistance"
              ? "text-orange-600"
              : "text-cyan-600"
          }`}
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a className="text-blue-500 hover:text-blue-600 font-medium">
        Learn More
      </a>
    </div>
  </Link>
);
function Services() {
  const services = [
    {
      title: "Find Accommodations",
      icon: HomeIcon,
      description:
        "Discover safe, affordable, and convenient housing near your university.",
      path: "/find-accommodations",
    },
    {
      title: "Part-Time Jobs",
      icon: BriefcaseBusiness,
      description:
        "Explore flexible job opportunities tailored to your skills and schedule.",
      path: "/find-job",
    },
    {
      title: "Cultural Integration",
      icon: LucideGlobe2,
      description:
        "Get guidance and support to blend seamlessly into your new environment.",
      path: "/culturalIntergretion",
    },
    {
      title: "Visa & Immigration Assistance",
      icon: Star,
      description:
        "Simplify visa processes and receive expert immigration support.",
      path: "/visaImmigrationAssistance",
    },
    {
      title: "Academic Assistance",
      icon: Activity,
      description:
        "Enhance your learning experience with personalized academic support.",
      path: "/acadamic",
    },
    {
      title: "Career Guidance",
      icon: CircleDot,
      description:
        "Plan your future with expert advice and tools for career success.",
      path: "/",
    },
  ];

  return (
    <div className="container mx-auto md:px-32 px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Delivering comprehensive support services with unmatched expertise for
          your success.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}

export default Services;
