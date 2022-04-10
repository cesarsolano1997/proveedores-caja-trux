import React, { useState } from 'react'

import styles from './date.module.css'

const Date = ({ width, name, value, onChange, height, margin, padding, bg, placeHolder, helperText, error }) => {
  const [type, setType] = useState('text')

  const onFocus = state => {
    state ? setType('date') : setType('text')
  }

  return (
        <div className={styles.omrs_input_group} style={{ margin: margin, width: width, height: height }} >
            <label className={styles.omrs_input_filled}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    style={{ background: bg, padding: padding }}
                    onFocus={() => onFocus(true)} onBlur={() => onFocus(false)}
                    required
                />
                <span className={styles.omrs_input_label}>{placeHolder}</span>
                {
                    helperText &&
                    <span className={styles.omrs_input_helper_error}>{helperText}</span>
                }
            </label>
        </div>
  )
}

export default Date
