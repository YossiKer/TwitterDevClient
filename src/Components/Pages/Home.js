import React, { Component } from 'react';

import TextArea from '../Inputs/TextArea';
import Tweets from './HomeComponents/Tweets';

export default class Home extends Component {
    constructor() {
        super();

        this.state = {
            newTweet: '',
            tweets: [
                {
                    username: 'Alexandru Serrano',
                    content: "I bet we'll get the best. look CRISP ugh might as the reason most attention… lol All cats your nintendo?",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Codie Eaton',
                    content: "Vape hows that i have a stray keyboard shortcut but im not being assholes, people read the 9/11 truther.",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Yisroel Espinosa',
                    content: "Vape it off i almost posted this because the right now ?!?!? so you listen to install arch jared and i?",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Angus Murillo',
                    content: "Theres some faves guess whos officially a bit redundant considering Vampirism and Lycanthropy are unsure.",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Ashleigh Huber',
                    content: "Its database of you remember your dump on the other half of date out me as well use Waylands and whatever!",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Marsha Hutchinson',
                    content: "You feel the need to linux and caught her called yay’ my life was still an innocent child. This is!",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Charlene Charlton',
                    content: "Do its not prescribing the access points. they need to bask in 2018 instead of burn in the hardware. also?",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Kelsey Daugherty',
                    content: "Why wipe it really should know better yesterday when there was the best. look yo those pants are!",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Kira Mullen',
                    content: "Grpc bro i hope you beat me as out awesome twitch a #bitcoin lover and it god jesse where do any of me .",
                    likes: [],
                    retweets: []
                },
                {
                    username: 'Suzannah Short',
                    content: "R/incel s cats are you on cinemax next. airing after red shoe diaries It wont suffice to area51 wed have?",
                    likes: [],
                    retweets: []
                }
            ]
        };
    }

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

    handleTweetChange(newTweet) {
        this.setState({
            newTweet: newTweet
        });
    }

    addTweet() {
        if (this.state.newTweet.length !== 0) {
            const newTweets = this.state.tweets;
            newTweets.unshift({
                username: window.localStorage.getItem('username'),
                content: this.state.newTweet,
                likes: [],
                retweets: []
            });

            this.setState({
                newTweet: '',
                tweets: newTweets
            });
        }
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
                <Tweets tweets={this.state.tweets}/>
            </div>
        );
    }
}