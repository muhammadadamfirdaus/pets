import React from "react";
import Image from "next/image";
import Menu from "./Menu";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 z-10 w-full h-[57px] lg:h-[100px]">
      <div className="flex items-center h-full md:px-20 2xl:px-32">
        <div className="px-4 md:order-1">
          <Menu />
        </div>

        <div className="flex justify-center w-full md:w-auto">
          <Image src="/images/logo/logo.png" alt="Logo" width={115} height={40} priority />
        </div>

        <div className="px-4 md:order-2 lg:basis-1/3">
          <div className="lg:flex lg:py-3 lg:pl-4 lg:pr-6 lg:bg-white lg:rounded-3xl">
            <HiMagnifyingGlass className={`mr-2`} size={20} />
            <input type="text" name="search" id="search" placeholder="Search something here!" className="border-0 outline-none hidden lg:flex text-sm" />
          </div>
        </div>

        <div className="hidden xl:flex justify-center flex:flex-auto md:order-3">
          <button className=" bg-blue-950 lg:px-4 2xl:px-7 py-3 rounded-3xl lg:text-xs 2xl:text-sm">
            <span className="text-white">Join the community</span>
          </button>
        </div>

        <div className="hidden md:flex justify-end md:order-4 md:flex-auto">
          <div className="flex items-center md:px-1 lg:px-6 xl:px-0">
            <div className="basis-auto">
              <Image src="/icons/flag-vietnam.svg" width={16} height={16} className="w-full h-auto" alt="flag Vietnam" />
            </div>
            <select id="countries" className="bg-transparent text-gray-900 text-sm rounded-lg focus:ring-zinc-400 focus:border-zinc-400 py-4">
              <option defaultValue={`VND`}>VND</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
