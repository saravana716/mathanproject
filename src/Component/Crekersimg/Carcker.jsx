import React from 'react'
import crakers from "../../Assets/images/diwalisale.jpg"
import crakers1 from "../../Assets/images/brand1.png"
import crakers2 from "../../Assets/images/brand2.png"
import crakers3 from "../../Assets/images/brand3.png"
import crakers4 from "../../Assets/images/brand4.png"
import crakers5 from "../../Assets/images/brand5.png"
import crakers6 from "../../Assets/images/brand6.png"
import "./Crakers.css"
const Carcker = () => {
  return (
    <>
    <div className='Crakers'>
        <img src={crakers} alt="" />
    </div>
    <div className='Brands'>
      <h1>Brands We Handle</h1>
      <div className='Brands1'>
        <img src={crakers1} alt="" />
        <img src={crakers2} alt="" />
        <img src={crakers3} alt="" />
        <img src={crakers4} alt="" />
        <img src={crakers5} alt="" />
        <img src={crakers6} alt="" />
      </div>
    </div>
    </>
  )
}

export default Carcker