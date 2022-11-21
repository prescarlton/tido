import {
  login,
  LoginRequest,
  LoginResponse,
  LOGIN_QUERY_KEY,
} from '@/api/AuthService/requests/login'
import { useMutation, UseMutationResult } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { createContext, ReactNode, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from 'react-use'

type AuthContextType = {
  auth?: boolean
  user: any
  loginMutation: UseMutationResult<
    AxiosResponse<LoginResponse>,
    unknown,
    LoginRequest
  >
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth, removeAuth] = useLocalStorage('auth', false)
  const [user, setUser] = useState(null)

  const navigate = useNavigate()

  const onAuth = (user: any) => {
    setAuth(true)
    setUser(user)
    navigate('/')
  }

  const loginMutation = useMutation(LOGIN_QUERY_KEY, login, {
    onSuccess: (data) => {
      console.log(data)
      onAuth(data)
    },
  })

  const logout = () => {
    removeAuth()
    setUser(null)
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
