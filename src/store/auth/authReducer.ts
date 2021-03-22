import { types } from '../types'
import * as React from 'react'

const reducer: React.Reducer<any, any> = (state, action) => {
  switch (action.type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    case types.AUTH_LOGOUT:
      return {
        user: null,
        isLogged: false
      }
    case types.AUTH_REGISTER:
      return {
        ...state,
        user: action.payload,
        islogged: true
      }
    case types.AUTH_FORGOT_PASSWORD:
      return {
        ...state
      }
    default:
      return state
  }
}

export default reducer
