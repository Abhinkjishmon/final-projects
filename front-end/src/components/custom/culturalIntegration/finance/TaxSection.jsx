import React from 'react';
import { Receipt, Calculator, FileText, HelpCircle } from 'lucide-react';

const TaxSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Tax Planning & Services</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Tax Services"
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Tax Services</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Receipt className="w-5 h-5 text-blue-600" />
                  <span>Personal tax returns</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calculator className="w-5 h-5 text-blue-600" />
                  <span>Tax calculation assistance</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Documentation support</span>
                </div>
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600" />
                  <span>Tax advice and consultation</span>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Income Tax</h3>
              <p className="text-gray-700 mb-4">
                Understanding income tax bands, allowances, and deductions to optimize your tax position.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Personal allowance understanding</li>
                <li>• Tax code checks</li>
                <li>• Salary sacrifice options</li>
                <li>• Benefits in kind taxation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Tax-Efficient Investments</h3>
              <p className="text-gray-700 mb-4">
                Maximize returns through tax-efficient investment vehicles and strategies.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• ISA allowance utilization</li>
                <li>• Pension tax relief</li>
                <li>• Capital gains planning</li>
                <li>• Inheritance tax planning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxSection;