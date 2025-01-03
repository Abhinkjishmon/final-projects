import React from "react";

const CulturalIntegration = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">
        Cultural Integration in Education
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
            alt="Diverse Students"
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </div>
        <div>
          <p className="text-gray-700 mb-4">
            Modern British education embraces multiculturalism and diversity,
            creating an inclusive environment for students from all backgrounds.
            Schools and universities actively promote cultural awareness and
            global perspectives.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Key Cultural Aspects:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Celebration of diverse festivals and traditions</li>
              <li>• International student support programs</li>
              <li>• Cross-cultural learning initiatives</li>
              <li>• Language support services</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulturalIntegration;
