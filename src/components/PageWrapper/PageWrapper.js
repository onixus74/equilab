import React, { Component } from 'react';
import IntroVideo from '../IntroVideo/IntroVideo';
import './PageWrapper.css';

export default class PageWrapper extends Component {
    render () {
        return (
            <div className="content">
                <div className="hold">
                    <h1 className="caption">
                    Equilab - an app for the people who want the best for their horse.
                    </h1>
                </div>
                <IntroVideo />
            </div>
            
        );
    }
}