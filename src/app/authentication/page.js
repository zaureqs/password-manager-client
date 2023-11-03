'use client';
import React, {useState, useEffect} from "react";


import SignUp from "../../components/SignUp";
import LogIn from "../../components/LogIn";

import isLogedIn from "@/api/isLogedIn";
import { toast } from "react-toastify";

export default function authentication() {

  const [SwitchLogin, setSwitchLogin] = useState(true);

  const handleOpenPopup = () => {
      setIsOpen(true);
  };

  const handleClosePopup = () => {
      setIsOpen(false);
  };

  useEffect(() => {
    async function checkLoginStatus() {
        try {
            const res = await isLogedIn();
            if(res.success){
              window.location.href = '/dashboard';
            }
        } catch (error) {
            toast.error("something went wrong");
        }
    }
    checkLoginStatus();
  }, []);

    

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#002E48] text-black">
          <div className="w-screen p-5 pt-2 bg-opacity-75 lg:w-4/6 xl:w-1/2">
            {!SwitchLogin ? (
              <SignUp
                SwitchLogin={SwitchLogin}
                setSwitchLogin={setSwitchLogin}
              />
            ) : (
              <LogIn
                SwitchLogin={SwitchLogin}
                setSwitchLogin={setSwitchLogin}
              />
            )}
          </div>
    </main>
  )
}