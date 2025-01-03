import React from 'react';

const EmergencySection = () => {
  return (
    <div className="bg-blue-600 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Emergency & Urgent Care</h2>
            <p className="mb-4">
              The NHS provides 24/7 emergency care through its network of A&E departments, urgent care centers, and emergency response services.
            </p>
            <ul className="space-y-2">
              <li>• 999 Emergency Services</li>
              <li>• NHS 111 Non-emergency Helpline</li>
              <li>• Walk-in Centers</li>
              <li>• Out-of-hours GP Services</li>
            </ul>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Emergency Care"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencySection;