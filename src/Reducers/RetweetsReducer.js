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
            return {
                ...state,
                adding: false,
                added: true,
                retweets: state.retweets.concat(action.payload)
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