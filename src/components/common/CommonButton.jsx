import React from "react";

const CommonButton = ({ btnText, btnClass }) => {
  return (
    <div className="relative inline-block group">
      <button
        className={`
          relative z-10
          bg-[#FFD600]
          border-2 border-black
          text-sm font-semibold ff-noto
          py-[12px] px-[16px]
          uppercase
          overflow-hidden
          transition-all duration-500 ease-in-out
          group-hover:scale-105
          group-hover:-translate-y-[2px]
          ${btnClass}
        `}
      >
        <span className="relative z-20 group-hover:text-black transition-all duration-300 ease-in-out">
          {btnText}
        </span>
        <span className="absolute top-0 left-[-100%] w-full h-full bg-white opacity-20 transform skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700 ease-in-out" />
      </button>
      <span className="absolute -inset-[2px] rounded-md bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out" />
    </div>
  );
};

export default CommonButton;
