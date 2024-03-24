import React from "react";
import Button from "./Button";
import Image from "next/image";

export default function Banner2() {
  return (
    <div className="px-4 md:px-8 lg:px-32">
      <div className="banner banner-2 bg-[#FFB775] h-[640px] relative rounded-[20px] overflow-hidden flex justify-start lg:h-[378px]">
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="object object-2 position-right"></div>
        <div className="text flex flex-col px-4 mt-10 md:px-24 lg:mt-0 lg:w-[18rem] lg:ml-20 2xl:w-[27rem] lg:px-0 items-center justify-start lg:items-start lg:justify-center">
          <h1 className="text-4xl leading-[54px] font-bold md:text-3xl md:font-extrabold 2xl:text-[52px] 2xl:leading-[68px] 2xl:font-extrabold mb-[2px] text-[#003459] flex items-center">
            Adoption{" "}
            <span className=" ml-2 w-full">
              <Image src={"icons/paw.svg"} width={36} height={32} className="w-full h-auto" alt="Paw" />
            </span>
          </h1>
          <h2 className="text-2xl leading-[36px] font-bold md:text-2xl md:font-bold 2xl:text-4xl 2xl:leading-[54px] 2xl:font-bold text-[#003459]">We need help. so do they.</h2>
          <p className="mt-6 font-medium text-xs text-center md:text-left">Adopt a pet and give it a home, it will be love you back unconditionally.</p>
          <div className="flex my-4">
            <Button type={"play"} first className="mr-2 w-40">
              View More
            </Button>
            <Button second className=" w-40">
              View More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
