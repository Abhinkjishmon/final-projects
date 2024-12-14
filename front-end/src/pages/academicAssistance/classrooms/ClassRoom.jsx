import { CourseInfo, Cover, Rightbar, Sidebar } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect } from "react";

function ClassRoom() {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <div className="flex h-screen bg-gray-50 ">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <Cover />
            <CourseInfo />
          </div>
        </main>
        <Rightbar />
      </div>
    </>
  );
}

export default ClassRoom;
