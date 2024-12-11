import React from 'react';
import { ArrowRight, Heart, Wifi, Play } from 'lucide-react';
import homeCard from "/images/homeCard.jpg";
import avatar from "/images/avathar.jpg";

const PropertyAdSection = () => {
  return (
    <div className="container mx-auto lg:px-28 px-4 py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="text-orange-500 font-semibold uppercase tracking-wide">
            Accommodation Providers
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Advertise your properties with confidence
          </h1>
          
          <p className="text-gray-600 text-lg">
            Landlords, letting agents, and private hall managers – advertise your property 
            in minutes and reach thousands of students daily. Get unparalleled exposure 
            and attract the ideal tenants for your spaces!
          </p>
          
          <button className="inline-flex items-center px-6 py-3 rounded-full border-2 border-gray-900 
            hover:bg-gray-900 hover:text-white transition-colors duration-200">
            <span className="mr-2">Advertise your property</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Content - Property Card */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-100 rounded-full -z-10 
            blur-2xl opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-100 rounded-full -z-10 
            blur-2xl opacity-60"></div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md mx-auto">
            <div className="relative">
              <img 
                src={homeCard}
                alt="Property bedroom"
                className="w-full h-64 object-cover"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full 
                hover:bg-gray-100 transition-colors">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <div className="absolute top-4 left-4 bg-emerald-500 text-white px-4 py-1 
                rounded-full text-sm">
                ADVERTISED
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex space-x-3">
                <Play className="w-5 h-5 text-gray-600" />
                <Wifi className="w-5 h-5 text-gray-600" />
              </div>
              
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              
              <div className="flex items-center justify-between pt-4">
                <div className="text-2xl font-bold">£140
                  <span className="text-sm font-normal text-gray-600 ml-1">pp/pw</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full overflow-hidden">
                    <img 
                      src={avatar}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center 
                    justify-center text-white">
                    <span className="text-xl">😊</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyAdSection;