import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLike } from '../../../Actions/LikesActions';
import { addRetweet } from '../../../Actions/RetweetsActions';

import './Tweet.css';

class Tweet extends Component {
    constructor() {
        super();

        this.state = {
            liked: false,
            retweeted: false
        };
    }

    handleLikeClick() {
        const newLike = {
            username: window.localStorage.getItem('username')
        }

        this.props.addLike(newLike);

        this.setState({
            liked: true
        });
    }

    handleRetweetClick() {
        const newRetweet = {
            username: window.localStorage.getItem('username')
        }

        this.props.addRetweet(newRetweet);

        this.setState({
            retweeted: true
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

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: (newLike) => dispatch(addLike(newLike)),
        addRetweet: (newRetweet) => dispatch(addRetweet(newRetweet))
    }
}

export default connect(null, mapDispatchToProps)(Tweet);