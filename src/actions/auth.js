export const setCognitoUser = (awsUser) => ({
    type: 'SET_COGNITO_USER',
    payload: awsUser
})

export const setUserLoggedIn = (bool) => ({
    type: 'SET_USER_LOGGED_IN',
    payload: bool
})

export const logOutCognitoUser = () => ({
    type: 'LOG_OUT_COGNITO_USER'
})