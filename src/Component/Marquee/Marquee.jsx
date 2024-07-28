import React from 'react'
import { LuPhoneCall } from "react-icons/lu";
import "./MArquee.css"
import { Link } from 'react-router-dom';
import logo from "../../Assets/images/malathicrackers.jpg"
import banner from "../../Assets/images/home_banner_31_08_2023_03_36_09.webp"
const Marquee = () => {
  return (
    <>
    <marquee  behavior="scroll" direction="left" className="mar" >
    
    2024 Diwali sale has started. Prices are expected to increase shortly Book your diwali Crackers soon to save money.
</marquee>
<div className='nav'>
    <h3>Orders - +91 85239 79570</h3>
    <h3>Welcome to Malathi Crackers, Sivakasi</h3>
    <h3>Mail Us : malathicrackers@gmail.com</h3>
</div>
<div className='nav1'>
    <div className='navinner'>
        <div className='nav1left'>
            <h4>Crackers Available All 365 Days!
Diwali Sales Started.
Celebrate Diwali with Malathi Crackers</h4>
        </div>
        <div className='navimg'>
            <img src={logo} alt="" />
        </div>
        <div className='navnumber'>
            <div className='Query'>
                <h1>FOR QUERIES & BULK ORDER</h1>
            </div>
            <LuPhoneCall  className="phicon"/>
            <div className='number'>
                <p>+91 96002 66278</p>
                <p>+91 80985 43249</p>
            </div>
        </div>
    </div>
</div>
<div className='Mainnavber'>
    <ul>
    <li className='list'> <Link to="/">HOME</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li>PRODUCTS</li>
        <li><Link to="/safty">SAFTY</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>

        <button>Download Pricelist</button>
    </ul>
</div>
<div className='banner'>
    <img src={banner} alt="" />
</div>
    </>
  )
}

export default Marquee