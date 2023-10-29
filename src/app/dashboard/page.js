"use client";
import React, { useState, useEffect } from "react";

import {toast} from "react-toastify";

import CreateSecret from "@/components/CreateSecret";
import ShowSecret from "@/components/ShowSecret";

import getSecrets from "@/api/getSecrets";
import isLogedIn from "@/api/isLogedIn";

import decrypt from "@/utils/decrypt";

export default function dashbordPage() {
  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    async function get_secrets() {
      try {
        const res = await getSecrets();

        if (res.success) {
          const decryptResult = decrypt(res.secrets);
          setSecrets(decryptResult);
        } else {
          try {
            const logedIn = await isLogedIn();
            if(logedIn.success){
              toast.error("Something went wrong");
            } else{
              window.location.href = '/authentication';
            }
          } catch (error) {
            toast.error("Something went wrong");
          }
          
        }
      } catch (error) {
        toast.error("there is an Internal server error !");
      }
    }
    get_secrets();
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center p-2 pt-24 md:p-24 bg-[#262b2e]">
      <div className="flex flex-row w-10/12 mt-8">
        <CreateSecret setSecrets={setSecrets} />
      </div>
      <div className="w-10/12  text-slate-200 mt-4 font-sans">
        <div className=" flex flex-row justify-between  text-2xl mb-8 pb-4 items-center border-b-4 border-slate-500">
          <div className="px-2 py-3  leading-6 font-medium ml-10 sm:w-1/3 md:w-1/5 lg:w-1/6 ">
            Name
          </div>
          <div className="px-2 py-3  leading-6 font-medium max-sm:hidden">
            Strength
          </div>
          <div className="px-2 py-3  leading-6 font-medium max-sm:hidden">
            Options
          </div>
        </div>

        {secrets &&
          secrets.map((secret) => (
            <ShowSecret
              key={secret.id}
              secret={secret}
              setSecrets={setSecrets}
            />
          ))}
      </div>
    </main>
  );
}
