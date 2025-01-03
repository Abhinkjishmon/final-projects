import React from 'react';
import { Clock, Phone, Calendar, MapPin } from 'lucide-react';

const AccessGuideSection = () => {
  const steps = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Contact Your GP",
      description: "Call your local GP surgery to book an appointment. Many surgeries also offer online booking."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Book Appointment",
      description: "Choose from available appointment slots. Emergency appointments are available daily."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Location",
      description: "Attend your local surgery or hospital as directed. Bring any relevant medical documents."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Out of Hours",
      description: "Call NHS 111 for urgent medical help when your GP surgery is closed."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How to Access Healthcare Services</h2>
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

export default AccessGuideSection;