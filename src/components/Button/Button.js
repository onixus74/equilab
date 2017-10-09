import React, { Component } from 'react';
import "./Button.css";
import styled from "styled-components";

const wtTime = 200;
const htTime = wtTime / 3;
const totBorderTransitionTime = wtTime + htTime;
const bgTransitionTime = wtTime;
const totTransitionTime = totBorderTransitionTime + bgTransitionTime;
const startTextTransitionTime = totTransitionTime - (bgTransitionTime / 1.7);

const MainButton = styled.div`

  display: inline-block;
  width: 190px;
  line-height: 50px;
  text-align: center;
  position: relative;
  text-decoration: none;
  color: ${props => props.textColor || "black"};
  transition: color 50ms linear;
  z-index: 10;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0px 5px;
  padding-top: 10px;

  &:hover {
    transition: color 1ms linear ${startTextTransitionTime + "ms"};
    color: ${props => props.hoverTextColor || "white"};
  }
  &:before, &:after {
    position: absolute;
    content: "";
  }
  &:before {
    border-top: 5px solid ${props => props.borderColor || "black"};
    border-left: 5px solid ${props => props.borderColor || "black"};
    width: 190px;
    height: 50px;
    left: -5px;
    bottom: 0;
    transition: width ${wtTime + "ms"} linear ${htTime + "ms"}, height ${htTime + "ms"} linear;
  }
  &:after {
    border-bottom: 5px solid ${props => props.borderColor || "black"};
    border-right: 5px solid ${props => props.borderColor || "black"};
    width: 190px;
    height: 50px;
    bottom: 0;
    right: -5px;
    transition: height ${wtTime + "ms"} linear ${htTime + "ms"}, width ${htTime + "ms"} linear;
  }
  &:hover:before {
    transition: width ${wtTime + "ms"} linear, height ${htTime + "ms"} linear ${wtTime + "ms"};
    width: 0;
    height: 0;
  }
  &:hover:after {
    transition: height ${wtTime + "ms"} linear, width ${htTime + "ms"} linear ${wtTime + "ms"};
    width: 0;
    height: 0;
  }
`;

const ButtonAltColor = styled.div`
height: 0;
width: 200px;
position: absolute;
bottom: 0;
left: -5px;
background: ${props => props.hoverBgColor || "black"};
z-index: -1;
transition: height ${bgTransitionTime + "ms"} linear;

${MainButton}:hover & {
    transition: height ${bgTransitionTime + "ms"} linear ${wtTime + "ms"};
    height: 55px;
}
`;

class Button extends Component {

  render() {

    return (
      <MainButton className="button-text" {...this.props}>
        <ButtonAltColor hoverBgColor={this.props.hoverBgColor}/>
        {this.props.text}
      </MainButton>

      /* <div ref="button" className="button button-text" style={{color: this.props.color}}>
        <div className="button-alt-color"></div>
        {this.props.text}
      </div> */
    );
  }

}

export default Button;
