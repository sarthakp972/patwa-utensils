"use client";

// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, incrementByAmount } from "./GlobalRedux/Features/counter/counterSlice";
import { useState } from "react";

// import { increment, decrement } from "./GlobalRedux/Features/counter/counterSlice";




export default function Home() {
  const [count, setCount] = useState(parseInt(localStorage.getItem('counterValue')) || 1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    localStorage.setItem('counterValue', count + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
    localStorage.setItem('counterValue', count - 1);
  };

  const handleIncrementByAmount = (amount) => {
    setCount((prevCount) => prevCount + amount);
    localStorage.setItem('counterValue', count + amount);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleIncrementByAmount(5)}>Increment by 5</button>
    </div>
  );
}
