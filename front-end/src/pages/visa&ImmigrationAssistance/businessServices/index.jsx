import React from "react";
import { Package, Wallet, LineChart, Layout, Play } from "lucide-react";
import visa from "/images/visa.jpg";

const BusinessServices = () => {
  const services = [
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: "Visa Application Assistance",
      description:
        "We help streamline your visa application process, ensuring all necessary documents and requirements are met.",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Wallet className="w-8 h-8 text-amber-600" />,
      title: "Financial Planning for Immigration",
      description:
        "Our experts guide you through financial requirements, helping you plan for immigration expenses and investment options.",
      bgColor: "bg-amber-50",
    },
    {
      icon: <Layout className="w-8 h-8 text-pink-600" />,
      title: "Relocation and Settlement Services",
      description:
        "We assist with relocation logistics, housing, and other essentials to help you settle smoothly in your new country.",
      bgColor: "bg-pink-50",
    },
    {
      icon: <LineChart className="w-8 h-8 text-green-600" />,
      title: "Immigration Policy Consultation",
      description:
        "Our team provides insights on current immigration laws and policies, helping you stay informed and compliant.",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-7">
      <div className="grid grid-cols-1 gap-16">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            How Can We Help
            <br />
            Your Immigration Journey?
          </h2>
          <p className="text-gray-600">
            We provide expert visa and immigration services, including
            <br />
            residency applications, work permits, and relocation assistance.
          </p>

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
        <div className="space-y-8 flex md:flex-row gap-7 md:py-20">
          <div className="relative rounded-2xl overflow-hidden shadow-lg md:w-1/2 md:h-96">
            <img
              src={visa}
              alt="Team collaboration"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-4 md:w-1/2 md:h-96">
            <h3 className="text-2xl font-bold">Trusted Immigration Experts</h3>
            <p className="text-gray-600">
              We specialize in guiding individuals through the complex world of
              immigration, offering expert support for visa applications,
              residency processes, and relocation services. Our dedicated team
              is committed to providing personalized solutions that ensure a
              smooth and hassle-free experience for clients worldwide, making
              the immigration journey as seamless as possible. Whether you’re
              applying for a work visa, family reunification, or permanent
              residency, our experienced professionals are here to assist you
              every step of the way. We understand that immigration can be
              overwhelming, and we are here to simplify the process. Our
              services are tailored to meet your specific needs, ensuring that
              you receive the attention and expertise required. With years of
              experience in the industry, we have built a reputation for
              delivering reliable results. We work closely with each client to
              ensure timely and accurate submission of all necessary documents.
              Our goal is to help you achieve your immigration dreams with
              confidence and ease.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;
