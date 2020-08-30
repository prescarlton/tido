// Auth Reducer
const authReducerDefaultState = {
    cognitoUser: {},
    userLoggedIn: false
};

const authReducer = (state = authReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_COGNITO_USER':
            return {
                ...state,
                cognitoUser: action.payload
            }
        case 'SET_USER_LOGGED_IN':
            return {
                ...state,
                userLoggedIn: action.payload
            }
        case 'LOG_OUT_COGNITO_USER':
            return authReducerDefaultState
        default:
            return state
    }
}

export default authReducer;