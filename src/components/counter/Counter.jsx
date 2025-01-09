import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from '../../Feature/Counters/counterSlice';

const Counter = () => {
  const dispatch = useDispatch()
  const counters = useSelector((state) => state.counters);
  // const total = counters.reduce((sum, current)=> {sum+current.value},0)
  // console.log(total)
  // console.log(counters);
  const handleIncreament = (id) => {
    dispatch(increament(id))
  };
  const handledecreament = (id) => {
    dispatch(decreament(id))
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
        <div key={count.id} className='text-center mt-5 bg-blue-100'>
          <h1 className='mb-5'>{count.value}</h1>
          <button
            onClick={() => handleIncreament(count.id)}
            className="bg-green-500 text-white rounded-lg px-2 py-1 ml-1"
          >
            Increment
          </button>
          <button
            onClick={() => handledecreament(count.id)}
            className="bg-red-500 text-white rounded-lg px-2 py-1 ml-1"
          >
            Decrement
          </button>
        </div>
      ))}
    </>
  );
};

export default Counter;
