import { useState } from "react";

const Box = () => {

  const [toggle, setToggle] = useState(true);

  const clickHandler = () => {
    setToggle(!toggle);
  }

  return (
    <div className='container'>
      <button onClick={clickHandler}>Show/Hide</button>
      <div className={toggle ? 'box' : null}></div>
    </div>
  );
}

export default Box