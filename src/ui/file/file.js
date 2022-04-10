import React from 'react'

import styles from './file.module.css'

const InputFile = ({ name }) => {
  return (
    <div className={styles.file_select}>
      <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          d="M18.944 11.112C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888zM13 14v3h-2v-3H8l4-5 4 5h-3z"
          fill="currentColor"
        />
      </svg>
      <input type="file" name="src-file1" aria-label={name} />
    </div>
  )
}

export default InputFile
