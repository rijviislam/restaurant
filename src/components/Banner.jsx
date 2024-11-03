import Bg from "../assets/Rectangle 4.png";

export default function Banner() {
  return (
    <div
      className="hero bg-[#BD1F17] lg:min-h-screen md:min-h-screen sm:min-h-screen h-screen min-w-[360px] md:min-w-fit lg:w-full xl:min-w-full 2xl:min-w-full -z-50 absolute top-[-0.5px]"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <h1>Banner</h1>
    </div>
  );
}
