import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import Calendar from "./Calendar";
import TimeSelect from "./TimeSelect";
import { takeAppointments } from "@/apiService.js/accommodation";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function BookingForm() {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    date: null,
    time: null,
    phoneNumber: "",
    specialRequests: "",
    accommodationId: id,
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) {
      newErrors.date = "Please select a date.";
    }
    if (!formData.time) {
      newErrors.time = "Please select a time.";
    }
    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const takeNewAppointments = async () => {
    const response = await takeAppointments(formData);
    if (response.status !== "SUCCESS") {
      toast.error(response.message);
    } else {
      toast.success(response.message);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      await takeNewAppointments();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-[500px] overflow-x-scroll scroll-bar mx-auto p-6"
    >
      <div className="bg-white rounded-xl space-y-6">
        <div className="grid gap-6">
          <div className="space-y-4">
            <Calendar
              selectedDate={formData.date}
              onDateSelect={(date) => {
                setFormData((prev) => ({ ...prev, date }));
              }}
              minDate={formData.checkInDate || new Date()}
            />
            {errors.date && (
              <p className="text-red-500 text-sm">{errors.date}</p>
            )}
            <TimeSelect
              label="Select time"
              value={formData.time}
              onChange={(time) => setFormData((prev) => ({ ...prev, time }))}
              minTime="06:00"
              maxTime="12:00"
            />
            {errors.time && (
              <p className="text-red-500 text-sm">{errors.time}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block w-full text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
              className={`mt-1 border p-2 block w-full rounded-md ${
                errors.phoneNumber
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-blue-500"
              }`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Special Requests
            </label>
            <textarea
              value={formData.specialRequests}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  specialRequests: e.target.value,
                }))
              }
              rows={4}
              className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Book Now
        </button>
      </div>
    </form>
  );
}

export default BookingForm;
