import React from 'react'
import Header_Footer_Circle from '../HF_Circle/Header_Footer_Circle'
import Circle_component from "../Circle_component/Circle_component";

const Header_footer = () => {
  return (
    <div className='ml-44 mr-44 -mt-40 bg-[#17414f] grid grid-cols-3 items-center justify-center rounded-3xl gap-10 ' >
        <Header_Footer_Circle desc="clinically studied" text ="All products that we offer have undergone lab and safety tests"
       imageSrc="/img1.png"
        />
        <Header_Footer_Circle desc="Vegetarian Friendly" text ="We have a wide selection of vegetarian products to meet your needs"
        imageSrc="/img2.png"
        />
        <Header_Footer_Circle desc="Made in India" text ="Shop local and explore health products made right here in India"
        imageSrc="/img3.png"
        />
        <Header_Footer_Circle desc="Free shipping" text ="We deliver to your door with no shipping costs on your orders"
        imageSrc="/img4.png"
        />
        <Header_Footer_Circle desc="No Risk" text ="We ensure that all products are safe and within their use-by date"
        imageSrc="/img5.png"
        />
        <Header_Footer_Circle desc="GMO free" text ="Natural, no modified products and derivatives for those who need it"
        imageSrc="/img6.png"
        />
        
    </div>
  )
}

export default Header_footer