import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getRetweets } from '../../Actions/RetweetsActions';
import Tweet from './HomeComponents/Tweet';

class Profile extends Component {
    
    componentWillMount() {
        if (!window.localStorage.getItem('username')) {
            this.props.history.push('/Login');
        }

        this.props.getRetweets();
    }

    componentWillUpdate() {
        if (!window.localStorage.getItem('username')) {
            this.props.history.push('/Login');
        }
    }
    
    render() {
        console.log(this.props.relatedRetweets);
        return (
            <div>
                <h1>Profile of {this.props.match.params.username}</h1>
                <hr/>
                <ul>
                    {this.props.relatedRetweets.map((retweet) => {
                        if (retweet.tweet_user === window.localStorage.getItem('username')) {
                            return (
                                <div>
                                    <h3>Your tweet has been retweeted by {retweet.retweet_user}</h3>
                                    <Tweet id={retweet.tweet_id} username={retweet.tweet_user} content={retweet.content} likes={[]} retweets={[]}/>
                                </div>
                            )
                        } else {
                            return (
                                <div>
                                    <h3>You have retweeted a tweet of {retweet.tweet_user}</h3>
                                    <Tweet id={retweet.tweet_id} username={retweet.tweet_user} content={retweet.content} likes={[]} retweets={[]}/>
                                </div>
                            )
                        }
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        relatedRetweets: state.retweets.retweets.filter(
            (retweet) => retweet.retweet_user === window.localStorage.getItem('username') ||
                         retweet.tweet_user === window.localStorage.getItem('username')
            ).sort((r1, r2) => Date.parse(r1.timestamp)- Date.parse(r2.timestamp))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRetweets: () => dispatch(getRetweets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);