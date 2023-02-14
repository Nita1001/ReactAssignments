import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => ++prevCount);
  }

  const decrementHandler = () => {
    setCount((prevCount) => --prevCount);
  }

  return (
    <div className='container'>
      <button onClick={decrementHandler}>Decrement</button>
      <h3 className={count > 0 ? 'green' : count < 0 ? 'red' : 'white'}>{count}</h3>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
}

export default Counter