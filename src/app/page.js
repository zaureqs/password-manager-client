"use client";
import React, { useEffect, useState } from "react";

import HomePage from "../components/HomePage";
import Features from "@/components/Features.jsx";
import Footer from "@/components/Footer.jsx";
import BackToTopBtn from "@/components/BacktoTopBtn";

export default function Home() {

  const gradientStyle = {
    background:
      "radial-gradient(circle, rgba(27,31,73,1) 0%, rgba(27,31,73,1) 31%, rgba(20,16,68,1) 68%, rgba(7,20,43,1) 100%)",
  };

  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center"
      style={gradientStyle}
    >
      <BackToTopBtn />
      <HomePage />
      <Features />
      <Footer />
    </main>
  );
}
