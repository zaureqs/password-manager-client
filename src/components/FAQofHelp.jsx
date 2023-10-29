'use client';
import React, { useState } from "react";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === openIndex) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqData = [
    {
      question: "What do I do if I forgot my master password?",
      answer:
        "As a zero-knowledge encryption solution, CipherSafe and its systems have no knowledge of, way to retrieve, or way to reset your master password. If you have already lost your master password, there is unfortunately no way for the team to recover the account.",
    },
    {
      question:
        "Can I trust CipherSafe with my passwords and personal information?",
      answer:
        "Yes, you can trust CipherSafe with your passwords and personal information. Security is our utmost priority, and CipherSafe is designed to provide a secure and reliable password management solution for individuals. We follow industry best practices and use strong encryption methods to protect your sensitive data.",
    },
    {
      question: "What features does CipherSafe offer beyond password storage?",
      answer:
        "CipherSafe offers a range of features beyond password storage to enhance your overall online security and make managing your digital life more convenient. In addition to secure password storage, some of the key features include: Password Strength, Password Checker, and Password Generator.",
    },
  ];

  return (
      <>
        <main className="w-full ">
          <div className="flex items-center justify-center w-8/12">
            <h1>Frequently asked questions</h1>
          </div>
        </main>
      </>
  );
}

export default FAQAccordion;
