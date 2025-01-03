import React from 'react';

const EducationalHeritage = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-6">Educational Heritage & Culture</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-4">
            The British education system has a rich heritage dating back centuries, with institutions like Oxford and Cambridge Universities leading the way in academic excellence since the 12th and 13th centuries.
          </p>
          <p className="text-gray-700 mb-4">
            Traditional aspects of British education include:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
            <li>Academic gowns and formal ceremonies</li>
            <li>House systems in schools</li>
            <li>Prefect and monitor roles</li>
            <li>School uniforms and dress codes</li>
          </ul>
        </div>
        <div>
          <img 
            src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?auto=format&fit=crop&q=80&w=800" 
            alt="British University Architecture" 
            className="rounded-lg shadow-md w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EducationalHeritage;