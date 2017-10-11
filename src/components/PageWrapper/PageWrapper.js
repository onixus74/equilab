import React, { Component } from 'react';
import IntroVideo from '../IntroVideo/IntroVideo';
import './PageWrapper.css';
import Button from '../Button';
import SvgArrow from '../../images/equilabarrooowww.gif';

export default class PageWrapper extends Component {
    render () {
        console.log(SvgArrow);
        return (
            <div className="content">
                <div className="hold">
                    <h1 className="caption">
                    Equilab - an app for the people who want the best for their horse.
                    </h1>
                    <Button borderColor="white" hoverBgColor="white" textColor="white" hoverTextColor="black" text="Download"/>
                    <div className="arrow-down">
                        <img src={SvgArrow} />
                        <div className="margin"></div>
                    </div>
                </div>
                <IntroVideo />
                <div className="corner-right">
                    <div className="text-corner-right">Årets pryl 2016</div>
                </div>
            </div>
            
        );
    }
}