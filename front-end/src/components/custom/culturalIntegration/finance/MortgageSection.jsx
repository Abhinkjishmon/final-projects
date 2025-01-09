import React from 'react';
import { Home, Calculator, FileText, Clock } from 'lucide-react';

const MortgageSection = () => {
  const steps = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Mortgage Calculator",
      description: "Calculate your monthly payments and see how much you could borrow."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation",
      description: "Prepare necessary documents including proof of income and bank statements."
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property Search",
      description: "Find properties within your budget and get a mortgage in principle."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Application Process",
      description: "Complete your mortgage application with expert guidance at every step."
    }
  ];

  return (
    <div className="py-16 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Mortgage Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MortgageSection;