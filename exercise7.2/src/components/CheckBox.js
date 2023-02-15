
const CheckBox = ({ type, label, id, checked }) => {
  return (
    <div className='container'>
      <form>
        <input type={type} checked={checked}></input>
        <label for={id}> {label} </label>
      </form>
    </div>
  );
}

export default CheckBox