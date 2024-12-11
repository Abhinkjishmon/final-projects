import React from 'react';
import { Shield, Search, Clock } from 'lucide-react';

const ValueProposition = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-6 flex-1">
    <div className="mb-6">
      <Icon className="w-16 h-16 text-blue-500" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-600 max-w-sm">{description}</p>
  </div>
);

const ValuePropositionsSection = () => {
  const features = [
    {
      icon: Search,
      title: "Search - Compare - Relax",
      description: "Choose from 1.5 Mn 100% verified student rooms near the university & compare between the best options."
    },
    {
      icon: Clock,
      title: "Easy Peasy",
      description: "Instantly book the room in a matter of minutes. Save your time for more important things (Netflix)."
    },
    {
      icon: Shield,
      title: "Price Match Guarantee",
      description: "We keep our promises. Grab the best offers along with the lowest price promise."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-12">
        Let us find your perfect home!
      </h1>
      
      <div className="flex flex-col md:flex-row gap-8 justify-between">
        {features.map((feature, index) => (
          <ValueProposition
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ValuePropositionsSection;