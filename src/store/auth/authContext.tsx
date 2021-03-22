import React, { useReducer } from 'react'
import AuthReducer from './authReducer'
import { types } from '../types'
import { logInWithEmail, RegisterWithEmail, ResetPassword } from 'services/auth'

interface Props {
  children: React.ReactNode
}

/* eslint-disable */
const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ?? '{}') : null

const initialState = {
  user: user ?? null,
  isLogged: false
}

interface IAuth {
  user: any
  logIn: (email: string, password: string, remember: boolean) => void
  logOut: () => void,
  register: (email: string, password: string) => void
  resetPassword: (email: string, config: any) => void
  isLogged: Boolean
}

export const AuthContext = React.createContext<IAuth>({
  user: initialState,
  logIn: () => { },
  logOut: () => { },
  register: () => { },
  resetPassword: () => { },
  isLogged: false
})

const UserProvider = ({ children }: Props): any => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const logIn = (email: string, password: string, remember: boolean): any => {
    return new Promise((resolve, reject): any => {
      logInWithEmail(email, password)
        .then((data) => {
          dispatch({
            type: types.AUTH_LOGIN,
            payload: data.user
          })
          remember && localStorage.setItem('user', JSON.stringify(data.user))
          resolve(true)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  const register = (email: string, password: string): any => {
    return new Promise((resolve, reject): any => {
      RegisterWithEmail(email, password)
        .then((data) => {
          dispatch({
            type: types.AUTH_REGISTER,
            payload: data.user
          })
          localStorage.setItem('user', JSON.stringify(data.user))
          resolve(true)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  const resetPassword = (email: string, config: any): any => {
    return new Promise((resolve, reject): any => {
      ResetPassword(email, config)
        .then((data) => {
          dispatch({
            type: types.AUTH_FORGOT_PASSWORD
          })
          console.log(data);
          resolve(true)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

  const logOut = (): void => {
    dispatch({
      type: types.AUTH_LOGOUT
    })
    localStorage.removeItem('user')
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        logIn,
        logOut,
        register,
        resetPassword,
        isLogged: state.isLogged
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default UserProvider
