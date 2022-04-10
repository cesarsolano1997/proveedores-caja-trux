import React from 'react'
import Select from '../../../ui/select/Select'
import Textbox from '../../../ui/input/Textbox'

import useWindowSize from '../../../hooks/useWindonsSize'

import styles from './economica.module.css'
import RegistrarActEcono from './RegisterActEcono'

const Economica = () => {
  const size = useWindowSize()

  return (
    <div className={styles.card_body}>
      <RegistrarActEcono styles={styles} size={size} />

      <div className={styles.actividad_laboral}>
        <strong>
          Información sobre la actividad laboral y económica del postor
        </strong>
        <div>
          <Select
            placeHolder="¿Trabaja actualmente?"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <Select
            placeHolder="Tipo de vinculación"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <Select
            placeHolder="Prestación de servicios"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <Textbox
            placeHolder="Otra actividad"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <Select
            placeHolder="Actividad formal"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
        </div>
        <div className={styles.section_two}>
          <Textbox
            type="number"
            placeHolder="Ingreso bruto mensual (US$)"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />{' '}
          <Textbox
            placeHolder="Descri. de act. laboral o económica"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
        </div>
        <div>
          <span>Referencias de Principales Proveedores o Clientes</span>
          <Textbox
            type="text"
            placeHolder="Nombre proveedor 1"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />{' '}
          <Textbox
            type="number"
            placeHolder="Teléfono proveedor 1"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <Textbox
            type="text"
            placeHolder="Nombre proveedor 2"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />{' '}
          <Textbox
            type="number"
            placeHolder="Nombre proveedor 2"
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
        </div>
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
    </div>
  )
}

export default Economica
