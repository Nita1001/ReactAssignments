
const CustomBtn = ({ color, onSelectedColor }) => {

  const clickHandler = () => {
    onSelectedColor(color);
  }

  return (
    <div className='container'>
      <button className={color} onClick={clickHandler} >{color}</button>
    </div>
  );
}

export default CustomBtn