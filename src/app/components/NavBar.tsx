"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = () => {
  const [lightMode, setDarkMode] = useState(true);
  return (
    <div className="flex justify-between border-b-2 border-gray-200 py-4">
      <Link href={"/"}>Countries in the World</Link>
      <button
        onClick={() => {
          document.documentElement.classList.toggle("dark");
          setDarkMode(!lightMode);
        }}
      >
        <DarkModeBtn />
      </button>
    </div>
  );
};

const DarkModeBtn = () => {
  const [isClient, setIsClient] = useState<undefined | boolean>(undefined);
  useEffect(() => {
    const isToggled = document.documentElement.classList.contains("dark");
    setIsClient(isToggled);
  });

  if (isClient === undefined) {
    return null;
  }
  if (!isClient) {
    return <MdDarkMode />;
  }
  return <MdOutlineLightMode className="fill-white" />;
};

export default NavBar;
