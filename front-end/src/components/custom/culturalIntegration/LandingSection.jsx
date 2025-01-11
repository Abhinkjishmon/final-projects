import React from "react";

function LandingSection({ onGetStartedClick }) {
  return (
    <div>
      <div
        className="min-h-screen relative bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:bg-opacity-50"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="relative min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
                Bridging
                <span className="text-emerald-300"> Cultures</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 animate-slide-up delay-200">
                Experience the richness of global cultures and connect with
                people from around the world in meaningful ways.
              </p>
              <button
                onClick={onGetStartedClick}
                className="px-8 py-3 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors animate-fade-in delay-300"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingSection;
