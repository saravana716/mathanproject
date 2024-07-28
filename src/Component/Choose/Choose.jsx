import React from "react";
import "./Choose.css"
import { MdOutlineHighQuality } from "react-icons/md";
import { BsMagic } from "react-icons/bs";
import { IoMdPricetag } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import line from "../../Assets/images/line.png"
import { FaTag } from "react-icons/fa6";
const Choose = () => {
  return (
    <>
      <div className="choose">
        <div className="choose1">
          <div className="choose2">
            <h1>Why Choose Us</h1>
            <img src={line} alt="" />
            <p>
              In a competitive world of fire crackers, we are well known for
              qualitative crackers and fancy novelties at reasonable price. The
              products quality are 100% good and delivered safely. Select your
              favorite crackers from our wide range of collections and also
              provide the number of items in each product. Our services created
              a positive image among our customers
            </p>
          </div>
          <div className="choosegrid">
            <div className="grid1">
            <MdOutlineHighQuality  className="carticon"/>
                <h3>Quality</h3>
                <p>Quality & innovation are the key behind our success</p>
            </div>
            <div className="grid2" >
            <BsMagic className="carticon"/>
                <h3>Safe to Use</h3>
                <p>Crackers we offer are safe and are made from fine quality raw materials.</p>
            </div>
            <div className="grid1">
            <FaTag className="carticon"/>
                <h3>Genuine Price</h3>
                <p>Quality products at economic price is the main motto for us.</p>
            </div>
            <div className="grid2">
            <IoHeartOutline className="carticon"/>
                <h3>Satisfaction</h3>
                <p>Our quality and timely delivery has attracted customers easily.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
