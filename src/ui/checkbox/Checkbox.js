import React from 'react'

import styles from './checkbox.module.css'

const Checkbox = ({ name, checked, value, placeHolder, onChange, style }) => {
  return (
    <>
      <div className={styles.group_radio} style={style}>
        <input
          type="checkbox"
          id={name}
          className={styles.checkbox}
          name={name}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <label htmlFor={name}>{placeHolder}</label>
      </div>
    </>
  )
}

export default Checkbox
