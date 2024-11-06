import { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import RightImg from "../assets/12.png";
import LeftImg from "../assets/221.png";

import SideSvg from "../assets/Group (1).svg";
import Profile from "../assets/Image.svg";

import RightArrow from "../assets/Vector (1).svg";
import LeftArrow from "../assets/Vector.svg";
import VideoImg from "../assets/Video.png";
import Colon from "../assets/“.png";

export default function CustomersSay() {
  const swiperRef = useRef(null);
  return (
    <div className="flex items-center justify-center w-full relative">
      <img
        src={LeftImg}
        className="absolute left-0 top-[159px] -z-50 lg:block hidden"
        alt=""
      />
      <img
        src={RightImg}
        className="absolute right-0 top-[353px] -z-50 lg:block hidden"
        alt=""
      />

      <div className="lg:w-[1320px] lg:h-[726px] lg:my-[120px] my-[30px]  flex flex-col lg:items-start lg:justify-normal items-center justify-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex flex-col  gap-4">
            <div className="flex items-center lg:gap-[10px] gap-[8px]">
              <span className="bg-[#BD1F17] w-[10px] h-[10px]"></span>
              <h3
                className="lg:text-xl text-base font-bold text-[#BD1F17]"
                style={{ fontFamily: "Roboto" }}
              >
                Crispy, Every Bite Taste
              </h3>
            </div>
            <h1
              className="lg:text-[62px] text-[40px] font-bold lg:leading-[62px] leading-[48px]"
              style={{ fontFamily: "Bebas Neue" }}
            >
              What Some of my Customers Say
            </h1>
          </div>
          <div className="flex gap-8 lg:relative absolute bottom-8 lg:bottom-0 lg:left-0 left-1/3 md:relative md:left-0 md:bottom-0">
            <button
              className="w-[60px] h-[60px] flex items-center justify-center bg-[#FFF] rounded-full shadow-lg"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <img src={LeftArrow} alt="Left Arrow" />
            </button>
            <button
              className="w-[60px] h-[60px] flex items-center justify-center bg-[#FFF] rounded-full shadow-lg "
              onClick={() => swiperRef.current?.slideNext()}
            >
              <img src={RightArrow} alt="Right Arrow" />
            </button>
          </div>
        </div>
        <div className="flex lg:items-center lg:justify-center items-center justify-center lg:mt-[60px]  w-[330px] lg:w-[1320px] overflow-x-hidden">
          <Swiper
            slidesPerView={1}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide className="  ">
              <div className="flex items-center justify-center">
                <div className="lg:w-[556px] lg:h-[555px] bg-[#FEBF00] flex items-center justify-center relative">
                  <div className="lg:w-[386px] lg:h-[412px]  relative">
                    <img
                      src={Colon}
                      className="w-[28px] h-[29px] object-contain"
                      alt="Colon"
                    />
                    <div className="flex flex-col gap-[100px]">
                      <p className="pl-[26.26px] w-[350px] leading-[34px]">
                        If you're looking for a great meal, the Chicken Shawarma
                        is a must-try! I had it last week and it was fantastic.
                        The chicken was flavorful, tender, and packed with
                        spices. Definitely one of the best shawarmas I've had.
                      </p>
                      <div className="flex items-center gap-[190px]  w-[360px]">
                        <div className="flex flex-col items-start gap-[3px] pl-[26.26px] ">
                          <h1
                            className="font-bold text-lg leading-[20px]"
                            style={{ fontFamily: "Bebas Neue" }}
                          >
                            Fardin Rahman
                          </h1>
                          <h4
                            className="text-sm font-normal leading-[13px]"
                            style={{ fontFamily: "Roboto" }}
                          >
                            Florida amirica
                          </h4>
                        </div>
                        <img
                          src={Profile}
                          alt="Profile"
                          className="object-cover w-10 h-10 rounded-full"
                        />
                      </div>
                    </div>
                    <div className="ml-[24px] lg:w-[325px] h-[1px] bg-black mt-[18px] flex items-end justify-end ">
                      <span className="border-4 border-[#BD1F17] w-10"></span>
                    </div>
                  </div>
                  <img
                    src={SideSvg}
                    alt=""
                    className="absolute left-0 bottom-[41px]"
                  />
                </div>
                <div className="lg:w-[763px] lg:h-[555px] min-w-[330px] h-[240px]">
                  <img
                    src={VideoImg}
                    alt="Video"
                    className="lg:w-full lg:h-full object-cover"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
