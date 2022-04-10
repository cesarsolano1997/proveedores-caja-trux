import React from 'react'
import Select from '../../../ui/select/Select'
import styles from './declaracion.module.css'

import useWindowSize from '../../../hooks/useWindonsSize'

const Declaracion = () => {
  const size = useWindowSize()

  return (
    <>
      <div className={styles.card_body}>
        <Select
          placeHolder="Sujeto obligado a informar a la UIF–Perú"
          borderColor={'#ccc'}
          width={size.width < 768 ? '100%' : '90%'}
        />
        <Select
          placeHolder="¿Oficial de Cumplimiento registrado ante la SBS?"
          borderColor={'#ccc'}
          width={size.width < 768 ? '100%' : '90%'}
        />
        <Select
          placeHolder="¿Condición de Persona Expuesta Políticamente?"
          borderColor={'#ccc'}
          width={size.width < 768 ? '100%' : '90%'}
        />
        <Select
          placeHolder="Fuente Generadora de Ingresos"
          borderColor={'#ccc'}
          width={size.width < 768 ? '100%' : '90%'}
        />
      </div>
      <div className={styles.group_button}>
        <button type="button" className="btn btn-caja-red">
          <svg
            aria-hidden="true"
            width="24px"
            height="24px"
            viewBox="0 0 20 20"
          >
            <path
              d="M15.173 2H4c-1.101 0-2 .9-2 2v12c0 1.1.899 2 2 2h12c1.101 0 2-.9 2-2V5.127L15.173 2zM14 8c0 .549-.45 1-1 1H7c-.55 0-1-.451-1-1V3h8v5zm-1-4h-2v4h2V4z"
              fill="currentColor"
            />
          </svg>
          Guardar
        </button>
      </div>
    </>
  )
}

export default Declaracion
