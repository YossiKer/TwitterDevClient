const initialState = {
    fetching: false,
    fetched: false,
    adding: false,
    added: false,
    tweets: [],
    error: null
};

const TweetsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'GET_TWEETS_START':
            return {
                ...state,
                fetching: true
            }
        case 'GET_TWEETS_SUCCEED':
            return {
                ...state,
                fetching: false,
                fetched: true,
                tweets: action.payload
            }
        case 'GET_TWEETS_FAILED':
            return {
                ...state,
                fetching: false,
                fetched: false,
                error: action.payload
            };
        case 'ADD_TWEET_START':
            return {
                ...state,
                adding: true
            };
        case 'ADD_TWEET_SUCCEED':
            return {
                ...state,
                adding: false,
                added: true,
                tweets: action.payload.concat(state.tweets)
            };
        case 'ADD_TWEET_FAILED':
            return {
                ...state,
                adding: false,
                added: false,
                error: action.payload
            };
        default: 
            return state;
    }
};

export default TweetsReducer;