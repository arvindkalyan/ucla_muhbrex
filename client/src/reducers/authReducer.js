const INITIAL_STATE = {
    isSignedIn: null,
    userId: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userId: action.payload.userId, userEmail: action.payload.userEmail }
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userId: null}
        default:
            return state
    }
}

