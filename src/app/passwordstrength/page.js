"use client"
import React, { useState } from "react";
import FAQSection from "@/components/FAQofPSC.jsx";
import Footer from "@/components/Footer";
import zxcvbn from "zxcvbn";

function PasswordStrength() {
  const [password, setPassword] = useState("");

  const testResult = zxcvbn(password);
  const CreatePasswordLabel = () => {
    switch (testResult.score) {
      case 1:
        return "Weak";
      case 2:
        return "Fair";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "very weak";
    }
  };
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#DC3A47";
      case 1:
        return "#EA1111";
      case 2:
        return "#FFAD00";
      case 3:
        return "9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const gradientStyle = {
    background:
      "radial-gradient(circle, rgba(27,31,73,1) 0%, rgba(27,31,73,1) 31%, rgba(20,16,68,1) 68%, rgba(7,20,43,1) 100%)",
  };


  return (
    <div className="flex flex-col w-full justify-center items-center pt-24 font-sans"
    style={gradientStyle}
    >
      <div className="p-9 w-9/12 max-md:w-full">
        <h1 className="text-5xl text-white font-semibold tracking-wide">
          Password Strength Testing Tool
        </h1>
        <p className="py-1 font-normal text-xl mt-5 text-violet-200">
          Think you have a strong password? Find out below.
        </p>

        <h5 className="mt-5 text-2xl font-semibold text-violet-100">Evaluate your password:</h5>
        <br />
        <input
          autoCorrect="false"
          type="text"
          className="px-5 py-3 rounded-lg w-full text-2xl tracking-wider text-[#9da0d1] border-2 shadow-lg outline-blue-700"
          placeholder="Type your password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>

        <div className="flex flex-row w-full gap-12 max-md:flex-col max-md:gap-3 text-violet-100">
          <div className="flex flex-col justify-between text-2xl font-semibold mt-5 w-1/2 gap-5 max-md:w-full">
            <h5 >Your password strength:</h5>
            <p className="w-3/5 text-3xl" style={{ color: funcProgressColor() }}>
              {CreatePasswordLabel()}
            </p>
          </div>
          <div className="flex flex-col justify-between text-2xl font-semibold mt-5 gap-5 w-1/2 max-md:w-full">
            <h5>Estimated time to crack:</h5>
            <p className="w-3/5 text-3xl">
              {testResult.crack_times_display.offline_slow_hashing_1e4_per_second}
            </p>
          </div>
        </div>
      <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default PasswordStrength;
