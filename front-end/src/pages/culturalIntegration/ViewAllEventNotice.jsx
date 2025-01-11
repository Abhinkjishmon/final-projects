import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import EventCard from "@/components/custom/culturalIntegration/eventNotices/EventCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { EventForm, SkeletonCard } from "@/components/custom";
import { getAllEvents } from "@/apiService.js/culturalfit.service";
import { scrollToTop } from "@/utils/scroll";

function ViewAllEventNotice() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [Loader, setLoader] = useState(false);
  useEffect(() => {
    scrollToTop ();
    let isMounted = true;
    const fetchAllEvents = async () => {
      setLoader(true);
      try {
        const response = await getAllEvents();
        if (isMounted) {
          setEvents(response);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-gray-900 font-serif">
                Events Notice Board
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger>
                  <div className="inline-flex items-center gap-2 px-4 py-2  text-teal-500 bg-white border rounded-lg font-semibold hover:bg-teal-500 hover:text-white transition-colors">
                    <Plus className="w-5 h-5" />
                    Create Notice
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <EventForm closeDialog={() => setIsDialogOpen(false)} />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
      </main>
    </div>
  );
}

export default ViewAllEventNotice;
