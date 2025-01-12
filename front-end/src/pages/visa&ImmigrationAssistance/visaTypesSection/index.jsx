import React, { useState } from "react";
import {
  Plane,
  GraduationCap,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { visaTypes } from "@/utils/data/visaType";

const VisaTypesSection = () => {
  const [visaType, setVisaType] = useState(visaTypes.slice(0, 3));
  const handleViewMoreVisa = () => {
    setVisaType(visaTypes);
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Types of Visa Support We Provide
          </h2>
          <p className="text-gray-600 text-lg">
            Choose from our range of visa services tailored to meet your
            specific travel and immigration needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaType.map((visa, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${visa.color} transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div className={`${visa.iconColor} mb-6`}>{visa.icon}</div>

              <h3 className="text-2xl font-bold mb-4">{visa.title}</h3>

              <p className="text-gray-600 mb-4">{visa.description}</p>
              <div className="flex items-center mb-6 text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span>{visa.duration}</span>
              </div>
              <div className="space-y-3 mb-8">
                {visa.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              <Link
                to={`/visaImmigrationAssistance/visa-detailsPage?visatype=${visa.title}`}
              >
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
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Not sure which visa type suits your needs?
          </p>
          <button
            onClick={handleViewMoreVisa}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
          >
            <span>View more Visa type</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisaTypesSection;
