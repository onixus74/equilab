import React, { Component } from 'react';
import './TestC.css';

export default class TestC extends Component {
    render () {
        let triangle = {
            backgroundImage: `linear-gradient(to left top, ${this.props.data.color_full} 0%, ${this.props.data.color_trans} 50%, transparent 50%)`,
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
            zIndex: "3001"
        }

       
        
        return (
            <div className="bgc" style={{ background: this.props.data.color }}>
                <div className="holder">
                <h1 className={this.props.data.hedline_color}>{this.props.data.hedline}</h1>
                <p className={this.props.data.body_color}>{this.props.data.body}</p>
                </div>
                <div style={ triangle }></div>
            </div>
        );
    }
}