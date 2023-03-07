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
  loginMutation: UseMutationResult<LoginResponse, unknown, LoginRequest>
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth, removeAuth] = useLocalStorage('auth', false)

  const navigate = useNavigate()

  const onAuth = () => {
    setAuth(true)
    navigate('/')
  }

  const loginMutation = useMutation(LOGIN_QUERY_KEY, login, {
    onSuccess: (res) => {
      onAuth()
    },
  })

  const logout = () => {
    removeAuth()
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ auth, loginMutation, logout }}>
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
