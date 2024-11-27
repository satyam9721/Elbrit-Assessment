import Image from "next/image";
import React from "react";
import Circle_component from "../Circle_component/Circle_component";
import Header_footer from "../Header_Footer/Header_footer";
import Cards from "../Cards/Cards";
import DownCards from "../Down Cards/DownCards";

const Header_component = () => {
  return (
    <div>
      <div className="bg-[#e2f5fb] mx-3 pt-10 pb-56">
        {/* Main Heading */}
        <div className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-[#003569] font-bold flex items-center justify-center text-center px-4">
          Essential Vitamins
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center px-6 md:px-12 lg:px-48">
          {/* Left Content */}
          <div className="pt-10 md:pt-20 text-center md:text-left">
            <p className="text-[#727272] text-sm md:text-base">
              Online Medical Supplies
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-[#17414f] font-semibold mt-2">
              Get Your Vitamins & Minerals
            </p>
            <button className="bg-[#17414f] mt-4 px-5 py-2 text-white rounded-full text-xs md:text-sm lg:text-base">
              Explore
            </button>
          </div>

          {/* Center Image */}
          <div className="flex justify-center md:justify-center">
            <Image
              src="/f2-1.png.png"
              width={250}
              height={250}
              alt="Picture of the author"
              className="-mt-2"
            />
          </div>

          {/* Right Content (Circle Components) */}
          <div className="pt-10 md:pt-20 space-y-6">
            <Circle_component
              data="Vitamins"
              text="Increased Vitamins and minerals in your diet"
              imageSrc="/vit.png"
            />
            <Circle_component
              data="Weight Loss"
              text="Weight Loss Find scientifically proven solutions"
              imageSrc="/Weight .png"
            />
            <Circle_component
              data="Functional Foods"
              text="Functional Foods From protein powders to baby formula"
              imageSrc="/Functional .png"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#17414f] text-white">
        <Header_footer />
      </div>

      {/* Cards Section */}
      <div className="bg-[#f5f5f5] text-black py-10">
        <Cards />
      </div>

      {/* Blog Section */}
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <p className="text-lg md:text-xl font-bold">OUR BLOG</p>
        <h4 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mt-2">
          Latest News
        </h4>
      </div>

      {/* Down Cards Section */}
      <div className="bg-[#e2f5fb] py-10">
        <DownCards />
      </div>
    </div>
  );
};

export default Header_component;
