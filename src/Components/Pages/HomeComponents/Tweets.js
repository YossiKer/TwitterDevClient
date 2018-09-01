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
        const tweetsElements = this.props.tweets.map((tweet, id) => {
            return <Tweet key={id} username={tweet.username} content={tweet.content} likes={tweet.likes} retweets={tweet.retweets}/>
        });

        return (
            <div id="Tweets">
                {tweetsElements}
            </div>
        );
    }
}