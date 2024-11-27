import React from 'react';
import Image from 'next/image';

const Header_Footer_Circle = ({ desc, text, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-center -mt-10 sm:-mt-20 px-5 sm:px-10 py-5 sm:py-10">
      {/* Circle with optional image */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff] overflow-hidden flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={desc || 'Circle Image'}
            width={80} // Matches the size of the circle
            height={80} // Matches the size of the circle
            objectFit="cover"
          />
        ) : (
          <div className="bg-gray-300 w-full h-full"></div> // Fallback background
        )}
      </div>
      {/* Description */}
      <div>
        <p className="p-2 sm:p-3 text-center font-bold text-sm sm:text-base">{desc}</p>
      </div>
      {/* Supporting Text */}
      <div>
        <p className="text-[8px] sm:text-[10px] flex items-center justify-center text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Header_Footer_Circle;
