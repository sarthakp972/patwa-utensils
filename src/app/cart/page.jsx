"use client"
import React from 'react'


import { useSelector } from 'react-redux';

const page = () => {
  
  const cartItems = useSelector(state => state.cart.items);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              <img src={item.img} alt={item.description} style={{ width: '50px', height: '50px' }} />
              <div>
                <p>{item.description}</p>
                <p>Price: ₹{item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};



export default page
