import React, { useState, useContext, useEffect } from 'react'
import Requeriment from '../Requeriment/Requeriment'
import FormForgetPassword from './components/FormForgetPassword'
import FormLogin from './components/FormLogin'

import AuthContext from '../../context/authentication/authContext'

import styles from './login.module.css'
import useWindowSize from '../../hooks/useWindonsSize'

const Login = () => {
  const authContext = useContext(AuthContext)
  const { loginUser, autenticate } = authContext

  const [stateForm, setStateForm] = useState(true)

  const size = useWindowSize()

  useEffect(() => {
    localStorage.clear()
  }, [])

  return (
    <div className={styles.content}>
      <div className={styles.content_login}>
        <div className={styles.logo}>
          <div className={styles.box_logo}>
            <img
              src="imagenes/Caja-Trujillo.png"
              className={styles.img_logo}
              alt="Logo"
              title="Logo Caja Trujillo"
            ></img>
          </div>
        </div>
        {stateForm ? (
          <FormLogin
            stateForm={setStateForm}
            loginUser={loginUser}
            autenticate={autenticate}
          />
        ) : (
          <FormForgetPassword stateForm={setStateForm} />
        )}
      </div>
      {size.width > 768 && (
        <div className={styles.content_requeriments}>
          <div className={styles.title_requeriments}>
            <h3 className={styles.h3}>Nuevos requerimientos</h3>
          </div>
          <Requeriment
            direction={'down'}
            scrolldelay={'80'}
            scrollamount={'10'}
            style={{ maxHeight: '90vh' }}
          />
        </div>
      )}
    </div>
  )
}

export default Login
