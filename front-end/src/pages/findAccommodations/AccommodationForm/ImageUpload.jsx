import React, { useCallback } from "react";
import { X } from "lucide-react";

export default function ImageUpload({ images, onChange, maxImages = 4 }) {
  const handleImageChange = useCallback(
    (e) => {
      const files = e.target.files;
      if (!files) return;

      const remainingSlots = maxImages - images.length;
      const filesToProcess = Array.from(files).slice(0, remainingSlots);

      filesToProcess.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          onChange([...images, reader.result].slice(0, maxImages));
        };
        reader.readAsDataURL(file);
      });
    },
    [images, maxImages, onChange]
  );

  const removeImage = useCallback(
    (index) => {
      onChange(images.filter((_, i) => i !== index));
    },
    [images, onChange]
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium text-gray-700">
          Property Images ({images.length}/{maxImages})
        </label>
        {images.length < maxImages && (
          <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            Add Images
            <input
              type="file"
              className="hidden"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              max={maxImages - images.length}
            />
          </label>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group">
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className="h-32 w-full object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={() => removeImage(index)}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}

        {/* Empty slots */}
        {Array.from({ length: maxImages - images.length }).map((_, index) => (
          <div
            key={`empty-${index}`}
            className="h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center"
          >
            <span className="text-sm text-gray-500">Empty slot</span>
          </div>
        ))}
      </div>
    </div>
  );
}
