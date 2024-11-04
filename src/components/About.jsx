import Package3 from "../assets/bag.svg";
import Round from "../assets/Ellipse 10.svg";
import Round1 from "../assets/Ellipse 11.svg";
import AboutImg from "../assets/Frame 1707478063.png";
import Package2 from "../assets/medal.svg";
import Package1 from "../assets/package.svg";
export default function About() {
  return (
    <div className=" flex items-center justify-center">
      <div className=" lg:my-[120px] lg:w-[1320px] lg:h-[624px] flex flex-col gap-[72px]">
        <div className=" flex justify-between items-start border-2 border-green-700 h-[460px]">
          <div className="w-[617px] relative ">
            <div className="absolute left-6 top-[30px] z-50 bg-white flex items-center justify-center w-[241px] h-[136px] gap-[11px] rounded-[20px]">
              <div
                className="h-[95px] w-[95px] border-4 border-[#1F1F1] rounded-full flex items-center justify-center text-[26px] font-bold"
                style={{ fontFamily: "Open Sans" }}
              >
                55+
                <img src={Round1} className="absolute top-7 left-7" alt="" />
                <img src={Round} className="absolute" alt="" />
              </div>
              <p
                className="text-[16px] font-semibold text-[#181818]"
                style={{ fontFamily: "Open Sans" }}
              >
                Market <br /> Experiences
              </p>
            </div>
            <img src={AboutImg} alt="" className="absolute" />
          </div>
          <div className="border-2 border-red-600 w-[624px] h-[402px]"></div>
        </div>
        <div className="flex items-center lg:flex-row flex-col justify-center w-full border border-black lg:gap-0 gap-8 ">
          <div className="flex items-center gap-4 lg:w-[440px] min-w-[330px]">
            <div className="fill-white filter  w-[90px] h-[90px] flex items-center justify-center shadow-xl rounded-full">
              <img src={Package1} alt="" />
            </div>
            <div>
              <h1
                className="text-3xl font-bold"
                style={{ fontFamily: "Bebas Neue" }}
              >
                fast delivery
              </h1>
              <p
                className="text-xl font-normal"
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
                className="text-3xl font-bold"
                style={{ fontFamily: "Bebas Neue" }}
              >
                absolute dining
              </h1>
              <p
                className="text-xl font-normal"
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
                className="text-3xl font-bold"
                style={{ fontFamily: "Bebas Neue" }}
              >
                pickup delivery
              </h1>
              <p
                className="text-xl font-normal"
                style={{ fontFamily: "Inter" }}
              >
                Grab your food order
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
