import React, { useEffect, useState } from "react";
import { Search, Calendar, Users } from "lucide-react";
import homeImg from "/images/home.png";
import { ValuePropositionsSection } from "@/components/custom";
import { PropertyListings, UniversityListings } from "@/pages";
import PropertyAdSection from "../PropertyAdSection";
import { scrollToTop } from "@/utils/scroll";
import { searchAccommodations } from "@/apiService.js/accommodation";
import { PropertyCard } from "../propertyCard";

const DreamHomeLanding = () => {
  const [selectedType, setSelectedType] = useState("All Accommodation");
  const [query, setQuery] = useState("");
  const [accommodations, setAccommodations] = useState([]);
  const [error, setError] = useState(null);

  const accommodationTypes = [
    "All Accommodation",
    "Villa",
    "Hotel",
    "Apartment",
    "Home Stay",
  ];
  useEffect(() => {
    scrollToTop();
  }, []);
  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a search query.");
      return;
    }
    setError(null);
    try {
      const response = await searchAccommodations(query);
      setAccommodations(response);
    } catch (err) {
      console.error("Error searching accommodations:", err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };
  useEffect(()=>{},[accommodations])
  return (
    <>
      <div className=" min-h-screen  relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${homeImg})`,
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

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
          <div className="bg-white rounded-3xl shadow-xl p-6 max-w-5xl mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-gray-700 font-medium">Location</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Type the destination"
                    className="w-full p-3 border rounded-xl pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between mt-6">
                <button
                  onClick={handleSearch}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Search Accommodation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {accommodations.length > 0 ? (
        <div className="my-44 mx-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {accommodations?.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      ) : (
        <>
          <UniversityListings />
          <ValuePropositionsSection />
          <PropertyListings />
          <PropertyAdSection />
        </>
      )}
    </>
  );
};

export default DreamHomeLanding;
