import { count } from "console";
import React, { useState } from "react";
import * as classNames from './counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1)
  }
  const handleDecrease = () => {
    setCount(count - 1)
  }
  return (<div className={classNames.btn}>
    <button onClick={handleIncrease}>Increase</button>
    <button  onClick={handleDecrease}>Decrease</button>
    <h1>{count}</h1>
  </div>)
};

