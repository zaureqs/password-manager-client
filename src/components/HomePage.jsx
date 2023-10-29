'use client';
import React from "react";

import TryNow from "./TryNow";
import Image from "next/image";
import HomeImg from "../../public/assets/onHomePage2-removed-watermark.png";

function HomePage() {
  return (
    <div className="flex flex-row gap-6 lg:gap-0 mt-28 justify-between w-full px-10 lg:px-24 tracking-tight lg:tracking-wide lg:flex-row max-md:mt-24">
      <div className="left-0 flex flex-col justify-center items-start gap-16 max-md:items-start max-md:gap-12">
        <h1 className="text-5xl font-semibold font-sans leading-tight  max-md:text-2xl">
          Put Your Secretes In <br /> Your  <span className="text-violet-400">Secure Locker</span> <br />
         and
          <span className="text-red-500"> Forget.</span>
        </h1>
        <TryNow />
      </div>

      <div className="flex justify-center w-1/2 max-lg:w-1/2 max-sm:hidden">
        <Image
          src={HomeImg}
          className="w-full"
          alt="lock-key-img"
          priority
        />
      </div>
    </div>
  );
}
export default HomePage;
