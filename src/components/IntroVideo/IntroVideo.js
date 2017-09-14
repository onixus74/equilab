import React, { Component } from 'react';
import './IntroVideo.css';

export default class IntroVideo extends Component {
    render () {
        return (
                
                <video autoPlay loop muted>
                    <source src="img/horsemoviegrey2.mp4" type="video/mp4" />
                </video>
               
        );
    }
}