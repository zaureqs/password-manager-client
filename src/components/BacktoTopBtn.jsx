'use client';
import React, { useState, useEffect } from "react";
import { LiaChevronCircleUpSolid } from "react-icons/lia";

const BackToTopBtn = () => {
  const [backToTop_Btn, setBackToTop_Btn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setBackToTop_Btn(true);
      } else {
        setBackToTop_Btn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop_Btn && (
        <LiaChevronCircleUpSolid
          size={60}
          color="white"
          className="fixed bottom-12 right-12"
          onClick={scrollUp}
        />
      )}
    </div>
  );
};

export default BackToTopBtn;
