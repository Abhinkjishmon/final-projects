import React from 'react';

const InfoSection = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="NHS Hospital"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">World-Class Healthcare System</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                The NHS is the largest single-payer healthcare system in the world, serving over 65 million people in the UK. It was founded on the principle that good healthcare should be available to all, regardless of wealth.
              </p>
              <p className="text-gray-700">
                Today, the NHS employs more than 1.5 million people, making it one of the largest employers globally. It handles over 1 million patients every 36 hours, demonstrating its massive scale and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;