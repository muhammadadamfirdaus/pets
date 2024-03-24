import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div id="hero" className="rounded-bl-[40px] rounded-br-[40px]">
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="object object-0"></div>
      <div className="text px-4 md:px-24 lg:w-[25rem] lg:ml-32 2xl:w-[32rem] lg:px-0">
        <h1 className="text-[46px] leading-[60px] font-bold md:text-5xl md:font-extrabold 2xl:text-6xl 2xl:leading-[68px] 2xl:font-extrabold mb-1">One More Friend</h1>
        <h2 className="text-[28px] leading-[38px] font-bold md:text-4xl md:font-bold 2xl:text-5xl 2xl:leading-[60px] 2xl:font-bold">Thousands more fun!</h2>
        <p className="mt-6">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
        <div className="flex my-4">
          <Button type={"play"} first className="mr-2 w-40">
            View More
          </Button>
          <Button second className=" w-40">
            View More
          </Button>
        </div>
      </div>
      {/* <Image src="/images/hero/1.jpg" alt="Hero 1" width={1440} height={695} priority /> */}
    </div>
  );
}
