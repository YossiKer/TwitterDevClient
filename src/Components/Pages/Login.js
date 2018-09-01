import React, { Component } from 'react';

export default class Login extends Component {

    constructor() {
        super();
        
        this.state = {
            username: ''
        }
    }

    HandleLogin(event) {
        const username = this.state.username;
        this.props.loginFunction(username);
    }

    handleInput(event) {
        this.setState({
            username: event.target.value
        });
    }

    render() {
        return (
            <div id="log-in">
                <br/>
                <hr/>
                <h1>Login: </h1>
                <hr/>
                <input value={this.state.username} type="text" className="form-control" onInput={this.handleInput.bind(this)}/>
                <br/>
                <button className="btn btn-primary" onClick={this.HandleLogin.bind(this)}>Login</button>
                <hr/>
            </div>
        );
    }
}