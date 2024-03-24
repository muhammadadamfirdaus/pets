import React from "react";
import { HiChevronRight, HiOutlinePlayCircle } from "react-icons/hi2";

export default function Button({ type, first, second, children, className }) {
  return (
    <div
      className={`${first && "text-[#003459] border border-solid border-[#003459]"}
    ${second && "bg-[#003459] text-white"}
    px-7 py-3 rounded-3xl text-sm flex items-center justify-center max-h-[44px] ${className}`}
    >
      {children}
      {type === "play" && (
        <span className="basis-auto">
          <HiOutlinePlayCircle size={14} className="ml-2" />
        </span>
      )}
      {type === "more" && (
        <span className="basis-auto">
          <HiChevronRight size={14} className="ml-2" />
        </span>
      )}
    </div>
  );
}
