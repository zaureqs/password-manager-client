"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

import logo from "../../public/assets/logo.svg";

import TryNow from "./TryNow";
import LogOut from "./LogOut";
import UserProfile from "./UserProfileDropDown";

import isLogedIn from "@/api/isLogedIn";

const Navbar = () => {
  const scrolledStyle = {
    backgroundColor: "#111827",
    transition: "background-color 2s ease",
    top: "0",
    padding: "2.5rem",
  };

  const [isOpen, setIsOpen] = useState(false);
  const [logedIn, setLogedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        // console.log(isScrolled);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const res = await isLogedIn();
        if (res.success) {
          setLogedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkLoginStatus();
  }, []);

  return (
    <header
      className={`flex flex-row fixed top-5 p-4 w-full h-16 justify-between items-center md:px-24 z-50 max-sm:gap-5 max-md:top-2`}
      style={isScrolled ? scrolledStyle : undefined}
    >
      <a
        href="/"
       className="text-4xl h-full text-blue-600 flex flex-row justify-start gap-2 items-center max-md:text-3xl max-sm:text-2xl">
        <Image src={logo} alt={"logo"} className="w-7 md:w-10" />
        <h2 className="text-white font-light ">
          <span className="font-normal text-[#b5d6fd]">Cipher</span>safe
        </h2>
      </a>
      <div className="hidden lg:flex flex-row w-5/6 text-white justify-between items-center ">
        <ul className="flex flex-row w-5/6 text-white justify-center items-center text-md xl:text-xl xl:font-bold gap-6 xl:gap-16">
          <li className="hover:text-indigo-300 hover:underline">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-indigo-300 hover:underline">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="hover:text-indigo-300 hover:underline">
            <a href="/passwordstrength">Password tester</a>
          </li>
          <li className="hover:text-indigo-300 hover:underline">
            <a href="/passwordgenerator">Generate</a>
          </li>
        </ul>
        {logedIn ? <UserProfile /> : <TryNow custom = "lg:text-lg lg:font-semibold lg:p-1 xl:p-3 xl:font-bold xl:text-2xl" />}
      </div>

      <div className="lg:hidden">
        <AiOutlineMenu className="text-4xl" onClick={toggleMenu} />
        {isOpen && (
          <div className="absolute top-0 left-0 py-7 flex flex-col gap-12 w-full h-fit justify-start items-center bg-[#CEDDE6] text-violet-950">
            <div className="w-full flex justify-end px-10 md:px-24">
              <AiOutlineCloseCircle onClick={toggleMenu} className="text-4xl" />
            </div>
            <ul className="flex flex-col w-full gap-12 justify-between items-center text-xl font-bold">
              <li className="hover:text-indigo-400 hover:underline">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-indigo-300 hover:underline">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="hover:text-indigo-300 hover:underline">
                <a href="/passwordstrength">Password tester</a>
              </li>
              <li className="hover:text-indigo-300 hover:underline">
                <a href="/passwordgenerator">Generate</a>
              </li>
              <li className="hover:text-indigo-400 hover:underline">
                <a href="/account">Account</a>
              </li>
            </ul>
            {logedIn ? <LogOut /> : <TryNow />}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
