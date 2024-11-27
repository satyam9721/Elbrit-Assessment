import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from 'react-icons/md';

const Footer_cart = ({ type, details, text }) => {
  // Map type to icons and labels
  const typeConfig = {
    telephone: { icon: <BsFillTelephoneFill />, label: "Phone" },
    location: { icon: <GoLocation />, label: "Location" },
    email: { icon: <MdOutlineMail />, label: "Email" },
  };

  const { icon, label } = typeConfig[type] || {};

  return (
    <div className="bg-[#215d72] rounded-xl flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 text-xs sm:text-sm lg:text-base px-4 py-4 sm:py-6 w-full sm:w-1/2 lg:w-1/4 items-center justify-center">
      {/* Icon */}
      <div className="flex items-center justify-center text-white text-lg sm:text-xl">
        {icon}
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left text-white">
        <div className="font-bold">{label}: {details}</div>
        <div className="text-xs sm:text-sm lg:text-base">{text}</div>
      </div>
    </div>
  );
};

export default Footer_cart;
