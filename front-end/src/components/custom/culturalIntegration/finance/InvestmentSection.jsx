import React from 'react';

const InvestmentSection = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Investment Options</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Investment Options"
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Investment Products</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Stocks and Shares ISAs</li>
                <li>• Investment Funds</li>
                <li>• Pension Investments</li>
                <li>• Bonds and Gilts</li>
                <li>• ETFs</li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Managed Portfolios</h3>
              <p className="text-gray-700">
                Professional portfolio management tailored to your risk profile and investment goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Tax-Efficient Investing</h3>
              <p className="text-gray-700">
                Maximize your returns with tax-efficient investment strategies and ISA allowances.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Retirement Planning</h3>
              <p className="text-gray-700">
                Long-term investment strategies for a secure retirement, including pension and SIPP options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentSection;