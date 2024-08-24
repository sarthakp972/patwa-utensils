import React from 'react';
import Hdata from '@/utils/homePageCart.js';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from 'next/link';

const Homecart = () => {
  return (
    <>
    <div className='container mx-auto mt-10'>
      <h5 className='ml-6 mt-10 text-lg font-bold'>SHOP BY CATEGORY</h5>
      <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
        {Hdata.map((item, index) => (
          <Card key={index} className="rounded-lg shadow-md  w-60 h-60 ">
            <CardContent className="p-0">
              <div className="relative w-60 h-60 ">
              <Link href={item.link} className="no-underline text-dark">
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg  cursor-pointer transition-transform duration-300 hover:scale-95"
                />
              </Link>
              </div>
             
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
    {/* ////////////////////////////////////////////////////////// banner */}
      <div className=" container mt-6 ">
      <Image
                          src="/banner-2.jpeg"
                          // layout="fill"
                          // objectFit="cover"
                          width={1100}
                          height={600}
                          className="rounded-lg cursor-pointer transition-transform duration-300 hover:scale-95"
                        />
      </div>
      {/* ////////////////////////////////// after banner */}
      <div className='container mx-auto mt-10'>
      {/* <h5 className='ml-6 mt-10 text-lg font-bold'>SHOP BY CATEGORY</h5> */}
      <div className='mt-6 grid gap-6 grid-cols-1 md:grid-cols-3 xl:grid-cols-4'>
        {Hdata.map((item, index) => (
          <Card key={index} className="rounded-lg shadow-md  w-60 h-60 ">
            <CardContent className="p-0">
              <div className="relative w-60 h-60 ">
                <Image
                  src={item.img}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg  cursor-pointer"
                />
              </div>
             
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
      </>
  );
}

export default Homecart;
