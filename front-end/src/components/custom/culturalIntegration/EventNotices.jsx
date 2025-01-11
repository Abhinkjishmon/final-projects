import React, { useEffect, useState } from "react";
import EventCard from "./eventNotices/EventCard";
import { Link } from "react-router-dom";
import { getAllEvents } from "@/apiService.js/culturalfit.service";
import { SkeletonCard } from "..";

const events = [
  {
    id: "1",
    title: "Annual Tech Conference 2024",
    description:
      "Join us for a day full of inspiring talks, workshops, and networking opportunities with industry leaders.",
    date: "2024-04-15",
    location: "Main Auditorium",
    bannerUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    user: {
      name: "Sarah Johnson",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
      department: "Event Management",
    },
  },
  {
    id: "2",
    title: "Cultural Festival 2024",
    description:
      "Experience diverse performances, art exhibitions, and cultural activities from around the world.",
    date: "2024-05-01",
    location: "Campus Ground",
    bannerUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=1200",
    user: {
      name: "Michael Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
      department: "Cultural Affairs",
    },
  },
  {
    id: "3",
    title: "Career Fair Spring 2024",
    description:
      "Meet representatives from top companies and explore exciting career opportunities.",
    date: "2024-03-30",
    location: "Business Center",
    bannerUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    user: {
      name: "Emily Rodriguez",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
      department: "Career Services",
    },
  },
];

function EventNotices() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const fetchAllEvents = async () => {
      setLoader(true);
      try {
        const response = await getAllEvents();
        if (isMounted) {
          setEvents(response.slice(0, 2));
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        if (isMounted) {
          setLoader(false);
        }
      }
    };
    fetchAllEvents();
    return () => {
      isMounted = false;
    };
  }, [isDialogOpen]);
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold py-5">Latest Events</h1>
      <div className="space-y-6">
        {!Loader ? (
          <>
            {" "}
            {Array.isArray(events) && events.length === 0 ? (
              <>No events</>
            ) : (
              <>
                {Array.isArray(events) ? (
                  events.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                ) : (
                  <div className="w-full flex text-center opacity-70 text-2xl font-bold">
                    No events are hosted
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <SkeletonCard />
        )}
      </div>
      <div className="w-full flex justify-center">
        <Link to="/culturalIntergretion/view-EventNotice">
          <button className="flex items-center justify-center px-5 py-3 mt-3 text-base font-medium text-teal-500 bg-white border border-transparent rounded-md shadow-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:border-white">
            View More
          </button>
        </Link>
      </div>
    </main>
  );
}

export default EventNotices;
