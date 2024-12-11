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
import { Link } from "react-router-dom";


const ListingCard = ({ property }) => {
  return (
    <Link to={"/find-accommodations/view-Property"}>
      <div className="flex gap-4 p-4 border-b hover:bg-gray-50 transition-colors">
        <div className="relative w-48 h-32 flex-shrink-0">
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded-full text-xs">
            {property.roommates} Roommates
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-lg text-gray-900">
                {property.title}
              </h3>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {property.location}
              </p>
            </div>
            <button className="p-1.5 hover:bg-gray-100 rounded-full">
              <Heart className="w-5 h-5 text-gray-400" />
            </button>
          </div>

          <div className="mt-2 flex flex-wrap gap-2">
            {property.amenities.map((amenity, idx) => (
              <span
                key={idx}
                className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded-full"
              >
                {amenity}
              </span>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, idx) => (
                  <span key={idx} className="text-yellow-400 text-sm">
                    ★
                  </span>
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({property.reviews} reviews)
              </span>
            </div>
            <div className="text-lg font-semibold">
              ${property.price}
              <span className="text-sm font-normal text-gray-500">/month</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard