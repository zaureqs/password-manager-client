"use client";
import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import { PiCopyThin } from "react-icons/pi";
import { RiRefreshLine } from "react-icons/ri";
import { RingLoader } from "react-spinners";
import Footer from "@/components/Footer";
import copyToClipboard from "@/utils/copyToClipboard";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    generatePassword();
  }, [
    passwordLength,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
  ]);

  const generatePassword = () => {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let validChars = "";
    if (includeLowercase) validChars += lowercaseChars;
    if (includeUppercase) validChars += uppercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let newPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars.charAt(randomIndex);
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPassword(newPassword);
    }, 2000);
  };

  const handleRegenerate = () => {
    generatePassword();
  };

  const gradientStyle = {
    background:
      "radial-gradient(circle, rgba(27,31,73,1) 0%, rgba(27,31,73,1) 31%, rgba(20,16,68,1) 68%, rgba(7,20,43,1) 100%)",
  };

  return (
    <main className="flex flex-col w-full justify-center items-center pt-24"
    style={gradientStyle}
    >
      <div className="text-white w-8/12 mt-10 max-md:px-3 max-md:w-full">
        <h1 className="text-5xl font-medium max-md:text-3xl ">
          Password Generator
        </h1>
        <p className="py-1 font-normal text-xl mt-5">
          Need a strong password? Try the CipherSafe Password Generator to
          create complex passwords that will keep your information safe.
        </p>
      </div>

      <div className="flex items-center justify-center w-8/12 h-24 mt-5 border-blue-950 rounded-md shadow-lg outline-blue-700 bg-[#E6EBEF] text-[#28337D] max-md:w-10/12">
        {loading ? (
          <RingLoader color="#28337D" loading={true} size={50} />
        ) : (
          <textarea
            value={password}
            readOnly={true}
            maxLength={30}
            className="text-center tracking-widest w-full h-full flex items-center justify-center bg-[#E6EBEF] text-7xl  font-mono resize-none  max-md:text-4xl"
          ></textarea>
        )}
      </div>

      <div className="flex flex-row mt-5 w-8/12 gap-2 text-xl  max-md:flex-col max-md:px-3 max-md:w-10/12">
        <button
          className="flex flex-row gap-2 items-center justify-center p-3 w-full rounded-md text-blue-900 bg-violet-50 hover:bg-blue-200 max-md:text-lg"
          onClick={() => {
            copyToClipboard(password);
            toast.success("password copied successfully", {
              autoClose: 2000,
            });
          }}
        >
          <PiCopyThin size={20} /> Copy{" "}
          <span className="max-md:hidden">To Clipboard</span>
        </button>
        <button
          className="flex flex-row gap-2 items-center justify-center p-3 w-full text-blue-900 bg-violet-50 hover:bg-blue-200 rounded-md"
          onClick={handleRegenerate}
        >
          <RiRefreshLine size={20} /> Regenerate
        </button>
      </div>

      <div className="flex flex-col justify-start bg-[#E6EBEF] text-black mt-5 p-5 w-8/12 rounded-md  max-md:px-3 max-md:w-10/12">
        <div className="flex flex-row gap-5 text-xl text-black">
          <label>Password Length</label>
          <input
            type="number"
            className="bg-transparent rounded w-16 overflow-hidden border-2 border-blue-800 outline-emerald-800"
            style={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
            value={passwordLength}
            onChange={(e) => {
              let value = parseInt(e.target.value);
              if (!isNaN(value) && value <= 30) {
                setPasswordLength(value);
              }
            }}
          />
        </div>

        <div className="mt-5 flex flex-row gap-5 max-md:flex-col">
          <label className="text-2xl">Additional Options</label>
          <div className="flex flex-row text-xl gap-7 max-md:flex-col">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeUppercase}
                onChange={() => setIncludeUppercase(!includeUppercase)}
                className="w-5 h-5"
              />
              <span className="ml-2">A-Z</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeLowercase}
                onChange={() => setIncludeLowercase(!includeLowercase)}
                className="w-5 h-5"
              />
              <span className="ml-2">a-z</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers(!includeNumbers)}
                className="w-5 h-5"
              />
              <span className="ml-2">0-9</span>
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols(!includeSymbols)}
                className="w-5 h-5"
              />
              <span className="ml-2">!@#$%^&*</span>
            </label>
          </div>
        </div>
      </div>

      <p className="text-white mt-5 w-8/12 mb-5  max-md:px-3 max-md:w-10/12">
        Want to test the strength of another password? Try the CipherSafe{" "}
        <a href="/passwordstrength" className="text-violet-200 hover:underline">
          {" "}
          Password Strength Testing Tool
        </a>
        .
      </p>
      <Footer />
    </main>
  );
};

export default PasswordGenerator;
