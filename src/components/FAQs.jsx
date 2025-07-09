import React, { useState } from 'react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is QuiteTales?", answer: "QuiteTales is a platform dedicated to connecting storytellers and readers, offering a space for creative writing and diverse genres." },
    { question: "How do I join as an author?", answer: "Simply sign up, create a profile, and submit your work through our author dashboard to get started." },
    { question: "Is there a cost to use QuiteTales?", answer: "Basic access is free, with premium features available through a subscription." },
    { question: "How do I join as an author?", answer: "Simply sign up, create a profile, and submit your work through our author dashboard to get started." },
    { question: "Is there a cost to use QuiteTales?", answer: "Basic access is free, with premium features available through a subscription." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text animate-on-scroll">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white/90 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-on-scroll" style={{ animationDelay: `${index * 200}ms` }}>
            <button
              className="w-full text-left text-lg font-medium text-gray-800 flex justify-between items-center"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <span>{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600 leading-relaxed animate-fade-in">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;