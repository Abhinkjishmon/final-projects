import React from "react";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import highlightsimg from "/images/highlightsimg.png";

function Hero() {
  return (
    <div className="max-w-6xl mx-auto p-6 md:my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative">
            <div className="aspect-square w-full bg-blue-500 rounded-full overflow-hidden">
              <img
                src={highlightsimg}
                alt="Business professional"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-4 right-4 w-24 h-24">
              <div className="relative w-full h-full">
                <div className="absolute inset-0 animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path
                      id="circle"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="none"
                      className="text-gray-800"
                    />
                    <text className="text-xs">
                      <textPath href="#circle" className="text-gray-600">
                        100% Satisfaction Guarantee •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute top-12 left-0 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
              <div className="bg-pink-100 p-2 rounded-full">
                <Award className="w-6 h-6 text-red-500" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Complete Project</div>
                <div className="text-2xl font-bold">1000+</div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            We Bring Strategy to Your Success
          </h1>

          <p className="text-gray-600">
            At <span className="text-blue-500">EASY WAY</span>, we specialize in empowering students with
            tailored support services, including finding accommodations,
            securing part-time jobs, cultural integration, academic assistance,
            and visa & immigration guidance. Our mission is to ensure you can
            focus on your goals while we handle the rest. If you’re searching
            for a trusted partner who understands your challenges and has the
            expertise to simplify your journey, you’ve come to the right place.
          </p>

          <p className="text-gray-600">
            If you're looking for an award-winning website design and digital
            marketing partner that "gets it," has strong technology chops and a
            few brilliant ideas up their sleeves, scroll on.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
