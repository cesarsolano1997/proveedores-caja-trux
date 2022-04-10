import React, { useState, useContext, useEffect } from 'react'
import { useRoute, Link } from 'wouter'

import styles from './cotizacion.module.css'
import SolicitudCotizacion from './SolicitudCotizacion'

import CotizaContext from '../../context/cotizaciones/cotizaContext'

const Cotizacion = () => {
  const [, params] = useRoute('/postulacion/cotizacion/:id')
  const [cotizar, setCotizar] = useState(false)

  const cotizaContext = useContext(CotizaContext)

  useEffect(() => {
    if (params) ObtenerCotizacion(params)
  }, [params])

  const { coti, cotizacion, ObtenerCotizacion } = cotizaContext

  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_header}>
          <svg
            aria-hidden="true"
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
          >
            <path
              d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
              fill="currentColor"
            />
          </svg>
          <span>{cotizacion.Requerimiento}</span>
        </div>
        <div className={styles.card_body}>
          <div className={styles.grid}>
            <div className={styles.group_text}>
              <strong>Responsable</strong>
              <label> {cotizacion.Responsable}</label>
            </div>
            <div className={styles.group_text}>
              <strong>Correo</strong>
              <label>{cotizacion.Correo}</label>
            </div>
            <div className={styles.group_text}>
              <strong>Teléfono</strong>
              <label>{cotizacion.Telefono}</label>
            </div>
            <div className={styles.group_text}>
              <strong>Anexo</strong>
              <label>{cotizacion.Anexo}</label>
            </div>
            <div className={styles.group_text}>
              <strong>Imagen</strong>
              <label>Sin imagen</label>
            </div>
            <div className={styles.group_text}>
              <strong>Celular</strong>
              <label>{cotizacion.Celular}</label>
            </div>
            <div className={styles.group_text}>
              <strong>Fecha límite</strong>
              <label>{cotizacion.FechaLimite}</label>
            </div>

            <div className={styles.group_text}>
              <strong>Características</strong>
              <label>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </label>
            </div>
            <div className={styles.group_text}>
              <strong>Cantidad</strong>
              <label>1</label>
            </div>
            <div className={styles.group_text}>
              <strong>Descripción</strong>
              <label>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </label>
            </div>
          </div>
          <div className={styles.group_buttons}>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setCotizar(true)}
            >
              <svg
                aria-hidden="true"
                width="24px"
                height="24px"
                viewBox="0 0 32 32"
              >
                <path
                  d="M31.453 4.625A6.796 6.796 0 0 0 27.385.562c-1.745-.563-3.333-.563-6.557-.563h-9.682c-3.198 0-4.813 0-6.531.531A6.805 6.805 0 0 0 .547 4.613C0 6.347 0 7.946 0 11.144v9.693c0 3.214 0 4.802.531 6.536a6.796 6.796 0 0 0 4.068 4.063c1.734.547 3.333.547 6.536.547h9.703c3.214 0 4.813 0 6.536-.531a6.807 6.807 0 0 0 4.078-4.078c.547-1.734.547-3.333.547-6.536v-9.667c0-3.214 0-4.813-.547-6.547zm-8.224 6.177-1.245 1.24a.67.67 0 0 1-.891.01 6.715 6.715 0 0 0-4.292-1.573c-1.297 0-2.589.427-2.589 1.615 0 1.198 1.385 1.599 2.984 2.198 2.802.938 5.12 2.109 5.12 4.854 0 2.99-2.318 5.042-6.104 5.266l-.349 1.604a.648.648 0 0 1-.635.516h-2.391l-.12-.01a.668.668 0 0 1-.505-.786l.375-1.693a8.748 8.748 0 0 1-3.844-2.094v-.016a.641.641 0 0 1 0-.906l1.333-1.292a.66.66 0 0 1 .896 0 6.454 6.454 0 0 0 4.521 1.76c1.734 0 2.891-.734 2.891-1.896s-1.172-1.464-3.385-2.292c-2.349-.839-4.573-2.026-4.573-4.802 0-3.224 2.677-4.797 5.854-4.943l.333-1.641a.642.642 0 0 1 .641-.51h2.37l.135.016a.64.64 0 0 1 .495.76l-.359 1.828a9.945 9.945 0 0 1 3.302 1.849l.031.031c.25.266.25.667 0 .906z"
                  fill="currentColor"
                />
              </svg>
              Cotizar
            </button>
            <Link href="/postulacion/listar-cotizaciones">
              <a
                href="/postulacion/listar-cotizaciones"
                className="btn btn-outlined-secondary"
              >
                Cerrar
              </a>
            </Link>
          </div>
        </div>
      </div>

      {cotizar && <SolicitudCotizacion />}
    </>
  )
}

export default Cotizacion
