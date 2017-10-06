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
      scrollBar: false
    }

  }

  componentWillMount() {
    this.setState({video: [
        {
          video_src: "img/horsemoviegrey2.mp4",
          muted: "true",
          autoplay: "true",
          loop: "true",
          controls: "false"
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

    console.log(this.state.scrollBar);
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
            <ReactSwipe ref="reactSwipe1" className="carousel" swipeOptions={{continuous: false}}>
                <div className="center" style={{height: "100vh", background: "red"}}><TestW /></div>
                <div className="center" style={{height: "100vh", background: "green"}}>Slide 2</div>
                <div className="center" style={{height: "100vh", background: "yellow"}}>Slide 3</div>
            </ReactSwipe>
            <div style={{width: "100%", position: "absolute", bottom: "100px", textAlign: "center"}}>
              <button type="button" onClick={() => this.prev(1)}>Prev</button>
              <button type="button" onClick={() => this.next(1)}>Next</button>
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
