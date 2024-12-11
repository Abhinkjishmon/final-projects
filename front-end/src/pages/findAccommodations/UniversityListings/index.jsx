import React, { useState } from 'react';
import { GraduationCap, MapPin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const CityNav = ({ selectedCity, cities, onCitySelect }) => (
  <ScrollArea className="w-full whitespace-nowrap">
    <div className="flex space-x-2 p-1">
      {cities.map((city) => (
        <Button
          key={city}
          variant={selectedCity === city ? "default" : "outline"}
          className={`rounded-full ${
            selectedCity === city ? "bg-blue-500 text-black hover:bg-coral-600" : "bg-white"
          }`}
          onClick={() => onCitySelect(city)}
        >
          {city}
        </Button>
      ))}
      <Button variant="outline" className="rounded-full">
        Select Other City
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>
    </div>
    <ScrollBar orientation="horizontal" />
  </ScrollArea>
);

const UniversityCard = ({ university }) => (
  <Card className="hover:shadow-lg transition-shadow">
    <CardContent className="p-4">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-coral-100 rounded-lg">
          <GraduationCap className="h-6 w-6 text-coral-500" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg">{university.name}</h3>
          <div className="flex items-center text-gray-500 mt-1">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{university.location}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const UniversityListings = () => {
  const [selectedCity, setSelectedCity] = useState('London');

  const cities = [
    'London',
    'Manchester',
    'Birmingham',
    'Cardiff',
    'Nottingham',
    'Glasgow',
    'Edinburgh',
    'Liverpool',
    'Bristol'
  ];

  const universities = [
    {
      name: 'University College London (UCL)',
      location: 'London'
    },
    {
      name: "King's College London (KCL)",
      location: 'London'
    },
    {
      name: 'Queen Mary University of London (QMUL)',
      location: 'London'
    },
    {
      name: 'University of East London',
      location: 'London'
    },
    {
      name: 'University of Greenwich',
      location: 'London'
    },
    {
      name: 'London School of Economics and Political Science',
      location: 'London'
    },
    {
      name: 'University of Westminster',
      location: 'London'
    },
    {
      name: 'Imperial College London',
      location: 'London'
    },
    {
      name: 'City University London',
      location: 'London'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <CityNav
          selectedCity={selectedCity}
          cities={cities}
          onCitySelect={setSelectedCity}
        />
      </div>

      <h2 className="text-2xl font-bold text-center mb-8">
        Most preferred universities in {selectedCity}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {universities.map((university, index) => (
          <UniversityCard key={index} university={university} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Button className="bg-coral-500 hover:bg-coral-600 text-black">
          View all universities
        </Button>
      </div>
    </div>
  );
};

export default UniversityListings;