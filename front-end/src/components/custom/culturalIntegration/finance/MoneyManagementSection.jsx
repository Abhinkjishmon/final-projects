import React from 'react';
import { LineChart, Target } from 'lucide-react';

const MoneyManagementSection = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Money Management</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Take control of your financial future with our comprehensive money management tools and expert guidance.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 h-full">
              <LineChart className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Financial Planning</h3>
              <div className="space-y-4 text-gray-300">
                <p>Create and maintain a monthly budget that works for you. Our tools help you:</p>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">Track daily expenses</li>
                  <li className="list-disc">Set savings goals</li>
                  <li className="list-disc">Monitor spending patterns</li>
                  <li className="list-disc">Plan for future expenses</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
            <div className="relative bg-white/10 backdrop-blur-lg rounded-xl p-8 h-full">
              <Target className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Goal Setting</h3>
              <div className="space-y-4 text-gray-300">
                <p>Define and achieve your financial goals with our structured approach:</p>
                <ul className="space-y-2 ml-6">
                  <li className="list-disc">Short-term savings targets</li>
                  <li className="list-disc">Long-term investment planning</li>
                  <li className="list-disc">Debt reduction strategies</li>
                  <li className="list-disc">Emergency fund building</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyManagementSection;