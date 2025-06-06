import React from "react";
// import BlueOutfitCartoon from "../assets/images/webp/blue-outfit-cartoon-img.webp"; // Update path if needed

const BreakingNews = () => {
  return (
    <section className="border-y-2">
      <div className="max-xl:px-4 border-b-2">
        <div className="max-w-[1140px] mx-auto xl:text-custom-6xl md:text-5xl sm:text-4xl text-3xl leading-[140%] lg:py-16 md:py-12 py-8">
          “BREAKING NEWS: Hustlin Hardos set to launch the most anticipated NFT
          project of 2022"
        </div>
      </div>
      <div className="max-w-[1140px] mx-auto max-xl:px-4">
        <div className="flex flex-wrap justify-center border-l-2 border-r-2">
          <div className="w-full lg:w-1/2">
            <div className="py-[86px] pl-[43px] h-full lg:pr-[52px] border-r-2 max-lg:border-r-0 max-lg:py-[45px] max-lg:px-[25px] max-sm:p-5">
              <p className="font-normal text-base leading-[100%] pb-[16px]">
                March 1, 2022 by Editor Hardo
              </p>
              <p className="font-normal text-sm md:text-lg leading-[150%] max-w-[475px] pb-[16px] max-lg:max-w-[unset]">
                Hustlin' Hardos is a collection of 9,999 NFT characters on the
                Ethereum Blockchain, inspired by the business/finance world,
                hustler culture and web3 aesthetics. Each Hustlin' Hardo is a
                completely original and unique combination of hundreds of
                potential attributes such as luxury watches, clothing, or
                accessories - all with provable degrees of rarity. The
                collection features truly unique and powerful artwork, while
                offering its holders first-of-its-kind utility. Your Huslin’
                Hardo NFT is your gateway to The Boardroom, one of the most
                rewarding and engaging online communities
              </p>
              <a
                href="#"
                className="font-normal text-base leading-[100%] underline cursor-pointer hover:text-sky-blue transition-all"
              >
                Read More...
              </a>
            </div>
          </div>

          {/* Right Column with Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            {/* <img
              src={BlueOutfitCartoon}
              alt="blue-outfit-cartoon-img"
              className="w-full max-h-[572px] lg:min-h-[572px] max-lg:border-t-2 object-cover"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakingNews;
