import React, { useCallback } from "react";
import { MapPin } from "lucide-react";

export default function AddressSection({ formData, setFormData }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    }
  };

  const getCurrentLocation = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              latitude,
              longitude,
            },
            location: {
              type: "Point",
              coordinates: [longitude, latitude],
            },
          }));
        },
        (error) => {
          console.error("Error getting location:", error);
          alert(
            "Unable to get your location. Please enter coordinates manually."
          );
        }
      );
    } else {
      alert("Geolocation is not supported by your browser");
    }
  }, [setFormData]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-gray-900">Address</h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street
          </label>
          <input
            type="text"
            name="address.street"
            value={formData.address?.street}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            name="address.city"
            value={formData.address?.city}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            State
          </label>
          <input
            type="text"
            name="address.state"
            value={formData.address?.state}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            ZIP Code
          </label>
          <input
            type="text"
            name="address.zipCode"
            value={formData.address?.zipCode}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <input
            type="text"
            name="address.country"
            value={formData.address?.country}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-gray-900">
            Location Coordinates
          </h4>
          <button
            type="button"
            onClick={getCurrentLocation}
            className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <MapPin className="h-4 w-4 mr-2" />
            Get Current Location
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Latitude
            </label>
            <input
              type="number"
              step="any"
              name="address.latitude"
              value={formData.address?.latitude}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Longitude
            </label>
            <input
              type="number"
              step="any"
              name="address.longitude"
              value={formData.address?.longitude}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full border p-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
