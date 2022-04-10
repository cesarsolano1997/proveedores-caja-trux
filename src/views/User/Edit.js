import React, { useState } from 'react'
import Economica from './components/Economica'
import Personal from './components/Personal'
import Declaracion from './components/Declaracion'
import Cuentas from './components/Cuentas'

import styles from './userEdit.module.css'
import UserState from '../../context/user/userState'

const Edit = () => {
  const [sectPer, setSectPer] = useState(true)
  const [sectEcon, setSectEcon] = useState(false)
  const [sectDeclJura, setSectDeclJura] = useState(false)
  const [sectCta, setSectCta] = useState(false)

  const handleChange = (link) => {
    if (link === 'personal') {
      setSectPer(true)
      setSectEcon(false)
      setSectDeclJura(false)
      setSectCta(false)
    } else if (link === 'economica') {
      setSectPer(false)
      setSectEcon(true)
      setSectDeclJura(false)
      setSectCta(false)
    } else if (link === 'declaracion') {
      setSectPer(false)
      setSectEcon(false)
      setSectDeclJura(true)
      setSectCta(false)
    } else if (link === 'cuenta') {
      setSectPer(false)
      setSectEcon(false)
      setSectDeclJura(false)
      setSectCta(true)
    }
  }
  return (
    <UserState>
      <div className={styles.card}>
        <nav>
          <ul>
            <li
              onClick={() => handleChange('personal')}
              className={sectPer ? styles.active : undefined}
            >
              Personal
            </li>
            <li
              onClick={() => handleChange('economica')}
              className={sectEcon ? styles.active : undefined}
            >
              Actividad Económica
            </li>
            <li
              onClick={() => handleChange('declaracion')}
              className={sectDeclJura ? styles.active : undefined}
            >
              Declaración jurada
            </li>
            <li
              onClick={() => handleChange('cuenta')}
              className={sectCta ? styles.active : undefined}
            >
              Cuentas bancarias
            </li>
          </ul>
        </nav>
        {sectPer && <Personal />}
        {sectEcon && <Economica />}
        {sectDeclJura && <Declaracion />}
        {sectCta && <Cuentas />}
      </div>
    </UserState>
  )
}

export default Edit
