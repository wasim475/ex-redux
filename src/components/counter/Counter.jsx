import React, { useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  let [count, setCount] = useState(0);
  const counters = useSelector((state) => state.counters);
  console.log(counters);
  const handleIncreament = (x) => {
    x++;
    setCount(x);
  };
  return (
    <>
      {/* <div>
        <h1>{count}</h1>
        <button onClick={()=>handleIncreament(count)} className='bg-green-500 text-white rounded-lg'>Increment</button>
      </div>
      <div>
        <h1>{count}</h1>
        <button className='bg-red-500 text-white rounded-lg'>Decrement</button>
      </div> */}
      {counters.map((count) => (
        <div key={count.id}>
          <h1>{count.value}</h1>
          <button
            onClick={() => handleIncreament(count.value)}
            className="bg-green-500 text-white rounded-lg"
          >
            Increment
          </button>
        </div>
      ))}
    </>
  );
};

export default Counter;
