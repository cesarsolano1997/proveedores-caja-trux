import React from 'react'

import styles from './textbox.module.css'

const TextBox = ({
  type,
  name,
  value,
  onChange,
  width,
  height,
  margin,
  padding,
  bg,
  placeHolder,
  helperText,
  borderColor,
  helperTextStyle,
  maxLength,
}) => {
  return (
    <div
      className={styles.omrs_input_group}
      style={{ margin: margin, width: width, height: height }}
    >
      <label className={styles.omrs_input_filled}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          style={{ background: bg, padding: padding, borderColor: borderColor }}
          maxLength={maxLength}
          required
        />
        <span className={styles.omrs_input_label}>{placeHolder}</span>
        {helperText && (
          <span
            className={styles.omrs_input_helper_error}
            style={helperTextStyle}
          >
            &nbsp;&nbsp;{helperText}
          </span>
        )}
      </label>
    </div>
  )
}

export default TextBox
