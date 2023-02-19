
const Select = ({selectHandler}) => {
    return (
        <div className="input-container">
            <label>Age</label>
            <select name="age" id='age' onChange={selectHandler}>
                <option value="0-15">0-15</option>
                <option value="15-30">15-30</option>
                <option value="30-40">30-40</option>
                <option value="Over 40">Over 40</option>
            </select>
        </div>
    )
}

export default Select