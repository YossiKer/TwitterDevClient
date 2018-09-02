import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextArea from '../Inputs/TextArea';
import Tweets from './HomeComponents/Tweets';

import { getTweets } from '../../Actions/TweetsActions';
import { addTweet } from '../../Actions/TweetsActions';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            newTweet: ''
        };
    }

    componentWillMount() {
        if (!window.localStorage.getItem('username')) {
            this.props.history.push('/Login');
        }
        this.props.getTweets();
    }

    componentWillUpdate() {
        if (!window.localStorage.getItem('username')) {
            this.props.history.push('/Login');
        }
    }

    handleTweetChange(newTweet) {
        this.setState({
            newTweet: newTweet
        });
    }

    addTweet() {
        if (this.state.newTweet.length !== 0) {
            const newTweet = {
                username: window.localStorage.getItem('username'),
                content: this.state.newTweet,
                likes: [],
                retweets: [] 
            }

            this.props.addTweet(Object.assign(newTweet));

            this.setState({
                newTweet: ''
            });
        }
    }

    mapStateToProps = state => {
        return { tweets : state.tweets} ;
    }

    render() {
        return (
            <div>
                <div id="new-area">
                    <br/>
                    <h2>Welcome Back {window.localStorage['username']}!</h2>
                    <h4>What would you like to tweet today?</h4>
                    <TextArea currValue={this.state.newTweet} maxLines="5" onTextChange={this.handleTweetChange.bind(this)}/>
                    <br/>
                    <button disabled={this.state.newTweet.length===0} onClick={this.addTweet.bind(this)} className="btn btn-primary">Tweet</button>                   
                    <hr/>
                </div>
                <Tweets tweets={this.props.tweets.tweets}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {tweets: state.tweets};
};

const mapDispatchToProps = (dispatch) => {
    return {
        getTweets: () => dispatch(getTweets()),
        addTweet: (newTweet) => dispatch(addTweet(newTweet))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);