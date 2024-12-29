import React, { useEffect } from "react";
import {
  Star,
  Phone,
  Heart,
  Shield,
  Activity,
  Plus,
  LucideArrowRight,
} from "lucide-react";
import landingImg from "/images/students.png";
import avathar from "/images/avathar.jpg";
import { useSelector } from "react-redux";

const FloatingElement = ({ Icon, color, size, position, animation }) => (
  <div className={`absolute ${position} ${animation}`}>
    <div
      className={`${size} rounded-lg bg-${color} bg-opacity-20 p-3 backdrop-blur-sm`}
    >
      <Icon className={`w-full h-full text-${color}`} />
    </div>
  </div>
);

function LandingPage() {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className=" home bg-gradient-to-br from-white to-blue-50 overflow-hidden">
      <FloatingElement
        Icon={Plus}
        color="pink-500"
        size="w-8 h-8"
        position="top-20 right-[20%]"
        animation="animate-bounce-slow"
      />
      <FloatingElement
        Icon={Heart}
        color="red-500"
        size="w-12 h-12"
        position="bottom-32 left-[10%]"
        animation="animate-pulse"
      />
      <FloatingElement
        Icon={Shield}
        color="green-500"
        size="w-10 h-10"
        position="top-40 left-[15%]"
        animation="animate-float"
      />
      <FloatingElement
        Icon={Activity}
        color="purple-500"
        size="w-6 h-6"
        position="bottom-20 right-[15%]"
        animation="animate-bounce-slow"
      />
      <div className="max-w-7xl  mx-auto px-4  sm:px-6 lg:px-8 py-6 sm:py-12 relative">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 right-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
              Where dreams meet opportunity, we handle the rest for you.
            </h1>

            <p className="text-base sm:text-lg text-gray-600">
              We are your trusted partner in simplifying the journey of students
              studying abroad. From visa assistance and accommodation support to
              career guidance and cultural integration, we take care of the
              details so you can focus on achieving your goals and making the
              most of your experience.
            </p>

            <button className="group w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <span className="flex items-center justify-center gap-2">
                Lets start
                <LucideArrowRight className="w-5 h-5 transition-colors" />
              </span>
            </button>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-[1.02]">
              <img
                src={landingImg}
                alt="Doctor with patients"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute top-4 right-4 bg-white/90 p-4 rounded-xl shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center gap-2">
                <Phone className="text-yellow-500 w-5 h-5 animate-pulse" />
                <h3 className="font-semibold text-gray-900">
                  24/7 Consultation
                </h3>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                We are available 24 hours.
              </p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white/90 p-4 rounded-xl shadow-lg max-w-xs backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-blue-500">
                  <img
                    src={avathar}
                    alt="Reviewer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </p>
                  <div className="flex text-yellow-400 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
