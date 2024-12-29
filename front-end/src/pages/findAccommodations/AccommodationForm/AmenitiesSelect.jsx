import React from "react";

export default function AmenitiesSelect({ selectedAmenities, onChange }) {
  const AMENITIES_OPTIONS = [
    "Air Conditioning",
    "Heating",
    "Washing Machine",
    "Dryer",
    "Wifi",
    "TV",
    "Kitchen",
    "Parking",
    "Elevator",
    "Security System",
    "Gym",
    "Swimming Pool",
    "Balcony",
    "Garden",
    "Pet Friendly",
    "Furnished",
    "Study Room",
    "Storage",
    "Dishwasher",
    "Private Bathroom",
  ];

  const handleChange = (amenity) => {
    const updatedAmenities = selectedAmenities.includes(amenity)
      ? selectedAmenities.filter((a) => a !== amenity)
      : [...selectedAmenities, amenity];
    onChange(updatedAmenities);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Amenities
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {AMENITIES_OPTIONS.map((amenity) => (
          <label key={amenity} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                type="checkbox"
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleChange(amenity)}
                className="h-4 w-4 text-blue-600 border p-2 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <div className="ml-2 text-sm">
              <span className="text-gray-700">{amenity}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}
