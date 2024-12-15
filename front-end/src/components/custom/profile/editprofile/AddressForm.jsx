import React from "react";


function AddressForm({ address, onChange }) {
  const handleChange = (field, value) => {
    onChange({ ...address, [field]: value });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700">
          Street Address
        </label>
        <input
          type="text"
          value={address.street}
          onChange={(e) => handleChange("street", e.target.value)}
          className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">City</label>
        <input
          type="text"
          value={address.city}
          onChange={(e) => handleChange("city", e.target.value)}
          className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">State</label>
        <input
          type="text"
          value={address.state}
          onChange={(e) => handleChange("state", e.target.value)}
          className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Country
        </label>
        <input
          type="text"
          value={address.country}
          onChange={(e) => handleChange("country", e.target.value)}
          className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          ZIP Code
        </label>
        <input
          type="text"
          value={address.zipCode}
          onChange={(e) => handleChange("zipCode", e.target.value)}
          className="mt-1 border p-2 block w-full rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
        />
      </div>
    </div>
  );
}
export default AddressForm;
