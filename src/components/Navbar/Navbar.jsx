import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="-mb-8 ml-3">
       <Image
              src="/logo.jpg"
              width={300}
              height={900}
              alt="Picture of the author"
              
            />
      </div>
  )
}

export default Navbar