import React from "react";
import ImageUpload from "./ImageUpload";
import AmenitiesSelect from "./AmenitiesSelect";

const FURNISHING_OPTIONS = [
  "fully furnished",
  "semi-furnished",
  "unfurnished",
];
const AVAILABILITY_OPTIONS = [
  "available",
  "booked",
  "unavailable",
];

export default function PropertyDetails({
  formData,
  setFormData, 
}) {
  const handleInputChange = (
    e
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Property Details</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Monthly Rent
          </label>
          <input
            type="number"
            name="rent"
            value={formData.rent}
            onChange={handleInputChange}
            required
            min="0"
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Room Type
          </label>
          <input
            type="text"
            name="roomType"
            value={formData.roomType}
            onChange={handleInputChange}
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Furnishing
          </label>
          <select
            name="furnishing"
            value={formData.furnishing}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {FURNISHING_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Availability Status
          </label>
          <select
            name="availabilityStatus"
            value={formData.availabilityStatus}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full rounded-md border p-2 border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            {AVAILABILITY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ImageUpload
        images={formData.images || []}
        onChange={(images) => setFormData((prev) => ({ ...prev, images }))}
        maxImages={4}
      />

      <AmenitiesSelect
        selectedAmenities={formData.amenities || []}
        onChange={(amenities) =>
          setFormData((prev) => ({ ...prev, amenities }))
        }
      />

      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            name="utilitiesIncluded"
            checked={formData.utilitiesIncluded}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                utilitiesIncluded: e.target.checked,
              }))
            }
            className="h-4 w-4 text-blue-600 border p-2  focus:ring-blue-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Utilities Included</span>
        </label>
      </div>
    </div>
  );
}
