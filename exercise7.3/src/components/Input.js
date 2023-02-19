
const Input = ({ label, value, inputHandler }) => {

  return (
    <div className='input-container'>
      <label>{label}</label>
      <input
        type="text"
        onChange={inputHandler}
        value={value} 
      ></input>
    </div>
  );
}

export default Input