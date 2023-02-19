import React from 'react'

const Button = ({clickHandler, label}) => {
    return (
        <button onClick={clickHandler}>{label}</button>
    )
}

export default Button