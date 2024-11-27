import { SlLocationPin } from "react-icons/sl";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Footer_cart from "../Footer_Cart/Footer_cart";
import Image from "next/image";

export default function Footer() {
 return (
  <div className="bg-[#17414f] text-white px-6 sm:px-20 lg:px-40 py-6 text-xs -mb-0">
    {/* Contact Section */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-6 sm:gap-10 p-4">
      <Footer_cart
        type="telephone"
        details="Phone Number"
        text="+974 3118 1843"
      />
      <Footer_cart
        type="email"
        details="Email Address"
        text="Elbrithcqhr@gmail.com"
      />
      <Footer_cart
        type="location"
        details="Office Location"
        text="Ambassador Street, Zone 61"
      />
    </div>

    {/* About Section */}
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 py-3">
      {/* Logo */}
      <div className="flex-shrink-0 w-full sm:w-auto">
        <Image
          src="/logo.jpg"
          width={300}
          height={100}
          alt="Company Logo"
          className="rounded-lg w-full max-w-xs sm:max-w-md lg:max-w-lg"
        />
      </div>

      {/* Description */}
      <div className="text-sm sm:text-base">
        <p>
          Your health, physical and emotional well-being is important to us.
          We are always by your side and have made it even easier to access
          the necessary vitamins.
        </p>
      </div>
    </div>

    {/* Location Section */}
    <div className="pt-4">
      <p className="flex items-center justify-start gap-2 text-sm sm:text-base">
        <SlLocationPin className="text-lg" />
        <span>
          Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai
          400051
        </span>
      </p>
    </div>
  </div>
);

}
