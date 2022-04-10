import React, { useReducer } from 'react'
import UserContext from './userContext'
import UserReducer from './userReducer'

import { USER_GET_DATA_PERSONAL, USER_CHANGE_DATA_PERSONAL } from '../../types'

const UserState = (props) => {
  const initialState = {
    Personal: {
      email: '',
      celular: '',
      RPM: '',
      Nextel: '',
      RPC: '',
      PaginaWeb: '',
      RegimenTributario: '',
      CamaraComercio: false,
      Bienes: '',
      Servicios: '',
      Detraccion: false,
      CtaBN: '',
      Padron: '',
      NPasaporte: '',
      Nacionalidad: '',
      EstadoCivil: '',
      Grado: '',
      CentroEstudios: '',
      Especialidad: '',
    },
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  const GetDataUserPersonal = () => {
    dispatch({
      type: USER_GET_DATA_PERSONAL,
      payload: initialState.Personal,
    })
  }

  const HandleDataUser = (name, value) => {
    console.log({ name, value })
    dispatch({
      type: USER_CHANGE_DATA_PERSONAL,
      payload: {
        name,
        value,
      },
    })
  }

  return (
    <UserContext.Provider
      value={{
        Personal: state.Personal,
        GetDataUserPersonal,
        HandleDataUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
