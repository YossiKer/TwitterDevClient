export const addRetweet = (retweet) => {
    return (dispatch) => {
        dispatch({
            type: 'ADD_RETWEET_START'
        });
        
        setTimeout(() => {
            dispatch({
                type: 'ADD_RETWEET_SUCCEED',
                payload: retweet
            });
        }, 1000);
    }
};

export const getRetweets = () => {
    return (dispatch) => {
        dispatch({
            type: 'GET_RETWEETS_START'
        });

        setTimeout(() => {
            dispatch({
                type: 'GET_RETWEETS_SUCCEED',
                payload: []
            });
        }, 1000);
    }
}