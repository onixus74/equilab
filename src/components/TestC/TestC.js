import React, { Component } from 'react';

export default class TestC extends Component {
    render () {
        return (
            <div className="bgc" style={{ background: `${this.props.bgColor}`}}></div>
        );
    }
}