'use client';
import React, { useState } from "react";

import {toast} from "react-toastify";

import logIn from "../api/logIn.js";


import {
  AiOutlineLock,
  AiOutlineMail,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";



import hashPassword from "@/utils/hashPassword.js";

const LogIn = (props) => {

  const [showPassword, setShowPassword] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    try {

      const hashedPassword = hashPassword(user.password);
      const response = await logIn({...user, password: hashedPassword});
      console.log(response.data);
      if(response.success){
        toast.success("loged in successfully", {
          autoClose: 2000,
        });
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 2000);
      }
      else{
        toast.error(response.message, {
          autoClose: 2000,
        })
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center bg-[#CEDDE6] rounded-2xl">
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className=" flex flex-row justify-center text-4xl font-semibold underline mt-2 text-[#002E48]">
          LogIn
        </h1>
        <form
          onSubmit={handleLogIn}
          className="flex flex-col justify-center items-center w-full"
        >
          <div className="flex flex-row justify-start gap-3 px-4 mt-4 w-full md:w-3/5 bg-white rounded-xl">
            <label htmlFor="Email" className="block text-base mb-2">
              <AiOutlineMail className="text-xl text-[#002E48] mt-2 cursor-pointer" />
            </label>
            <input
              type="email"
              id="Email"
              autoComplete="off"
              placeholder="abc@email.com"
              className="border-none outline-none text-black w-full"
              onChange={(e) => setUser({...user, email: e.target.value})}
            ></input>
          </div>
          <div className="flex flex-row justify-start gap-3 px-4 mt-4 w-full md:w-3/5 bg-white rounded-xl">
            <label htmlFor="password" className="block text-base mb-2">
              <AiOutlineLock className="text-xl text-[#002E48] mt-2 cursor-pointer" />
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="border-none outline-none text-black w-full"
              onChange={(e) => setUser({...user, password: e.target.value})}
            ></input>
            <div onClick={handleShowPassword}>
              {showPassword ? (
                <AiFillEye className="text-xl text-[#002E48] mt-2" />
              ) : (
                <AiFillEyeInvisible className="text-xl text-[#002E48] mt-2" />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="flex px-4 py-2 bg-blue-700  items-center text-2xl mt-4 font-semibold rounded-md hover:bg-blue-600 border-2 border-green-600 hover:border-solid  hover:border-sky-700"
          >
            LogIn
          </button>
        </form>
        <div className="text-[#002E48] mt-4 text-lg">
          Don't have an account? <button onClick={() => props.setSwitchLogin(false)} className="text-blue-700 underline">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
