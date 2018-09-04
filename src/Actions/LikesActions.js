import axios from 'axios';

const baseUrl = 'http://localhost:3000/'

export const addLike = (tweetId, like) => {
    return (dispatch) => {
        dispatch({type: 'ADD_LIKE_START'})

        axios.post(baseUrl + 'tweets/' + tweetId + '/likes',
                   {
                       username: like.username
                   },
                   {withCredentials: true})
            .then((response) => {
                const { data } = response;
                console.log('got response', data);
                dispatch({
                    type: 'ADD_LIKE_SUCCEED',
                    payload: data
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