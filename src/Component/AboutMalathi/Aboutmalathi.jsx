import React from "react";
import "./About.css";
import aboutimg from "../../Assets/images/sivakasicrackers.jpg"
const Aboutmalathi = () => {
  return (
    <>
      <div className="About">
        <div className="about1">
          <div className="aboutimg">
            <img src={aboutimg} alt="" />
          </div>
          <div className="aboutcontent">
            <h1>" Malathi Crackers Sivakasi Online Crackers Shop "</h1>
            <p>
              Malathi Crackers is the leading supplier of crackers & fancy
              crackers items. Firecrackers have always been an integral part of
              indian culture and tradition. Be it a festival, a wedding, reunion
              or any other special occasion, it is in our hearts to celebrate it
              in the glory of lights. Our aim is to provide the excellent
              services and true value for money.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmalathi;
