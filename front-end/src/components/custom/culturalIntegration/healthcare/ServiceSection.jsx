import React from "react";

const ServiceSection = () => {
  const services = [
    {
      image:
        "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Primary Care Services",
      description:
        "Access to General Practitioners (GPs), nurses, and other healthcare professionals for routine care and preventive services.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Specialist Care",
      description:
        "Expert medical care in specialized fields including cardiology, oncology, and neurology through NHS hospitals and clinics.",
    },
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Healthcare Services
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
