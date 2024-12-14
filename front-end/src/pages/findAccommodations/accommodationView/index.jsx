import React, { useEffect, useState } from "react";
import {
  Heart,
  Share2,
  MapPin,
  Wifi,
  Car,
  Tv,
  Coffee,
  UtensilsCrossed,
  Wind,
  PawPrint,
  Users,
  Calendar,
  Mail,
} from "lucide-react";
import homeImg from "/images/home.png";
import homeNextImg from "/images/homeCard.jpg";
import homeCard from "/images/homeCard.jpg";
import { BookingForm, ListingCard } from "@/components/custom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { scrollToTop } from "@/utils/scroll";

const AccommodationView = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  const images = [homeNextImg, homeImg, homeNextImg, homeImg];

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

  const amenities = [
    { icon: <Wifi className="w-5 h-5" />, name: "High-speed WiFi" },
    { icon: <Car className="w-5 h-5" />, name: "Free parking" },
    { icon: <Tv className="w-5 h-5" />, name: "Smart TV" },
    { icon: <Coffee className="w-5 h-5" />, name: "Coffee maker" },
    {
      icon: <UtensilsCrossed className="w-5 h-5" />,
      name: "Fully equipped kitchen",
    },
    { icon: <Wind className="w-5 h-5" />, name: "Air conditioning" },
    { icon: <PawPrint className="w-5 h-5" />, name: "Pet friendly" },
    { icon: <Users className="w-5 h-5" />, name: "Up to 4 guests" },
  ];

  return (
    <div className="container mx-auto lg:px-32 px-4 py-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Luxury Downtown Apartment
          </h1>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>123 Main Street, New York, NY 10001</span>
          </div>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Share2 className="w-5 h-5" />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Heart className="w-5 h-5" />
            Save
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-8">
        <div className="relative h-[400px] md:h-[500px] mb-4 rounded-xl overflow-hidden">
          <img
            src={images[selectedImage]}
            alt={`View ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative h-24 rounded-lg overflow-hidden ${
                selectedImage === index ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Experience luxury living in this stunning downtown apartment.
              Perfect for both short and long-term stays, this beautifully
              furnished space offers modern amenities and breathtaking city
              views. With its prime location, you'll be steps away from
              restaurants, shopping, and public transportation.
            </p>
          </section>

          {/* Amenities */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {(showAllAmenities ? amenities : amenities.slice(0, 6)).map(
                (amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    {amenity.icon}
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                )
              )}
            </div>
            {amenities.length > 6 && (
              <button
                onClick={() => setShowAllAmenities(!showAllAmenities)}
                className="mt-4 text-blue-600 hover:text-blue-700"
              >
                {showAllAmenities ? "Show less" : "Show all amenities"}
              </button>
            )}
          </section>

          {/* Description */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Welcome to your urban oasis! This newly renovated apartment
                combines modern comfort with classic New York charm. The
                open-concept living space features floor-to-ceiling windows that
                flood the room with natural light and offer stunning city views.
              </p>
              <p>
                The fully equipped kitchen includes stainless steel appliances,
                quartz countertops, and everything you need to prepare meals at
                home. The spacious bedroom features a comfortable queen-size bed
                with premium linens and blackout curtains for a perfect night's
                sleep.
              </p>
              <p>
                The building offers 24/7 security, a fitness center, and a
                rooftop terrace perfect for enjoying sunset views over the city
                skyline.
              </p>
            </div>
          </section>
        </div>

        {/* Right Column - Booking Card */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border">
              <div className="mb-6">
                <div className="text-3xl font-bold text-gray-900">$250</div>
                <div className="text-gray-500">per night</div>
              </div>

              <div className="space-y-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Book Now
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Book Appointment</DialogTitle>
                      <DialogDescription>
                        <BookingForm />
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                  <Heart className="w-5 h-5" />
                  Add to Wishlist
                </button>

                <button className="w-full border py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <Mail className="w-5 h-5" />
                  Enquire Now
                </button>
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="text-sm text-gray-500 space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Free cancellation up to 48 hours before check-in
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Perfect for families and groups
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-12">
        <h1 className="text-2xl font-bold">Check Out Similar</h1>
      </div>
      <div className="space-y-4">
        {properties.map((property) => (
          <ListingCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default AccommodationView;
