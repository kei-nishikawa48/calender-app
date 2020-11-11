import React from "react";

// ==========ここから編集する==========
const Counter = ({count ,increment,decrement}) => {
  return(
  <>
    <div>{count}</div>
    <button onClick={() => increment(1)}>+</button>
    <button onClick={() => decrement(1)}>-</button>
  </>
);
  }
// ==========ここまで編集する==========

export default Counter;
