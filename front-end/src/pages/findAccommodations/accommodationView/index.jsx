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
import {
  BookingForm,
  ListingCard,
  SkeletonCard,
  Spinner,
} from "@/components/custom";

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
import { useParams } from "react-router-dom";
import {
  getAccommodation,
  removeWishlistAccommodation,
  wishlistAccommodation,
} from "@/apiService.js/accommodation";
import { FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
import { scrollToTop } from "@/utils/scroll";

const AccommodationView = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [wishListAccommodationIds, setAccommodationIds] = useState([]);
  const [propertie, setPropertie] = useState();
  const [suggestions, setSuggestions] = useState();
  const { id } = useParams();
  const [toggleWishlist, setToggleWishlist] = useState();
  const [loading, setLoading] = useState(false);

  const fetchAccommodationDetails = async () => {
    setLoading(true);
    const response = await getAccommodation(id);
    setPropertie(response.accommodation);
    setSuggestions(response.suggestions);
    setAccommodationIds(response.accommodationIds);
    setLoading(false);
  };
  const handleWishList = async (e) => {
    e.preventDefault();
    setToggleWishlist(true);
    const response = await wishlistAccommodation(propertie?._id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };
  const handleRemoveWishList = async (e) => {
    e.preventDefault();
    setToggleWishlist(false);
    const response = await removeWishlistAccommodation(propertie?._id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };
  useEffect(() => {
    scrollToTop();
    wishListAccommodationIds.includes(propertie?._id)
      ? setToggleWishlist(true)
      : setToggleWishlist(false);
    fetchAccommodationDetails();
  }, [id]);

  return loading ? (
    <div className="container mx-auto lg:px-32 px-4 py-8">
      <div className="p-3">
        <SkeletonCard />
      </div>
      <Spinner />
    </div>
  ) : (
    <div className="container mx-auto lg:px-32 px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {propertie?.title}
          </h1>
          <div className="flex items-center gap-2 mt-2 text-gray-600">
            <MapPin className="w-5 h-5" />
            <span>
              {propertie?.address.street},{propertie?.address.state},
              {propertie?.address.city},{propertie?.address.country}
            </span>
          </div>
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Share2 className="w-5 h-5" />
            Share
          </button>
          {toggleWishlist ? (
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              onClick={handleRemoveWishList}
            >
              <FaHeart className="w-5 h-5 text-red-600" />
            </button>
          ) : (
            <button
              className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
              onClick={handleWishList}
            >
              <Heart className="w-5 h-5 text-gray-400 " />
            </button>
          )}
        </div>
      </div>
      <div className="mb-8">
        <div className="relative h-[400px] md:h-[500px] mb-4 rounded-xl overflow-hidden">
          <img
            src={propertie?.images[selectedImage]}
            alt={`View ${selectedImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-4 gap-4">
          {propertie?.images.map((image, index) => (
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              {propertie?.description}
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 items-center gap-4">
              {propertie?.amenities.map((amenity, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-200 rounded-lg"
                >
                  <span className="text-gray-700 ">{amenity}</span>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Description</h2>
            <div className="space-y-4 text-gray-600">
              <p> {propertie?.description}</p>
              <p>
                The building offers 24/7 security, a fitness center, and a
                rooftop terrace perfect for enjoying sunset views over the city
                skyline.
              </p>
            </div>
          </section>
        </div>
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
                <button
                  className="w-full border-2 border-blue-600 text-blue-600 py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                  onClick={handleWishList}
                >
                  <Heart className="w-5 h-5" />
                  {toggleWishlist ? "Remove From Wishlist" : " Add to Wishlist"}
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
        {suggestions?.map((property) => (
          <ListingCard
            key={property.id}
            property={property}
            wishListAccommodationIds={wishListAccommodationIds}
          />
        ))}
      </div>
    </div>
  );
};

export default AccommodationView;
