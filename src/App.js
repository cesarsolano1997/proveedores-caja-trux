import React from 'react'

import AuthState from './context/authentication/authState'
import CotizaState from './context/cotizaciones/cotizaState'
import RequeState from "./context/requerimiento/requerimientoState"

import axios from 'axios'
import Route from './Route'
import useOverlay from './hooks/useOverlay'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

let axiosRequest = null
let axiosResponse = null

function App()
{
  const { setActive } = useOverlay()
  if (!!axiosRequest || axiosRequest === 0)
  {
    axios.interceptors.request.eject(axiosRequest)
  }
  if (!!axiosResponse || axiosResponse === 0)
  {
    axios.interceptors.response.eject(axiosResponse)
  }
  axiosRequest = axios.interceptors.request.use(
    (config) =>
    {
      const token = localStorage.getItem('token')
      setActive(true)
      if (token)
      {
        config.headers.Authorization = `Bearer ${token}`
        return config
      }
      return config
    },
    (error) =>
    {
      setActive(false)
      toast.error('Ocurrió un error al enviar los datos.', {
        position: 'top-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      console.log('Request', error)
      return Promise.reject(error)
    }
  )

  axiosResponse = axios.interceptors.response.use(
    function (response)
    {
      setActive(false)

      if (response.data.Valid && response.data.Message)
      {
        toast.success(response.data.Message, {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else if (!response.data.Valid)
      {
        toast.warn(response.data.Message, {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }

      return response.data
    },
    function (error)
    {
      setActive(false)
      console.log('Response', error)
      if (!error.response)
      {
        toast.error('Se perdió conexión con el servidor', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else if (error.response.status === 400)
      {
        toast.error(
          error.response.data.Message
            ? error.response.data.Message
            : 'Ocurrió un error en el servidor',
          {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        )
      } else if (
        error.response.status === 403 ||
        error.response.status === 401
      )
      {
        toast.error('Sin autorización', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      } else
      {
        toast.error('Ocurrió un error en el servidor', {
          position: 'top-right',
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }

      return Promise.reject(error)
    }
  )

  return (
    <React.Fragment>
      <RequeState>
        <AuthState>
          <CotizaState>
            <ToastContainer />
            <Route />
          </CotizaState>
        </AuthState>
      </RequeState>
    </React.Fragment>
  )
}

export default App
