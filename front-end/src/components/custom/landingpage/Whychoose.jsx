import React from "react";
import { Clock, Heart, Users, CheckCircle ,LucideBadgeDollarSign} from "lucide-react";
import landingImg from "/images/landingImg.jpg";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
    <div className="flex-shrink-0">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-100">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
    <div>
      <h3 className="text-lg font-semibold text-navy-900 mb-1">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

function Whychoose() {
  const services = [
    {
      icon: Clock,
      title: "Find Accommodations",
      description:
        "Secure safe and comfortable housing that feels like home.",
    },
    {
      icon: LucideBadgeDollarSign,
      title: "Find Part-Time Jobs",
      description:
        "Explore flexible job opportunities to support your financial needs.",
    },
    {
      icon: Heart,
      title: "Cultural Fit Guidance",
      description:
        "Blend into your new environment with ease through our expert support.",
    },
    {
      icon: CheckCircle,
      title: "Visa & Immigration Help",
      description:
        "Simplify your paperwork with reliable visa and immigration assistance.",
    },
    {
      icon: Users,
      title: "Academic Assistance",
      description:
        "Reach your full potential with tailored support for your studies.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Doctor Selection */}

          <div className="lg:pl-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-navy-900 mb-6">
              Why choose
            </h1>

            <p className="text-gray-600 mb-8">
              We’re here to make your journey smoother, so you can focus on
              achieving your dreams.
            </p>

            <div className="space-y-6">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="rounded-2xl overflow-hidden bg-gray-200 aspect-[4/3]">
            
              <img
                src={landingImg}
                alt="Doctor consultation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whychoose;
