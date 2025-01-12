import { register } from "@/apiService.js/auth.service";
import { Spinner } from "@/components/custom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isLoding, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname.trim())
      newErrors.fullname = "Full Name is required.";
    if (!formData.username.trim())
      newErrors.username = "User Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid.";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      registerUser(formData);
    }
  };
  const registerUser = async (formData) => {
    setLoading(true);
    const result = await register(formData);
    if (result.status !== "SUCCESS") {
      toast.error(result.message);
      setLoading(false);
    } else {
      setLoading(true);
      toast.success(result.message);
      navigate("/signin");
    }
  };

  
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* Left Panel */}
      <div className="md:w-1/2 bg-blue-500 p-8 flex flex-col justify-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanture
            <br />
            start hear
          </h1>
          <p className="text-blue-100">
            Create and Account to Join Our Community
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-blue-300 rounded-full opacity-50"
            />
          ))}
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-4 border-blue-400 rounded-full transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/4 right-8 w-4 h-4 bg-blue-300 rounded-full" />
        <div className="absolute bottom-1/4 left-8 w-8 h-16 bg-blue-400 rounded-full opacity-50" />
      </div>
      {/* Right Panel - Login Form */}
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-3">
            <div className="rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">Easy Way</span>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-8">
            "Hello! Ready to join us? Create your account and get started!"
          </h2>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  name="fullname"
                  className={`w-full px-4 py-2 border ${
                    errors.fullname ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Enter your full name"
                  value={formData.fullname}
                  onChange={handleChange}
                />
              </div>
              {errors.fullname && (
                <p className="text-red-500 text-sm">{errors.fullname}</p>
              )}
            </div>

            {/* User Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                User Name
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  name="username"
                  className={`w-full px-4 py-2 border ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1 relative">
                <input
                  type="email"
                  name="email"
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type="password"
                  name="password"
                  className={`w-full px-4 py-2 border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="h-4 w-4 text-blue-500 border-gray-300 rounded"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                />
                <label className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-blue-500 hover:text-blue-600"
              >
                Reset Password!
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              {isLoding ? <Spinner /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
