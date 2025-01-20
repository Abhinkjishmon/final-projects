import React, { useEffect, useState } from "react";
import { Home, Calendar, Heart } from "lucide-react";
import AccommodationCard from "./AccommodationCard";
import AppointmentCard from "./AppointmentCard";
import {
  getAccomodation,
  getAppointments,
  getWhishlistAccomodation,
} from "@/apiService.js/profile.service";

function AccommodationsPage() {
  const mockMyAccommodations = [
    {
      id: "1",
      title: "Modern Downtown Apartment",
      location: "New York, NY",
      price: 150,
      imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      rating: 4.5,
      type: "apartment",
      status: "available",
    },
    {
      id: "2",
      title: "Cozy Beach House",
      location: "Miami, FL",
      price: 200,
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      rating: 4.8,
      type: "house",
      status: "booked",
    },
  ];

  const mockAppointments = [
    {
      id: "1",
      accommodationId: "1",
      date: "2024-03-20",
      time: "14:00",
      status: "confirmed",
      guestName: "John Smith",
      guestEmail: "john@example.com",
      guestPhone: "+1 234-567-8900",
    },
    {
      id: "2",
      accommodationId: "2",
      date: "2024-03-22",
      time: "10:00",
      status: "pending",
      guestName: "Sarah Johnson",
      guestEmail: "sarah@example.com",
      guestPhone: "+1 234-567-8901",
    },
  ];

  const mockWishlist = [
    {
      id: "3",
      title: "Luxury Penthouse",
      location: "Los Angeles, CA",
      price: 300,
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      rating: 4.9,
      type: "apartment",
      status: "available",
      dateAdded: "2024-03-15",
    },
  ];
  const [myAccommodations, setmyAccommodations] = useState([]);
  const [myAppointments, setAppointments] = useState([]);
  const [myAccommodationsWhishlist, setmyAccommodationsWhishlist] = useState(
    []
  );
  const [activeTab, setActiveTab] = React.useState("accommodations");
  const [isDeleted, setDeleted] = useState(false);

  const tabs = [
    { id: "accommodations", label: "My Accommodations", icon: Home },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "wishlist", label: "Wishlist", icon: Heart },
  ];

  useEffect(() => {
    const fetchUserAccomodation = async () => {
      const response = await getAccomodation();
      const whishlistResponce = await getWhishlistAccomodation();
      const getAppintment = await getAppointments();
      setAppointments(getAppintment.appointments);
      setmyAccommodationsWhishlist(whishlistResponce.accommodations);
      setmyAccommodations(response.accommodations);
    };
    fetchUserAccomodation();
  }, [isDeleted]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-6">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {tabs.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    flex items-center px-1 py-4 border-b-2 font-medium text-sm
                    ${
                      activeTab === id
                        ? "border-blue-500 text-blue-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </nav>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === "accommodations" && (
              <>
                {myAccommodations && myAccommodations.length > 0 ? (
                  myAccommodations.map((accommodation) => (
                    <AccommodationCard
                      key={accommodation._id}
                      accommodation={accommodation}
                      onDelete={() => setDeleted(true)}
                      activeTab={activeTab}
                    />
                  ))
                ) : (
                  <p>No accommodations available</p>
                )}
              </>
            )}

            {activeTab === "appointments" && (
              <>
                {myAppointments && myAppointments.length > 0 ? (
                  myAppointments.map((appointment) => (
                    <AppointmentCard
                      key={appointment.id}
                      appointment={appointment}
                    />
                  ))
                ) : (
                  <p>No appointments available</p>
                )}
              </>
            )}

            {activeTab === "wishlist" && (
              <>
                {myAccommodationsWhishlist &&
                myAccommodationsWhishlist.length > 0 ? (
                  myAccommodationsWhishlist.map((accommodation) => (
                    <AccommodationCard
                      key={accommodation.id}
                      accommodation={accommodation}
                      showStatus={false}
                      activeTab={activeTab}
                      onDelete={() => setDeleted(true)}
                    />
                  ))
                ) : (
                  <p>No accommodations in your wishlist</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AccommodationsPage;
