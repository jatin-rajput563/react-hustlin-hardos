import React from "react";
import Marquee from "react-fast-marquee";

const NavSlider = () => {
  return (
    <>
      <div className="w-full py-[13px] bg-black">
        <Marquee pauseOnHover>
          <div className="flex gap-[62px]">
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">S&P</p>
              <p className="border border-[#FF1300] rounded-[4px] text-[#FF1300] m-0">
                -1.01%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">Shanghai</p>
              <p className="border border-[#FFD600] rounded-[4px] text-[#FFD600] m-0">
                +0.87%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">FTSE 100</p>
              <p className="border border-[#FFD600] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">ASD 100</p>
              <p className="border border-[#FFD600] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">brent crude oil</p>
              <p className="border border-[#FF1300] rounded-[4px] text-[#FF1300] m-0">
                -0.24%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">DSC</p>
              <p className="border border-[#FF1300] rounded-[4px] text-[#FF1300] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">AXD 100</p>
              <p className="border border-[#FFD600] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">euro/dollar</p>
              <p className="border border-[#FFD600] rounded-[4px] text-[#FFD600] m-0">
                +0.03%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">S&P</p>
              <p className="border border-[#FF1300] rounded-[4px] text-[#FF1300] m-0">
                -1.01%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-sm ff-noto">ASD 100</p>
              <p className="border border-[#FFD600] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default NavSlider;
