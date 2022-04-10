import React, { useState } from 'react'
import FormRegister from './components/FormRegister'
import Information from './components/Information'
import styles from './registerProvider.module.css'

const RegisterProvider = () => {
  const [condition, setCondition] = useState(false)

  return (
        <div className={styles.content}>
            <div className={styles.content_register}>
                <div className={styles.logo}>
                    <div className={styles.box_logo}>
                        <img src="imagenes/Caja-Trujillo.png" className={styles.img_logo} alt="Logo" title="Logo Caja Trujillo"></img>
                    </div>
                </div>
                <div className={styles.content_information} >
                    <h1 className={styles.title_provider}>Registro de Proveedores</h1>
                    <div>

                        { !condition ? <Information setCondition={setCondition} /> : <FormRegister />}

                    </div>
                </div>
            </div>
        </div>
  )
}

export default RegisterProvider
