import React, { Component } from 'react';

import './Tweet.css';

export default class Tweet extends Component {
    constructor() {
        super();

        this.state = {
            liked: false,
            retweeted: false
        };
    }

    handleLikeClick() {
        this.setState({
            liked: !this.state.liked
        });
    }

    handleRetweetClick() {
        this.setState({
            retweeted: !this.state.retweeted
        });
    }

    render() {
        return (
            <div>
                <h4><b>{this.props.username}</b></h4>
                <h5>{this.props.content}</h5>
                <div className="row">
                    <span className="col-lg-2 text-primary"><b>Likes: </b> 
                    <span>{this.props.likes.length}</span> { 
                                                        this.state.liked ? 
                                                            <i className="fas fa-heart" onClick={this.handleLikeClick.bind(this)}></i> : 
                                                            <i className="far fa-heart" onClick={this.handleLikeClick.bind(this)}></i>}</span>
                    <span className="col-lg-3 text-primary"><b>Retweets: </b> 
                    <span>{this.props.retweets.length}</span> { 
                                                        this.state.retweeted ? 
                                                            <i className="fas fa-handshake" onClick={this.handleRetweetClick.bind(this)}></i> : 
                                                            <i className="far fa-handshake" onClick={this.handleRetweetClick.bind(this)}></i>}</span>
                </div>
                <br/>
                <hr/>
            </div>
        );
    }
}