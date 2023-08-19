import React from 'react'
import Image from 'next/image';

type Props = {
  image: any,
  id: Number;
  handleClick: (id:Number) => void
}

const Button = (props:Props) => {
  return (
    <button onClick={() => props.handleClick(props.id)}><Image priority src={props.image} alt="Follow us on Twitter"/></button>   
  )
}

export default Button