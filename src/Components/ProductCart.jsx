import React from 'react'

import Image from 'next/image'
import {  AiOutlineSearch,AiOutlineHeart , AiOutlineShoppingCart } from "react-icons/ai";
// import ProductData from 

const ProductCart = ({ id, img, names, price,  sale }) => {

  return (
    <div className='group cursor-pointer'>
      <div className='relative'>
        <Image 
      className="w-full "
       src={img}
       alt={names} 
       height={1142} 
       width={1000} 
      />
      {sale && (<div className="bg-red-600 inline-block absolute top-0 left-0 text-[14px] text-white rounded-md px-2 py-[2px] m-4">Sale!
         </div>)}

      

          
            <div className='flex  justify-between'>
              <div className='flex  '>

            

              <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
                  <AiOutlineHeart />
               </div>

              <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
              <AiOutlineShoppingCart />

               </div>
               </div>
               <div>
               <p className='text-gary-600 font-light '>RS.{price}.00 </p>
               </div>
               </div>
           
        
        </div>
{/*  */}
     <h2 className='font-medium pb-3 hover :text-accent'>{names}</h2>
    



 
    </div>
  )
}

export default ProductCart