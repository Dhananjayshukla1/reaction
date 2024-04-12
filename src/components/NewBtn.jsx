import React,{useState} from 'react'
import './Button.css'

function NewBtn() {
  const [title,setA]=useState("Hire Me")
  return (
    
       <button onClick={()=>{setA("hire")}} className=" btn-p " id="btn">{title}</button>
      
    
  )
}

export default NewBtn
