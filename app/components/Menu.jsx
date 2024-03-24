"use client";

import { useState } from "react";
import { HiOutlineBars3, HiOutlineDeviceTablet, HiXMark } from "react-icons/hi2";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // console.log(toggleMenu);

  return (
    <>
      <div className="flex justify-end md:hidden">
        <HiOutlineBars3 onClick={() => setToggleMenu(!toggleMenu)} className={`${toggleMenu ? "hidden" : "block"}`} size={24} />
      </div>
      <div className={`bg-slate-900 text-white fixed top-0 left-0 w-full h-full md:relative md:h-auto md:w-1/5 ${toggleMenu ? "block" : "hidden"} md:block md:bg-transparent md:text-black`}>
        <ul className="md:flex w-full py-4 h-full md:py-0 z-50">
          <li className="flex px-4 justify-end md:block">
            <span className="flex items-center py-4 basis-8 md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
              <HiXMark />
            </span>
          </li>
          <li className="flex px-4 mb-4 lg:mb-0">
            <span className="flex items-center ml-2">Home</span>
          </li>
          <li className="flex px-4 mb-4 lg:mb-0">
            <span className="flex items-center ml-2">Category</span>
          </li>
          <li className="flex px-4 mb-4 lg:mb-0">
            <span className="flex items-center ml-2">About</span>
          </li>
          <li className="flex px-4 mb-4 lg:mb-0">
            <span className="flex items-center ml-2">Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
}
