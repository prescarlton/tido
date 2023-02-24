import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosError, AxiosResponse } from 'axios'
import { createContext, ReactNode, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

import {
  login,
  LOGIN_QUERY_KEY,
  LoginRequest,
  LoginResponse,
} from '@/api/AuthService/requests/login'

type AuthContextType = {
  auth?: boolean
  user: any
  loginMutation: UseMutationResult<
    AxiosResponse<LoginResponse>,
    AxiosError<{ message: string }>,
    LoginRequest
  >
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth, removeAuth] = useLocalStorage('auth', false, {
    raw: true,
  })
  const [user, setUser, removeUser] = useLocalStorage('user', {})

  const navigate = useNavigate()

  const onAuth = (user: any) => {
    setAuth(true)
    setUser(user)
    navigate('/')
  }

  const loginMutation = useMutation<
    AxiosResponse<LoginResponse>,
    AxiosError<{ message: string }>,
    LoginRequest
  >(LOGIN_QUERY_KEY, login, {
    onSuccess: (res) => {
      onAuth(res.data)
    },
  })

  const logout = () => {
    removeAuth()
    removeUser()
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ auth, user, loginMutation, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuthContext must be used within a AuthProvider')
  }
  return context
}

export default useAuthContext
