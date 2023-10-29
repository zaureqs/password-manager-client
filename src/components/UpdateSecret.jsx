"use client";
import React, { useState } from "react";

import { toast } from "react-toastify";

import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { BiSolidCopy } from "react-icons/bi";
import { FaExternalLinkAlt } from "react-icons/fa";

import UpdateSecret from "@/api/updateSecret";
import getSecrets from "@/api/getSecrets";

import encrypt from "@/utils/encrypt";
import decrypt from "@/utils/decrypt";
import copyToClipboard from "@/utils/copyToClipboard";

const updateSecret = ({ Secret, setSecrets, setIsOpen }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [secret, setSecret] = useState(Secret);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const UpdateSecrets = async () => {
    try {
      setIsOpen(false);
      const res = await getSecrets();

      if (!res.success) {
        window.location.href = "/authentication";
      }
      const decryptResult = decrypt(res.secrets);
      setSecrets(decryptResult);
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSecret = async (e) => {
    e.preventDefault();
    setIsOpen(false);
    try {
      const encryptSecret = encrypt(secret);
      const response = await UpdateSecret(encryptSecret);
      if (response.success) {
        toast.success("Item updated successfully", {
          position: "top-right",
          autoClose: 3000,
        });
        UpdateSecrets();
      } else {
        toast.error("error while updating try again !", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } catch (error) {
      toast.error("error while updating try again !", {
        position: "top-right",
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="flex flex-col justify-center bg-white dark:bg-gray-900 rounded-2xl w-screen p-5 bg-opacity-75 xl:w-1/2 font-sans"
    >
      <div className="flex flex-row justify-between  text-[#989898]">
        <h1 className=" text-3xl mt-2 ">Update Secret</h1>
      </div>
      <hr className=" my-2 border-gray-200 sm:mx-auto dark:border-gray-700 " />
      <form
        onSubmit={handleSecret}
        className="flex flex-col justify-center items-center w-full sm:text-2xl"
        autoComplete="off"
      >
        <div className="flex flex-row justify-start gap-3 mt-4 w-full md:w-3/5 bg-white rounded-md">
          <input
            type="text"
            id="title"
            value={secret.title}
            onChange={(e) => setSecret({ ...secret, title: e.target.value })}
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
            value={secret.url}
            onChange={(e) => setSecret({ ...secret, url: e.target.value })}
            autoComplete="off"
            placeholder="url"
            className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
          ></input>
          <div
            onClick={() => {
              try {
                let url = secret.url;
                if (!url.startsWith("http://") && !url.startsWith("https://")) {
                  url = "https://" + url;
                }
                window.open(url, "_blank");
              } catch (error) {
                toast.error("url not available");
              }
            }}
            className="p-2 border-2 rounded-md"
          >
            <FaExternalLinkAlt size={17} className="text-xl text-[#002E48]" />
          </div>
        </div>
        <div className="flex flex-row justify-start gap-3 mt-4 w-full md:w-3/5 bg-white rounded-md">
          <input
            type="text"
            id="username"
            value={secret.username}
            onChange={(e) => setSecret({ ...secret, username: e.target.value })}
            autoComplete="off"
            placeholder="username"
            className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
            required
          ></input>
          <div
            onClick={() => copyToClipboard(secret.username)}
            className="p-2 border-2 rounded-md"
          >
            <BiSolidCopy className="text-xl text-[#002E48] " />
          </div>
        </div>
        <div className="flex flex-row justify-start gap-3 mt-4 w-full md:w-3/5 bg-white rounded-md">
          <input
            type="email"
            id="email"
            value={secret.email}
            onChange={(e) => setSecret({ ...secret, email: e.target.value })}
            autoComplete="off"
            placeholder="email"
            className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
          ></input>
          <div
            onClick={() => copyToClipboard(secret.email)}
            className="p-2 border-2 rounded-md"
          >
            <BiSolidCopy className="text-xl text-[#002E48] " />
          </div>
        </div>
        <div className="flex flex-row justify-start items-center  mt-4 w-full md:w-3/5 bg-white rounded-md">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={secret.password}
            placeholder="Password"
            className="outline-blue-600 text-black w-full py-1 px-2 rounded-md"
            onChange={(e) => setSecret({ ...secret, password: e.target.value })}
            autoComplete="new-password"
          ></input>
          <div
            onClick={() => copyToClipboard(secret.password)}
            className="p-2 border-2 rounded-md"
          >
            <BiSolidCopy className="text-xl text-[#002E48] " />
          </div>
          <div onClick={handleShowPassword} className="p-2 border-2 rounded-md">
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default updateSecret;
