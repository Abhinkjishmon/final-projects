import React from 'react';

const FeaturedLocation = ({ city, image, averagePrice, description }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img src={image} alt={city} className="w-full h-64 object-cover transition-transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-xl font-bold mb-2">{city}</h3>
        <p className="text-sm mb-1">Average Price: {averagePrice}</p>
        <p className="text-sm opacity-90">{description}</p>
      </div>
    </div>
  );
};

export default FeaturedLocation;