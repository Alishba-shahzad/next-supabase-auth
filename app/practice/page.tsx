'use client';
import React, { useState } from "react";

const faqs = [
  {
    question: "Why building a great landing page is critical for your business?",
    answer:
      "In today's AI-driven world, standing out is harder than ever. A professional landing page makes the difference between success and failure. Launch UI helps you ship faster without compromising on quality.",
  },
  {
    question: "Why use Launch UI instead of a no-code tool?",
    answer:
      "No-code tools lock you into their ecosystem with recurring fees and limited control. They often come with performance issues and make integration difficult. Launch UI gives you full control of your code while maintaining professional quality.",
  },
  {
    question: "How is Launch UI different from other component libraries?",
    answer:
      "Launch UI stands out with premium design quality, custom animations, and carefully crafted components that help position your product as a professional tool.",
  },
  {
    question: "Are Figma files included?",
    answer:
      "Yes! The complete Launch UI template is available for free on the Figma community.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t border-gray-300">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
