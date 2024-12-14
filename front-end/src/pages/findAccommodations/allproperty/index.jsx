import React, { useEffect, useState } from "react";
import {
  Heart,
  Grid,
  List,
  MapPin,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import homeCard from "/images/homeCard.jpg";
import map from "/images/map.png";
import { ListingCard } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";

const MapView = () => {
  return (
    <div className="relative h-full min-h-[600px] bg-gray-100 rounded-lg">
      <img
        src={map}
        alt="Map"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow">
        <button className="p-2 hover:bg-gray-100 border-b">
          <Plus className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100">
          <Minus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

const AllProperty = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [showRoommates, setShowRoommates] = useState(false);

  const properties = [
    {
      id: 1,
      imageUrl: homeCard,
      title: "The People's Brownstone",
      location: "1993 Broadway, New York",
      roommates: 2,
      price: 3000,
      reviews: 7,
      amenities: ["WiFi", "Air conditioning", "Kitchen", "Heating", "Smokers"],
    },
    {
      id: 2,
      imageUrl: homeCard,
      title: "Lovely room in Manhattan",
      location: "246 West St, New York",
      roommates: 3,
      price: 2440,
      reviews: 14,
      amenities: [
        "WiFi",
        "Air conditioning",
        "Kitchen",
        "Recycling",
        "Non-smoking",
      ],
    },
    {
      id: 2,
      imageUrl: homeCard,
      title: "Lovely room in Manhattan",
      location: "246 West St, New York",
      roommates: 3,
      price: 2440,
      reviews: 14,
      amenities: [
        "WiFi",
        "Air conditioning",
        "Kitchen",
        "Recycling",
        "Non-smoking",
      ],
    },
    {
      id: 2,
      imageUrl: homeCard,
      title: "Lovely room in Manhattan",
      location: "246 West St, New York",
      roommates: 3,
      price: 2440,
      reviews: 14,
      amenities: [
        "WiFi",
        "Air conditioning",
        "Kitchen",
        "Recycling",
        "Non-smoking",
      ],
    },
    {
      id: 2,
      imageUrl: homeCard,
      title: "Lovely room in Manhattan",
      location: "246 West St, New York",
      roommates: 3,
      price: 2440,
      reviews: 14,
      amenities: [
        "WiFi",
        "Air conditioning",
        "Kitchen",
        "Recycling",
        "Non-smoking",
      ],
    },
    {
      id: 2,
      imageUrl: homeCard,
      title: "Lovely room in Manhattan",
      location: "246 West St, New York",
      roommates: 3,
      price: 2440,
      reviews: 14,
      amenities: [
        "WiFi",
        "Air conditioning",
        "Kitchen",
        "Recycling",
        "Non-smoking",
      ],
    },
  ];

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Listings */}
        <div className="lg:w-1/2 space-y-4 h-screen overflow-y-auto scroll-bar">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">
              Apartments in New York
              <span className="text-sm font-normal text-gray-500 ml-2">
                1248 results • Jul 14 - 21
              </span>
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <button className="px-3 py-1.5 border rounded-full text-sm hover:bg-gray-50">
                Price
              </button>
              <button className="px-3 py-1.5 border rounded-full text-sm hover:bg-gray-50">
                Apartment
              </button>
              <button className="px-3 py-1.5 border rounded-full text-sm hover:bg-gray-50">
                Floor
              </button>
              <button className="px-3 py-1.5 border rounded-full text-sm hover:bg-gray-50">
                More
              </button>
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <button
                className={`p-2 rounded ${
                  viewMode === "grid" ? "bg-gray-100" : ""
                }`}
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                className={`p-2 rounded ${
                  viewMode === "list" ? "bg-gray-100" : ""
                }`}
                onClick={() => setViewMode("list")}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {properties.map((property) => (
              <ListingCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="lg:w-1/2 rounded-xl">
          <MapView />
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
