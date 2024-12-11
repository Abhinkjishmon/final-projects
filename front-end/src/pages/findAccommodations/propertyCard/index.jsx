import React, { useState } from "react";
import { Heart, MapPin, Plus, Flame } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import homeCard from "/images/homeCard.jpg";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  const [isCompared, setIsCompared] = useState(false);

  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge className="bg-blue-600 text-white flex items-center gap-1">
            <Flame className="w-4 h-4" />
            OFFER UPTO £{property.offer}
          </Badge>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          onClick={() => {}}
        >
          <Heart className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className={`absolute bottom-3 right-3 ${
            isCompared ? "bg-green-500 text-white" : "bg-white/90"
          }`}
          onClick={() => setIsCompared(!isCompared)}
        >
          <Plus className="w-4 h-4 mr-1" />
          {isCompared ? "Added to Compare" : "Add to Compare"}
        </Button>
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{property.name}</h3>
          <div className="flex items-center text-gray-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{property.distance} miles</span>
          </div>
        </div>
        <p className="text-sm text-gray-500">{property.address}</p>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-2">
          {property.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-gray-100">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center pt-2">
        <div>
          <p className="text-sm text-gray-500">Starting From</p>
          <p className="text-xl font-bold text-red-500">
            £{property.price}/week
          </p>
        </div>
        <div className="flex gap-2">
          {property.features.map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
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
  ];

  return (
    <div className="w-full  lg:px-32 px-4 py-12 bg-blue-200">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Book accommodation as like you want
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link to={'all-Property'}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            View all properties
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PropertyListings;
