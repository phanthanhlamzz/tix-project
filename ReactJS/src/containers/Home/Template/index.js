import React, { Component } from 'react'
import HeaderComponent from './components/HeaderComponent';

export default class Template extends Component {
    render() {
        return (
            <>
                <HeaderComponent />
                {this.props.children}
            </>
        )
    }
}
