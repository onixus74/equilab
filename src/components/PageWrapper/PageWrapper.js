import React, { Component } from 'react';
import IntroVideo from '../IntroVideo/IntroVideo';
import './PageWrapper.css';
import Button from "../Button";

export default class PageWrapper extends Component {
    render () {
        return (
            <div className="content">
                <div className="hold">
                    <h1 className="caption">
                    Equilab - an app for the people who want the best for their horse.
                    </h1>
                    <Button borderColor="white" hoverBgColor="white" textColor="white" hoverTextColor="black" text="Download"/>
                </div>
                <IntroVideo />
                <div className="corner-right">
                
                    <div className="text-corner-right">Årets pryl</div>
                </div>
            </div>
            
        );
    }
}