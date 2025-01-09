import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-96 bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">UK Housing Guide</h1>
            <p className="text-xl">Your comprehensive resource for understanding housing in the United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;