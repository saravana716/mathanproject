import React from 'react'
import "./Contactpage.css"
const Contactpage = () => {
  return (
    <>
    <div className='ContactPage'>
        <div className='ContactPage2'>
            <div className='contactpage3'>
                <h2>Contact <span>us</span></h2>
                <div className='Conatctadd'>
                    <h1>ADDRESS</h1>
                    <p>1/90-S, Keela Thiruthangal Village, Sivakasi, Tamil Nadu 626 130</p>
                </div>
                <div className='Conatctadd'>
                    <h1>MOBILE NUMBER</h1>
                    <p>+91 96002 66278</p>
                    <p>+91 80985 43249</p>
                </div>
                <div className='Conatctadd'>
                    <h1>EMAIL</h1>
                    <p>malathicrackers@gmail.com</p>
                </div>
            </div>
            <div className='Contact4'>
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3935.4304627448573!2d77.82182587450308!3d9.471235381910851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1%2F90-S%2C%20Keela%20Thiruthangal%20Village%2C%20Sivakasi%2C%20Tamil%20Nadu%20626%20130!5e0!3m2!1sen!2sin!4v1722152956683!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contactpage