import React from "react";
import Marquee from "react-fast-marquee";

const NavSlider = () => {
  return (
    <>
      <div className="py-[13px] bg-black w-full mx-auto flex max-w-[1440px]">
        <Marquee pauseOnHover>
          <div className="flex gap-[62px]">
            <div className=" flex gap-[7.01px]basetems-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase px-[4px] py-[3px] texsmx] leading-[100%]">S&P</p>
              <p className="border border-[#FF1300] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                -1.01%
              </p>
            </div>
            <div className=" flex gap-[7.01px]basetems-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase px-[4px] py-[3px] texsmx] leading-[100%]">Shanghai</p>
              <p className="border border-[#FFD600] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.87%
              </p>
            </div>
            <div className=" flex gap-[7.01px]basetems-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase px-[4px] py-[3px] texsmx] leading-[100%]">FTSE 100</p>
              <p className="border border-[#FFD600] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px]basetems-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase px-[4px] py-[3px] texsmx] leading-[100%]">ASD 100</p>
              <p className="border border-[#FFD600] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase">brent crude oil</p>
              <p className="border border-[#FF1300] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                -0.24%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase">DSC</p>
              <p className="border border-[#FF1300] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase">AXD 100</p>
              <p className="border border-[#FFD600] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.13%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase">euro/dollar</p>
              <p className="border border-[#FFD600] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
                +0.03%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase">S&P</p>
              <p className="border border-[#FF1300] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FF1300] m-0">
                -1.01%
              </p>
            </div>
            <div className=" flex gap-[7.01px] items-center py-[3px] px-[4px]">
              <p className="text-white text-base ff-noto uppercase">ASD 100</p>
              <p className="border border-[#FFD600] uppercase px-[4px] py-[3px] text-sm leading-[100%] rounded-[4px] text-[#FFD600] m-0">
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
