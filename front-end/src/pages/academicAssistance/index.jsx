import {
  AcadamicLanding,
  CourseCard,
  TeacherHero,
  TeachersSection,
} from "@/components/custom";
import { CoursesHeader } from "@/components/custom/academicAssistance/CoursesHeader";
import { scrollToTop } from "@/utils/scroll";
import React, { useEffect } from "react";

function Acadamic() {
  const courses = [
    {
      title: "Learn Figma - UI/UX Design Essential Training",
      image:
        "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      lessons: 6,
      students: 158,
      level: "Beginner",
      rating: 4.9,
    },
    {
      title: "Python For Beginners - Learn Programming",
      image:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=800",
      lessons: 21,
      students: 99,
      level: "Advanced",
      rating: 4.8,
    },
    {
      title: "Acoustic Guitar And Electric Guitar Started",
      image:
        "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80&w=800",
      lessons: 8,
      students: 301,
      level: "Average",
      rating: 4.7,
    },
    {
      title: "Mobile App Development With Flutter & Dart",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      lessons: 15,
      students: 215,
      level: "Beginner",
      rating: 5.0,
    },
    {
      title: "Ionic React: Mobile Development With Ionic",
      image:
        "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&q=80&w=800",
      lessons: 18,
      students: 87,
      level: "Advanced",
      rating: 4.5,
    },
    {
      title: "Sports Management: The Essentials Course",
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
      lessons: 26,
      students: 156,
      level: "Average",
      rating: 4.1,
    },
    {
      title: "How To Market Yourself As A Consultant",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      lessons: 13,
      students: 84,
      level: "Beginner",
      rating: 4.3,
    },
    {
      title: "Become A Product Manager | Learn The Skills",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      lessons: 9,
      students: 134,
      level: "Advanced",
      rating: 4.9,
    },
  ];

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
      <AcadamicLanding />
      <TeachersSection />
      <div className="min-h-screen bg-background">
        <main className="container mx-auto md:px-20  px-4 py-8">
          <CoursesHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </main>
      </div>
      <TeacherHero />
      <div className="min-h-screen bg-background">
        <main className="container mx-auto md:px-20  px-4 py-8">
          <CoursesHeader />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Acadamic;
