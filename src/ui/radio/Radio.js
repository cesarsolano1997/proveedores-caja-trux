import React from 'react'

import styles from './radio.module.css'

const Radio = ({ name, checked, value, placeHolder, onChange }) => {
  return (
        <div className={styles.group_radio}>
            <input
                type="radio"
                id={name}
                className={styles.radio}
                name={name}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <label htmlFor={name}>{placeHolder}</label>
        </div>
  )
}

export default Radio
