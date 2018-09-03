import axios from 'axios';

const baseUrl = 'http://localhost:3000/'

export const addLike = (tweetId, like) => {
    console.log(like);
    return (dispatch) => {
        dispatch({type: 'ADD_LIKE_START'})

        console.log('requesting server');
        axios.post(baseUrl + 'tweets/' + tweetId + '/likes',
                   {
                       username: like.username
                   },
                   {withCredentials: true})
            .then((response) => {
                console.log('got response', response);
                dispatch({
                    type: 'ADD_LIKE_SUCCEED',
                    payload: response
                });
            })
            .catch((error) => {
                console.log('got error', error);
                dispatch({
                    type: 'ADD_LIKE_FAILED',
                    payload: error
                });
            })
    }
}