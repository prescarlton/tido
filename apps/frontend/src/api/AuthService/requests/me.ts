import AuthService from '..'

export const ME_QUERY_KEY = ['getMe']

const getMe = () => AuthService.get('/me').then((res) => res.data.data)

export default getMe
