import React from 'react'
import Image from 'next/image';
import { Book } from './Books';

type Props = {
  image: any,
  id: number;
  handleClick: (id:number) => void;
}

const Button = (props:Props) => {
  return (
    <button onClick={()=> props.handleClick(props.id)}><Image priority src={props.image} alt="Follow us on Twitter"/></button>   
  )
}

export default Button;