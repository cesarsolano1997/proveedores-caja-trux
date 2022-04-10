import React, { useEffect, useState } from 'react'

import styles from './modal.module.css'

const Modal = (props) => {
  const [id] = useState(props.id)
  const [idBTN, setIDBTN] = useState(props.idButton)

  useEffect(() => {
    if (!id) return
    if (!setIDBTN) return

    const modal = document.getElementById(id)

    const btn = document.getElementById(idBTN)
    btn.onclick = function () {
      modal.style.display = 'block'
    }
  }, [id, idBTN])

  const closeModal = () => {
    const modal = document.getElementById(id)

    const span = document.getElementById(`close${id}`)

    span.onclick = function () {
      modal.style.display = 'none'
    }

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none'
      }
    }
  }

  return (
    <>
      <div id={id} className={styles.modal}>
        <div className={styles.modal_content}>
          <div className={styles.modal_header}>
            <span
              className={styles.close}
              onClick={closeModal}
              id={`close${id}`}
            >
              &times;
            </span>
            <h3>{props.headerText}</h3>
          </div>
          <div className={styles.modal_body}>{props.children}</div>
        </div>
      </div>
      {props.button}
    </>
  )
}

export default Modal
