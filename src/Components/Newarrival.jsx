"use client"
import React, { useState } from 'react'
import Data from '@/utils/productData'
import { Whisper } from 'next/font/google'
import ProductCart from './ProductCart';


const whisper=Whisper({subsets:["latin"],weight:["400"]})
const tabsdata=["All","skin care","Lipistick","Makeup","Nail &wax" ];
const Newarrival = () => {
    const [selectedTab, setSelectedTab]=useState(0);

    const handleTab = ( index )=>{
        setSelectedTab(index)
    };
  return (
    <>
     <div className="container pt-32">
        <div className="text-center">
           <h3 className={`${whisper.className}`}>For your beauty</h3>
           <h2 className='font-semibold text-5xl '>New Arrival</h2>
           <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center pt-8 uppercase font-medium text-xl">
            {tabsdata.map((text,index)=><li
             key={text}
              className={`${selectedTab===index && "text-lime-900"} cursor-pointer hover:text-lime-950`}
              onClick={()=>handleTab(index)}
              >{text}</li>)}
           </ul>

                    <div className="grid sm:grid-cols-2 md:gride-cols-3 lg:grid-cols-4 gap-8 pt-8">
                        {Data.map((item )=>(
                            <ProductCart 
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                names={item.names}
                                price={item.price}
                                sale={item.sale}
                            />
                        )
                            ) }
                    </div>

        </div>
    </div> 

    </>
  )
}

export default Newarrival
