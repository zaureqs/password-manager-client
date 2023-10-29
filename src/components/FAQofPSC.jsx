'use client';
import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      question: "Is it safe to type my real password here?",
      answer:
        "Yes. Your password is never transmitted to our servers and is processed locally in your device`s web browser window.",
    },
    {
      question: "How do I create a strong password?",
      answer:
        'Try the <a href="/passwordgenerator">CipherSafe Strong Password Generator</a>',
    },
    {
      question: "How do you calculate password strength?",
      answer:
        'We use a tool called `zxcvbn`. <a href="https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation"> Learn more </a>',
    },
    {
      question: "What's the best way to manage my password?",
      answer:
        'The safest way to store and manage your passwords is through a secure password manager, like CipherSafe. <a href="/">  Learn more </a>',
    },
  ];

  const toggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-gray-100 mt-10 py-8 px-5 w-full rounded-md">
      <h1 className="text-3xl font-semibold mb-3 text-[#020F66]">FAQ</h1>
      <div className="container mx-auto grid grid-cols-1 gap-6 ">
        {questions.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <button
              className="flex justify-between items-center text-[#020F66] w-full text-left text-md font-semibold focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span
                className={`transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
              >
                &#9660;
              </span>
            </button>
            <div
              className={`mt-2 text-[#4b4e7b] ${
                openIndex === index ? "block" : "hidden"
              }`}
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
