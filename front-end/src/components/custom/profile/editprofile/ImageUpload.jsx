import React from "react";
import { Upload } from "lucide-react";

export function ImageUpload({ label, imageUrl, onChange, className = "" }) {
  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      onChange(file);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div
        className={`aspect-[3/1] rounded-lg overflow-hidden bg-gray-100 ${className} `}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={label}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <Upload className="w-8 h-8 text-gray-400" />
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="absolute inset-0 opacity-0 cursor-pointer"
        aria-label={label}
      />
      <div className="absolute bottom-4 right-4">
        {label !== "Profile Image" && (
          <button className="bg-white shadow-md rounded-lg px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            Change {label}
          </button>
        )}
      </div>
    </div>
  );
}
export default ImageUpload;