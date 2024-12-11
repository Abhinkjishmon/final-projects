import React from "react";
import { Users, Send, CheckCircle } from "lucide-react";
import BusinessServices from "../businessServices";
import VisaTypesSection from "../visaTypesSection";

const VisaSolutionsLanding = () => {
  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-blue-500 text-white px-4 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-6 max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-wider">
                VISA SOLUTION
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Unlock Your Global Journey with Visa Solutions
              </h1>

              <p className="text-lg md:text-xl opacity-90">
                Posuere sed eu orci elementum nulla. Sed non blandit auctor
                consequat sit orci sem. Ultrices adipiscing aliquam tellus
                convallis. Convallis imperdiet risus turpis turpis molestie erat
                viverra. Amet turpis nunc facilisis turpis dui oras nunc.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-gray-50 px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Expert Guidance */}
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

              {/* Tailored Solutions */}
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

              {/* Streamlined Process */}
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
      <BusinessServices/>
      <VisaTypesSection/>
    </>
  );
};

export default VisaSolutionsLanding;
