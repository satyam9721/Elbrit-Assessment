
import Image from 'next/image';

const Circle_component = ({ imageSrc, data, text }) => {
  return (
    <div className="flex flex-row m-3 items-center space-x-4">
      {/* Circle with Image */}
      <div className="w-10 h-10 rounded-full bg-[#144151] overflow-hidden flex items-center justify-center">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={data || 'Profile Image'}
            width={40}
            height={40}
            objectFit="cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
      </div>
      {/* Text Content */}
      <div>
        <div className="text-[#17414f] text-sm font-bold">
          <p>{data}</p>
        </div>
        <div className="text-gray-500 text-xs">{text}</div>
      </div>
    </div>
  );
};

export default Circle_component;













// const Circle_component = ({data, text}) => {
//   return (
//     <div className="flex flex-row m-3">
//         <div className='w-10 h-10  rounded-full bg-[#144151] '>

//         </div>
//         <div>
//             <div className="text-[#17414f] text-sm font-bold">
//                 <p>{data}</p>
//             </div>
//             <div className="text-[] text-xs">{text}</div>
//         </div>

//     </div>
//   )
// }

// export default Circle_component