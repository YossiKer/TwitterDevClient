export const addLike = (like) => {
    return (dispatch) => {
        type: 'ADD_LIKE_START'
    };

    setTimeout((like) => ({
        type: 'ADD_LIKE_SUCCEED',
        payload: like
    }), 1000)
}