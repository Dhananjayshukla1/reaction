import React from 'react'
// import './components/Button.css'
import './Button.css'

function Button() {
  return (
    <div>
    <div onClick={()=>{alert("hey")}} className="btn-p" id="btn">Hire Me</div>
    </div>
  )
}

export default Button
