import BannerImg from "../assets/image 1.png";
import Bg from "../assets/Rectangle 4.png";
import OfferImg from "../assets/today-offer.png";
import Svg from "../assets/Vector copy.svg";

export default function Banner() {
  return (
    <div
      className=" min-h-screen bg-[#BD1F17] relative flex items-center justify-center lg:pt-[130px] lg:pb-[160px] py-8 md:py-8 sm:py-8 z-10 px-[30px] lg:px-[30px] xl:px-0 2xl:px-0 "
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="w-[1320px] min-w-[330px] h-[649px] flex lg:items-center md:items-center items-start 2xl:flex-row lg:flex-row xl:flex-row md:flex-row sm:flex-col flex-col relative  gap-12 lg:gap-0">
        <div className="lg:absolute z-50">
          <h1
            style={{ fontFamily: "Bebas Neue" }}
            className="text-white text-[48px] lg:text-[120px] md:text-[80px] font-bold lg:leading-[130px] md:leading-[80px] min-w-[330px] leading-[56px] lg:w-[830px] bg-none sm:bg-none md:bg-gradient-to-r  lg:bg-gradient-to-r from-[rgba(189,31,23,0)] via-[rgba(189,31,23,0.7)] to-[rgba(189,31,23,0.7)] "
          >
            Taste the authentic Saudi cuisine
          </h1>
          <p
            className="font-normal text-[20px] lg:text-2xl text-white lg:pt-4 lg:pb-[38px] pb-8 pt-4 lg:w-[559px] min-w-[330px]"
            style={{ fontFamily: "Roboto" }}
          >
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.{" "}
          </p>
          <button
            className="lg:py-[16px] py-[13px] px-5 md:py-[5px] sm:py-[2px] sm:px-[6px] md:px-[12px] lg:px-[24px] bg-[#FEBF00] text-[#0A1425] uppercase lg:text-lg text-[15px] lg:font-bold font-bold lg:block md:block sm:block"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Explore Menu
          </button>
        </div>
        <div className="lg:absolute md:absolute lg:right-0 lg:top-0 md:right-0 md:top-0 ">
          <img
            src={Svg}
            alt="svg"
            className="lg:absolute md:absolute sm:absolute sm:top-[215px] absolute md:top-[215px] top-[323px] right-0 lg:-top-9 sm:right-8 md:right-8 lg:-right-8 lg:z-50 md:-z-50 -z-50 "
          />
          <img
            src={BannerImg}
            className=" lg:z-0 z-30 lg:top-0 lg:w-[699px] md:w-[600px] sm:w-[600px]  lg:h-[649px] h-[310px] min-w-[330px] sm:h-[310px]"
            alt="Banner Image"
          />
        </div>
        <div
          className="bg-[#FEBF00] lg:w-[120px] lg:h-[120px] w-[72px] h-[72px] rounded-full absolute lg:-right-14 lg:bottom-1 right-[17px] bottom-[17px] flex items-center justify-center"
          style={{ fontFamily: "Bebas Neue" }}
        >
          <img
            src={OfferImg}
            alt="Today Offer"
            className="lg:w-[105px] lg:h-[105px] w-[63px] h-[63px]"
          />
        </div>
      </div>
    </div>
  );
}
