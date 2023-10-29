import React from "react";
import About from "../../../public/assets/ForAboutPage3.png";
import GetStarted from "../../../public/assets/onAboutPage.png";
import Why from "../../../public/assets/why.png";
import Image from "next/image";

import TryNow from "@/components/TryNow";
import Footer from "@/components/Footer";

export default function aboutPage() {

  const gradientStyle = {
    background:
      "radial-gradient(circle, rgba(27,31,73,1) 0%, rgba(27,31,73,1) 31%, rgba(20,16,68,1) 68%, rgba(7,20,43,1) 100%)",
  };

  return (
    <>
      <main className="flex flex-col min-h-screen w-full mt-18 p-6 md:p-12 lg:p-24 max-md:mt-20"
      style={gradientStyle}
      >
        <h1 className="text-4xl md:text-6xl mb-6 mt-18 py-5 max-md:mb-8 text-center font-semibold text-violet-400">
          Building Trust, One Cipher at a Time.
        </h1>
        <div className="flex flex-col items-center md:flex-row gap-4 md:gap-12">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl leading-normal text-indigo-200 max-md:text-2xl">
              Make Your Online Experience Safer, Faster, and More Enjoyable
            </h1>
            <p className="text-lg md:text-xl text-indigo-300 mt-5">
              Welcome to Cipher Safe, your trusted and secure password manager
              system. In today's digital age, the need for robust online security
              has never been greater. Cipher Safe is designed with one primary
              purpose in mind: to safeguard your digital identity and sensitive
              information.
            </p>
          </div>
          <div className="w-full md:w-1/2 max-md:hidden">
            <Image src={About} alt="img" width={550} height={550}/>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-6 md:mt-8 items-center">
          <div className="w-full md:w-1/2 max-md:hidden">
            <Image src={Why} alt="why" width={500} height={500} />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl leading-normal text-indigo-200">Why CipherSafe?</h2>
            <p className="text-lg md:text-xl text-indigo-300 mt-5">
              Cipher Safe stands out as the ultimate password manager because of
              its unwavering commitment to security and user convenience. We
              prioritize your online safety above all else, ensuring that you can
              navigate the digital landscape with confidence.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 mt-6 max-md:mt-8 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-5xl leading-normal text-indigo-200">Get Started <span className="text-violet-400">...</span></h2>
            <p className="text-lg md:text-xl text-indigo-300 mt-5 mb-5">
              Ready to fortify your online security with Cipher Safe? Getting
              started is easy! Simply sign up, start creating secure entries to
              keep your digital life in check.
            </p>
            <TryNow />
          </div>
          <div className="w-full md:w-1/2 max-md:hidden">
            <Image src={GetStarted} alt="get started" width={500} height={500} quality={75} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
