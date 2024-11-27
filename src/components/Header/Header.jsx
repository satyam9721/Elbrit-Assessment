import React from "react";
import Navbar from "../Navbar/Navbar";
import Header_component from "../Header_component/Header_component";
import Header_footer from "../Header_Footer/Header_footer";

const Header = () => {
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <div className="h-10 w-full bg-[#17414f] text-white">
        <Navbar />
      </div>

      {/* Header Component */}
      <div className="flex-grow">
        <Header_component />
      </div>

      {/* Footer */}
      {/* <div className="w-full bg-gray-100">
        <Header_footer />
      </div> */}
    </div>
  );
};

export default Header;
