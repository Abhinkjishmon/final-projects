import { getClassRooms } from "@/apiService.js/acadamic.service";
import {
  AcadamicLanding,
  CourseCard,
  TeacherHero,
  TeachersSection,
} from "@/components/custom";
import { CoursesHeader } from "@/components/custom/academicAssistance/CoursesHeader";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect, useRef, useState } from "react";

function Acadamic() {
  const [classRoom, setClassRoom] = useState();
  const [showClassRoom, setShowClassRoom] = useState();
  const teacherHeroRef = useRef(null);
  useEffect(() => {
    scrollToTop();
    const fetchAllClassRooms = async () => {
      const response = await getClassRooms();
      setClassRoom(response);
      setShowClassRoom(response.slice(0, 4));
    };
    fetchAllClassRooms();
  }, []);
  const showAllClasses = () => {
    setShowClassRoom(classRoom);
  };
  const scrollToTeacherHero = () => {
    if (teacherHeroRef.current) {
      teacherHeroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <AcadamicLanding onStartCourseClick={scrollToTeacherHero} />
      <TeachersSection />
      <TeacherHero />
      <div className="min-h-screen bg-background" ref={teacherHeroRef}>
        <main className="container mx-auto md:px-20  px-4 py-8">
          <CoursesHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {showClassRoom && showClassRoom.length > 0 ? (
              showClassRoom.map((course) => (
                <CourseCard key={course.title} {...course} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No classrooms available
              </div>
            )}
          </div>
          <div className="w-full flex justify-center my-10">
            <button
              className="rounded-md bg-black text-white p-2"
              onClick={showAllClasses}
            >
              View all
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Acadamic;
