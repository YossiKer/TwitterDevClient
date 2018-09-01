import React, { Component } from 'react';

export default class Profile extends Component {
    
    componentWillMount() {
        if (!window.localStorage.getItem('username')) {
            this.props.history.push('/Login');
        }
    }

    componentWillUpdate() {
        if (!window.localStorage.getItem('username')) {
            this.props.history.push('/Login');
        }
    }
    
    render() {
        return (
            <h1>Profile of {this.props.match.params.username}</h1>
        );
    }
}