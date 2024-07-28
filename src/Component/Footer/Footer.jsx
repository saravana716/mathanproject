import React from "react";
import { FaRegAddressBook } from "react-icons/fa";
import { CiMobile2 } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import support from "../../Assets/images/support.png"
import support1 from "../../Assets/images/callicon.png"
import support2 from "../../Assets/images/whatsappicon.png"
import support3 from "../../Assets/images/quickpurchase.png"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
            <div className="contact">
                <div className="contact1">
                    <h4>Contact with us</h4>
                    <h1>For Call & WhatsApp</h1>
                </div>
               <div className="contact2">
                <img src={support} alt="" />
               <div className="contact1">
                <h4>Call us now</h4>
                <h1>+ 91 85239 79570</h1>
                </div>
               </div>
            </div>
            <img src={support1} alt="" className="footerim1"/>
            <img src={support2} alt=""  className="footerim2"/>
            <img src={support3} alt=""  className="footerim3"/>
          <div className="footer2">
            <div className="footer21">
              <h1>Malathi Crackers</h1>
              <p>
                "Malathi Crackers" is acknowledged as the renowned manufacturer
                of an exclusive range of Ground Chakkar, Flower Pots, Twinkling
                Star, Atom Bomb, Rockets etc.
              </p>
              <p>
                We offer the best quality products at best price.Make
                celebrations more memorable with superior quality of our
                crackers all over India.
              </p>
            </div>
            <div className="footer21">
              <h1>Get In Touch</h1>
              <div className="add">
                <p>
                  <FaRegAddressBook className="io1"/>
                  <span className="fi">
                    1/90-S, Keela Thiruthangal Village, Sivakasi, Tamil Nadu 626
                    130
                  </span>
                </p>
                <p>
                  <CiMobile2 className="io" />
                  <span>+91 96002 66278</span>
                </p>
                <p>
                  <CiMobile2 className="io" />
                  <span>+91 80985 43249</span>
                </p>
                <p>
                  <IoIosMail className="io" />
                  <span>malathicrackers@gmail.com</span>
                </p>
              </div>
            </div>
            <div className="footer21">
              <h1>Reach US</h1>
              <div className="map">
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
        <div className="con">
        <p>
            As per 2018 supreme court order, online sale of firecrackers are not
            permitted! We value our customers and at the same time, respect
            jurisdiction. We request you to add your products to the cart and
            submit the required crackers through the enquiry button. We will
            contact you within 24 hrs and confirm the order through WhatsApp or
            phone call. Please add and submit your enquiries and enjoy your
            Diwali with Malathi Crackers. Our License No.----. Malathi Crackers
            as a company following 100% legal & statutory compliances and all
            our shops, go-downs are maintained as per the explosive acts. We
            send the parcels through registered and legal transport service
            providers as like every other major companies in Sivakasi is doing
            so.
          </p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
