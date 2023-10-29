'use client';
import React, { useState, useEffect } from "react";

import logOut from "@/api/logout";
import isLogedIn from "@/api/isLogedIn";
import { FiUser, FiLogOut } from "react-icons/fi";
import { PiPasswordDuotone } from "react-icons/pi";
import { Menu } from "@headlessui/react";

function UserProfile() {
  const [isOpen, setIsOpen] = useState(false);

  const [user, setUser] = useState({
    name: ""
  });
  useEffect(() => {
    async function checkLoginStatus() {
      try {
        const res = await isLogedIn();
        setUser({ name: res.user.name });
      } catch (error) {
        console.log(error);
      }
    }
    checkLoginStatus();
  }, []);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      const response = await logOut();
      window.location.href = "/";
      // console.log(response);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <Menu as="div" className="relative">
        <Menu.Button onClick={toggleDropdown} className="cursor-pointer">
        <div className="flex justify-center bg-green-600 rounded-full h-12 w-12 text-center text-xl uppercase items-center">
            {user.name.length >= 2 ? user.name.slice(0, 2) : user.name.slice(0,1)}
          </div>
        </Menu.Button>
        {isOpen && (
          <Menu.Items
            as="div"
            className="absolute w-60 p-5 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-3 right-0"
          >
            <Menu.Item>
              {({ active }) => (
                <a
                  href="/account"
                  className={`flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:bg-gray-700 hover:border-indigo-400 ${
                    active ? "border-indigo-700" : ""
                  }`}
                >
                  <div className="mr-3 ">
                    <FiUser className="w-6 h-6" />
                  </div>
                  Account
                </a>
              )}
            </Menu.Item>
            <Menu.Item className="mt-2">
              {({ active }) => (
                <a
                  href="/passwordgenerator"
                  className={`flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-400 hover:bg-gray-700 ${
                    active ? "border-indigo-700" : ""
                  }`}
                >
                  <div className="mr-3">
                    <PiPasswordDuotone className="w-6 h-6" />
                  </div>
                  Password Generator
                </a>
              )}
            </Menu.Item>
            <hr className="dark:border-gray-700 mt-2" />
            <Menu.Item className="mt-2">
              {({ active }) => (
                <a
                  href="/"
                  className={`flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600 hover:bg-gray-700 ${
                    active ? "border-red-600" : ""
                  }`}
                  onClick={handleLogOut}
                >
                  <div className="mr-3 text-red-600">
                    <FiLogOut className="w-6 h-6" />
                  </div>
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        )}
      </Menu>
    </div>
  );
}

export default UserProfile;
