import React from 'react';
import { Coins, ShieldCheck, GanttChart, Briefcase } from 'lucide-react';

const RetirementSection = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Retirement Planning</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Coins className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Pension Options</h3>
                  <p className="text-gray-600">Comprehensive pension planning including workplace pensions, personal pensions, and SIPPs.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Retirement Protection</h3>
                  <p className="text-gray-600">Insurance and protection products to secure your retirement income.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <GanttChart className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Investment Strategy</h3>
                  <p className="text-gray-600">Tailored investment strategies for different retirement stages.</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <Briefcase className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Estate Planning</h3>
                  <p className="text-gray-600">Comprehensive estate planning services to protect your legacy.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Retirement Planning"
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Retirement Planning Steps</h3>
              <ul className="space-y-3 text-gray-600">
                <li>1. Assess your retirement needs and goals</li>
                <li>2. Review your pension options</li>
                <li>3. Develop an investment strategy</li>
                <li>4. Consider tax-efficient solutions</li>
                <li>5. Regular review and adjustment of plans</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetirementSection;