import React, { useEffect, useState } from "react";
import {
  FileCheck,
  Calculator,
  MessageSquare,
  CheckCircle,
  Globe,
} from "lucide-react";

import {
  CalculateFees,
  VisaAssistantChat,
  VisaDetails,
  VisaEligibility,
} from "@/pages";
import { visaHeadings } from "@/utils/data/detailsVisaInfo";
import { useLocation } from "react-router-dom";

const VisaDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("visaDetails");
  const [visaDetails, setVisaDetails] = useState();
  const location = useLocation();
  const currentUrl = location.pathname + location.search;
  const queryParams = new URLSearchParams(location.search);
  const visatype = queryParams.get("visatype");

  const buttonData = [
    {
      text: "Visa Details",
      color: "bg-orange-600 hover:bg-orange-700",
      icon: <FileCheck className="w-5 h-5" />,
      action: () => setActiveTab("visaDetails"),
      component: <VisaDetails />,
      id: "visaDetails",
    },
    {
      text: "Check Eligibility",
      color: "bg-green-600 hover:bg-green-700",
      icon: <CheckCircle className="w-5 h-5" />,
      action: () => setActiveTab("eligibility"),
      component: <VisaEligibility />,
      id: "eligibility",
    },
    {
      text: "Calculate Fees",
      color: "bg-blue-600 hover:bg-blue-700",
      icon: <Calculator className="w-5 h-5" />,
      action: () => setActiveTab("calculator"),
      component: <CalculateFees />,
      id: "calculator",
    },
    {
      text: "Visa Assistant Chat",
      color: "bg-purple-600 hover:bg-purple-700",
      icon: <MessageSquare className="w-5 h-5" />,
      action: () => setActiveTab("chat"),
      component: <VisaAssistantChat />,
      id: "chat",
    },
  ];

  const activeComponent = buttonData.find(
    (button) => button.id === activeTab
  )?.component;
  function findVisaByType(visaType) {
    const visaDetails = visaHeadings.find((visa) => visa.visaType === visaType);
    setVisaDetails(visaDetails);
  }
  useEffect(() => {
    findVisaByType(visatype);
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          
          <img
            src={visaDetails?.image}
            alt="Travel Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-blue-900/80 to-indigo-900/90" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-xl backdrop-blur-lg">
                <Globe className="w-10 h-10 text-blue-300" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                {visaDetails?.heading}
              </h1>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl leading-relaxed">
              {visaDetails?.subHeading}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4">
            {buttonData.map((button, index) => (
              <button
                key={index}
                className={`flex items-center space-x-2 text-white px-6 py-3 rounded-lg transition-colors ${button.color}`}
                onClick={button.action}
              >
                {button.icon}
                <span>{button.text}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      {activeComponent}
    </div>
  );
};

export default VisaDetailsPage;
