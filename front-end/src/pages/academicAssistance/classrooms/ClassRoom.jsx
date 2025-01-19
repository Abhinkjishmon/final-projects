import { getOneClassRooms } from "@/apiService.js/acadamic.service";
import { CourseInfo, Cover, Rightbar, Sidebar } from "@/components/custom";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ClassRoom() {

  const { id } = useParams();
  const [classRoomDetails, setClassRoom] = useState();
  useEffect(() => {
    scrollToTop();
    const fetchClassRoomDetails = async (id) => {
      const response = await getOneClassRooms(id);
      setClassRoom(response);
    };
    fetchClassRoomDetails(id);
  }, []);
  return (
    <>
      <div className="flex h-screen bg-gray-50 ">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <Cover coverImage={classRoomDetails?.coverVideo} />
            <CourseInfo classRoomDetails={classRoomDetails} />
          </div>
        </main>
      </div>
    </>
  );
}

export default ClassRoom;
