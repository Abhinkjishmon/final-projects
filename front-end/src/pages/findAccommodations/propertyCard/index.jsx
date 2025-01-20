import React, { useEffect, useState } from "react";
import { Heart, MapPin, Plus, Flame } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import homeCard from "/images/homeCard.jpg";
import { Link } from "react-router-dom";
import { getAllAccommodation } from "@/apiService.js/accommodation";

export const PropertyCard = ({ property }) => {
  return (
    <Link to={`/find-accommodations/view-Property/${property._id}`}>
      <Card className="overflow-hidden group">
        <div className="relative">
          <img
            src={property.images[0]}
            alt={property.title}
            className="w-full h-64 object-cover"
          />
        </div>

        <CardHeader className="pb-2">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-semibold">{property.title}</h3>
            <div className="flex items-center text-gray-500">
              <span className="text-sm">{property.furnishing} miles</span>
            </div>
          </div>
          <p className="text-sm text-gray-500">{property?.address?.city}</p>
        </CardHeader>
        <CardFooter className="flex justify-between items-center pt-2">
          <div>
            <p className="text-sm text-gray-500">Starting From</p>
            <p className="text-xl font-bold text-red-500">£{property.rent}</p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

const PropertyListings = () => {
  const properties = [
    {
      name: "Grand Felda House",
      address: "Grand Felda House, Empire Way, Wembley HA9",
      distance: "9.10",
      price: "230",
      offer: "50",
      tags: ["Apartments", "Ensuite", "Studio"],
      features: ["No Visa No Pay", "No University No Pay"],
      image: homeCard,
    },
    {
      name: "Chapter Portobello",
      address: "1 Alderson St, London W10 5JY, United Kingdom",
      distance: "6.25",
      price: "264",
      offer: "250",
      tags: ["Studio", "Apartments"],
      features: ["No Visa No Pay", "No University No Pay"],
      image: homeCard,
    },
    {
      name: "The Arcade",
      address: "385-401 Holloway Rd, London N7 0RY, United Kingdom",
      distance: "5.59",
      price: "238",
      offer: "50",
      tags: ["Other"],
      features: ["No Visa No Pay", "No University No Pay"],
      image: homeCard,
    },
    {
      name: "Chapter Portobello",
      address: "1 Alderson St, London W10 5JY, United Kingdom",
      distance: "6.25",
      price: "264",
      offer: "250",
      tags: ["Studio", "Apartments"],
      features: ["No Visa No Pay", "No University No Pay"],
      image: homeCard,
    },
    {
      name: "Chapter Portobello",
      address: "1 Alderson St, London W10 5JY, United Kingdom",
      distance: "6.25",
      price: "264",
      offer: "250",
      tags: ["Studio", "Apartments"],
      features: ["No Visa No Pay", "No University No Pay"],
      image: homeCard,
    },
    {
      name: "Chapter Portobello",
      address: "1 Alderson St, London W10 5JY, United Kingdom",
      distance: "6.25",
      price: "264",
      offer: "250",
      tags: ["Studio", "Apartments"],
      features: ["No Visa No Pay", "No University No Pay"],
      image: homeCard,
    },
  ];
  const [accommodations, setaccommodations] = useState();

  useEffect(() => {
    const getFeaturedAccomadation = async () => {
      const response = await getAllAccommodation();
      console.log(response);
      setaccommodations(response?.accommodations.slice(0, 6).reverse());
    };
    getFeaturedAccomadation();
  }, []);

  return (
    <div className="w-full  lg:px-32 px-4 py-12 bg-blue-200">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Book accommodation as like you want
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accommodations?.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to={"all-Property"}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            View all properties
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyListings;
