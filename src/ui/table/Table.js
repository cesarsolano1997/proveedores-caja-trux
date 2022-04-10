import React from 'react'

import styles from './table.module.css'

const Table = ({ columns, rows, margin }) => {
  return (
    <div className={styles.div_table} style={{ margin: margin }}>
      <table className={styles.styled_table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <td key={index}>{column.name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows &&
            rows.map((row, index, __) => {
              const values = Object.values(row)

              return <tr key={index}>{<TD values={values} />}</tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

const TD = ({ values }) => {
  return (
    <>
      {values.map((value, index) => {
        return <td key={index}>{value}</td>
      })}
    </>
  )
}

export default Table
