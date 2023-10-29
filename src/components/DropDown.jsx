"use client";
import React, { useState, useEffect, useRef } from "react";

import { toast } from "react-toastify";

import { BiSolidCopy } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { GoLinkExternal } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";

import getSecrets from "@/api/getSecrets";
import deleteSecrate from "@/api/deleteSecrete";

import decrypt from "@/utils/decrypt";
import copyToClipboard from "@/utils/copyToClipboard";

function DropdownButton({ id, username, password, url, setSecrets }) {
  const notify = (message) =>
    toast.success(message, {
      autoClose: 3000,
    });

  const [isMenuVisible, setMenuVisible] = useState(false);

  const buttonRef = useRef(null);

  const toggleMenu = (e) => {
    setMenuVisible(!isMenuVisible);
  };

  const UpdateSecrets = async () => {
    try {
      const res = await getSecrets();

      if (!res.success) {
        window.location.href = "/authentication";
      } else {
        const decryptResult = decrypt(res.secrets);
        setSecrets(decryptResult);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      let res = await deleteSecrate({ id: id });
      if (!res.success) {
        toast.error("error while deleting try again", {
          autoClose: 3000,
        });
      } else {
        notify("item deleted successfully");
        UpdateSecrets();
      }
    } catch (error) {
      toast.error("error while deleting try again", {
        autoClose: 3000,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isMenuVisible && buttonRef.current) {
        if (!buttonRef.current.contains(e.target)) {
          setMenuVisible(false);
        }
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isMenuVisible]);

  return (
    <div onClick={(e) => e.stopPropagation()} className="relative text-left min-w-1/6">
      <button
        ref={buttonRef}
        onClick={(e) => {
          toggleMenu();
          e.stopPropagation();
        }}
        className="border-2 border-[#262b2e] hover:border-blue-700 p-1 rounded-md"
      >
        <FiMoreVertical className="text-white" />
      </button>

      {isMenuVisible && (
        <div className="origin-top-right absolute ml-12 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none text-sm max-md:right-8 z-40">
          <a
            href="#"
            className={`group flex items-center px-4 py-2 gap-2 text-white hover:bg-slate-600`}
            aria-hidden="true"
            onClick={() => {
              copyToClipboard(username);
              notify("username copied successfully");
              toggleMenu();
            }}
          >
            <BiSolidCopy size={17} />
            Copy Username
          </a>
          <a
            href="#"
            className="group flex items-center px-4 py-2 gap-2 text-white hover:bg-slate-600"
            onClick={() => {
              copyToClipboard(password);
              notify("password copied successfully");
              toggleMenu();
            }}
          >
            <BiSolidCopy size={17} />
            Copy Password
          </a>
          <div
            onClick={(e) => {
              console.log(url);
              if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
              }
              window.open(url, "_blank");
              toggleMenu();
            }}
            className="group flex items-center px-4 py-2 gap-2 text-white hover-bg-slate-600"
          >
            <GoLinkExternal size={17} />
            Open URL
          </div>
          <a
            href="#"
            className="group flex items-center px-4 py-2 gap-2 hover:text-white hover:bg-red-700 text-[#f34747d4]"
            onClick={(e) => {
              handleDelete();
              toggleMenu();
            }}
          >
            <RiDeleteBinLine size={17} />
            Delete
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;
