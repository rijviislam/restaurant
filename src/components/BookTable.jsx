import { useState } from "react";
import { useForm } from "react-hook-form";
import Bg from "../assets/FormBg.jpeg";
import CalendarIcon from "../assets/calender-date.svg";
import PeopleIcon from "../assets/sort.svg";

export default function BookTable() {
  const [date, setDate] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    setValue(numericValue);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative flex items-center justify-center h-[788px] bg-[#000000CC]">
      <img
        src={Bg}
        className=" h-full w-full bg-[#000000CC] object-cover"
        alt="Background"
      />
      <div className="lg:w-[1320px] min-w-[330px] l lg:h-[548px] absolute z-50 ">
        <div className="flex flex-col lg:px-0 px-[30px] md:px-[30px] overflow-hidden">
          <div className="flex gap-[10px] items-center">
            <span className="w-[10px] h-[10px] bg-[#BD1F17]"></span>
            <h3
              className="text-[#BD1F17] text-xl font-bold"
              style={{ fontFamily: "Roboto" }}
            >
              Book Now
            </h3>
          </div>
          <h1
            className="lg:text-[62px] text-[40px] leading-[48px] font-bold text-[#FFFFFF] lg:leading-[62px] lg:py-4"
            style={{ fontFamily: "Bebas Neue" }}
          >
            Book Your Table
          </h1>
          <p
            className="text-base font-normal text-[#F7F8F9] lg:w-[545px]"
            style={{ fontFamily: "Roboto" }}
          >
            Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo
            molestie vel, ornare non id blandit netus.
          </p>
        </div>
        <div className="lg:w-[635px] lg:mt-10 mt-10 md:px-[30px] lg:px-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 lg:items-start  items-start justify-center lg:justify-start md:justify-start md:items-start lg:px-0 px-[30px]"
          >
            <div className="flex gap-[30px] lg:flex-row flex-col">
              <input
                type="text"
                placeholder="Your Name * "
                className="lg:w-[302px] w-[330px] h-[46px] px-4 py-3 outline-none bg-transparent border border-[#E5E7EB] text-[#FFFFFF] placeholder-[#FFFFFF] text-sm font-normal"
                style={{ fontFamily: "Roboto" }}
                {...register("text", { required: true })}
              />
              <input
                type="email"
                placeholder="Your Email "
                className="lg:w-[302px] w-[330px] h-[46px] px-4 py-3 outline-none bg-transparent border border-[#E5E7EB] text-[#FFFFFF] placeholder-[#FFFFFF] text-sm font-normal"
                style={{ fontFamily: "Roboto" }}
                {...register("email", { required: true })}
              />
            </div>
            <div className="flex gap-[30px] lg:flex-row flex-col">
              <div className="flex items-center border border-[#E5E7EB] overflow-hidden lg:w-[302px] w-[330px] h-[46px] justify-between px-4">
                <input
                  type={isFocused ? "date" : "text"}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  style={{ fontFamily: "Roboto" }}
                  placeholder={!isFocused ? "Reservation Date" : ""}
                  className=" outline-none bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] text-sm font-normal"
                />
                <img
                  src={CalendarIcon}
                  alt="Calendar Icon"
                  className="w-5 h-5  mr-2"
                />
              </div>
              <div className="flex items-center border border-[#E5E7EB] overflow-hidden lg:w-[302px] w-[330px] h-[46px] justify-between px-4">
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  placeholder="Total People"
                  style={{ fontFamily: "Roboto" }}
                  className="outline-none bg-transparent text-[#FFFFFF] placeholder-[#FFFFFF] text-sm font-normal"
                />
                <img
                  src={PeopleIcon}
                  alt="People Icon"
                  className="w-5 h-5  mr-2"
                />
              </div>
            </div>

            <textarea
              placeholder="Message"
              style={{ fontFamily: "Roboto" }}
              className="bg-transparent border border-[#E5E7EB] lg:w-[635px] min-w-[330px] lg:h-[140px] h-[140px] resize-none py-3 px-4 text-[#FFFFFF] placeholder-[#FFFFFF] text-sm font-normal"
              {...register("message", { required: true })}
            />
            {errors.exampleRequired && <span>This field is required</span>}

            <button
              className="lg:py-[16px] py-[13px] px-5 md:py-[5px] sm:py-[2px] sm:px-[6px] md:px-[12px] lg:px-[24px] bg-[#FEBF00] text-[#0A1425] uppercase lg:text-lg text-[16px] lg:font-bold font-bold lg:block md:block sm:block placeholder-black"
              style={{ fontFamily: "Roboto" }}
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
