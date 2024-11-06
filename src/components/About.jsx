import { useState } from "react";
import Package3 from "../assets/bag.svg";
import CallImg from "../assets/call-alt.svg";
import Round from "../assets/Ellipse 10.svg";
import Round1 from "../assets/Ellipse 11.svg";
import AboutImg from "../assets/Frame 1707478063.png";
import Package2 from "../assets/medal.svg";
import Package1 from "../assets/package.svg";
import sideImg from "../assets/top-view.png";
export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["About", "Experience", "Contact"];
  return (
    <div className=" flex items-center justify-center relative">
      <div className=" lg:my-[120px] lg:w-[1000px] xl:w-[1320px] lg:h-[624px] flex flex-col gap-[72px] lg:py-0 py-8">
        <div className=" flex lg:flex-row md:flex-row flex-col justify-between  lg:items-start md:items-start items-center lg:h-[460px]  gap-8 lg:gap-0 min-w-[330px]">
          <div className="lg:w-[617px] min-w-[330px] lg:px-0 px-[30px]">
            <div className="lg:w-[617px] min-w-[330px] h-[246px] lg:h-[460px] relative ">
              <div className="absolute left-6 top-[30px] z-50 bg-white flex items-center justify-center lg:w-[241px] w-[128px] h-[73px] lg:h-[136px] gap-[11px] rounded-[20px]">
                <div
                  className="lg:h-[95px] h-[50px] w-[50px] lg:w-[95px] border-4 border-[#1F1F1] rounded-full flex items-center justify-center lg:text-[26px] text-[14px] font-bold"
                  style={{ fontFamily: "Open Sans" }}
                >
                  55+
                  <img
                    src={Round1}
                    className="absolute lg:top-7 top-3 left-3 lg:left-7"
                    alt=""
                  />
                  <img
                    src={Round}
                    className="absolute lg:w-[94px] lg:h-[94px] w-[50px] h-[50px]"
                    alt="Range"
                  />
                </div>
                <p
                  className="lg:text-[16px] text-[8px] font-semibold text-[#181818]"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Market <br /> Experiences
                </p>
              </div>
              <img
                src={AboutImg}
                alt=""
                className="absolute lg:max-w-[617px] min-w-[330px] object-cover"
              />
            </div>
          </div>

          <div className="min-w-[330px] lg:w-[624px] h-[478px] lg:h-[402px]  lg:px-0 px-[30px]">
            <div className="border-b border-[#B52B1D]">
              {tabs.map((tab, idx) => (
                <button
                  key={`tab_${idx}`}
                  onClick={() => setActiveTab(idx)}
                  className={`py-[6px] px-4 text-sm font-medium ${
                    activeTab === idx ? "bg-[#B52B1D] text-white" : "bg-white"
                  }`}
                  style={{ fontFamily: "Inter" }}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex flex-col mx-auto">
              {activeTab === 0 && (
                <div className="lg:pt-8 pt-6">
                  <h1
                    className="text-[#181818] text-[40px] leading-[40px] lg:text-[62px] font-bold lg:leading-[62px]"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    Exceptional culinary experience and delicious food
                  </h1>
                  <p
                    className="lg:pt-[18px] py-3 pb-8 text-base font-normal"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Indulge in a dining experience that brings together
                    exceptional flavors, innovative techniques, and the finest
                    ingredients. Our commitment to culinary excellence and
                    attention to detail ensure that every dish is a work of art.
                    Discover a world where each bite is crafted with passion,
                    bringing you a taste journey that is both satisfying and
                    memorable.
                  </p>
                  <div className="flex gap-8 items-center">
                    <button
                      className="lg:py-[16px] py-[13px] px-5 md:py-[5px] sm:py-[2px] sm:px-[6px] md:px-[12px] lg:px-[24px] bg-[#FEBF00] text-[#0A1425] uppercase lg:text-lg text-[16px] lg:font-bold font-bold lg:block md:block sm:block"
                      style={{ fontFamily: "Roboto" }}
                    >
                      About More
                    </button>
                    <div
                      className="flex gap-2 items-center"
                      style={{ fontFamily: "Roboto" }}
                    >
                      <img src={CallImg} alt="" className="w-6 h-6" />
                      <p className="lg:text-lg text-[14px] font-bold uppercase text-[#0A1425]">
                        +88 3426 739 485
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="pt-8">
                  <h1
                    className="text-[#181818] text-[40px] leading-[40px] lg:text-[62px] font-bold lg:leading-[62px]"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    Years of Expertise in Culinary Services
                  </h1>
                  <p
                    className="lg:pt-[18px] py-3 pb-8 text-base font-normal"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Our team consists of seasoned chefs and culinary artists who
                    bring passion and precision to every dish. With extensive
                    experience across various cuisines, we focus on innovative
                    flavors, sustainable sourcing, and meticulous presentation.
                    Our commitment to excellence has made us a trusted name in
                    the industry.
                  </p>
                  <div className="flex gap-8 items-center">
                    <button
                      className="lg:py-[16px] py-[13px] px-5 md:py-[5px] sm:py-[2px] sm:px-[6px] md:px-[12px] lg:px-[24px] bg-[#FEBF00] text-[#0A1425] uppercase lg:text-lg text-[16px] lg:font-bold font-bold lg:block md:block sm:block"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="pt-8">
                  <h1
                    className="text-[#181818] text-[40px] leading-[40px] lg:text-[62px] font-bold lg:leading-[62px]"
                    style={{ fontFamily: "Bebas Neue" }}
                  >
                    Get in Touch for Your Next Event or Inquiry
                  </h1>
                  <p
                    className="lg:pt-[18px] py-3 pb-8 text-base font-normal"
                    style={{ fontFamily: "Roboto" }}
                  >
                    We're here to make your event memorable with exceptional
                    food and service. Feel free to reach out to discuss your
                    requirements, and we'll help tailor a unique culinary
                    experience for you.
                  </p>
                  <div className="flex gap-8 items-center">
                    <button
                      className="lg:py-[16px] py-[13px] px-5 md:py-[5px] sm:py-[2px] sm:px-[6px] md:px-[12px] lg:px-[24px] bg-[#FEBF00] text-[#0A1425] uppercase lg:text-lg text-[16px] lg:font-bold font-bold lg:block md:block sm:block"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      Contact Us
                    </button>
                    <div
                      className="flex gap-2 items-center"
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      <img src={CallImg} alt="Phone Icon" className="w-6 h-6" />
                      <p className="lg:text-lg text-[14px] font-bold uppercase text-[#0A1425]">
                        +88 3426 739 485
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center lg:flex-row md:flex-wrap flex-col justify-center w-full lg:gap-0 gap-8 ">
          <div className="flex items-center gap-4 lg:w-[440px] min-w-[330px]">
            <div className="fill-white filter  w-[90px] h-[90px] flex items-center justify-center shadow-xl rounded-full">
              <img src={Package1} alt="" />
            </div>
            <div>
              <h1
                className="lg:text-3xl text-2xl font-bold"
                style={{ fontFamily: "Bebas Neue" }}
              >
                fast delivery
              </h1>
              <p
                className="lg:text-xl text-lg font-normal"
                style={{ fontFamily: "Inter" }}
              >
                Within 30 minutes
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:w-[440px] min-w-[330px]">
            <div className="fill-white filter  w-[90px] h-[90px] flex items-center justify-center shadow-xl rounded-full">
              <img src={Package2} alt="" />
            </div>
            <div>
              <h1
                className="lg:text-3xl text-2xl font-bold"
                style={{ fontFamily: "Bebas Neue" }}
              >
                absolute dining
              </h1>
              <p
                className="lg:text-xl text-lg font-normal"
                style={{ fontFamily: "Inter" }}
              >
                Best buffet restaurant
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 lg:w-[440px] min-w-[330px]">
            <div className="fill-white filter  w-[90px] h-[90px] flex items-center justify-center shadow-xl rounded-full">
              <img src={Package3} alt="" />
            </div>
            <div>
              <h1
                className="lg:text-3xl text-2xl font-bold"
                style={{ fontFamily: "Bebas Neue" }}
              >
                pickup delivery
              </h1>
              <p
                className="lg:text-xl text-lg font-normal"
                style={{ fontFamily: "Inter" }}
              >
                Grab your food order
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-[364px] lg:block hidden">
        <img src={sideImg} className="" alt="" />
      </div>
    </div>
  );
}
