import React, { Component } from 'react';
import IntroVideo from '../IntroVideo/IntroVideo';
import './PageWrapper.css';

export default class PageWrapper extends Component {
    render () {
        return (
            <div className="content">
                <IntroVideo />
            </div>
        );
    }
}