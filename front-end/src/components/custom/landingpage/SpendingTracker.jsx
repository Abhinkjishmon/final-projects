import React from "react";
import { Card, CardContent } from "@/components/ui/card";

function SpendingTracker() {
  return (
    <div className="max-w-4xl min-h-96 lg:my-10  mx-auto p-6">
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">
          ENSURE YOUR SPENDING IS WORTHWHILE
        </h1>
        <p className="text-gray-500">
          Track and optimize your expenses effectively
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Households Card */}
        <Card className="bg-gray-100">
          <CardContent className="p-6">
            <div className="flex items-center h-full">
              <p className="text-2xl font-semibold">75% of households</p>
            </div>
          </CardContent>
        </Card>

        {/* Savings Card - Spans 2 rows on larger screens */}
        <Card className="bg-gray-900 text-white row-span-2">
          <CardContent className="p-6 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold mb-2">$3000+</h2>
              <h3 className="text-xl mb-4">Saved</h3>
              <p className="text-gray-300">
                of income on dining out reduces savings by 25%
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Hours Card */}
        <Card className="bg-gray-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center h-full">
              <p className="text-2xl font-semibold">24 hours</p>
            </div>
          </CardContent>
        </Card>

        {/* Image Cards */}
        <div className="relative">
          <img
            src="/api/placeholder/400/300"
            alt="Person working at desk"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="relative">
          <img
            src="/api/placeholder/400/300"
            alt="Person using laptop"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default SpendingTracker;
