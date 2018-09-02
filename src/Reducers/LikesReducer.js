const initialState = {
    adding: false,
    added: false,
    likes: [],
    error: null
}

const LikesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_LIKE_START':
            return {
                ...state,
                adding: true
            };
        case 'ADD_LIKE_SUCCEED':
            return {
                ...state,
                adding: false,
                added: true,
                likes: state.likes.concat(action.payload)
            };
        case 'ADD_LIKE_FAILED': 
            return {
                ...state,
                adding: false,
                added: false
            }
        default:
            return state;
    }
}

export default LikesReducer;