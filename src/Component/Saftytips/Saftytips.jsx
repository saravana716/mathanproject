import React from "react";
import tick from "../../Assets/images/check-mark.png";
import close from "../../Assets/images/close.png";
import "./Saftytips.css"
const Saftytips = () => {
  return (
    <>
     <div className="Saftybanner">
            <h1>Safty Tips</h1>
      </div>
      <div className="safty">
        <div className="safty1">
          <div className="safty2">
            <h1>Malathi Crackers</h1>
            <p>
              There are certain Dos & Don'ts to follow while purchasing,
              bursting and storing crackers. Thus, it is very important to
              follow the precautions while bursting crackers. A little
              negligence, ignorance and carelessness can cause a fatal injury.
            </p>
          </div>
          <div className="tips">
            <div className="tips1">
              <div className="tips2">
                <h2>Do's</h2>
              </div>
              <div className="tips3">
                <img src={tick} alt="" />
                <div className="tipcont">
                  <h3>Instructions</h3>
                  <p>
                    Display fireworks as per the instructions mentioned on the
                    pack.
                  </p>
                </div>
              </div>
              <div className="tips3">
                <img src={tick} alt="" />
                <div className="tipcont">
                  <h3>Outdoor</h3>
                  <p>Use fireworks only outdoor</p>
                </div>
              </div>
              <div className="tips3">
                <img src={tick} alt="" />
                <div className="tipcont">
                  <h3>Branded Fireworks</h3>
                  <p>
                    Buy fireworks from authorized / reputed manufacturers only.
                  </p>
                </div>
              </div>
              <div className="tips3">
                <img src={tick} alt="" />
                <div className="tipcont">
                  <h3>Distance</h3>
                  <p>
                    Light only one firework at a time, by one person. Others
                    should watch from a safe distance.
                  </p>
                </div>
              </div>
          
              <div className="tips3">
                <img src={tick} alt="" />
                <div className="tipcont">
                  <h3>Supervision</h3>
                  <p>Always have adult supervision</p>
                </div>
              </div>
             
              <div className="tips3">
                <img src={tick} alt="" />
                <div className="tipcont">
                  <h3>Water</h3>
                  <p>
                    Keep two buckets of water handy. In the event of fire or any
                    mishap.
                  </p>
                </div>
              </div>
           
            </div>
            <div className="tips1">
              <div className="tips2">
                <h2>Dont's</h2>
              </div>
              <div className="tips3">
                <img src={close} alt="" />
                <div className="tipcont">
                  <h3>Don't make tricks</h3>
                  <p>Never make your own fireworks.</p>
                 
                </div>
              </div>
              <div className="tips3">
                <img src={close} alt="" />
                <div className="tipcont">
                  <h3>Don't relight</h3>
                  <p>Never try to re-light or pick up fireworks that have not ignited fully.</p>
                </div>
              </div>
              <div className="tips3">
                <img src={close} alt="" />
                <div className="tipcont">
                  <h3>Don't carry it</h3>
                  <p>Never carry fireworks in your pockets</p>
                  
                </div>
              </div>
              <div className="tips3">
                <img src={close} alt="" />
                <div className="tipcont">
                  <h3>Don't Touch it</h3>
                  <p>After fireworks display never pick up fireworks that may be left over, they still may be active.</p>
                 
                </div>
              </div>
          
              <div className="tips3">
                <img src={close} alt="" />
                <div className="tipcont">
                  <h3>Do not use Glass / Metal</h3>
                  <p>Never shoot fireworks in a metal or glass containers.</p>
                </div>
              </div>
             
              <div className="tips3">
                <img src={close} alt="" />
                <div className="tipcont">
                  <h3>Don't wear loose clothes</h3>
                  <p>Do not wear loose clothing while using fireworks.</p>
                 
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Saftytips;
