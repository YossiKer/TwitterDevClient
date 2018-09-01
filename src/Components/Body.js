import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Login from './Pages/Login';

export default class Body extends Component {
    constructor() {
        super();
        this.state = {
            style: {
                minHeight: '93vh'
            }
        }
    }

    renderLogin() {
        if (!this.props.username) {
            return <Route path="/Login" render={(props) => {return <Login {...props} loginFunction={this.props.onLogIn}/>}}/>
        } else {
            return <Redirect to="/" />
        }
    }

    render() {
        return (
            <div className="col-lg-8 offset-lg-2 card" style={this.state.style}>
                <Switch>
                    <Route path="/Profile/:username" component={Profile}/>
                    <Route exact path="/" component={Home}/>
                    { this.renderLogin() }
                </Switch>
            </div>
        )
    }
}