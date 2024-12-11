import React from "react";
import { Package, Wallet, LineChart, Layout, Play } from "lucide-react";
import visa from "/images/visa.jpg";

const BusinessServices = () => {
  const services = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Business Idea Planning",
      description: "We provide idea placement and discuss offline gity like",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Wallet className="w-8 h-8 text-amber-600" />,
      title: "Financial Planning System",
      description: "Products apart from complex models prcing bring",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Layout className="w-8 h-8 text-pink-600" />,
      title: "Development Website and App",
      description: "Communication protocols apart from engagement models",
      bgColor: "bg-pink-50",
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-600" />,
      title: "Market Analysis Project",
      description: "Products apart from complex models pricing bring",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-7">
      <div className="grid grid-cols-1 gap-16">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            How can we help
            <br />
            your Business ?
          </h2>
          <p className="text-gray-600">
            We build multimedia websites, mobile applications,
            <br />
            and welcome entire business services
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${service.bgColor} p-6 rounded-2xl transition-transform hover:-translate-y-1`}
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section with Video */}
        <div className="space-y-8 flex md:flex-row gap-7 md:py-20">
          <div className="relative rounded-2xl overflow-hidden shadow-lg md:w-1/2 md:h-96">
            <img
              src={visa}
              alt="Team collaboration"
              className="w-full h-auto"
            />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-4 shadow-lg hover:scale-110 transition-transform">
              <Play className="w-6 h-6 text-blue-600" />
            </button>
          </div>

          <div className="space-y-4 md:w-1/2 md:h-96">
            <h3 className="text-2xl font-bold">
              Great Digital Product Agency since 2016
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quas
              maxime soluta fuga aliquid. Et omnis nobis totam debitis expedita
              earum possimus inventore unde, quidem harum quia alias iure
              temporibus magnam quam ducimus quod nihil corporis voluptatem
              exercitationem, neque impedit vero! Ad quis repudiandae veniam eum
              beatae officiis atque minus sit commodi voluptatum alias libero
              expedita, incidunt at eligendi quidem iure nisi harum quaerat
              ipsum eius quod amet. Fugiat rerum harum accusantium iure ipsum
              explicabo ad dolores minus! Debitis in ex optio nihil! Tenetur,
              quae omnis? Molestiae enim unde adipisci architecto? Similique,
              laborum nihil voluptates veniam dicta ipsa cum, provident porro
              velit veritatis iste expedita incidunt voluptas alias rerum dolore
              at? Ducimus quas asperiores accusantium odio velit ea, maxime id
              nam eligendi officia itaque nemo unde libero voluptatibus minima
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;
