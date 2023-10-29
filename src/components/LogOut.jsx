"use client";
import logOut from "@/api/logout";
import React, { useState } from "react";


const LogOut = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [SwitchLogin, setSwitchLogin] = useState(true);

  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await logOut();
      window.location.href = '/';
      console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div>
      <a href="/">
      <button
        className="flex p-3 bg-blue-600 items-center text-2xl font-semibold rounded-md text-white hover:bg-transparent border-2 border-blue-600 hover:border-solid  hover:border-sky-700"
        onClick={handleLogOut}
      >
        logout
      </button>
      </a>
    </div>
  );
};

export default LogOut;
