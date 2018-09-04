import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

export const getTweets = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_TWEETS_START'
        });

        axios.get(baseUrl + 'tweets', {withCredentials: true})
            .then((response) => {
                const { data } = response;
                let tweets = [];
                if (data.length !== 0) {
                    tweets = data;
                }

                dispatch({
                    type: 'GET_TWEETS_SUCCEED',
                    payload: tweets
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'GET_TWEETS_FAILED',
                    payload: error
                });
            });
    } 
}

export const addTweet = (tweet) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_TWEET_START'
        });

        axios.post(baseUrl + 'tweets', {
            username: tweet.username,
            content: tweet.content
        }, {withCredentials: true})
            .then((response) => {
                const { data } = response;
                data.likesCount = 0;
                data.retweetsCount = 0;
                data.content = data.text_content;

                console.log(data);
                dispatch({
                    type: 'ADD_TWEET_SUCCEED',
                    payload: [data]
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'ADD_TWEET_SUCCEED',
                    payload: error
                });
            })
    }
}