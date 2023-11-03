"use client";
import React, { useEffect, useState } from "react";
import emailVerify from "@/api/emailVerify";

const verifyemail = () => {
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const id = window.location.search.split("&")[0].split("=")[1];
      const token = window.location.search.split("&")[1].split("=")[1];
      try {
        const res = await emailVerify({ id: id, verificationToken: token });
        if(res) {
            setLoading(false);
        }
        if (res.success) {
          setSuccess(true);
        }
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-800">
      {loading ? (
        <div class="w-16 h-16 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      ) : (
        <div className="bg-slate-700 p-8 rounded-lg shadow-lg text-center">
          {success ? (
            <>
              <h1 className="text-2xl font-semibold mb-4">
                Verification Successful
              </h1>
              <p>Your email has been successfully verified.</p>
              <a
                className="text-blue-600 hover:underline mt-4"
                href="/authentication"
              >
                Login
              </a>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-4">
                Verification Failed
              </h1>
              <p>Sorry, the email verification failed.</p>
              <a
                href="/authentication"
                className="text-blue-600 hover:underline mt-4"
              >
                resend verification mail
              </a>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default verifyemail;
