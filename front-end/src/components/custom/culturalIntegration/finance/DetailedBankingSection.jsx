import React from 'react';
import { Wallet, Building2 } from 'lucide-react';

const DetailedBankingSection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8">Personal & Business Banking</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Wallet className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Personal Banking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Tailored banking solutions for individuals, including current accounts, 
                    savings, and personalized financial advice. Access your accounts 24/7 
                    through our secure online banking platform.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="w-8 h-8 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Banking</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive business banking services designed to support companies 
                    of all sizes. From startups to established enterprises, we provide 
                    the tools and support you need to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Banking Services"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-lg shadow-xl max-w-xs">
              <h4 className="text-lg font-semibold mb-2">24/7 Support</h4>
              <p className="text-sm">Access our banking services anytime, anywhere with round-the-clock customer support.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedBankingSection;