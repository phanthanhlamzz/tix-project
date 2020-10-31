import React, { Component } from 'react'
import Template from './Template';
import { Route} from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <Template>
                <Route 
                 exact={this.props.exact}
                 path={this.props.path}
                 component={this.props.component}
                />
            </Template>
        )
    }
}
