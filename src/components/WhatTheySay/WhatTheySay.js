import React, { Component } from 'react';
import "./WhatTheySay.css";
import rider from "../../images/ryttare.jpg";
import Button from "../Button";

class WhatTheySay extends Component {

  render() {

    return (
      <div className="what-they-say">

        <div className="what-they-say-item what-they-say-item-a">
          <h1>What the riders <span style={{display: "block"}}>say about us!</span></h1>
        </div>

        <div className="what-they-say-item rider-image-1">
          <img className="rider" src={rider} />
        </div>

        <div className="what-they-say-item rider-text-1">
          <p>Amazing that you now can see pace, distance and training statistics in the same place!"</p>
          <h4>Sivert ‘Sibban’ Jonsson</h4>
          <p>Former World Cup rider and class B-coach</p>
        </div>


        <div className="what-they-say-item"></div>
        <div className="what-they-say-item"></div>

        <div className="what-they-say-item"></div>
        <div className="what-they-say-item"></div>

        <div className="what-they-say-item rider-image-2">
          <img className="rider" src={rider} />
        </div>
        <div className="what-they-say-item rider-text-2">
          <p>"This app shows black on white how much you have exercised, no excuses anymore among my students!"</p>
          <h4>Magnús Skúlason</h4>
          <p>Multiple world cup medalist</p>
        </div>
        {/* <div className="what-they-say-item download"><Button text="Download"/></div> */}
      </div>
    );
  }

}

export default WhatTheySay;
