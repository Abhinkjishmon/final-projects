import React from "react";
import { Star, MapPin } from "lucide-react";

export function AccommodationCard({ accommodation, showStatus = true }) {
  const { title, location, price, imageUrl, rating, status } = accommodation;

  const statusColors = {
    available: "bg-green-100 text-green-800",
    booked: "bg-blue-100 text-blue-800",
    maintenance: "bg-yellow-100 text-yellow-800",
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        {showStatus && (
          <span
            className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}
          >
            {status}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center mt-1 text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-lg font-bold">${price}/night</span>
        </div>
      </div>
    </div>
  );
}
export default AccommodationCard;
