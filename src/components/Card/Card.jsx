import Image from 'next/image';

const Card = ({ imageSrc, overlayText, altText, width, height,marginTop }) => {
    
  return (
     <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-lg" style={{ width: `${width}px`, height: `${height}px`,  marginTop: `${marginTop}px` }}>
    {/* // <div className="relative" style={{ width: `${width}px`, height: `${height}px` }}> */}
      {/* Image */}
     

      <Image
         src={imageSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
        {Array.isArray(overlayText) ? (
          overlayText.map((text, index) => (
            <p
              key={index}
              className="text-white text-center text-sm sm:text-lg font-semibold mb-2"
            >
              {text}
            </p>
          ))
        ) : (
          <p className="text-white text-center text-lg font-semibold">
            {overlayText}
          </p>
        )}
      </div>
      {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
        {Array.isArray(overlayText) ? (
          overlayText.map((text, index) => (
            <p key={index} className="text-white text-lg font-semibold">
              {text}
            </p>
          ))
        ) : (
          <p className="text-white text-lg font-semibold">{overlayText}</p>
        )}
      </div> */}
    </div>
  );
};

export default Card;
