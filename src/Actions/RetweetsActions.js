import axios from 'axios';

const baseUrl = 'http://localhost:3000/';

export const addRetweet = (tweetId, retweet) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_RETWEET_START'
        });

        axios.post(baseUrl + 'tweets/' + tweetId + '/retweet', 
                   {
                       username: retweet.username
                   },{withCredentials: true})
            .then((response) => {
                const { data } = response;
                const { tweet_username, tweet_content} = retweet;
                
                data.tweet_username = tweet_username;
                data.tweet_content = tweet_content;

                console.log(data);
                dispatch({
                    type: 'ADD_RETWEET_SUCCEED',
                    payload: data
                });
            })
            .catch((error) => {
                dispatch({
                    type: 'ADD_RETWEET_FAILED',
                    payload: error
                });
            })
    }
};

export const getRetweets = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_RETWEETS_START'
        });

        axios.get(baseUrl + "retweets", {withCredentials: true})
            .then((response) => {
                const { data } = response;
                let retweets = [];

                if (data.length !== 0) {
                    retweets = data;
                }
                dispatch({
                    type: 'GET_RETWEETS_SUCCEED',
                    payload: retweets   
                });
            })  
            .catch((error) => {
                dispatch({
                    type: 'GET_RETWEETS_SUCCEED',
                    payload: error
                });
            })
    }
}