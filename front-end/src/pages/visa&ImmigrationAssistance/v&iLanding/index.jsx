import React, { useEffect } from "react";
import { Users, Send, CheckCircle } from "lucide-react";
import { Globe2, CheckCircle2, Clock } from 'lucide-react';
import BusinessServices from "../businessServices";
import VisaTypesSection from "../visaTypesSection";
import { scrollToTop } from "@/utils/scroll";

const VisaSolutionsLanding = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className="min-h-[90vh]">
        <div className="min-h-[90vh] bg-white">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
                alt="World Travel Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/75"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
              <div className="md:w-3/5">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Your Journey to a New Life Starts Here
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Expert guidance through your visa and immigration process. We
                  make your dreams of living and working abroad a reality.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3 text-white">
                    <CheckCircle2 className="h-6 w-6 text-blue-300" />
                    <span>99% Success Rate</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <Globe2 className="h-6 w-6 text-blue-300" />
                    <span>Global Coverage</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white">
                    <Clock className="h-6 w-6 text-blue-300" />
                    <span>Fast Processing</span>
                  </div>
                </div>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300 shadow-lg">
                  Get Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <Users className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
                <p className="text-gray-600">
                  Posuere sed eu orci elementum nulla. Sed non blandit auctor
                  consequat sit orci sem.
                </p>
              </div>
              <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <Send className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Tailored Solutions
                </h3>
                <p className="text-blue-100">
                  Posuere sed eu orci elementum nulla. Sed non blandit auctor
                  consequat sit orci sem.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <CheckCircle className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Streamlined Process
                </h3>
                <p className="text-gray-600">
                  Posuere sed eu orci elementum nulla. Sed non blandit auctor
                  consequat sit orci sem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BusinessServices />
      <VisaTypesSection />
    </>
  );
};

export default VisaSolutionsLanding;
