import { createNewClassRoom } from "@/apiService.js/acadamic.service";
import React, { useCallback, useState } from "react";
import { Spinner } from "..";
import { toast } from "react-toastify";
import { Calendar, Image as ImageIcon, X } from "lucide-react";

const CreateClassForm = ({ closeDialog }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    name: "",
    email: "",
    coverVideo: "",
    whyGood: "",
    syllabus: [{ title: "", description: "" }],
  });
  const [loader, setLoader] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({ ...prev, coverVideo: file }));
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  }, []);

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, coverVideo: file }));
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };
  const removeImage = () => {
    setFormData((prev) => ({ ...prev, coverVideo: null }));
    setPreviewUrl("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSyllabusChange = (index, e) => {
    const { name, value } = e.target;
    const updatedSyllabus = [...formData.syllabus];
    updatedSyllabus[index][name] = value;
    setFormData({ ...formData, syllabus: updatedSyllabus });
  };

  const addModule = () => {
    setFormData({
      ...formData,
      syllabus: [...formData.syllabus, { title: "", description: "" }],
    });
  };

  const removeModule = (index) => {
    const updatedSyllabus = formData.syllabus.filter((_, i) => i !== index);
    setFormData({ ...formData, syllabus: updatedSyllabus });
  };

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("category", formData.category);
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("whyGood", formData.whyGood);
    if (formData.coverVideo) {
      formDataToSend.append("coverVideo", formData.coverVideo);
    } else {
      toast.error("Cover image is required");
      setLoader(false);
      return;
    }

    formData.syllabus.forEach((module, index) => {
      formDataToSend.append(`syllabus[${index}][title]`, module.title);
      formDataToSend.append(
        `syllabus[${index}][description]`,
        module.description
      );
    });

    try {
      const response = await createNewClassRoom(formDataToSend);

      if (response.status !== "SUCCESS") {
        toast.error(response.message);
      } else {
        toast.success(response.message);
        closeDialog();
      }
    } catch (error) {
      toast.error("An error occurred while creating the class.");
    }

    setLoader(false);
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Create a New Class
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-1"
            >
              Class Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter class title"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium mb-1"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter class description"
              rows="4"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-gray-700 font-medium mb-1"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="Science">Science</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Literature">Literature</option>
              <option value="Technology">Technology</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover Image
            </label>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg
                  ${
                    isDragging
                      ? "border-indigo-500 bg-indigo-50"
                      : "border-gray-300"
                  }
                  ${previewUrl ? "border-solid" : "border-dashed"}
                  transition-all duration-200 ease-in-out`}
            >
              {previewUrl ? (
                <div className="relative">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="max-h-64 rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="space-y-1 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="coverVideo"
                      className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="coverVideo"
                        name="coverVideo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileSelect}
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="whyGood"
              className="block text-gray-700 font-medium mb-1"
            >
              Why is this course good?
            </label>
            <textarea
              id="whyGood"
              name="whyGood"
              value={formData.whyGood}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Why is this course good?"
              rows="4"
            ></textarea>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Syllabus
            </h3>
            {formData.syllabus.map((module, index) => (
              <div key={index} className="space-y-4">
                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <label
                    htmlFor={`syllabusTitle-${index}`}
                    className="block font-medium text-gray-800"
                  >
                    Module {index + 1} Title
                  </label>
                  <input
                    type="text"
                    id={`syllabusTitle-${index}`}
                    name="title"
                    value={module.title}
                    onChange={(e) => handleSyllabusChange(index, e)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter module title"
                  />
                </div>
                <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                  <label
                    htmlFor={`syllabusDescription-${index}`}
                    className="block font-medium text-gray-800"
                  >
                    Module {index + 1} Description
                  </label>
                  <textarea
                    id={`syllabusDescription-${index}`}
                    name="description"
                    value={module.description}
                    onChange={(e) => handleSyllabusChange(index, e)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter module description"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={() => removeModule(index)}
                  className="text-white rounded-md bg-red-600 p-2"
                >
                  Remove Module
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addModule}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
              Add New Module
            </button>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {loader ? <Spinner /> : "Create Class"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClassForm;
