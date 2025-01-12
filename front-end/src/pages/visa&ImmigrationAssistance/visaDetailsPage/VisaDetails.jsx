import React, { useEffect, useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  CheckCircle,
  XCircle,
  ClipboardCheck,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLocation } from "react-router-dom";
import { ukVisas, visaHeadings } from "@/utils/data/detailsVisaInfo";
import { scrollToTop } from "@/utils/scroll";

const faqs = [
  {
    question: "How long does the visa processing take?",
    answer:
      "Standard processing time is 15-20 working days. Express processing is available for an additional fee.",
  },
  {
    question: "Can I extend my visa after arrival?",
    answer:
      "Yes, visa extensions are possible under certain conditions and must be applied for at least 2 weeks before current visa expiry.",
  },
  {
    question: "What happens if my visa is refused?",
    answer:
      "We provide complete assistance with reapplication and address the reasons for refusal. Fees may be partially refunded as per policy.",
  },
];
const features = [
  "Multiple entry options available",
  "Valid for tourism and leisure activities",
  "Extendable under certain conditions",
  "Access to all tourist destinations",
];
function VisaDetails() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [visaDetails, setVisaDetails] = useState(null);
  const location = useLocation();
  const currentUrl = location.pathname + location.search;
  const queryParams = new URLSearchParams(location.search);
  const visatype = queryParams.get("visatype");

  useEffect(() => {
    scrollToTop();
    const foundVisaDetails = ukVisas.find((visa) => visa.visaType === visatype);
    if (foundVisaDetails) {
      setVisaDetails(foundVisaDetails);
    } else {
      setVisaDetails(null);
    }
  }, [visatype]);

  if (!visaDetails) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <p>No visa details found for the selected visa type.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Visa Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{visaDetails.overview}</p>
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Eligibility Criteria</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {visaDetails.eligibilityCriteria.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        {item.met ? (
                          <XCircle className="w-5 h-5 text-red-500" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        )}
                        <span>{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Required Documents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {visaDetails.requiredDocuments.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <ClipboardCheck className="w-5 h-5 text-blue-500" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="border-b last:border-0 pb-4 last:pb-0"
                    >
                      <button
                        className="flex justify-between items-center w-full text-left"
                        onClick={() =>
                          setActiveFaq(activeFaq === index ? null : index)
                        }
                      >
                        <span className="font-medium">{faq.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            activeFaq === index ? "transform rotate-180" : ""
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisaDetails;
