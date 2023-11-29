import React from 'react'

const Button = ({runFunction, textButton ,styleButton}) => {
  return (
    <button 
    className={`${styleButton} text-white font-semibold text-[1.5rem]`}
    onClick={(e) =>{ 

      runFunction()
      
      
      }} >
      {textButton}

    </button>
  )
}

export default Button