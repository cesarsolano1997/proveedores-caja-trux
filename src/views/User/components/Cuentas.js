import React from 'react'
import Radio from '../../../ui/radio/Radio'
import styles from './cuentas.module.css'

const CuentasBancarias = () => {
  return (
    <div className={styles.card_body}>
      <strong>Mi información bancaria</strong>
      <div className={styles.div_group_radio}>
        <span>¿Pertenece a la cámara de comercio?</span>
        <div className={styles.group_radio}>
          <Radio
            name="Comercio"
            placeHolder="Sí"
            // value={comercio}
            // checked={comercio}
            // onChange={() => setComercio(true)}
          />

          <Radio
            name="Comercio"
            placeHolder="No"
            // value={comercio}
            // checked={!comercio}
            // onChange={() => setComercio(false)}
          />
        </div>
      </div>
    </div>
  )
}

export default CuentasBancarias
