import React, { useEffect } from 'react'
import { Link, useLocation } from 'wouter'
import TextBox from '../../../ui/input/Textbox'
import useValidacion from '../../../hooks/useValidation'
import ValidationLoginUser from '../../../validation/validationLoginUser'

import useOverlay from '../../../hooks/useOverlay'

import styles from '../login.module.css'

const TextStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 25px 0',
  bg: '#fff',
}

const INITIAL_STATE = {
  RUC: '',
  Usuario: '',
  Password: '',
}

const FormLogin = ({ stateForm, loginUser, autenticate }) => {
  const { setText } = useOverlay()
  const [, setLocation] = useLocation()

  const handleForget = () => {
    stateForm(false)
  }

  useEffect(() => {
    if (autenticate) {
      setLocation('/inicio')
      console.log('Autenticado')
    }
  }, [autenticate])

  const LOGIN = () => {
    setText('Iniciando sesión.')
    loginUser({ RUC, Usuario, Password })
  }

  const { values, handleSubmit, handleChange, errores } = useValidacion(
    INITIAL_STATE,
    ValidationLoginUser,
    LOGIN
  )

  const { RUC, Usuario, Password } = values

  return (
    <div className={styles.form_login}>
      <h1 className={styles.form_h1}>¡Bienvenido proveedor!</h1>
      <form onSubmit={handleSubmit}>
        <TextBox
          type="number"
          helperText={errores && errores.RUC}
          name={'RUC'}
          value={RUC}
          onChange={handleChange}
          width={'100%'}
          height={TextStyles.height}
          margin={TextStyles.margin}
          placeHolder={'RUC'}
          helperTextStyle={{ color: '#fff' }}
          maxLength={11}
        />
        <TextBox
          type="text"
          helperText={errores && errores.Usuario}
          name={'Usuario'}
          value={Usuario}
          onChange={handleChange}
          width={'100%'}
          height={TextStyles.height}
          margin={TextStyles.margin}
          placeHolder={'Usuario'}
          helperTextStyle={{ color: '#fff' }}
        />
        <TextBox
          type="password"
          helperText={errores && errores.Password}
          name={'Password'}
          value={Password}
          onChange={handleChange}
          width={'100%'}
          height={TextStyles.height}
          margin={TextStyles.margin}
          placeHolder={'Contraseña'}
          helperTextStyle={{ color: '#fff' }}
        />
        <div className={styles.group_check}>
          <input type="checkbox" className={styles.checkbox} />{' '}
          <span className={styles.text_checkbox}>Recuérdame</span>
          <div></div>
          <a href="#" className={styles.forgetPassword} onClick={handleForget}>
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <div className={styles.group_buttons}>
          <button type="submit" className="btn btn-caja" onClick={handleSubmit}>
            Ingresar
          </button>
          <Link href="/registrar-proveedor">
            <a className="btn btn-outlined"> Deseo ser proveedor</a>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default FormLogin
