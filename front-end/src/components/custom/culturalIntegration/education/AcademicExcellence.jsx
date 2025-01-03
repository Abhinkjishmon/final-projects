import React from "react";

const AcademicExcellence = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Academic Excellence</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Research Impact</h3>
          <p className="text-gray-700">
            UK universities consistently rank among the world's top institutions
            for research output and impact across various fields.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Teaching Quality</h3>
          <p className="text-gray-700">
            The Teaching Excellence Framework (TEF) ensures high standards of
            education across all institutions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-3">Global Recognition</h3>
          <p className="text-gray-700">
            British qualifications are respected worldwide, opening doors to
            international career opportunities.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
          alt="Academic Excellence"
          className="rounded-lg shadow-md w-full h-64 object-cover"
        />
      </div>
    </section>
  );
};

export default AcademicExcellence;
