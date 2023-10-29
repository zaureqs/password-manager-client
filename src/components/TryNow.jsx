"use client";
import React, { useState } from "react";

const TryNow = ({custom}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [SwitchLogin, setSwitchLogin] = useState(true);
  return (
    <div>
      <a href="/authentication">
      <button
        className= {` flex p-3 bg-blue-600 items-center text-2xl font-semibold rounded-md text-white border-2 border-blue-700 hover:border-green-600 hover:bg-blue-600 ${custom}`}
      >
        Try For Free
      </button>
      </a>
    </div>
  );
};

export default TryNow;
