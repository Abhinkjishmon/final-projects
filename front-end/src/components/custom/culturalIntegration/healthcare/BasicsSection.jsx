import React from 'react';

const BasicsSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Healthcare Basics</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Healthcare Basics"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">NHS Registration</h3>
              <p className="text-gray-700">Register with your local GP surgery to access NHS services. You'll need proof of address and ID. Everyone is entitled to free NHS care, regardless of immigration status.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Healthcare Coverage</h3>
              <p className="text-gray-700">The NHS covers all essential healthcare services, including GP visits, hospital treatment, emergency care, maternity services, and most prescriptions for eligible groups.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicsSection;