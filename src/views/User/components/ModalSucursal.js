import React from 'react'

import Modal from '../../../ui/modal/Modal'
import TextBox from '../../../ui/input/Textbox'
import Select from '../../../ui/select/Select'
import Radio from '../../../ui/radio/Radio'

import useValidation from '../../../hooks/useValidation'

import Validation from '../../../validation/validationUserSucursal'

const INITIAL_STATE = {
  ubicacion: true,
  departamento: '',
  provincia: '',
  distrito: '',
  telefono: '',
  direccion: '',
  repLegal: '',
}

const ModalSucursal = ({ styles, size }) => {
  const addSucursal = () => {
    alert('agreando sucursal')
  }

  const { values, handleChange, handleSubmit, errores, updateState } =
    useValidation(INITIAL_STATE, Validation, addSucursal)

  const {
    ubicacion,
    departamento,
    provincia,
    distrito,
    telefono,
    direccion,
    repLegal,
  } = values

  return (
    <Modal
      id="ModalSucursal"
      idButton="btnSucursal"
      headerText="Agregar nueva sucursal"
      button={
        <button
          type="button"
          id="btnSucursal"
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
      <div className={styles.modalSucursal}>
        <div className={styles.div_group_radio}>
          <span>Ubicación</span>
          <div className={styles.group_radio}>
            <Radio
              name="ubicacion"
              placeHolder="En el Perú"
              value={ubicacion}
              checked={ubicacion}
              onChange={() => updateState('ubicacion', true)}
            />

            <Radio
              name="ubicacion"
              placeHolder="Fuera del perú"
              value={ubicacion}
              checked={!ubicacion}
              onChange={() => updateState('ubicacion', false)}
            />
          </div>
        </div>
        {ubicacion ? (
          <div className={styles.data_sucursal_peru}>
            <Select
              placeHolder="Departamento"
              name={'departamento'}
              value={departamento}
              onChange={handleChange}
              helperText={errores && errores.departamento}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <Select
              placeHolder="Provincia"
              name={'provincia'}
              value={provincia}
              onChange={handleChange}
              helperText={errores && errores.provincia}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <Select
              placeHolder="Distrito"
              name={'distrito'}
              value={distrito}
              onChange={handleChange}
              helperText={errores && errores.distrito}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <TextBox
              type="text"
              placeHolder="Dirección"
              name={'direccion'}
              value={direccion}
              onChange={handleChange}
              helperText={errores && errores.direccion}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <Select
              placeHolder="Representante legal"
              name={'repLegal'}
              value={repLegal}
              onChange={handleChange}
              helperText={errores && errores.repLegal}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <TextBox
              type="number"
              placeHolder="Teléfono"
              name={'telefono'}
              value={telefono}
              onChange={handleChange}
              helperText={errores && errores.telefono}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
          </div>
        ) : (
          <div className={styles.data_sucursal_ext}>
            <TextBox
              type="text"
              placeHolder="Dirección"
              name={'direccion'}
              value={direccion}
              onChange={handleChange}
              helperText={errores && errores.direccion}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <Select
              placeHolder="Representante legal"
              name={'repLegal'}
              value={repLegal}
              onChange={handleChange}
              helperText={errores && errores.repLegal}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
            <TextBox
              type="number"
              placeHolder="Teléfono"
              name={'telefono'}
              value={telefono}
              onChange={handleChange}
              helperText={errores && errores.telefono}
              borderColor={'#ccc'}
              width={size.width < 768 ? '100%' : '90%'}
            />
          </div>
        )}
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
      </div>
    </Modal>
  )
}

export default ModalSucursal
