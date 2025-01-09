import React from "react";

function Hero() {
  return (
    <div className="relative h-[400px]">
      <img
        src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80"
        alt="London cityscape"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Living in the UK</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your comprehensive guide to life in the United Kingdom - from
            housing to culture, we've got you covered.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
