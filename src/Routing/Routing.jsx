import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Safty from '../Pages/Safty'
import Contacts from '../Pages/Contacts'
const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/safty' element={<Safty/>}/>
        <Route path='/contact' element={<Contacts/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing