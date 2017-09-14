import React, { Component } from 'react';
import ReactSwipe from 'react-swipe';
import logo from './logo.svg';
import './App.css';
import './css/main.css';

import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';


// => in the render() method of your app

class App extends Component {
  constructor(props){
    super(props)
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
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
      arrowNavigation:      true
    };


    return (
      <div>
        <Header>
          <a href="#sectionOne">Section One</a>
          <a href="#sectionTwo">Section Two</a>
          <a href="#sectionThree">Section Three</a>
        </Header>
        <Footer>
          {/* <a href="">Dcoumentation</a>
          <a href="">Example Source</a>
          <a href="">About</a> */}
        </Footer>
        <SectionsContainer className="container" {...options}>
          <Section className="custom-section" verticalAlign="true" color="#69D2E7">Section 1</Section>
          <Section color="#A7DBD8" className="horse-carousel center">
            <ReactSwipe ref="reactSwipe" className="carousel" swipeOptions={{continuous: false}}>
                <div className="center" style={{height: "100vh", background: "red"}}>Slide 1</div>
                <div className="center" style={{height: "100vh", background: "green"}}>Slide 2</div>
                <div className="center" style={{height: "100vh", background: "yellow"}}>Slide 3</div>
            </ReactSwipe>
            <div style={{width: "100%", position: "absolute", bottom: "100px", textAlign: "center"}}>
              <button type="button" onClick={this.prev}>Prev</button>
              <button type="button" onClick={this.next}>Next</button>
            </div>
          </Section>
          <Section className="custom-section" verticalAlign="true" color="#E0E4CC">Page 3</Section>
        </SectionsContainer>
      </div>
    );
  }
}

export default App;
