import axios from 'axios';

export const addLike = (like) => {
    return (dispatch) => {
        dispatch({type: 'ADD_LIKE_START'})

        console.log('requesting server');
        axios.get('')
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