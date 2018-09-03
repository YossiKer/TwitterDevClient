import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLike } from '../../../Actions/LikesActions';
import { addRetweet } from '../../../Actions/RetweetsActions';
import { getTweets } from '../../../Actions/TweetsActions';

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
        console.log(newLike);
        this.props.addLike(this.props.id, newLike);
        this.props.getTweets();

        this.setState({
            liked: true
        });
    }

    handleRetweetClick() {
        const newRetweet = {
            username: window.localStorage.getItem('username')
        }

        this.props.addRetweet(newRetweet);
        this.props.getTweets();

        console.log(this.props.tweets);

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
                    <span>{this.props.likes}</span> { 
                                                        this.state.liked ? 
                                                            <i className="fas fa-heart" onClick={this.handleLikeClick.bind(this)}></i> : 
                                                            <i className="far fa-heart" onClick={this.handleLikeClick.bind(this)}></i>}</span>
                    <span className="col-lg-3 text-primary"><b>Retweets: </b> 
                    <span>{this.props.retweets}</span> { 
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

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets.tweets
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLike: (tweetId, newLike) => dispatch(addLike(tweetId, newLike)),
        addRetweet: (newRetweet) => dispatch(addRetweet(newRetweet)),
        getTweets: () => dispatch(getTweets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tweet);