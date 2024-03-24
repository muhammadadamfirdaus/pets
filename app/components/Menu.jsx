"use client";

import { useState } from "react";
import { HiOutlineBars3, HiOutlineDeviceTablet, HiXMark } from "react-icons/hi2";

export default function Menu() {
  const [toggleMenu, setToggleMenu] = useState(false);

  // console.log(toggleMenu);

  return (
    <>
      <div className="flex justify-end lg:hidden">
        <HiOutlineBars3 onClick={() => setToggleMenu(!toggleMenu)} className={`${toggleMenu ? "hidden" : "block"}`} size={24} />
      </div>
      <div className={`bg-slate-900 text-white fixed top-0 left-0 w-full h-full lg:relative lg:h-auto lg:w-1/5 ${toggleMenu ? "block" : "hidden"} lg:block lg:bg-transparent lg:text-black`}>
        <ul className="lg:flex w-full py-4 h-full md:py-0">
          <li className="flex px-4 justify-end md:block">
            <span className="flex items-center py-4 basis-8 md:hidden" onClick={() => setToggleMenu(!toggleMenu)}>
              <HiXMark />
            </span>
          </li>
          <li className="flex px-4">
            <span className="flex items-center py-4 basis-8">{/* <HiOutlineDeviceTablet /> */}</span>
            <span className="flex items-center ml-2">Home</span>
          </li>
          <li className="flex px-4">
            <span className="flex items-center py-4 basis-8">{/* <HiOutlineDeviceTablet /> */}</span>
            <span className="flex items-center ml-2">Category</span>
          </li>
          <li className="flex px-4">
            <span className="flex items-center py-4 basis-8">{/* <HiOutlineDeviceTablet /> */}</span>
            <span className="flex items-center ml-2">About</span>
          </li>
          <li className="flex px-4">
            <span className="flex items-center py-4 basis-8">{/* <HiOutlineDeviceTablet /> */}</span>
            <span className="flex items-center ml-2">Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
}
