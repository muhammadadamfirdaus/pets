import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="rounded-tl-[40px] rounded-tr-[40px]">
      <div className="pt-16 pb-8 px-4 md:px-8 lg:px-32">
        <div className="lg:flex bg-[#003459] p-8 rounded-2xl">
          <h3 className="font-bold text-2xl text-white mb-6 text-center lg:mb-0 lg:text-left lg:basis-2/5">Register now so you don&apos;t miss our programs</h3>
          <div className="flex flex-col bg-white p-3 h-full rounded-lg lg:flex-row lg:ml-5 lg:basis-3/5">
            <input type="email" name="emailSubscription" id="emailSubscriptionID" placeholder="Enter your email" className="border border-slate-500 border-solid outline-none rounded-lg px-4 py-2 basis-full" />
            <button className="bg-[#003459] text-white rounded-lg px-5 mt-2 basis-full pt-[14px] pb-[10px] h-12 lg:mt-0 lg:ml-2 lg:basis-2/5 2xl:px-7">Subscribe Now</button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-10 px-4 md:justify-between md:px-0">
          <nav className="mb-4 lg:mb-0">
            <ul className="flex">
              <li className="mx-4 lg:mr-[60px]">Home</li>
              <li className="mx-4 lg:mr-[60px]">Category</li>
              <li className="mx-4 lg:mr-[60px]">About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <ul className="flex social">
            <li className="icon facebook"></li>
            <li className="icon instagram"></li>
            <li className="icon twitter"></li>
            <li className="icon youtube"></li>
          </ul>
        </div>
        <div className="flex flex-col items-center lg:flex-row mt-16 lg:items-center">
          <div className="flex basis-1/5 justify-center mb-8 lg:mb-0 lg:order-2">
            <Image src="/images/logo/logo.png" width={115} height={40} alt="Logo" priority />
          </div>
          <div className="flex mb-2 lg:basis-2/5 lg:justify-end lg:order-3">
            <span className="font-medium text-sm text-slate-500">Terms of Service</span>
            <span className="font-medium text-sm text-slate-500 ml-2">Privacy Policy</span>
          </div>
          <div className="flex lg:basis-2/5">
            <span className="font-medium text-sm text-slate-500 mr-1">&copy; 2022 Monito.</span>
            <span className="font-medium text-sm text-slate-500">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
