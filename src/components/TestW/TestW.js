import React, { Component } from 'react';
import TestC from '../TestC/TestC';

export default class TestW extends Component {
    render () {
        return (
            <div className="bg" style={{background: `url("${this.props.var.img}")`, backgroundSize: "cover" }}>
                <TestC data={this.props.var} />
            </div>
        );
    }
}
