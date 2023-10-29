'use client';
import React, { useEffect, useState } from "react";

import earth from "@/../public/assets/earth.svg";
import Image from "next/image";

import zxcvbn from "zxcvbn";

import DropdownButton from "./DropDown";
import UpdateSecret from "./UpdateSecret";

const showSecret = ({ secret, setSecrets }) => {
  const [isOpen, setIsOpen] = useState(false);

  const CreatePasswordLabel = (password) => {
    if (password) {
      const testResult = zxcvbn(password);
      switch (testResult.score) {
        case 1:
          return "Weak";
        case 2:
          return "Okay";
        case 3:
          return "Good";
        case 4:
          return "Strong";
        default:
          return "Risky";
      }
    } else {
      return "Risky";
    }
  };
  const funcProgressColor = (password) => {
    if (password) {
      const testResult = zxcvbn(password);
      switch (testResult.score) {
        case 0:
          return "#DC3A47";
        case 1:
          return "#d97706";
        case 2:
          return "#d97706";
        case 3:
          return "#155e75";
        case 4:
          return "#14532d";
        default:
          return "none";
      }
    } else {
      return "#DC3A47";
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(secret.title);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="text-2xl cursor-pointer hover:bg-slate-700 flex items-center p-2 border-b-2 border-b-slate-400"
      >
        <div className="flex-shrink-0 ml-5">
          {secret.url ? (
            <img
              src={`https://www.google.com/s2/favicons?domain=${secret.url}&sz=32`}
              alt={`Favicon for ${secret.url}`}
              className="w-7 h-7"
            />
          ) : (
            <Image src={earth} alt={"earth"} className="h-7 w-7" />
          )}
        </div>
        <div className="flex flex-row px-2 justify-between w-full items-center">
          <div className="flex flex-col items-start w-1/2 sm:w-1/3 md:w-1/5 lg:w-1/6">
            <p className="">{secret.title}</p>
            <p className="text-sm text-slate-400">{secret.username}</p>
          </div>
          <div className="flex justify-center flex-auto">
            <div
              style={{
                backgroundColor: funcProgressColor(secret.password),
              }}
              className="text-white text-center rounded-full px-1 py-2 text-sm xl:w-2/12 md:w-2/6 sm:w-3/6 max-sm:hidden"
            >
              {CreatePasswordLabel(secret.password)}
            </div>
          </div>
          <DropdownButton
            id={secret.id}
            username={secret.username}
            password={secret.password}
            url={secret.url}
            setSecrets={setSecrets}
          />
        </div>
      </div>
      {isOpen && (
        <div
          onClick={handleClick}
          className="flex flex-col justify-center items-center z-50 absolute w-full h-screen top-0 left-0 p-32 bg-opacity-50 bg-black text-white max-md:mt-44 max-sm:mt-20"
        >
          <UpdateSecret
            Secret={secret}
            setSecrets={setSecrets}
            setIsOpen={setIsOpen}
          />
        </div>
      )}
    </>
  );
};

export default showSecret;
