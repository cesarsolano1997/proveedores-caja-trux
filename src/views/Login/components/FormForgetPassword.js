import React from 'react'
import TextBox from '../../../ui/input/Textbox'

import styles from '../login.module.css'

const TextStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 25px 0',
  bg: '#fff'
}

const FormForgetPassword = ({ stateForm }) => {
  const handleForget = () => {
    stateForm(true)
  }

  return (
        <div className={styles.form_login}>
            <h1 className={styles.form_h1}>Reestablecer contraseña</h1>
            <p className={styles.text_secundary}>Se enviará un correo para reestablecer su contraseña</p>
            <form>
                <TextBox
                    type="text"
                    helperText=""
                    name={'Email'}
                    width={'100%'}
                    height={TextStyles.height}
                    margin={TextStyles.margin}
                    placeHolder={'Email'}
                />
                <TextBox
                    type="text"
                    helperText=""
                    name={'Usuario'}
                    width={'100%'}
                    height={TextStyles.height}
                    margin={TextStyles.margin}
                    placeHolder={'Usuario'}
                />
                <div className={styles.group_buttons}>
                    <button type="submit" className="btn btn-caja" >Enviar</button>
                    <button type="type" className="btn btn-outlined" onClick={handleForget}>Regresar</button>
                </div>
            </form>
        </div>
  )
}

export default FormForgetPassword
