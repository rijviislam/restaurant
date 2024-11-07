import { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import RightArrow from "../assets/Vector (1).svg";
import LeftArrow from "../assets/Vector.svg";
import Img2 from "../assets/classic-burger.png";
import Img3 from "../assets/french-fries 1.png";
import Img4 from "../assets/fried-shrimp.png";
import Img from "../assets/pizza 1.png";
import SideImg from "../assets/top-view-bell-pepper.png";
export default function PopularFoods() {
  const swiperRef = useRef(null);
  return (
    <div className="flex items-center justify-center bg-[#FCF7F2] relative">
      <div className="lg:max-w-[1320px] min-w-[330px] lg:h-[470px] my-[120px] bg-[#FCF7F2] flex flex-col lg:gap-[60px] gap-[30px] lg:mx-0 mx-[30px] ">
        <div className="flex justify-between items-center">
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
              POPULAR FOOD ITEMS
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
        <div className="flex items-center justify-center ">
          <Swiper
            spaceBetween={32}
            slidesPerView={4}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 32 },
            }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            <SwiperSlide className="w-[306px] h-[300px]  p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img2}
                  className="w-[132px] h-[132px] object-contain"
                  alt="vegetables burger"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  vegetables burger
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[306px] h-[300px]  p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img}
                  className="w-[132px] h-[132px] object-contain"
                  alt="Spacial Pizza"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Spacial Pizza{" "}
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[306px] h-[300px] p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img3}
                  className="w-[132px] h-[132px] object-contain"
                  alt="Spacial Pizza"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Spacial Pizza{" "}
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Spacial French fries
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[306px] h-[300px]  p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img4}
                  className="w-[132px] h-[132px] object-contain"
                  alt="Cuisine Chicken"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Cuisine Chicken
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[306px] h-[300px]  p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img2}
                  className="w-[132px] h-[132px] object-contain"
                  alt=" vegetables burger"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  vegetables burger
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[306px] h-[300px]  p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img}
                  className="w-[132px] h-[132px] object-contain"
                  alt="Spacial Pizza"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Spacial Pizza{" "}
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[306px] h-[300px]  p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img3}
                  className="w-[132px] h-[132px] object-contain"
                  alt="Spacial Pizza"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Spacial Pizza{" "}
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Spacial French fries
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[306px] h-[300px]  p-8 bg-[#FFF]">
              <div className="flex flex-col items-center justify-center">
                <img
                  src={Img4}
                  className="w-[132px] h-[132px] object-contain"
                  alt="Cuisine Chicken"
                />
                <span className="bg-[#BD1F17] w-[57px] h-1 my-6"></span>
                <h1
                  className="text-2xl font-bold text-[#0A1425]"
                  style={{ fontFamily: "Bebas Neue" }}
                >
                  Cuisine Chicken
                </h1>
                <p
                  className="text-base font-normal text-[#0A1425]"
                  style={{ fontFamily: "Inter" }}
                >
                  Barbecue Italian cuisine pizza
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="absolute top-[227px] left-0 lg:block hidden">
        <img src={SideImg} alt="" />
      </div>
    </div>
  );
}
