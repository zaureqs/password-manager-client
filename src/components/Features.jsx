'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import Easy from "../../public/assets/lock-time-icon.png";
import convenient from "../../public/assets/convenient.png";
import Secure from "../../public/assets/padlock.png";

function Features() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <>
      <div className="flex flex-col mt-24 text-3xl justify-center font-sans md:text-4xl w-full items-center p-4 text-[#E2E2E2] mb-12 max-md:mt-0">
        <h2 className="font-semibold text-center" data-aos="fade-up">
          Everything you need out of a password manager
        </h2>
        <div className="flex flex-row font-sans items-start mt-12 gap-16 justify-around w-full p-10 max-md:flex-col max-md:mt-0">
          <div
            className="flex flex-col items-center p-5 flex-1  border-2 border-green-400 rounded-lg"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <div className="w-full py-3 text-2xl tracking-widest font-medium ">
              Easy to Use
            </div>
            <div>
              <Image src={Easy} alt={"Clock"} className="h-36 w-36" />
            </div>
            <div className="mt-5 text-xl">
              <h5 className="tracking-wider font-medium">
                Instant Security within Seconds
              </h5>
              <p className="mt-5 font-light tracking-wide">
                For those who want to do more and secure more, CyberSafe is fast
                and easy to set up for individuals and achieve safety.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col  text-xl items-center p-5 flex-1 border-2 border-green-400 rounded-lg"
            data-aos="flip-right"
            data-aos-easing="linear"
            data-aos-duration="2500"
          >
            <div className="w-full py-3 text-2xl tracking-widest font-medium">
              Convenient to You
            </div>
            <div>
              <Image
                src={convenient}
                alt={"convenient"}
                className="h-36 w-36"
              />
            </div>
            <div className="mt-5">
              <h5 className="tracking-wider font-medium">
                Unlimited passwords, Unlimited devices
              </h5>
              <p className="mt-5 font-light tracking-wide">
                Cross platform access for browser and desktop web apps.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col  text-xl items-center p-5 flex-1 border-2 border-green-400 rounded-lg"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="3000"
          >
            <div className="w-full py-3 text-2xl tracking-widest font-medium">
              Secure to Keep
            </div>
            <div>
              <Image src={Secure} alt={"convenient"} className="h-36 w-36" />
            </div>
            <div className="mt-5">
              <h5 className="tracking-wider font-medium">
                Protect what's matter to you
              </h5>
              <p className="mt-5 font-light tracking-wide">
                Zero knowledge, end-to-end encryption guides the CyberSafe open
                source approach to trust and security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
