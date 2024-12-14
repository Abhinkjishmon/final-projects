import React, { useState } from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is the NHS in the UK?",
      answer:
        "The NHS (National Health Service) is the publicly funded healthcare system in the UK, providing free healthcare services to residents.",
    },
    {
      question: "How can I find pet grooming services nearby?",
      answer:
        "You can use our app's 'Find Services' feature to locate the nearest pet grooming centers and book appointments.",
    },
    {
      question: "What is the UK education system like?",
      answer:
        "The UK education system is divided into primary, secondary, and higher education levels. It is known for its rigorous curriculum and emphasis on critical thinking.",
    },
    {
      question: "Can expats access healthcare in the UK?",
      answer:
        "Yes, expats can access the NHS services in the UK, but eligibility depends on residency status. Private insurance is also an option for quicker access.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
