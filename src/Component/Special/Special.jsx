import React from 'react'
import single from "../../Assets/images/singlesound.png"
import single1 from "../../Assets/images/flowerpots.png"
import single2 from "../../Assets/images/chakkar.png"
import single3 from "../../Assets/images/novelties.png"
import single4 from "../../Assets/images/diwalicrackers.png"
import "./Spaecial.css"
const Special = () => {
  return (
    <>
    <div className='special'>
        <div className='special1'>
            <h2>Our Specalities</h2>
            <p>These are the products we own to you</p>
        </div>
        <div className='specialinner'>
        <div className='speLeft'>
            <div className='spetop'>
                <div className='speimg'>
                    <img src={single} alt="" />
                </div>
                <h1>Single Sound</h1>
                <p>Single sound crackers have longer shelf life, low smoke emission and safe to use.</p>
            </div>
            <div className='spetop'>
                <div className='speimg'>
                    <img src={single1} alt="" />
                </div>
                <h1>Flower Pots</h1>
                <p>We have different varieties of flower pots with different colours.</p>
            </div>
        </div>
        <div className='specenter'>
                <div className='speimg'>
                    <img src={single4} alt="" />
                </div>
           
        </div>
        <div className='speLeft'>
            <div className='spetop'>
                <div className='speimg'>
                    <img src={single2} alt="" />
                </div>
                <h1>Single Sound</h1>
                <p>Single sound crackers have longer shelf life, low smoke emission and safe to use.</p>
            </div>
            <div className='spetop'>
                <div className='speimg'>
                    <img src={single3} alt="" />
                </div>
                <h1>Flower Pots</h1>
                <p>We have different varieties of flower pots with different colours.</p>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Special