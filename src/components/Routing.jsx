import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Home from './Home'
const Routing = () => {
  return (
    <div>
      <Routes >
      <Route path='/About' element={<About></About>} ></Route>
      <Route path='/Home' element={<Home></Home>} ></Route>
      </Routes>
      </div>
  )
}

export default Routing
