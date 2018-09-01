import React, { Component } from 'react';

export default class Login extends Component {

    constructor() {
        super();
        
        this.state = {
            username: '',
            style: {
                marginTop: '10vh'
            }
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
            <div id="log-in" className="row" style={this.state.style}>
                <form className="card col-lg-6 offset-lg-3 border-primary" onSubmit={this.HandleLogin.bind(this)}>
                    <br/>
                    <h1>Login: </h1>
                    <br/>
                    <h4>Username:</h4>
                    <input value={this.state.username} type="text" className="form-control" onInput={this.handleInput.bind(this)}/>
                    <br/>
                    <button type="submit" className="btn btn-primary col-lg-2 offset-lg-5">Login</button>
                    <br/>
                </form>
            </div>
        );
    }
}