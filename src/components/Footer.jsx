'use client';
import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full bottom-0">
      <div className="mx-auto w-full max-w-screen-xl p-2 py-6 lg:py-12">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center gap-5">
              <Image src={logo} alt={"logo"} className="w-7 md:w-8" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                CipherSafe
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 md:gap-8">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    about us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    className="hover:underline "
                  >
                    linkedin
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/cookiepolicy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Help & contacts
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                
                <li className="mb-4">
                  <a href="/help" className="hover:underline">
                    help
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:#"
                    className="hover:underline"
                  >
                    Email for query
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="/" className="hover:underline">
              CipherSafe™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://instagram.com/instagram"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <BiLogoInstagramAlt size={22} />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://twitter.com/twitter"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <FaTwitter size={20} />
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/github"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <AiFillGithub size={22} />
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
