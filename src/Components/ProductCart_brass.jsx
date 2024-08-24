import React from 'react';
import ProductCard from './ProductCard';
import Data from '@/utils/allProductInfo';
import Image from 'next/image';
import Link from 'next/link';

const ProductCart_brass = () => {
  const products = Data.products.slice(0, 13); 

  return (
    <div>
         <div className='mb-5'>
     <Link href="https://wa.me/7649062706"> <Image src="/slide-images/whatsaap-connect.jpeg" className='no-underline cursor-pointer' width={1000} height={200}/></Link>
    </div>
   
      <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-10 border border-gray-300">
        {products.map((product, index) => (
          <React.Fragment key={index}>
            <ProductCard {...product} />
          
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductCart_brass;
