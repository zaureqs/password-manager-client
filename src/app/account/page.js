'use client';
'use client';
import React, { useEffect, useState } from "react";

import isLogedIn from "@/api/isLogedIn";
import deleteUser from "@/api/deleteUser";
import { toast } from "react-toastify";

export default function account() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const res = await isLogedIn();
        if (!res.success) {
          window.location.href = "/authentication";
        }
        setUser({ name: res.user.name, email: res.user.email });
      } catch (error) {
        toast.error("something went wrong");
      }
    }
    checkLoginStatus();
  }, []);

  const DeleteAccount = async () => {
      let res = await deleteUser();
      window.location.href = "/";
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center p-2 pt-16 md:p-24 bg-[#262b2e]">
      <div className="flex flex-col justify-start items-start w-10/12 p-5 max-md:w-full">
        <div className="text-3xl tracking-wider">
          <h1>My Account</h1>
        </div>
          <hr className="w-full mt-5 border-t-1 mb-2 border-gray-200 sm:mx-auto dark:border-gray-400" />

        <div className="flex flex-row w-full gap-10">
          <div className="flex flex-col w-1/2 max-sm:w-full">
            <div className="flex flex-col gap-2 text-white mt-5">
              <label className="font-medium text-xl tracking-wide">Name</label>
              <input
                type="text"
                className="py-2 px-1 rounded-md outline-blue-700 text-lg bg-transparent border-2 border-gray-500"
                value={user.name}
                readOnly={true}
              />
            </div>
            <div className="flex flex-col gap-2 text-white mt-5 ">
              <label className="font-medium text-xl tracking-wide">Email</label>
              <input
                type="text"
                className="py-2 px-1 rounded-md outline-blue-700 text-lg bg-transparent border-2 border-gray-500 bg-gray-500"
                value={user.email}
                readOnly={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-12 border-5 p-5 w-10/12 max-md:w-full">
        <h1 className="text-red-500 text-3xl tracking-wider">Danger Zone</h1>
        <div className="block h-32 w-1/2 mt-5 border-2 border-red-500 rounded-lg max-md:w-4/5 max-sm:w-full ">
          <p className="ml-5 mt-3 mb-5">Careful, this action is not reversible!</p>
          <button className="ml-5 bg-transparent text-white px-4 py-2 rounded-md border-2 border-red-600 hover:bg-red-600" 
          onClick={DeleteAccount}>
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
}
