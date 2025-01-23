import React from "react";
import { Twitter, Linkedin, Github, Instagram, Trash2 } from "lucide-react";

const platformIcons = {
  twitter: Twitter,
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
};

function SocialMediaInput({ socialMedia, onChange }) {
  const handleAdd = (e) => {
     e.preventDefault();
    onChange([...socialMedia, { platform: "twitter", url: "" }]);
  };

  const handleRemove = (index) => {
    onChange(socialMedia.filter((_, i) => i !== index));
  };

  const handleChange = (index, field, value) => {
    const updated = socialMedia.map((item, i) => {
      if (i === index) {
        return { ...item, [field]: value };
      }
      return item;
    });
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      {socialMedia.map((item, index) => {
        const Icon = platformIcons[item.platform];
        return (
          <div key={index} className="flex gap-4">
            <select
              value={item.platform}
              onChange={(e) => handleChange(index, "platform", e.target.value)}
              className="w-40 border p-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            >
              {Object.keys(platformIcons).map((platform) => (
                <option key={platform} value={platform}>
                  {platform.charAt(0).toUpperCase() + platform.slice(1)}
                </option>
              ))}
            </select>
            <input
              type="url"
              value={item.url}
              onChange={(e) => handleChange(index, "url", e.target.value)}
              placeholder="Enter URL"
              className="flex-1 border p-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              onClick={() => handleRemove(index)}
              className="p-2 text-gray-400 hover:text-red-500"
            >
              <Trash2 size={20} />
            </button>
          </div>
        );
      })}
      <button
        onClick={handleAdd}
        className="text-blue-600 hover:text-blue-700 font-medium"
      >
        + Add Social Media
      </button>
    </div>
  );
}
export default SocialMediaInput;
