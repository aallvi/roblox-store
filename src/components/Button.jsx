import React from 'react'

export const Button = ({text,fn,type = '' }) => {


  return (
    <button className='button-component' type={type} onClick={fn}  >
        {text}
    </button>
  )
}
