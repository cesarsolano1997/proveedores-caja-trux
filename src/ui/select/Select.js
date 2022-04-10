import React from 'react'

import styles from './select.module.css'

const Select = ({
  placeHolder,
  name,
  value,
  onChange,
  width,
  height,
  margin,
  bg,
  options,
  helperText,
  borderColor,
}) => {
  return (
    <div
      className={styles.select}
      style={{
        margin: margin,
        width: width,
        height: height,
      }}
    >
      <select
        name={name}
        onChange={onChange}
        className={styles.select_text}
        style={{
          background: bg,
          border: `0.1rem solid ${borderColor}`,
        }}
        required
      >
        <option value="" disabled selected={true}></option>
        {options &&
          options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      <span className={styles.select_highlight}></span>
      <span className={styles.select_bar}></span>
      <label className={styles.select_label}>{placeHolder}</label>
      {helperText && (
        <span style={{ color: 'red' }}>&nbsp;&nbsp;{helperText}</span>
      )}
    </div>
  )
}

export default Select
