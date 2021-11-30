const INITIAL_STATE = {
    likes: null,
    dislikes: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_DISLIKES':
            return {...state, dislikes: action.payload.dislikes}
        default:
            return state
    }
}