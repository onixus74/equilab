import React, { Component } from 'react';
import "./Faq.css";
import FaqNav from "../FaqNav/FaqNav";
import FaqText from "../FaqText/FaqText";

const faqCats = [
  "Basics",
  "Privacy",
  "Usage",
  "Functionality",
  "Other"
]

class Faq extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: "Basics"
    }
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick(faqCat) {
    this.setState({
      visible: faqCat
    })

  }



  render() {
    return (
      <div className="faq-wrap">

        <div className="faq">
            <div className="faq-item"><h1>FAQ</h1></div>
            <div className="faq-item">

                <FaqNav visible={this.state.visible} clickFunction={this.handleClick} faqCats={faqCats}/>
            </div>
            <div className="faq-item">
              <FaqText ref="faqText" visible={this.state.visible} />


            </div>
        </div>
        
      </div>

    );
  }

}

export default Faq;
