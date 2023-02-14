import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const clickHandler = () => {
    setCount((prevCount) => ++prevCount);
  }

  return (
    <div className='container'>
      <h3>{count}</h3>
      <button onClick={clickHandler}>increment</button>
    </div>
  );
}

export default Counter