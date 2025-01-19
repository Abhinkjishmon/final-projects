import { fetchServer, login } from "@/apiService.js/auth.service";
import { setLocalStorageItem } from "@/utils/localStorage";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [errors, setErrors] = useState({});
  const [isLoding, setLoading] = useState(false);
  const navigate = useNavigate();
  const validateForm = (data) => {
    let validationErrors = {};
    if (!data.get("email")) {
      validationErrors.email = "Email/username is required";
    }
    if (!data.get("password")) {
      validationErrors.password = "Password is required";
    } else if (data.get("password").length < 6) {
      validationErrors.password = "Password must be at least 6 characters";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      const formObject = Object.fromEntries(formData.entries());
      logInUser(formObject);
    }

    async function logInUser(formData) {
      setLoading(true);
      const result = await login(formData);
      if (result.status !== "SUCCESS") {
        toast.error(result.message);
        setLoading(false);
      } else {
        setLoading(true);
        // Save user data in local storage
        setLocalStorageItem("user", result.data);
        toast.success(result.message);
        navigate("/");
      }
    }
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      <div className="md:w-1/2 bg-blue-500 p-8 flex flex-col justify-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Begin
            <br />
            Your Journey with Us
          </h1>
          <p className="text-blue-100">
            Sign Up to Unlock Essential Resources, Support, and Opportunities to
            Thrive as a Student!
          </p>
        </div>
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
      <div className="md:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex justify-center mb-3">
            <div className="rounded-lg flex items-center justify-center">
              <div className="text-blue-500 text-2xl font-bold">Easy Way</div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-center mb-8">
            Hello ! Welcome back
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email/username
              </label>
              <div className="mt-1 relative">
                <input
                  type="text"
                  name="email"
                  className={`w-full px-4 py-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>
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
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Login
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">or</span>
              </div>
            </div>
            <p className="text-center text-sm text-gray-600">
              Don't Have an Account?{" "}
              <a href="/signup" className="text-blue-500 hover:text-blue-600">
                Create Account
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
