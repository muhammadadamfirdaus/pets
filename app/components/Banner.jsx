import React from "react";
import Button from "./Button";

export default function Banner() {
  return (
    <div className="px-4 md:px-8 lg:px-32">
      <div className="banner bg-[#003459] h-[640px] relative rounded-[20px] overflow-hidden flex justify-end lg:h-[378px]">
        <div className="rectangle"></div>
        <div className="rectangle"></div>
        <div className="object object-1 position-left"></div>
        <div className="text flex flex-col px-4 mt-10 md:px-24 lg:mt-0 lg:w-[18rem] lg:mr-20 2xl:w-[27rem] lg:px-0 items-center justify-start lg:items-end lg:justify-center">
          <h1 className="text-4xl leading-[54px] font-bold md:text-3xl md:font-extrabold 2xl:text-[52px] 2xl:leading-[68px] 2xl:font-extrabold mb-[2px] text-[#003459]">One More Friend</h1>
          <h2 className="text-2xl leading-[36px] font-bold md:text-2xl md:font-bold 2xl:text-4xl 2xl:leading-[54px] 2xl:font-bold text-[#003459]">Thousands more fun!</h2>
          <p className="mt-6 font-medium text-xs text-center md:text-right">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
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
