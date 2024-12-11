import React, { useState } from 'react';
import { 
  FileCheck, Calculator, MessageSquare, HelpCircle, ChevronDown,
  CheckCircle, XCircle, ArrowRight, ClipboardCheck, Users, Mail
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const VisaDetailsPage = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [activeFaq, setActiveFaq] = useState(null);

  const eligibilityCriteria = [
    { criterion: "Valid passport with at least 6 months validity", met: true },
    { criterion: "Proof of sufficient funds", met: true },
    { criterion: "Clean travel history", met: true },
    { criterion: "No criminal record", met: true },
    { criterion: "Travel insurance coverage", met: false },
    { criterion: "Accommodation arrangements", met: false }
  ];

  const requiredDocuments = [
    "Valid passport",
    "Passport-size photographs",
    "Bank statements (last 6 months)",
    "Employment verification letter",
    "Travel insurance documentation",
    "Accommodation booking proof",
    "Flight itinerary",
    "Visa application form"
  ];

  const faqs = [
    {
      question: "How long does the visa processing take?",
      answer: "Standard processing time is 15-20 working days. Express processing is available for an additional fee."
    },
    {
      question: "Can I extend my visa after arrival?",
      answer: "Yes, visa extensions are possible under certain conditions and must be applied for at least 2 weeks before current visa expiry."
    },
    {
      question: "What happens if my visa is refused?",
      answer: "We provide complete assistance with reapplication and address the reasons for refusal. Fees may be partially refunded as per policy."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tourist Visa Information</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Everything you need to know about tourist visa requirements, eligibility, and application process.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4">
            <button 
              className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              onClick={() => setActiveTab('eligibility')}
            >
              <CheckCircle className="w-5 h-5" />
              <span>Check Eligibility</span>
            </button>

            <button 
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setActiveTab('calculator')}
            >
              <Calculator className="w-5 h-5" />
              <span>Calculate Fees</span>
            </button>

            <button 
              className="flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Visa Assistant Chat</span>
            </button>

            <button 
              className="flex items-center space-x-2 bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Submit Enquiry</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Section */}
            <Card>
              <CardHeader>
                <CardTitle>Visa Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The Tourist Visa is designed for individuals planning to visit for leisure, sightseeing, visiting friends/family, or short-term non-business activities. This visa allows for a stay of up to 90 days within a 180-day period.
                </p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Multiple entry options available</li>
                    <li>Valid for tourism and leisure activities</li>
                    <li>Extendable under certain conditions</li>
                    <li>Access to all tourist destinations</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Eligibility Checker */}
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {eligibilityCriteria.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {item.met ? 
                          <CheckCircle className="w-5 h-5 text-green-500" /> :
                          <XCircle className="w-5 h-5 text-red-500" />
                        }
                        <span>{item.criterion}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Document Checklist */}
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {requiredDocuments.map((doc, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <ClipboardCheck className="w-5 h-5 text-blue-500" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - FAQs and Help */}
          <div className="space-y-8">
            {/* FAQs */}
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform ${
                            activeFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {activeFaq === index && (
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center space-y-4">
                  <HelpCircle className="w-12 h-12 text-blue-600 mx-auto" />
                  <p className="text-gray-600">
                    Our visa experts are here to help you with your application process
                  </p>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetailsPage;