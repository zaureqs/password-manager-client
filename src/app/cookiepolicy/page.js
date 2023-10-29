"use client"
import React from "react";

import Footer from "@/components/Footer";

function CookiePolicy() {
  return (
    <main>
      <div className="flex flex-col w-full bg-blue-950 justify-center items-center py-12 pt-24">
        <h1 className="text-4xl py-5 ">CipherSafe Cookie Policy</h1>
        <h4 className="text-xl">
          Everything you need to know about the cookies used on our website
        </h4>
      </div>

      <div className="flex flex-col w-full justify-center items-center bg-[#d8d8d8]">
        <div className=" p-5 w-8/12 text-black font-sans text-4xl">
          <h2 className="mt-5 text-[#1b2356]">What are cookies?</h2>
          <p className="text-xl mt-5 text-[#1a2256]">
            A cookie is a small file placed on your computer by a particular
            website. Cookies serve many purposes, but are mainly used to track
            user preferences for a more tailored experience.
          </p>
          <h2 className="mt-5 text-[#1b2356]">Why we use them</h2>
          <p className="text-xl mt-5 text-[#1a2256]">
            First-party cookies are set by 1Password. They help calculate things
            like page views and visitors to the website. Third-party cookies are
            set by 1Password affiliates for commission and advertising purposes.
            We don't use cookies of any kind on my.1password.com (the web
            application).
          </p>
          <h2 className="mt-5 text-[#1b2356]">
            Cookies we use on our website
          </h2>
          <h5 className="mt-3 font-medium text-xl text-[#1b2356]">_ab</h5>
          <p className="text-xl mt-3 text-[#1a2256]">
            Determines whether a visitor receives the live version of the
            website or a test version.
          </p>
          <h5 className="mt-3 font-medium text-xl text-[#1b2356]">_cc</h5>
          <p className="text-xl mt-3 text-[#1a2256]">
            Records whether the cookie banner was displayed to a visitor, and
            what level of consent was granted.
          </p>
          <h5 className="mt-3 font-medium text-xl text-[#1b2356]">_fs</h5>
          <p className="text-xl mt-3 text-[#1a2256]">
            Generates a unique, anonymous ID that records the URL of the pages
            visited (in chronological order), value of the A/B test cookie, URL
            of the page that referred the visitor (if any), Google Analytics
            session IDs, visitor's operating system, and web browser; affiliate
            information and whether the visitor started and completed the
            account sign-up process.
          </p>
          <h5 className="mt-3 font-medium text-xl text-[#1b2356]">_f</h5>
          <p className="text-xl mt-3 text-[#1a2256]">
            Records the URL of the first page visited, which is used to evaluate
            the effectiveness of marketing campaigns.
          </p>
          <h5 className="mt-3 font-medium text-xl text-[#1b2356]">user</h5>
          <p className="text-xl mt-3 text-[#1a2256]">
            Captured to local storage, this prioritizes cost and signup links
            for the account type most appropriate for a visitor.
          </p>

          <h2 className="mt-5 text-[#1b2356]">Tracking Pixels</h2>
          <p className="text-xl mt-5 text-[#1a2256]">
            dl, utm_source, utm_medium, utm_campaign, utm_term, utm_content, dr
            Identify webpage and source information. They tell us the address of
            the page you viewed, if you were referred by a search engine or
            another source, search keywords, ad keywords, A/B test information,
            and the URL of the source that brought you to our website.
          </p>

          <h2 className="mt-5 text-[#1b2356]">Device information</h2>
          <p className="text-xl mt-5 text-[#1a2256]">
            ul, de, dt, sd, sr, vp, je Identify a user's device information.
            They tell us the default language, the character set used to encode
            the page, the title of the page, the screen color depth and
            resolution, the viewable area of the browser/device, and whether
            Java was enabled for the visit.
          </p>

          <h2 className="mt-5 text-[#1b2356]">
            Trade Desk Universal and Static Pixels
          </h2>
          <p className="text-xl mt-5 text-[#1a2256]">
            This allows us to learn if a visitor to our website has also clicked
            on an advertisement before arriving at 1password.com. This
            information is used to serve more relevant adverts to that visitor
            once they have left the 1Password website on our partner sites
            across the web. The data used is not personally identifiable, but
            based on visitor session data, stored in a cookie in your browser.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default CookiePolicy;
