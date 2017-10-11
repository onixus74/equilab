import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import logo from '../../images/logo.svg';
import './App.css';
import '../../css/main.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import IntroVideo from '../IntroVideo/IntroVideo';
import TestW from '../TestW/TestW';
import Contact from '../Contact/Contact';
import Hire from "../Hire";
import WhatTheySay from "../WhatTheySay";
import WhatTheUsersSay from "../WhatTheUsersSay";

// import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import SectionsContainer from "../SectionsContainer/SectionsContainer";
import Section from "../Section/Section";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Faq from "../Faq/Faq";
import arrow from "../../images/arrow.svg";
import Button from "../Button";
import Logo from '../../images/logowhite.svg';


// => in the render() method of your app

class App extends Component {

  constructor(props){
    super(props)
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {

      video: [],
      pageHash: null,
      activeSlide: 1,
      bulletsVisible: true,
      scrollBar: false,
      sliderProps: []

    }
  }

  componentWillMount() {
    this.setState({
      sliderProps: [
        {
          id: 2,
          hedline: "TRACK",
          hedline_color: "white-text",
          body: "Automatically collect information about your training by turning on Equilab and keeping the phone in your pocket whilst riding.",
          body_color: "white-text",
          color: "rgba(253, 174, 58, 0.9)",
          color_full: "rgb(253, 174, 58)",
          color_trans: "rgba(253, 174, 58, 0.65)",
          img: "img/track.jpg"
        },
        {
          id: 0,
          hedline: "DETAILS",
          hedline_color: "white-text",
          body: "Afterwards you can analyze your training by looking at your horse’s energy consumption, gait distrubution, intensity, jumps, pace, distance and much more.",
          body_color: "white-text",
          color: "rgba(237,108,68, 0.8)",
          color_full: "rgb(237,108,68)",
          color_trans: "rgba(237,108,68, 0.65)",
          img: "/img/details.jpg"
        },
        {
          id: 1,
          hedline: "SOCIAL",
          hedline_color: "white-text",
          body: "See how your co-riders have exercised or give your coach more insight into how you ride when they aren’t around.",
          body_color: "white-text",
          color: "rgba(56,132,130, 0.89)",
          color_full: "rgb(56,132,130)",
          color_trans: "rgba(56,132,130, 0.65)",
          img: "img/social.jpg"
        },
        {
          id: 3,
          hedline: "TRENDS",
          hedline_color: "black-text",
          body: "Look at your weekly or monthly trends and gain an understanding of how balanced your training has been. ",
          body_color: "black-text",
          color: "rgba(255,255,255, 0.6)",
          color_full: "rgb(255,255,255)",
          color_trans: "rgba(255,255,255, 0.65)",
          img: "img/trends.jpg"
        }
      ]
    });
  }

  componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.setState({
        pageHash: window.location.hash
      })
    })

    window.addEventListener("resize", () => {
      const scrollBar = window.innerWidth < 960 ? true : false;

      this.setState({
        scrollBar
      })
    })

  }

  next(id) {

    const instance = "reactSwipe"+id;

    this.refs[instance].swipe.next();

    this.setState((prevState) => {
      return {
        activeSlide: prevState.activeSlide < 2 ? prevState.activeSlide + 1 : 1,
        bulletsVisible: false
      }
    })

    setTimeout(() => {this.setState({bulletsVisible: true})}, 500);
 }

 prev(id) {
   const instance = "reactSwipe"+id;

   this.refs[instance].swipe.prev();

   this.setState((prevState) => {
     return {
       activeSlide: prevState.activeSlide > 1 ? prevState.activeSlide - 1 : 2,
       bulletsVisible: false
     }
   })

   setTimeout(() => {this.setState({bulletsVisible: true})}, 500);
 }

  render() {


    let options = {
      activeClass:          'activeSection',
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour', 'sectionFive', 'sectionSix'],
      scrollBar:            this.state.scrollBar,
      navigation:           this.state.pageHash === "#sectionThree" ? false : true,
      verticalAlign:        false,
      arrowNavigation:      true,
      sectionPaddingTop:    '0',
      sectionPaddingBottom: '0',
      delay:                700
    };


    let slides = this.state.sliderProps.map(data => {
      return (<div style={{height: "100vh"}} key={data.id}><TestW var={data} /></div>);
    });



    return (
      <div>
        <Header>
          <div className="logo-wrapper"><img className="logo" src={Logo} /></div>
            <div className="menu-links"><a href="#sectionThree">About</a>
            <a href="#sectionFour">Hiring</a>
            <a href="#sectionFive">FAQ</a>
            <a href="#sectionSix">Contact</a>
          </div> 
        </Header>
        <Footer>
          {/* <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a> */}
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="black"><PageWrapper /></Section>

          <Section color="#A7DBD8" className="horse-carousel center">
            <ReactSwipe ref="reactSwipe1" className="carousel" swipeOptions={{continuous: true}}>
                {slides}
            </ReactSwipe>
            <div className="slider-overlay" >
              <div className="button-left"><p type="button" onClick={() => this.prev(1)}><img src={arrow} /></p></div>

              <div className="phone-column">
                <div className="phone">
                  {<div className="phone-background"></div>}
                  <div className="iframe-wrap"><iframe src="https://www.youtube.com/embed/uEENgtrO4-8?autoplay=1&loop=1&playlist=uEENgtrO4-8" frameborder="0" allowfullscreen></iframe></div>
                </div>
                  <Button text="Download" />
              </div>

              <div className="button-right"><p type="button" onClick={() => this.next(1)}><img src={arrow} /></p></div>
              
            </div>
            <div className="pluttar">
              <span className="plutt active"></span>
              <span className="plutt"></span>
              <span className="plutt"></span>
              <span className="plutt"></span>
            </div>

          </Section>
          <Section className="what-they-say-1-section custom-section center" color="">
            <ReactSwipe ref="reactSwipe2" swipeOptions={{continuous: true, speed: 500}}>
                <div className="center"><WhatTheySay /></div>
                <div className="center" style={{height: "100vh", background: ""}}><WhatTheUsersSay /></div>

            </ReactSwipe>

            {this.state.bulletsVisible ?
              <div>
                <div style={{zIndex: "10", display: "flex", justifyContent: "center", alignItems: "center", width: "100px", left: "0", height: "100%", position: "absolute", bottom: "0"}}>
                  <img src={arrow} className="prev-button" onClick={() => this.prev(2)} />
                </div>

                <div className="right-side-bar" style={{zIndex: "10", display: "flex", justifyContent: "center", alignItems: "center", width: "100px", height: "100%", position: "absolute", right: "0", top: "0"}}>
                  <img src={arrow} className="next-button" onClick={() => this.next(2)} />
                </div>
              </div>
            : "" }

            <div className="bullets">
              <div className={`bullet-1 ${this.state.activeSlide === 1 ? "fill-bullet" : ""}`}></div>
              <div className={`bullet-2 ${this.state.activeSlide === 2 ? "fill-bullet" : ""}`}></div>

            </div>
            <div className="what-they-say-item download"><Button text="Download"/></div>
          </Section>
          <Section className="hire-section custom-section center" color=""><Hire /></Section>
          <Section className="faq-section custom-section center" verticalAlign="true" color=""><Faq /></Section>
          <Section className="contact-section custom-section center" verticalAlign="true" color="#EB6D4B"><Contact /></Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
