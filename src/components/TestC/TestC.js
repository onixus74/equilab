import React, { Component } from 'react';
import './TestC.css';

export default class TestC extends Component {
    render () {
        return (
            <div className="bgc" style={{ background: this.props.data.color }}>
                <div className="holder">
                <h1>{this.props.data.hedline}</h1>
                <p>{this.props.data.body}</p>
                </div>
            </div>
        );
    }
}