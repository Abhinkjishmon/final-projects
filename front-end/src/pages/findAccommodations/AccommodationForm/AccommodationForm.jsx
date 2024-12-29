import React, { useState } from "react";
import BasicInformation from "./BasicInformation";
import AddressSection from "./AddressSection";
import PropertyDetails from "./PropertyDetails";
import { createNewAccommodation } from "@/apiService.js/accommodation";
import { handleCompressAndAppendImages } from "@/utils/compressFile";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AccommodationForm() {
  const [loading, setLoading] = useState(false);
  const naviagate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      latitude: 0,
      longitude: 0,
    },
    location: {
      type: "Point",
      coordinates: [0, 0],
    },
    rent: 0,
    utilitiesIncluded: false,
    roomType: "",
    furnishing: "unfurnished",
    amenities: [],
    images: [],
    availabilityStatus: "available",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const updatedFormData = {
      ...formData,
      location: {
        type: "Point",
        coordinates: [
          formData.address?.longitude || 0,
          formData.address?.latitude || 0,
        ],
      },
    };

    const data = new FormData();
    data.append("title", updatedFormData.title || "");
    data.append("description", updatedFormData.description || "");
    data.append("rent", String(updatedFormData.rent || 0));
    data.append("utilitiesIncluded", String(updatedFormData.utilitiesIncluded));
    data.append("roomType", updatedFormData.roomType || "");
    data.append("furnishing", updatedFormData.furnishing || "unfurnished");
    data.append(
      "availabilityStatus",
      updatedFormData.availabilityStatus || "available"
    );
    Object.entries(updatedFormData.address || {}).forEach(([key, value]) => {
      data.append(`address[${key}]`, String(value));
    });

    data.append("location[type]", updatedFormData.location.type);
    data.append(
      "location[coordinates][0]",
      String(updatedFormData.location.coordinates[0])
    );
    data.append(
      "location[coordinates][1]",
      String(updatedFormData.location.coordinates[1])
    );
    updatedFormData.amenities.forEach((amenity, index) => {
      data.append(`amenities[${index}]`, amenity);
    });

    await handleCompressAndAppendImages(updatedFormData.images, data);
    newAccommodation(formData);
  };

  const newAccommodation = async (formData) => {
    const response = await createNewAccommodation(formData);
    if (response.status !== "SUCCESS") {
      setLoading(false);
    } else {
      setLoading(false);
      toast.success(response.message);
      naviagate("/find-accommodations");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg px-8 py-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Add New Accommodation
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <BasicInformation formData={formData} setFormData={setFormData} />
            <AddressSection formData={formData} setFormData={setFormData} />
            <PropertyDetails formData={formData} setFormData={setFormData} />

            <div className="pt-5">
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                  {loading ? "Saving..." : "Save Accommodation"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
