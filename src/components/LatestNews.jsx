import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeading from "./common/CommonHeading";
import LeftArrow from "../assets/images/svg/left-arrow.svg";
import RightArrow from "../assets/images/svg/right-arrow.svg";


import { SliderData } from "../utils/helper";

const LatestNews = () => {
  return (
    <>
      <div>
        <div className="max-w-[1140px] mx-auto px-4 py-[89px]">
          <div className="flex justify-between items-center">
            <CommonHeading HeadText="Latest Tweets" HeadClass="uppercase" />
            <div className="flex items-center gap-[55px]">
              <img src={LeftArrow} alt="left-arrow" />
              <img src={RightArrow} alt="right-arrow" />
            </div>
          </div>
        </div>
        <div>
          <Swiper
            spaceBetween={24}
            slidesPerView={3}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              668: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {SliderData.map((item, index) => (
              <SwiperSlide>
                <div className="flex flex-col py-[48px] pl-[26px] pr-[70px] border-l-2">
                  <p className="m-0 font-semibold text-[36px] leading-[111%] ff-noto">{item.name}</p>
                  <div className="flex gap-[11px] items-center">
                    <a href="https://x.com/" target="blank">{<item.icon />}</a>
                    <p className="ff-noto text-sm leading-[100%]">{item.date}</p>
                  </div>
                  <p className="ff-noto text-sm leading-[100%] max-w-[327px] m-0">{item.description}</p>
                  <a href="#" className="ff-noto text-sm leading-[100%] hover:text-sky-800">{item.link}</a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
