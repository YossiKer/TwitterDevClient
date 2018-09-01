import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

export default class Header extends Component{

    constructor() {
        super();

        this.state = {
            collapse: true,
            homePageActive: false,
            profilePageActive: false
        };
    }

    handleClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    handleLogOut() {
        this.props.onLogOut();
    }

    checkLoggedIn() {
        if (window.localStorage.getItem('username')) {
            return <span id="log-out-link" className="nav-item text-light" onClick={this.handleLogOut.bind(this)}><b>Log Out</b></span>
        }
    }

    render() {
        const { pathname } = window.location;
        const homePageActive = pathname.startsWith('/Home') || pathname === '/' ? "active " : "";
        const profilePageActive = pathname.startsWith('/Profile') ? "active " : "";

        const collapsed = this.state.collapse ? "collapse " : "";

        return (
            <div className="bg-primary">
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary col-lg-8 offset-lg-2" id="header">
                    <span className="navbar-brand">TwitterDev</span>
                    <button onClick={this.handleClick.bind(this)} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={collapsed + "navbar-collapse"} id="navbarColor02">
                        <ul className="navbar-nav mr-auto">
                            <li className={homePageActive + "nav-item"}>
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className={profilePageActive + "nav-item"}>
                                <Link className="nav-link" to={"/Profile/" + window.localStorage['username']}>Profile</Link>
                            </li>
                        </ul>
                        { this.checkLoggedIn() }
                    </div>
                </nav>
            </div>
        );
    }
}