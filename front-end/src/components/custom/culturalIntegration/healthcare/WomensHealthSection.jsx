import React from "react";

const WomensHealthSection = () => {
  return (
    <div className="py-16 bg-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Women's Healthcare Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img
              src="https://images.unsplash.com/photo-1579684453423-f84349ef60b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Women's Healthcare"
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Specialized Care Services
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Maternity and prenatal care</li>
                <li>• Gynecological services</li>
                <li>• Breast cancer screening</li>
                <li>• Cervical screening</li>
                <li>• Family planning services</li>
                <li>• Menopause support</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Maternity Care</h3>
              <p className="text-gray-700">
                Comprehensive maternity care throughout pregnancy, birth, and
                postnatal period. Services include regular check-ups, scans,
                birthing options, and postnatal support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Preventive Care</h3>
              <p className="text-gray-700">
                Regular screening programs and preventive services to maintain
                women's health at all life stages. Includes cervical screening,
                mammograms, and bone density scans.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Mental Health Support
              </h3>
              <p className="text-gray-700">
                Specialized mental health services addressing women's specific
                needs, including perinatal mental health support and counseling
                services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomensHealthSection;
