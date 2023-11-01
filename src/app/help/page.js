"use client";
import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import help from "@/../public/assets/help.png";
import forHelp from "@/../public/assets/onHelpPage.png";

export default function helpPage() {
  return (
    <>
      <div className="flex w-full flex-col mt-18 bg-[#0e172b]">
        <div className="flex flex-col items-center justify-center py-16 mt-24 max-sm:px-8 max-md:py-14">
          <h1 className="text-3xl">Need help with anything?</h1>
          <p className="text-xl max-md:mt-4 text-center">
            Let us know how we can help.{" "}
            <a
              href="mailto:#"
              className="hover:underline text-blue-400"
            >
              Contact CipherSafe Support
            </a>
          </p>
        </div>
      </div>
      <main className="flex flex-col  items-center w-full bg-[#deebf0] px-8">
        <div className="text-[#28337D] w-8/12 mt-10 mb-10 max-md:w-full">
          <h1 className="text-5xl font-medium max-md:text-3xl">Password Manger Web Vault</h1>
          <p className="py-1 font-normal text-xl mt-5 mb-5">
            CipherSafe is a robust and user-friendly password manager designed
            exclusively for personal use. It's your secure vault for
            safeguarding your passwords and sensitive information, offering you
            peace of mind in the digital age.
          </p>
          <Image src={forHelp} alt="vault image" />
          <p className="text-center">The CipherSafe Web Vault</p>
          <p className="text-2xl ">
            When you first log in to your web vault, you'll land on the Vaults
            view. This space will list all vault items, like logins or Signup
            information
          </p>
          <div className="flex flex-col gap-2 mt-5">
            <h2 className="text-4xl text-[#28337D] font-semibold max-sm:text-2xl">
              Steps to Follow
            </h2>
            <h4>To add a new login item:</h4>
            <ul className="flex flex-col gap-2 text-lg">
              <li>
                1. Select{" "}
                <span className="text-[#28337D] font-semibold ">+New </span>
                button
              </li>
              <li>
                2. Give Title to the item for ex. Google Login.(it is mandatory)
              </li>
              <li>
                3. copy paste a url of the website or write only domain name for
                example <span className="text-pink-600">google.com</span> or{" "}
                <span className="text-pink-600">instagram.com</span>
              </li>
              <li>4. Type your username</li>
              <li>5. Add Email Id if you want</li>
              <li>
                6. Type Password so that you don't have to remember ( Password
                is stored in hashed form )
              </li>
              <li>
                7.{" "}
                <span className="text-rose-700 font-semibold">
                  Nice Work!🥳
                </span>{" "}
                Select the{" "}
                <span className="text-[#28337D] font-semibold ">Save</span>{" "}
                button to finish adding this item.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <main className="flex flex-row  items-start w-full bg-[#022366] px-4">
        <div className="flex flex-row items-center mt-10 mb-10">
          <Image src={help} alt="email us" className="w-2/3 h-2/3 max-md:hidden" />

          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md w-1/2 max-md:w-full">
            <h2 className="mb-4 text-4xl tracking-tight font-semibold text-center text-violet-200">
              Contact Us
            </h2>
            <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-indigo-500"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light outline-indigo-500"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 "
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  style={{ maxHeight: "7rem", minHeight: "4rem" }}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border-2 border-blue-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-indigo-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg sm:w-fit bg-teal-600  border-2 border-blue-700  hover:border-green-600 hover:bg-indigo-600 "
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
