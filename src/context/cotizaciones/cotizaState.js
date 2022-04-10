import React, { useReducer } from 'react'
import CotizaContext from './cotizaContext'
import CotizaReducer from './cotizaReducer'

import clientAxios from '../../config/axios'

import { LISTAR_COTIZACIONES, OBTENER_COTIZACIONES } from '../../types'

const CotizaState = (props) => {
  const initialState = {
    cotizaciones: [],
    cotizacion: null,
  }

  const [state, dispatch] = useReducer(CotizaReducer, initialState)

  const listarCotizaciones = async (id) => {
    try {
      const response = await clientAxios.get(`/cotizacion/listar/${id}`)

      dispatch({
        type: LISTAR_COTIZACIONES,
        payload: response.Data,
      })
    } catch (error) {
      console.log(error)
    }
  }

  const ObtenerCotizacion = async (id) => {
    dispatch({
      type: OBTENER_COTIZACIONES,
      payload: id,
    })
  }

  return (
    <CotizaContext.Provider
      value={{
        cotizaciones: state.cotizaciones,
        cotizacion: state.cotizacion,
        listarCotizaciones,
        ObtenerCotizacion,
      }}
    >
      {props.children}
    </CotizaContext.Provider>
  )
}
export default CotizaState
