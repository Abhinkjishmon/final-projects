import React, { useState } from "react";
import { Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { deleteAccomodation } from "@/apiService.js/profile.service";
import { toast } from "react-toastify";
import { removeWishlistAccommodation } from "@/apiService.js/accommodation";

export function AccommodationCard({
  accommodation,
  showStatus = true,
  onDelete,
  activeTab,
}) {
  const { title, address, rent, images, roomType, _id } = accommodation;

  const handleDelete = async (e) => {
    e.preventDefault();
    const response = await deleteAccomodation(_id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      onDelete();
    }
  };
  const handleRemove = async (e) => {
    e.preventDefault();
    const response = await removeWishlistAccommodation(_id);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      onDelete();
    }
  };

  return (
    <Link to={`/find-accommodations/view-Property/${_id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-48">
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
          {showStatus && (
            <span
              className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800`}
            >
              {roomType}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <div className="flex items-center mt-1 text-gray-600">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{address.city}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              {activeTab == "wishlist" ? (
                <button
                  className="p-2 text-white bg-red-600 rounded-md"
                  onClick={handleRemove}
                >
                  remove
                </button>
              ) : (
                <button
                  className="p-2 text-white bg-red-600 rounded-md"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              )}
            </div>
            <span className="text-lg font-bold">${rent}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default AccommodationCard;
