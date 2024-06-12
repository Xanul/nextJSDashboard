'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCount, substractOne } from "@/store/counter/counterSlice";
import React, { useEffect } from "react";

interface Props {
  value?: number
}

export interface CounterResponse {
  count: number;
}

const getApiCounter = async():Promise<CounterResponse> => {
  const data = await fetch('/api/counter').then(resp => resp.json());
  console.log(data);
  return data
}


export const CartCounter = ({ value= 0 }: Props) => {

  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    
    getApiCounter().then(({count}) => dispatch(initCounterState(count)))
    
  }, [dispatch])
  

  // useEffect(() => {
  //   dispatch(initCounterState(value))
  // }, [dispatch, value])
  
  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
          onClick={() => dispatch(substractOne())}
        >
          -1
        </button>
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[80px] mr-2"
          onClick={() => dispatch(addOne())}
        >
          +1
        </button>
      </div>
    </>
  );
};
