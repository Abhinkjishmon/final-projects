import React, { useEffect, useState } from "react";
import { Search, Calendar, Users } from "lucide-react";
import homeImg from "/images/home.png";
import { ValuePropositionsSection } from "@/components/custom";
import { PropertyListings, UniversityListings } from "@/pages";
import PropertyAdSection from "../PropertyAdSection";

const DreamHomeLanding = () => {
  const [selectedType, setSelectedType] = useState("All Accommodation");

  const accommodationTypes = [
    "All Accommodation",
    "Villa",
    "Hotel",
    "Apartment",
    "Home Stay",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className=" min-h-screen  relative">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeImg})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Content */}
        <div className="relative pt-20 px-4 container mx-auto">
          <div className="text-center text-white mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Find your favorite
              <br />
              place here!
            </h1>
            <p className="text-lg md:text-xl">
              The best prices for over 2 million properties worldwide
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-white rounded-3xl shadow-xl p-6 max-w-5xl mx-auto">
            {/* Accommodation Types */}
            <div className="flex flex-wrap gap-4 mb-6">
              {accommodationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-full text-sm md:text-base transition-colors
                  ${
                    selectedType === type
                      ? "bg-gray-100 text-gray-900 font-medium"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            {/* Search Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type the destination"
                    className="w-full p-3 border rounded-xl pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Check In */}
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Check In</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full p-3 border rounded-xl pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Check Out */}
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Check Out</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Add date"
                    className="w-full p-3 border rounded-xl pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>

              {/* Participant */}
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Participant</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Add guests"
                    className="w-full p-3 border rounded-xl pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Duration Options & Search Button */}
            <div className="flex flex-wrap items-center justify-between mt-6">
              <div className="flex gap-4">
                <button className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-50">
                  / Night
                </button>
                <button className="px-4 py-2 border rounded-full text-gray-600 hover:bg-gray-50">
                  / Hour
                </button>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Search className="w-5 h-5" />
                Search Accommodation
              </button>
            </div>
          </div>
        </div>
      </div>
      <UniversityListings   />
      <ValuePropositionsSection />
      <PropertyListings />
      <PropertyAdSection/>
    </>
  );
};

export default DreamHomeLanding;
