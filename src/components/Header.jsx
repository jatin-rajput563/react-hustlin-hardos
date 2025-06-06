import React from "react";
import { Discord, Instagram, Medium, OpenSea, Twitter } from "../utils/icons";
import CommonButton from "./common/CommonButton";
import SubHeading from "./common/SubHeading";

const Header = () => {
  return (
    <>
      <div className="">
        <div className="max-w-[1140px] mx-auto pt-[15px] pb-[22px]">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-2xl text-center mx-auto ff-moderfb tracking-[0] mr-[120px]"
            >
              Hustlin' Hardos
            </a>
            <div className="flex items-center gap-5">
              <a
                href="https://discord.com"
                target="_blank"
                className="transition-transform duration-300 hover:scale-125"
              >
                <Discord />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="transition-transform duration-300 hover:scale-125"
              >
                <Twitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="transition-transform duration-300 hover:scale-125"
              >
                <Instagram />
              </a>
              <a
                href="https://medium.com"
                target="_blank"
                className="transition-transform duration-300 hover:scale-125"
              >
                <Medium />
              </a>
              <a
                href="https://opensea.io"
                target="_blank"
                className="transition-transform duration-300 hover:scale-125"
              >
                <OpenSea />
              </a>
            </div>

            <CommonButton btnText="Connect Wallet" btnClass="ml-[20px]" />
          </div>
        </div>
        <nav className="border-t-[2px] border-b-[2px]">
          <div className=" items-center flex justify-center">
            <a
              href="#about"
              className="py-2 px-4 inline-block border-l-2 hover:bg-black hover:text-white transition-all ease-in-out"
            >
              <SubHeading SubText="About us" />
            </a>
            <a
              href="#services"
              className="py-2 px-4 inline-block border-l-2 hover:bg-black hover:text-white transition-all ease-in-out"
            >
              <SubHeading SubText="Minting" />
            </a>
            <a
              href="#roadmap"
              className="py-2 px-4 inline-block border-l-2 hover:bg-black hover:text-white transition-all ease-in-out"
            >
              <SubHeading SubText="Roadmap" />
            </a>
            <a
              href="#team"
              className="py-2 px-4 inline-block border-l-2 hover:bg-black hover:text-white transition-all ease-in-out"
            >
              <SubHeading SubText="Team" />
            </a>
            <a
              href="#faqs"
              className="py-2 px-4 inline-block border-l-2 border-r-2 hover:bg-black hover:text-white transition-all ease-in-out"
            >
              <SubHeading SubText="FAQs" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
