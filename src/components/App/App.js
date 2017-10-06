import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import logo from '../../images/logo.svg';
import './App.css';
import '../../css/main.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import IntroVideo from '../IntroVideo/IntroVideo';
import TestW from '../TestW/TestW';

// import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import SectionsContainer from "../SectionsContainer/SectionsContainer";
import Section from "../Section/Section";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


// => in the render() method of your app

class App extends Component {
  
  constructor(props){
    super(props)
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      sliderProps: []
    }
  }

  componentWillMount() {
    this.setState({
      sliderProps: [
        {
          id: 0,
          hedline: "DETAILS",
          hedline_color: "black-text",
          body: "Afterwards you can analyze your training by looking at your horse’s energy consumption, gait distrubution, intensity, jumps, pace, distance and much more.",
          body_color: "white-text",
          color: "rgba(237,108,68, 0.6)",
          img: "/img/details.jpg"
        },
        {
          id: 1,
          hedline: "SOCIAL",
          hedline_color: "black-text",
          body: "See how your co-riders have exercised or give your coach more insight into how you ride when they aren’t around.",
          body_color: "white-text",
          color: "rgba(56,132,130, 0.89)",
          img: "img/social.jpg"
        },
        {
          id: 2,
          hedline: "TRACK",
          hedline_color: "white-text",
          body: "Automatically collect information about your training by turning on Equilab and keeping the phone in your pocket whilst riding.",
          body_color: "white-text",
          color: "rgba(253, 174, 58, 0.9)",
          img: "img/track.jpg"
        },
        {
          id: 3,
          hedline: "TRENDS",
          hedline_color: "black-text",
          body: "Look at your weekly or monthly trends and gain an understanding of how balanced your training has been. ",
          body_color: "black-text",
          color: "rgba(255,255,255, 0.6)",
          img: "img/trends.jpg"
        } 
      ]
    });
  }

  next() {
   this.refs.reactSwipe.next();
 }

 prev() {
   this.refs.reactSwipe.prev();
 }

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      arrowNavigation:      true,
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0'
    };

    let slides = this.state.sliderProps.map(data => {
      return (<div style={{height: "100vh"}} key={data.id}><TestW var={data} /></div>);
    });



    return (
      <div>
        <Header>
          {/* <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a> */}
        </Header>
        <Footer>
          {/* <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a> */}
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="black"><PageWrapper /></Section>
          <Section color="#A7DBD8" className="horse-carousel center">  
            <ReactSwipe ref="reactSwipe" className="carousel" swipeOptions={{continuous: true}}>
                {slides}
            </ReactSwipe>
            <div className="slider-overlay" >
              <div className="button-left"><p type="button" onClick={this.prev}>&#60;</p></div>
              <div className="phone">
                <img src="/img/phone.png" />
                <div className="test"><div className="download">Download</div></div>
                </div>
              <div className="button-right"><p type="button" onClick={this.next}>&#62;</p></div>
            </div>
          </Section>
          <Section className="custom-section" verticalAlign="true" color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
