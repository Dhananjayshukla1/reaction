import React,{useState} from 'react'
import './Button.css'


function Button() {
  const [title,setA]=useState("Hire Me")
  return (
   
    <div onClick={()=>{setA("hi")}} className='btn-p' id='btn'>{title}</div>
  
  )
}

export default Button
