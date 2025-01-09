import React from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[70vh] min-h-[600px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          British Lifestyle:
          <br />
          <span className="text-3xl md:text-4xl font-normal">
            A Guide to Living in the UK
          </span>
        </h1>
        <p className="text-xl max-w-2xl mb-8">
          Discover the authentic British way of life, from afternoon tea
          traditions to modern city living. Your comprehensive guide to
          embracing UK culture and customs.
        </p>
        <ChevronDown className="animate-bounce w-10 h-10 absolute bottom-8 left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
};

export default Hero;
