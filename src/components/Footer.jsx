import Call from "../assets/call-alt.svg";
import Clock from "../assets/clock.svg";
import Fb from "../assets/facebook-circle.svg";
import Bg from "../assets/footer-bg.jpeg";
import Insta from "../assets/instagram-round.svg";
import Linkedin from "../assets/linkedin-round.svg";
import Mail from "../assets/mail.svg";
import Map from "../assets/map-pin.svg";
import X from "../assets/twitter-round-new-alt.svg";
export default function Footer() {
  return (
    <div className="flex items-center justify-center relative lg:h-[720px] h-[999px]">
      <div className="lg:w-full md:w-full sm:w-full w-full  h-full z-30 bg-[#000000CC] lg:h-[720px] absolute"></div>
      <img
        src={Bg}
        alt=""
        className="absolute z-10 lg:w-full h-full min-w-[390px]"
      />
      <div className="lg:w-[1320px] lg:h-[480px] z-50 flex flex-col lg:flex-col items-center">
        <h1
          className="lg:text-[62px] text-[40px] leading-[48px] lg:leading-[64px] font-bold text-[#FFFFFF] flex-wrap text-center"
          style={{ fontFamily: "Bebas Neue" }}
        >
          We ready to have you the best dining experiences
        </h1>
        <div className="flex items-center lg:flex-row md:flex-wrap sm:flex-wrap flex-col lg:gap-6 gap-6 lg:mt-12 mt-12">
          <div className="lg:w-[312px] lg:h-[144px] flex flex-col items-center">
            <img src={Clock} alt="Clock" className="w-[30px] h-[30px]" />
            <h1
              className="text-white mt-6 mb-3 text-2xl font-bold leading-[28px] "
              style={{ fontFamily: "Bebas Neue" }}
            >
              Opening hours
            </h1>
            <p
              className="text-white text-base font-normal leading-[25px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              Monday - Sunday <br /> 9:00 AM to 11:30 PM
            </p>
          </div>
          <div className="lg:w-[312px] lg:h-[144px] flex flex-col items-center">
            <img src={Call} alt="Clock" className="w-[30px] h-[30px]" />
            <h1
              className="text-white mt-6 mb-3 text-2xl font-bold leading-[28px] "
              style={{ fontFamily: "Bebas Neue" }}
            >
              LET'S TALK
            </h1>
            <p
              className="text-white text-base font-normal leading-[25px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545
            </p>
          </div>
          <div className="lg:w-[312px] lg:h-[144px] flex flex-col items-center">
            <img src={Mail} alt="Clock" className="w-[30px] h-[30px]" />
            <h1
              className="text-white mt-6 mb-3 text-2xl font-bold leading-[28px]"
              style={{ fontFamily: "Bebas Neue" }}
            >
              BOOK A TABLE
            </h1>
            <p
              className="text-white text-base font-normal leading-[25px] text-center"
              style={{ fontFamily: "Roboto" }}
            >
              Email: demo@website.com
              <br /> Support: support@website.com
            </p>
          </div>
          <div className="lg:w-[312px] lg:h-[144px] flex flex-col items-center">
            <img src={Map} alt="Clock" className="w-[30px] h-[30px]" />
            <h1
              className="text-white mt-6 mb-3 text-2xl font-bold leading-[28px] "
              style={{ fontFamily: "Bebas Neue" }}
            >
              Our Address
            </h1>
            <p
              className="text-white text-base font-normal leading-[25px] flex items-center  justify-center text-center"
              style={{ fontFamily: "Roboto" }}
            >
              123 Stree New York City , United <br /> States Of America.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[25px] items-center lg:mt-[120px] mt-10">
          <div className="flex items-center  lg:gap-6 gap-4">
            <div className="border border-white rounded-full w-[53px] h-[53px] flex items-center justify-center">
              <img src={Fb} alt="Facebook" className="w-6 h-6 " />
            </div>
            <div className="border border-white rounded-full w-[53px] h-[53px] flex items-center justify-center">
              <img src={X} alt="Facebook" className="w-6 h-6 " />
            </div>
            <div className="border border-white rounded-full w-[53px] h-[53px] flex items-center justify-center">
              <img src={Insta} alt="Facebook" className="w-6 h-6 " />
            </div>
            <div className="border border-white rounded-full w-[53px] h-[53px] flex items-center justify-center">
              <img src={Linkedin} alt="Facebook" className="w-6 h-6 " />
            </div>
          </div>
          <p
            className="font-medium lg:text-[21px] text-base text-white"
            style={{ fontFamily: "Montserrat" }}
          >
            © 2023 <span className="text-[#FEBF00]">Niomax</span> All Rights
            Reserved{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
