import React from 'react'

const Button = ({ className, handleClick, title }) => {
  return (
    <div>
      {
        className === 'trash' ?
          <i className="far fa-trash-alt delete" onClick={handleClick}></i>
          :
          <button className={className} onClick={handleClick}>{title}</button>}
    </div>
  )
}

export default Button