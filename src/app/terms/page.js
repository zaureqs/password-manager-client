"use client"
import React from "react";

import Footer from "@/components/Footer";

function Terms() {
  const gradientStyle = {
    background:
      "radial-gradient(circle, rgba(27,31,73,1) 0%, rgba(27,31,73,1) 31%, rgba(20,16,68,1) 68%, rgba(7,20,43,1) 100%)",
  };
  return (
    <main>
      <div className="flex flex-col w-full justify-center items-center pt-24 "
      style={gradientStyle}
      >
        <div className="p-5 w-8/12">
          <h1 className="text-5xl font-sans mt-5 underline">Terms of Service</h1>
          <p className="text-xl mt-5 text-indigo-100">
            Thank you for using CipherSafe! We're happy you're here. Please read
            this Terms of Service agreement carefully before accessing or using
            CipherSafe. Because it is such an important contract between us and
            our users, we have tried to make it as clear as possible. For your
            convenience, we have presented these terms in a short non-binding
            summary followed by the full legal terms.
          </p>
          <p className="text-xl mt-5 text-indigo-100">
            Your access to and use of the Service is based on your acceptance of
            and compliance with these Terms. These Terms apply to all visitors,
            users, free trial users, and others who access or use the Service.
            By accessing or using the Service you agree to be bound by these
            Terms and accept all legal consequences. If you do not agree to the
            terms and conditions of this Agreement, in whole or in part, please
            do not use the Service.
          </p>
          <h2 className="text-5xl font-sans mt-5 underline">Description of Service</h2>
          <p className="text-xl mt-5 text-indigo-100">
            The “Service” means (a) AgileBits' password managing, secure
            document storing, administrative and related systems and
            technologies and (b) all software (including the Software, as
            defined below), applications, data, text, images, and other content
            made available by or on behalf of AgileBits. Any modifications to
            the Service are also subject to these Terms. AgileBits reserves the
            right to modify or discontinue the Service or any feature or
            functionality thereof at any time without notice. All rights, title
            and interest in and to the Service will remain with and belong
            exclusively to AgileBits.
          </p>
          <h2 className="text-5xl font-sans mt-5 underline">Subscriptions</h2>
          <p className="text-xl mt-5 text-indigo-100">
            Some parts of the Service are billed on a subscription basis
            (“Subscription(s)"). You will be billed in advance on a recurring
            and periodic basis (“Billing Cycle”). Billing cycles are set on a
            regular basis, typically monthly or yearly.
          </p>
          <p className="text-xl mt-5 text-indigo-100">
            At the end of each Billing Cycle, your Subscription will
            automatically renew under the same conditions unless you cancel it
            or AgileBits Inc. cancels it. You may cancel your Subscription
            renewal either through your online account management page or by
            contacting AgileBits Inc. customer support team.
          </p>
          <h2 className="text-5xl font-sans mt-5 underline">Accounts</h2>
          <p className="text-xl mt-5 text-indigo-100">
            When you create an account with us, you must provide us information
            that is accurate, complete, and current at all times. Failure to do
            so constitutes a breach of the Terms.
          </p>
          <p className="text-xl mt-5 text-indigo-100">
            You are responsible for safeguarding the password that you use to
            access the Service and for any activities or actions under your
            password, whether your password is with our Service or a third party
            service.
          </p>
          <p className="text-xl mt-5 text-indigo-100">
            You agree not to disclose your password to any third party. You must
            notify us immediately upon becoming aware of any breach of security
            or unauthorized use of your account.
          </p>
          <p className="text-xl mt-5 text-indigo-100">
            You may not use as a username the name of another person or entity
            or that is not lawfully available for use, a name or trademark that
            is subject to any rights of another person or entity other than you
            without appropriate authorization, or a name that is otherwise
            offensive, vulgar or obscene.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Terms;
