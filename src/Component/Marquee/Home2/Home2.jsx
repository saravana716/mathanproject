import React from 'react'
import "./Home.css"
import homeimg from "../../../Assets/images/chakkar.jpg"
import homeimg1 from "../../../Assets/images/flowerpot.jpg"
import homeimg2 from "../../../Assets/images/rocket.jpg"
import homeimg3 from "../../../Assets/images/sparklers.jpg"
const Home2 = () => {
  return (
    <>
    <div className='home2'>
        <div className='home2inner'>
            <div className='homeleft'>
                <h3>Welcome To</h3>
                <h1>Malathi Crackers</h1>
                <p>Malathi Crackers, We are the leading online fireworks supplier of all types of conventional crackers including chakras, flowerpots, rockets, bombs, sound crackers, etc. Apart from usual varieties, we have a wide range of fancy and novel crackers are sold, which includes fancy fountains, aerial color novelties, multi-color aerial shots, electric crackers, super blast wala crackers, etc. Wide collection of gift boxes in different price ranges available for gifting purposes. Enjoy a safe and sound Diwali by ordering crackers online.</p>
                <p>Our aim is to deliver optimum quality service to our clients has been achieved with the help of a well organized infrastructure coupled with dedicated man power. Enjoy your festivals such as Diwali, Christmas and New Year with us.</p>
                <button>Read More</button>
            </div>
            <div className='Homerights'>
                <div className='Homerights1'>
                    <div className='Homerighttop'>
                        <img src={homeimg} alt="" />
                    </div>
                    <div className='Homerighttop1'>
                        <img src={homeimg1} alt="" />
                    </div>
                </div>
                <div className='Homerights2'>
                <div className='Homerighttop'>
                        <img src={homeimg} alt="" />
                    </div>
                    <div className='Homerighttop1'>
                        <img src={homeimg1} alt="" />
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    </>
  )
}

export default Home2