import React from 'react';
import { Home, Car, Heart, Umbrella } from 'lucide-react';

const InsuranceSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl font-bold mb-6">Insurance Solutions</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Comprehensive insurance coverage to protect what matters most. Our range of 
              insurance products ensures you're covered for life's unexpected moments.
              
            </p>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Insurance Protection"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <Home className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Home Insurance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Buildings insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Contents insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Emergency coverage
                </li>
              </ul>
            </div>
            <div className="bg-blue-600 text-white p-8 rounded-xl">
              <Car className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Vehicle Insurance</h3>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Comprehensive cover
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Third party insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Breakdown cover
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <Heart className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Life Insurance</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Term life insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Critical illness cover
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  Income protection
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 text-white p-8 rounded-xl">
              <Umbrella className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-semibold mb-4">General Insurance</h3>
              <ul className="space-y-3 opacity-90">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Travel insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Pet insurance
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  Business insurance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsuranceSection;