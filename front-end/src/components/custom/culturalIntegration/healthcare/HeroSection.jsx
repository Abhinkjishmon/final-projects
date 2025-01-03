import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="relative h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">UK Healthcare System</h1>
            <p className="text-xl">Discover the world-renowned National Health Service (NHS) and its comprehensive healthcare delivery system.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;