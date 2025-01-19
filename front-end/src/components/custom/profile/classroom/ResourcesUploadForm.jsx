import React, { useState, ChangeEvent } from "react";
import { FileVideo, FileImage, FileType } from "lucide-react";
import { useParams } from "react-router-dom";
import { addStudyMeaterial } from "@/apiService.js/acadamic.service";
import { toast } from "react-toastify";

function ResourcesUploadForm({ closeDialog }) {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    type: "video",
    url: "",
  });
  const [preview, setPreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFormData((prev) => ({ ...prev, file }));
    if (formData.type === "image" && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "file" && value instanceof File) {
        data.append("file", value);
      } else if (key !== "file") {
        data.append(key, value);
      }
    });
    const response = await addStudyMeaterial(id, data);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
      closeDialog();
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto  p-6">
        <div className="text-center mb-8">
          {formData.type === "video" && (
            <FileVideo className="mx-auto h-12 w-12 text-blue-500" />
          )}
          {formData.type === "image" && (
            <FileImage className="mx-auto h-12 w-12 text-green-500" />
          )}
          {formData.type === "pdf" && (
            <FileType className="mx-auto h-12 w-12 text-red-500" />
          )}
          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            Media Upload Form
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Type *
            </label>
            <select
              id="type"
              name="type"
              required
              value={formData.type}
              onChange={handleInputChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="video">Video</option>
              <option value="image">Image</option>
              <option value="pdf">PDF</option>
            </select>
          </div>

          {formData.type === "video" ? (
            <div>
              <label
                htmlFor="url"
                className="block text-sm font-medium text-gray-700"
              >
                Video URL *
              </label>
              <input
                type="url"
                id="url"
                name="url"
                required
                value={formData.url}
                onChange={handleInputChange}
                placeholder="Enter video URL"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          ) : (
            <div>
              <label
                htmlFor="file"
                className="block text-sm font-medium text-gray-700"
              >
                Upload {formData.type.toUpperCase()} *
              </label>
              <input
                type="file"
                id="file"
                required
                accept={formData.type === "image" ? "image/*" : ".pdf"}
                onChange={handleFileChange}
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>
          )}

          {formData.type === "image" && preview && (
            <div className="mt-4">
              <p className="block text-sm font-medium text-gray-700 mb-2">
                Preview:
              </p>
              <img
                src={preview}
                alt="Preview"
                className="max-w-full h-auto rounded-lg"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResourcesUploadForm;
