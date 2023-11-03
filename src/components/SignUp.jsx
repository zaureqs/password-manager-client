'use client';
import React, { useState } from "react";
import PassStrengthMeter from "./PassStrengthMeter.jsx";
import signUp from "../api/signUp.js";

import {
  AiOutlineLock,
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";

import { BiUser } from "react-icons/bi";


import hashPassword from "@/utils/hashPassword.js";
import { toast } from "react-toastify";



const SignUp = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const hashedPassword = hashPassword(user.password);
      
      const response = await signUp({...user, password: hashedPassword});
      console.log(response);
      if(response.success){
        toast.success('verification email sent successfully to your email address');
      } else {
        toast.error('something went wrong');
      }
    } catch (error) {
      toast.error('Internal server error');
    }
  };

  return (
    <div className="flex flex-col justify-center bg-[#CEDDE6] rounded-2xl">
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className=" flex flex-row justify-center text-4xl font-semibold underline mt-2 text-[#002E48]">
          SignUp
        </h1>
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center w-full"
        >
          <div className="flex flex-row justify-start gap-3 px-4 mt-4 w-full md:w-3/5 bg-white rounded-xl">
            <label htmlFor="name" className="block text-base mb-2">
              <BiUser className="text-xl text-[#002E48] mt-2" />
            </label>
            <input
              type="text"
              id="name"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              autoComplete="off"
              placeholder="Full Name"
              className="border-none outline-none text-black w-full"
              required
            ></input>
          </div>
          <div className="flex flex-row justify-start gap-3 px-4 mt-4 w-full md:w-3/5 bg-white rounded-xl">
            <label htmlFor="Email" className="block text-base mb-2">
              <AiOutlineMail className="text-xl text-[#002E48] mt-2" />
            </label>
            <input
              type="email"
              id="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              autoComplete="off"
              placeholder="abc@email.com"
              className="border-none outline-none text-black w-full"
              required
            ></input>
          </div>
          <div className="flex flex-row justify-start gap-3 px-4 mt-4 w-full md:w-3/5 bg-white rounded-xl">
            <label htmlFor="password" className="block text-base mb-2">
              <AiOutlineLock className="text-xl text-[#002E48] mt-2" />
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="border-none outline-none text-black w-full"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            ></input>
            <div onClick={handleShowPassword}>
              {showPassword ? (
                <AiFillEye className="text-xl text-[#002E48] mt-2" />
              ) : (
                <AiFillEyeInvisible className="text-xl text-[#002E48] mt-2 cursor-pointer" />
              )}
            </div>
          </div>
          <PassStrengthMeter password={user.password} />
          <div className="flex flex-row justify-start gap-3 px-4 mt-4 w-full md:w-3/5 bg-white rounded-xl">
            <label htmlFor="confirmPassword" className="block text-base mb-2">
              <AiOutlineLock className="text-xl text-[#002E48] mt-2 cursor-pointer" />
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Confirm Password"
              className="border-none outline-none text-black w-full"
              required
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
            ></input>
          </div>
          <div className="flex flex-row gap-2 justify-center text-[#002E48] mt-4 text-lg">
            <input type="checkbox" className="w-4" required />
            <h6>
              i have read and agree to{" "}
              <b>
                <a href="/terms" className="text-blue-400">Terms and Condition</a>
              </b>
            </h6>
          </div>

          <button
            type="submit"
            className="flex p-2 bg-blue-700  items-center text-2xl mt-2 font-semibold rounded-md hover:bg-blue-600 border-2 border-green-600 hover:border-solid  hover:border-sky-700"
          >
            SignUp
          </button>
        </form>
        <div className="text-[#002E48] mt-4 text-lg">
          Already have an account?{" "}
          <button onClick={() => {props.setSwitchLogin(true)}} className="text-blue-700 underline">
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
