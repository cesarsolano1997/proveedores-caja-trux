import React from 'react'
import Select from '../../../ui/select/Select'
import Table from '../../../ui/table/Table'
import CheckBox from '../../../ui/checkbox/Checkbox'

import useValidation from '../../../hooks/useValidation'
import Validation from '../../../validation/validationRegisterActEco'

const INITAL_STATE = {
  servicio: '',
  grupo: '',
  clase: '',
  familia: '',
  todos: false,
}

const RegistrarActEcono = ({ styles, size }) => {
  const handleSubmitAct = (e) => {
    e.preventDefault()
    alert('Enviando datos')
  }

  const { values, handleChange, handleSubmit, errores, updateState } =
    useValidation(INITAL_STATE, Validation, handleSubmitAct)

  const { servicio, grupo, clase, familia, todos } = values

  const handleChangeChecked = (e) => {
    updateState(e.target.name, e.target.checked)
  }

  return (
    <div className={styles.actividad_economica}>
      <strong>Registrar actividad económica</strong>
      <div>
        <Select
          placeHolder="Servicio"
          name={'servicio'}
          value={servicio}
          onChange={handleChange}
          helperText={errores && errores.servicio}
          borderColor={'#ccc'}
          width={size.width < 768 ? '100%' : '90%'}
        />
        <Select
          placeHolder="Grupo"
          name={'grupo'}
          value={grupo}
          onChange={handleChange}
          helperText={errores && errores.grupo}
          borderColor={'#ccc'}
          width={size.width < 768 ? '100%' : '90%'}
        />
        <Select
          placeHolder="Clase"
          name={'clase'}
          value={clase}
          onChange={handleChange}
          helperText={errores && errores.clase}
          borderColor={'#ccc'}
          width={size.width < 768 ? '100%' : '90%'}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'center',
            alignItems: 'center',
          }}
        >
          <Select
            placeHolder="Familia"
            name={'familia'}
            value={familia}
            onChange={handleChange}
            helperText={errores && errores.familia}
            borderColor={'#ccc'}
            width={size.width < 768 ? '100%' : '75%'}
          />
          <CheckBox
            placeHolder={'Todo'}
            name={'todos'}
            value={todos}
            onChange={handleChangeChecked}
            style={{ marginLeft: '10px' }}
          />
        </div>
      </div>
      <div className={styles.group_button}>
        <button
          type="button"
          className="btn btn-caja-red"
          onClick={handleSubmit}
        >
          Agregar
        </button>
      </div>
      <Table
        columns={[
          { name: 'Tipo' },
          { name: 'Grupo' },
          { name: 'Clase' },
          { name: 'Familia' },
        ]}
      />
    </div>
  )
}

export default RegistrarActEcono
