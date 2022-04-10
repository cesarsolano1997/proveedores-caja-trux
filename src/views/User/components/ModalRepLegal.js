import React from 'react'

import Modal from '../../../ui/modal/Modal'
import TextBox from '../../../ui/input/Textbox'
import Select from '../../../ui/select/Select'

import useValidation from '../../../hooks/useValidation'

import Validation from '../../../validation/validationUserRepLegal'

const TipDocOptions = [
  { value: 1, name: 'DNI' },
  { value: 2, name: 'CI' },
  { value: 3, name: 'CE' },
]

const INITIAL_STATE = {
  nombre: '',
  apellidos: '',
  nacionalidad: '',
  tipoDoc: '',
  numDoc: '',
  telefono: '',
}

const ModalRepLegal = ({ styles, NacionalidadOptions, size }) => {
  const addRepLegal = () => {
    alert('agreando representantes legales')
  }

  const { values, handleChange, handleSubmit, errores } = useValidation(
    INITIAL_STATE,
    Validation,
    addRepLegal
  )

  const { nombre, apellidos, nacionalidad, tipoDoc, numDoc, telefono } = values

  return (
    <form onSubmit={handleSubmit}>
      <Modal
        id="ModalRepLegal"
        idButton="btnRepLegal"
        headerText={'Registrar nuevo Representante Legal'}
        button={
          <button
            type="button"
            id="btnRepLegal"
            className="btn btn-outlined-secondary"
          >
            <svg
              aria-hidden="true"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"
                fill="currentColor"
              />
            </svg>
            Nuevo
          </button>
        }
      >
        <div className={styles.modalRepLegal}>
          <TextBox
            placeHolder="Nombres"
            name={'nombre'}
            value={nombre}
            onChange={handleChange}
            helperText={errores && errores.nombre}
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <TextBox
            placeHolder="Apellidos"
            name={'apellidos'}
            value={apellidos}
            onChange={handleChange}
            helperText={errores && errores.apellidos}
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <Select
            placeHolder={'Nacionalidad'}
            name={'nacionalidad'}
            value={nacionalidad}
            onChange={handleChange}
            options={NacionalidadOptions}
            helperText={errores && errores.nacionalidad}
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '45%'}
          />
          <Select
            placeHolder={'Tipo de documento'}
            name={'tipoDoc'}
            value={tipoDoc}
            onChange={handleChange}
            options={TipDocOptions}
            helperText={errores && errores.tipoDoc}
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
          <TextBox
            placeHolder="Número de documento"
            name={'numDoc'}
            value={numDoc}
            onChange={handleChange}
            helperText={errores && errores.numDoc}
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />

          <TextBox
            placeHolder="Teléfono"
            name={'telefono'}
            value={telefono}
            onChange={handleChange}
            helperText={errores && errores.telefono}
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '90%'}
          />
        </div>
        <div className={styles.group_buttons}>
          <button
            type="submit"
            className="btn btn-outlined-secondary"
            onClick={handleSubmit}
          >
            <svg
              aria-hidden="true"
              width="24px"
              height="24px"
              viewBox="0 0 32 32"
            >
              <path
                d="M16 2A14.172 14.172 0 0 0 2 16a14.172 14.172 0 0 0 14 14 14.172 14.172 0 0 0 14-14A14.172 14.172 0 0 0 16 2zm8 15h-7v7h-2v-7H8v-2h7V8h2v7h7z"
                fill="currentColor"
              />
            </svg>
            Agregar
          </button>
        </div>
      </Modal>
    </form>
  )
}

export default ModalRepLegal
