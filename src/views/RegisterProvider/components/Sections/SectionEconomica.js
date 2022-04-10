import React, { useState, useEffect } from 'react'
import Select from '../../../../ui/select/Select'
import CheckBox from '../../../../ui/checkbox/Checkbox'
import Table from '../../../../ui/table/Table'

import styles from '../../registerProvider.module.css'

const SelectStyles = {
  width: '100%',
  height: 'auto',
  margin: '10px 10px 0px 0',
  bg: '#fff',
}

const columns = [
  { name: 'Tipo' },
  { name: 'Grupo' },
  { name: 'Clase' },
  { name: 'Familia' },
  { name: 'Acciones' },
]

const arrOfrece = [
  {
    value: 1,
    name: 'Bienes',
  },
  {
    value: 2,
    name: 'Servicios',
  },
  {
    value: 3,
    name: 'Obras',
  },
]

const ActividadEconomica = ({ updateState, errors }) => {
  const [actEconomica, setActEconomica] = useState([])
  const [service, setService] = useState({ key: '', value: '' })
  const [group, setGroup] = useState({ key: '', value: '' })
  const [classService, setClass] = useState({ key: '', value: '' })
  const [family, setFamily] = useState({ key: '', value: '' })
  const [message, setMessage] = useState({
    tipo: '',
    grupo: '',
    clase: '',
    familia: '',
  })

  useEffect(() => {
    updateState('Economica', actEconomica)
  }, [actEconomica])

  const handleButton = (e) => {
    setMessage()

    const row = {
      tipo: service.value,
      grupo: group.value,
      clase: classService.value,
      familia: family.value,
      acciones: 'acciones',
    }

    const errorRow = {
      tipo: '',
      grupo: '',
      clase: '',
      familia: '',
    }

    const todo = document.querySelector('#todo').checked

    if (row.tipo === '') {
      errorRow.tipo = 'Debe ingresar un tipo'
    }

    if (row.grupo === '') {
      errorRow.grupo = 'Debe ingresar un grupo'
    }

    if (row.clase === '') {
      errorRow.clase = 'Debe ingresar una clase'
    }

    if (row.familia === '' && !todo) {
      errorRow.familia = 'Debe ingresar una familia'
    }

    if (
      errorRow.tipo !== '' ||
      errorRow.grupo !== '' ||
      errorRow.clase !== '' ||
      (errorRow.familia && !todo)
    ) {
      setMessage(errorRow)
      return
    }

    setActEconomica([...actEconomica, row])
  }

  return (
    <section className={styles.form_card} id="Economica">
      <div className={styles.form_title}>
        <p className={styles.section_title}>
          {' '}
          <svg height={20} viewBox="0 0 24 24" width={20} fill="#D5040A">
            <path d="M12.25 2h-1.1C10.82.85 9.76 0 8.5 0S6.18.85 5.85 2h-1.1c-.41 0-.75.34-.75.75v1.5C4 5.21 4.79 6 5.75 6h5.5C12.21 6 13 5.21 13 4.25v-1.5c0-.41-.34-.75-.75-.75z" />
            <path d="M14.25 3H14v1.25C14 5.77 12.77 7 11.25 7h-5.5C4.23 7 3 5.77 3 4.25V3h-.25C1.23 3 0 4.23 0 5.75v12.5C0 19.77 1.23 21 2.75 21h7.38l.22-1.23c.1-.56.36-1.06.76-1.47l.8-.8H3.75c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.05 0 .09 0 .14.02h.01l3.6-3.6V5.75C17 4.23 15.77 3 14.25 3zm-1 11.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zm0-3.25h-9.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.5c.41 0 .75.34.75.75s-.34.75-.75.75zM12.527 24a.748.748 0 01-.738-.881l.53-3.005a.753.753 0 01.208-.4l7.425-7.424c.912-.914 1.808-.667 2.298-.177l1.237 1.237a1.75 1.75 0 010 2.475l-7.425 7.425a.739.739 0 01-.4.208l-3.005.53a.715.715 0 01-.13.012zm3.005-1.28h.01z" />
          </svg>
          &nbsp;Actividad Económica
        </p>
      </div>
      <div className={styles.form_content}>
        <div className={styles.form_subsection}>
          <div className={styles.form_row}>
            <Select
              placeHolder="Usted ofrece"
              name={'service'}
              value={service.key}
              onChange={(e) =>
                setService({
                  key: e.target.value,
                  value: e.target.options[e.target.selectedIndex].text,
                })
              }
              helperText={message && message.tipo}
              bg={SelectStyles.bg}
              width={SelectStyles.width}
              height={SelectStyles.height}
              margin={SelectStyles.margin}
              options={arrOfrece}
            />
          </div>
          <div className={styles.form_row}>
            <Select
              placeHolder="Grupo"
              name={'group'}
              value={group.key}
              onChange={(e) =>
                setGroup({
                  key: e.target.value,
                  value: e.target.options[e.target.selectedIndex].text,
                })
              }
              helperText={message && message.grupo}
              bg={SelectStyles.bg}
              width={SelectStyles.width}
              height={SelectStyles.height}
              margin={SelectStyles.margin}
              options={arrOfrece}
            />
            <Select
              placeHolder="Clase"
              name={'classService'}
              value={classService.key}
              onChange={(e) =>
                setClass({
                  key: e.target.value,
                  value: e.target.options[e.target.selectedIndex].text,
                })
              }
              helperText={message && message.clase}
              bg={SelectStyles.bg}
              width={SelectStyles.width}
              height={SelectStyles.height}
              margin={SelectStyles.margin}
              options={arrOfrece}
            />
          </div>
          <div
            className={styles.form_row}
            style={{ justifyContent: 'flex-start' }}
          >
            <Select
              placeHolder="Familia"
              name={'family'}
              value={family.key}
              onChange={(e) =>
                setFamily({
                  key: e.target.value,
                  value: e.target.options[e.target.selectedIndex].text,
                })
              }
              helperText={message && message.familia}
              bg={SelectStyles.bg}
              width={'48.5%'}
              height={SelectStyles.height}
              margin={SelectStyles.margin}
              options={arrOfrece}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <CheckBox name={'todo'} placeHolder={'Todo'} />
            </div>
          </div>
          {errors && actEconomica.length === 0 && (
            <div className={styles.form_row}>
              <p style={{ color: 'red' }}>{errors.Mensaje}</p>
            </div>
          )}
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <button
              type="button"
              className="btn btn-outlined"
              onClick={handleButton}
            >
              Agregar
            </button>
          </div>
          <div className={styles.form_row}>
            <Table columns={columns} rows={actEconomica} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActividadEconomica
