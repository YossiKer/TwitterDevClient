const initialState = {
    adding: false,
    added: false,
    fetching: false,
    fetched: false,
    retweets: [],
    error: null
};

const RetweetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_RETWEET_START':
            return {
                ...state,
                adding: true
            };
        case 'ADD_RETWEET_SUCCEED': 
            const { post_id, username, timestamp, tweet_username, tweet_content} = action.payload;
            
            let newRetweet = {
                tweet_id: parseInt(post_id),
                retweet_user: username,
                timestamp: timestamp,
                tweet_user: tweet_username,
                content: tweet_content
            }

            return {
                ...state,
                adding: false,
                added: true,
                retweets: state.retweets.concat(newRetweet)
            };
        case 'ADD_RETWEET_FAILED':
            return {
                ...state,
                adding: false,
                added: false,
                error: action.payload
            };
        case 'GET_RETWEETS_START':
            return {
                ...state,
                fetching: true
            };
        case 'GET_RETWEETS_SUCCEED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                retweets: action.payload
            };
        case 'GET_RETWEETS_FAILED': {
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            };
        }
        default:
            return state;
    }
}

export default RetweetsReducer;