"use client";
import React, { useState } from "react";

import { toast } from "react-toastify";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

import createSecretes from "@/api/createSecretes";
import getSecrets from "@/api/getSecrets";

import encrypt from "@/utils/encrypt";
import decrypt from "@/utils/decrypt";

const createSecret = ({ setSecrets }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [secret, setSecret] = useState({
    title: "",
    url: "",
    username: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    setIsOpen(true);
  };
  const closeButton = () => {
    setIsOpen(false);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const UpdateSecrets = async () => {
    try {
      const res = await getSecrets();

      if (!res.success) {
        window.location.href = "/authentication";
      }
      const decryptResult = decrypt(res.secrets);
      setSecrets(decryptResult);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSecret = async (e) => {
    e.preventDefault();
    setIsOpen(false);
    try {
      const encryptSecret = encrypt(secret);
      const response = await createSecretes(encryptSecret);
      if (response.success) {
        toast.success("Item created successfully", {
          position: "top-right",
          autoClose: 3000,
        });
        UpdateSecrets();
      } else {
        toast.error("error try again !", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("error try again !", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl ">Vaults</h1>
        <button
          className="flex px-3 py-2 bg-yellow-600 items-center text-xl font-semibold tracking-wide rounded-md text-white cursor-pointer hover:bg-[#111827] border-2 border-slate-600 hover:border-solid  hover:border-sky-900"
          onClick={handleClick}
        >
          Add New
        </button>
      </div>

      {isOpen && (
        <div
          onClick={closeButton}
          className="flex flex-col justify-center items-center z-10 absolute w-full h-screen top-0 left-0 p-32 bg-opacity-50 bg-black text-white max-md:mt-44 max-sm:mt-20"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col justify-center bg-white dark:bg-gray-900 rounded-2xl w-screen p-5 bg-opacity-75 xl:w-1/2 font-sans"
          >
            <div className="flex flex-row justify-between  text-[#989898]">
              <h1 className=" text-3xl mt-2 ">Create Secret</h1>
              <button
                className="font-semibold text-2xl p-2  rounded-md"
                onClick={closeButton}
              >
                X
              </button>
            </div>
            <div>
              <hr className=" my-2 border-gray-200 sm:mx-auto dark:border-gray-700 " />
            </div>
            <form
              onSubmit={handleSecret}
              className="flex flex-col justify-center items-center w-full sm:text-2xl"
              autoComplete="off"
            >
              <div className="flex flex-row justify-start gap-3 mt-4 w-full md:w-3/5 bg-white rounded-md">
                <input
                  type="text"
                  id="title"
                  onChange={(e) =>
                    setSecret({ ...secret, title: e.target.value })
                  }
                  autoComplete="off"
                  placeholder="Title"
                  className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
                  required
                ></input>
              </div>
              <div className="flex flex-row justify-start gap-3 mt-4 w-full md:w-3/5 bg-white rounded-md">
                <input
                  type="text"
                  id="url"
                  onChange={(e) =>
                    setSecret({ ...secret, url: e.target.value })
                  }
                  autoComplete="off"
                  placeholder="url"
                  className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
                ></input>
              </div>
              <div className="flex flex-row justify-start gap-3 mt-4 w-full md:w-3/5 bg-white rounded-md">
                <input
                  type="text"
                  id="username"
                  onChange={(e) =>
                    setSecret({ ...secret, username: e.target.value })
                  }
                  autoComplete="off"
                  placeholder="username"
                  className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
                  required
                ></input>
              </div>
              <div className="flex flex-row justify-start gap-3 mt-4 w-full md:w-3/5 bg-white rounded-md">
                <input
                  type="email"
                  id="email"
                  onChange={(e) =>
                    setSecret({ ...secret, email: e.target.value })
                  }
                  autoComplete="off"
                  placeholder="email"
                  className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
                ></input>
              </div>
              <div className="flex flex-row justify-start items-center  mt-4 w-full md:w-3/5 bg-white rounded-md">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
                  onChange={(e) =>
                    setSecret({ ...secret, password: e.target.value })
                  }
                  autoComplete="new-password"
                ></input>
                <div
                  onClick={handleShowPassword}
                  className="p-2 border-2 rounded-md"
                >
                  {showPassword ? (
                    <AiFillEye className="text-xl text-[#002E48] " />
                  ) : (
                    <AiFillEyeInvisible className="text-xl text-[#002E48] " />
                  )}
                </div>
              </div>

              <div className="flex flex-row gap-5 justify-center items-center w-5/12 mt-4 text-2xl ">
                <button
                  type="submit"
                  className="py-2 px-4 rounded-md border-2 tracking-wider bg-white dark:bg-slate-950  hover:bg-transparent hover:border-solid  hover:border-slate-500"
                >
                  save
                </button>
                <button
                  type="submit"
                  className=" py-2 px-4 bg-transparent border-2 tracking-wider rounded-md hover:bg-slate-950  border-blue-600 hover:border-solid  hover:border-sky-700"
                  onClick={closeButton}
                >
                  cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default createSecret;
