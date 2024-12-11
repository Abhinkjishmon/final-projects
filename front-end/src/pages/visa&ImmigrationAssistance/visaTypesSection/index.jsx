import React from "react";
import {
  Plane,
  GraduationCap,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const VisaTypesSection = () => {
  const visaTypes = [
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Tourist & Visiting Visa",
      description:
        "Perfect for travelers planning temporary stays for tourism, family visits, or business meetings.",
      duration: "Duration: Up to 6 months",
      benefits: [
        "Fast processing time",
        "Multiple entry options",
        "Flexible travel dates",
        "Tourism & business activities",
      ],
      color: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "Student Visa",
      description:
        "Designed for international students pursuing education at recognized institutions.",
      duration: "Duration: Course length + 6 months",
      benefits: [
        "Part-time work permitted",
        "Access to healthcare",
        "Extended stay options",
        "Educational support",
      ],
      color: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Family Visa",
      description:
        "Unite with your loved ones through our comprehensive family visa services.",
      duration: "Duration: 2-5 years",
      benefits: [
        "Family reunification",
        "Path to permanent residence",
        "Access to public services",
        "Work authorization",
      ],
      color: "bg-purple-50 hover:bg-purple-100",
      iconColor: "text-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Types of Visa Support We Provide
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our range of visa services tailored to meet your
            specific travel and immigration needs
          </p>
        </div>

        {/* Visa Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaTypes.map((visa, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${visa.color} transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Icon */}
              <div className={`${visa.iconColor} mb-6`}>{visa.icon}</div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4">{visa.title}</h3>

              <p className="text-gray-600 mb-4">{visa.description}</p>

              {/* Duration */}
              <div className="flex items-center mb-6 text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>{visa.duration}</span>
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-8">
                {visa.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <Link to={"/visaImmigrationAssistance/visa-detailsPage"}>
                <button
                  className={`w-full ${visa.buttonColor} text-white py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors`}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Not sure which visa type suits your needs?
          </p>
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
            <span>Get Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaTypesSection;
