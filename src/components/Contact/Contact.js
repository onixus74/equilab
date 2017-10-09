import React, { Component } from 'react';
import "./Contact.css";
import Button from "../Button";
import instagram from "../../images/instagram.svg";
import facebook from "../../images/facebook.svg";

class Contact extends Component {

  render() {
    return (
      <div className="contact-wrap">

        <div className="contact">

          <div className="contact-content">
            <h1>Contact</h1>
            <p>Equilab is made together with riders to get the best app possible for our users. We would love your feedback on how we can make the app even better. In the end, this app is for you and your horse and who knows your horse better than you do?</p>
            <span className="medium-bold">team@equilab.horse</span>

          </div>

        </div>
        <div className="contact-footer">
          <div className="social">
            <p>Följ oss på</p>
            <img src={instagram} />
            <img src={facebook} />
          </div>
          <Button borderColor="white" hoverBgColor="white" textColor="white" hoverTextColor="black" text="Download"/>
        </div>
      </div>

    );
  }

}

export default Contact;
