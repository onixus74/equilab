import React, { Component } from 'react';
import IntroVideo from '../IntroVideo/IntroVideo';
import './PageWrapper.css';

export default class PageWrapper extends Component {
    render () {
        return (
            <div className="content">
                <div className="holder"><h1 className="caption">EQUILAB</h1></div>
                <IntroVideo />
            </div>
        );
    }
}