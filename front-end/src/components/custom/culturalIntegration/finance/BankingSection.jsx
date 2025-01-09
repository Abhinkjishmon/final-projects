import React from 'react';
import { CreditCard, Landmark, Shield, Smartphone } from 'lucide-react';

const BankingSection = () => {
  const services = [
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Current Accounts",
      description: "Easy-to-manage current accounts with online and mobile banking access."
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Credit Cards",
      description: "Competitive rates and rewards on credit cards for various needs."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Savings Accounts",
      description: "High-interest savings accounts to help grow your money."
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Digital Banking",
      description: "24/7 access to your accounts through secure mobile apps."
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Banking Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingSection;