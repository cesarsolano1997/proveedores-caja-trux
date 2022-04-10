import React from 'react'

import SectionComercial from './Sections/SectionComercial'
import SectionEconomica from './Sections/SectionEconomica'
import SectionBancaria from './Sections/SectionBancaria'
import SectionContacto from './Sections/SectionContacto'
import SectionRepLegal from './Sections/SectionRepLegal'

import useValidation from '../../../hooks/useValidation'
import validationRegister from '../../../validation/validationRegisterProvider'
import styles from '../registerProvider.module.css'

const STATE_INITIAL = {
  Comercial: {
    RegTribu: '',
    NombRazonSocial: '',
    Peruano: true,
    Persona: true,
    Detraccion: false,
    Nombres: '',
    ApPaterno: '',
    ApMaterno: '',
    TipDoc: '',
    NumDoc: '',
    RUC: '',
    Siglas: '',
    RazonSocial: '',
    Email: '',
    InicioActividad: '',
    Departamento: '',
    Provincia: '',
    Distrito: '',
    Pais: '',
    ProvRegEst: '',
    DistrCiud: '',
    TelefPais: '',
    DireccionPrincipal: '',
    TeleFijo: '',
    Celular: '',
    Telefax: '',
    CIU: '',
    CTABN: '',
  },
  RepLegal: {
    Nombres: '',
    ApPaterno: '',
    ApMaterno: '',
    NIdent: '',
  },
  Contacto: {
    Nombres: '',
    ApPaterno: '',
    ApMaterno: '',
    Email: '',
  },
  Economica: [],
  Bancaria: [],
}

const FormRegister = () => {
  const add = () => {
    alert('AGREGANDO')
  }

  const { values, errores, handleSubmit, handleChange, updateState } =
    useValidation(STATE_INITIAL, validationRegister, add)

  const { Comercial, Contacto, RepLegal } = values

  return (
    <form onSubmit={handleSubmit}>
      <p className={styles.description}>
        Apreciado usuario, el siguiente es el formulario de inscripción, el
        registro se divide en cuatro pasos, los cuales debe completar para
        realizar la inscripción de manera satisfactoria.
      </p>
      <SectionComercial
        comercial={Comercial}
        handleChange={handleChange}
        updateState={updateState}
        errors={errores.errComercial}
      />

      {!Comercial.Peruano && !Comercial.Persona && (
        <SectionRepLegal
          repLegal={RepLegal}
          handleChange={handleChange}
          errors={errores.errRepLegal}
        />
      )}

      {!Comercial.Peruano && (
        <SectionContacto
          contacto={Contacto}
          handleChange={handleChange}
          errors={errores.errContacto}
        />
      )}

      <SectionEconomica
        updateState={updateState}
        errors={errores.errEconomica}
      />

      <SectionBancaria
        updateState={updateState}
        nacional={Comercial.Peruano}
        errors={errores.errBancaria}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          type="submit"
          className="btn btn-caja"
          onClick={handleSubmit}
          style={{ width: '180px' }}
        >
          Enviar datos
        </button>
      </div>
    </form>
  )
}

export default FormRegister
