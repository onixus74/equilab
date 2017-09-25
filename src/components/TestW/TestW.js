import React, { Component } from 'react';
import TestC from '../TestC/TestC';

export default class TestW extends Component {
    render () {
        console.log(this.props.bgImg);
        return (
            <div className="bg" style={{ background: `url(${this.props.bgImg})`, backgroundSize: 'cover' }}>
                <TestC bgColor={this.props.bgColor} />
            </div>
        );
    }
}
