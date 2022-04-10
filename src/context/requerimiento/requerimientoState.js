import React, { useReducer } from 'react'
import ReqContext from './requerimientoContext'
import ReqReducer from './requerimientoReducer'

import clientAxios from '../../config/axios'

import { LISTAR_REQUERIMIENTOS } from '../../types'

const CotizaState = (props) => {
  const initialState = {
    requerimientos: [],
  }

  const [state, dispatch] = useReducer(ReqReducer, initialState)

  const listarReq = async () => {
    try {
      const response = await clientAxios.get('/requerimiento/listar')

      dispatch({
        type: LISTAR_REQUERIMIENTOS,
        payload: response.Data,
      })
    } catch (error) {}
  }

  return (
    <ReqContext.Provider
      value={{
        requerimientos: state.requerimientos,
        listarReq,
      }}
    >
      {props.children}
    </ReqContext.Provider>
  )
}
export default CotizaState
