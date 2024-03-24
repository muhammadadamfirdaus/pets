import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-[57px] lg:h-[100px]">
      <div className="flex items-center h-full lg:px-32">
        <div className="px-4 lg:order-1">
          <Menu />
        </div>

        <div className="flex justify-center w-full lg:w-auto">
          <Image src="/images/logo/logo.png" alt="Logo" width={115} height={40} priority />
        </div>

        <div className="px-4 lg:order-2">
          <div className="lg:flex lg:py-3 lg:pl-4 lg:pr-8 lg:bg-white lg:rounded-3xl">
            <HiMagnifyingGlass className={`mr-2`} size={20} />
            <input type="text" name="search" id="search" placeholder="Search something here!" className="border-0 outline-none hidden lg:block text-sm" />
          </div>
        </div>

        <div className="lg:order-3 hidden md:block">
          <button className=" bg-blue-950 xl:px-4 2xl:px-7 py-3 rounded-3xl lg:text-xs 2xl:text-sm">
            <span className="text-white">Join the community</span>
          </button>
        </div>
      </div>
    </div>
  );
}
