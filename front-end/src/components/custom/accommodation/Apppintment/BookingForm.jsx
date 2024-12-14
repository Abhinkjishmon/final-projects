import React, { useState } from "react";
import { CalendarDays } from "lucide-react";
import Calendar from "./Calendar";
import TimeSelect from "./TimeSelect";

function BookingForm() {
  const [formData, setFormData] = useState({
    checkInDate: null,
    checkInTime: "",
    checkOutDate: null,
    checkOutTime: "",
    guestName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
              selectedDate={formData.checkOutDate}
              onDateSelect={(date) =>
                setFormData((prev) => ({ ...prev, checkOutDate: date }))
              }
              minDate={formData.checkInDate || new Date()}
            />
            <TimeSelect
              label="Check-out Time"
              value={formData.checkOutTime}
              onChange={(time) =>
                setFormData((prev) => ({ ...prev, checkOutTime: time }))
              }
              minTime="06:00"
              maxTime="12:00"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Guest Name
            </label>
            <input
              type="text"
              value={formData.guestName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, guestName: e.target.value }))
              }
              className="mt-1 border p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="mt-1 border p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              required
            />
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
