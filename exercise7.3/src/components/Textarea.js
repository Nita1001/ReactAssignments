
const Textarea = ({label, inputHandler, value}) => {
 
  return (
    <div className='input-container'>
    <label>{label}</label>
    <textarea value={value} onChange={inputHandler}></textarea>
    </div>
  );
}

export default Textarea