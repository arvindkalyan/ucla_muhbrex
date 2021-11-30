export const signIn = (userId, userEmail) => {
    return {
        type: 'SIGN_IN',
        payload: {
            userId: userId,
            userEmail: userEmail
        }
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};

export const setDislike = dislikes => {
    return {
        type: 'SET_DISLIKES',
        payload: {
            dislikes: dislikes
        }
    }
}
