import React, { useReducer } from 'react'
import AuthContext from './authContext'
import AuthReducer from './authReducer'

import clientAxios from '../../config/axios'

import { LOGIN_EXITOSO, USER_VALIDATE, LOGOUT } from '../../types'

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    autenticate: null,
    empresa: null,
    RUC: null,
    idProveedor: null,
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const loginUser = async (data) => {
    try {
      const response = await clientAxios.post('login/login', {
        RUC: data.RUC,
        Usuario: data.Usuario,
        Password: data.Password,
      })

      dispatch({
        type: LOGIN_EXITOSO,
        payload: response.Data,
      })
    } catch (error) {}
  }

  const ValidateUser = async () => {
    try {
      const response = await clientAxios.post('/login/Validate')

      dispatch({
        type: USER_VALIDATE,
        payload: response.Data,
      })
    } catch {}
  }

  const Logout = async () => {
    try {
      dispatch({
        type: LOGOUT,
      })
    } catch {}
  }

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticate: state.autenticate,
        empresa: state.empresa,
        RUC: state.RUC,
        idProveedor: state.idProveedor,
        loginUser,
        ValidateUser,
        Logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthState
