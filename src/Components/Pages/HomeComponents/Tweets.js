import React, { Component } from 'react';
import './Tweets.css';

import Tweet from './Tweet';

export default class Tweets extends Component {
    constructor() {
        super();

        this.state = {
            
        }
    }

    render() {
        const tweetsElements = this.props.tweets.map((tweet) => {
            return <Tweet key={tweet.id} id={tweet.id} username={tweet.username} content={tweet.content} likes={tweet.likesCount} retweets={tweet.retweetsCount}/>
        });

        return (
            <div id="Tweets">
                {tweetsElements}
            </div>
        );
    }
}