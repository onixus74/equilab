import React from "react";
import star from "../../images/Black_Star.svg";
import "./WhatTheUsersSay.css";

const WhatTheUsersSay = props => (
  <div className="what-the-users-say">
    <div className="what-the-users-say-item heading">
      <h1>What the users <span style={{display: "block"}}>say about us!</span></h1>
    </div>
    <div className="what-the-users-say-item">
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <h4>horse lover nr 1</h4>
      <p>I love this app. I want to know how much data it takes when using it?</p>
      <h4>Hi! Thank you for using the app. It doesn’t take any surf when using it and you can use it in offline mode. / Equilab</h4>
    </div>
    <div className="what-the-users-say-item">
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <h4>islandshäststjej</h4>
      <p>Very good app. Would like to use the ‘tölt’ function, will that be possible? </p>
      <h4>Very good app. Would like to use the ‘tölt’ function, will that be possible? </h4>
    </div>
    <div className="what-the-users-say-item">
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <h4>Sir Jesper</h4>
      <p>Finally. Thank you. So good</p>
      <h4>Hi! Thank you for using our app, happy that you are satisfied! / Equilab</h4>
    </div>
    <div className="what-the-users-say-item">
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <img className="star" src={star} />
      <h4>horselover</h4>
      <p>Love this app! I’m using it every day and I’m so satisfied!</p>
      <h4>Hi! Thank you for using it and we are so happy you are satisfied. / Equilab</h4>
    </div>
  </div>
)

export default WhatTheUsersSay;
