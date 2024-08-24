import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return(
    <div className='container relative pt-16 '>
    <Image
    className='w-[100%] h-auto' 
    src="/brone-home-small-banner1.jpg" width={1500} height={1500} alt="hero img"/>
    </div>
  );
};

export default Hero
