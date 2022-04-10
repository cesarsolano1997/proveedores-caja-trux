import React, { useContext, useEffect } from 'react'
import useWindowSize from '../../hooks/useWindonsSize'
import styles from './requeriment.module.css'

import RequerimientoContext from '../../context/requerimiento/requerimientoContext'

const Requeriment = ({ direction, style }) => {
  const size = useWindowSize()

  const requerimientoContext = useContext(RequerimientoContext)

  const { listarReq, requerimientos } = requerimientoContext

  useEffect(() => {
    listarReq()
  }, [])

  return (
    <>
      {size.width <= 768 ? (
        <div className={styles.scroll_requerimients_responsive}>
          <div
            style={{
              display: 'flex',
              flexDirection: direction === 'down' ? 'column' : 'row',
            }}
          >
            {requerimientos.map((req) => (
              <a href="#" className={styles.link_card} key={req.NroCotiza}>
                <div
                  className={
                    direction === 'row' ? styles.card_row : styles.card
                  }
                >
                  <div className={styles.card_title}>{req.Titulo}</div>
                  <div className={styles.card_body}>{req.Descripcion}</div>
                  <div className={styles.card_footer}>
                    <div className={styles.author}>{req.Contacto}</div>
                    <div className={styles.date}>{req.FechaLimite}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ) : (
        <div
          id="scroll-requerimients"
          style={style}
          className={styles.scroll_requerimients}
        >
          <div
            className={styles.marquee}
            style={{
              display: 'flex',
              flexDirection: direction === 'down' ? 'column' : 'row',
            }}
          >
            {requerimientos.map((req) => (
              <a href="#" className={styles.link_card} key={req.NroCotiza}>
                <div
                  className={
                    direction === 'row' ? styles.card_row : styles.card
                  }
                >
                  <div className={styles.card_title}>{req.Titulo}</div>
                  <div className={styles.card_body}>{req.Descripcion}</div>
                  <div className={styles.card_footer}>
                    <div className={styles.author}>{req.Contacto}</div>
                    <div className={styles.date}>{req.FechaLimite}</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default Requeriment
