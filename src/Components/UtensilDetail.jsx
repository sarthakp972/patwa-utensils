"use Client"
// File: UtensilDetail.jsx

// Mark the parent component as a Client Component using "use client"


import React, { useState } from 'react';
import Image from 'next/image';
import { FaTruck, FaShieldAlt, FaUndo, FaMoneyBillAlt, FaLock } from 'react-icons/fa';
import Footer from './Footer';


const UtensilDetail = () => {
  const [quantity, setQuantity] = useState(1); // Use React.useState instead of useState

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <>
    <div className=" container flex flex-col justify-between md:flex-row border">
      {/* Image Section (Half Screen) */}
      <div className="w-full md:w-1/2 p-4">
        <Image
          alt="Product Image"
          src="/Bronze-Utensils/handicraft-kadhai.jpg"
          width={600}
          height={400}
        />
      </div>

      {/* Description Section (Half Screen) */}
      <div className="w-full md:w-1/2 p-4 ">
        <h1 className="text-2xl font-bold mb-4">Bronze Sauce Pan for Stovetop Versatility: Boiling, Simmering, Soups & More - 1 ltr</h1>
        <p className=" mb-2 ">Price:<span className='text-red-600 text-2xl font-semibold'>₹2708</span> </p>
        <p className="text-lg mb-2">Size: Large</p>
        <p className="text-lg mb-2">Material: Bronze</p>
        <p className="text-lg mb-2"> Weight: 500g</p>

        <div className="flex items-center mb-4">
          Qty:
          <button className='border-2 px-2 bg-gray-300' onClick={handleDecrement}>-</button>
          <p className="mt-3  border-2 px-4">{quantity}</p>
          <button className='border-2 px-2 bg-gray-300' onClick={handleIncrement}>+</button>
        </div>
        <div className='flex  gap-10'>
        <button className="bg-orange-500 hover:bg-orange-400 text-black font-bold py-2 px-4 rounded">
          Buy it Now
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 rounded">
          Add to cart
        </button>
        </div>
      </div>
    </div>
    {/* ////////////////////// */}
    <hr />
    <div className="flex items-center justify-around mt-4 ">
      <div className="flex items-center border-r-2 p-4">
        <FaTruck className="text-4xl text-blue-500 " />
        <p className="ml-2">Free Delivery</p>
      </div>
      <div className="flex flex-col items-center border-r-2 p-4">
        <FaMoneyBillAlt className="text-2xl text-blue-500" />
        <p className="ml-2">Order Above 599</p>
      </div>
      <div className="flex items-center flex-col border-r-2 p-4">
        <FaShieldAlt className="text-2xl text-blue-500" />
        <p className="ml-2">Warranty</p>
      </div>
      <div className="flex flex-col items-center border-r-2 p-4">
        <FaUndo className="text-2xl text-blue-500" />
        <p className="ml-2">Return Policy</p>
      </div>
      <div className="flex items-center flex-col border-r-2 p-4">
        <FaLock className="text-2xl text-blue-500" />
        <p className="ml-2">Secure Payment</p>
      </div>
    </div>
    <hr />
    <Footer/>
    </>
  );
};

export default UtensilDetail;
