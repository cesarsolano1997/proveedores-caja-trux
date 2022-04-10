import React from 'react'
import File from '../../ui/file/file'
import Table from '../../ui/table/Table'

import styles from './cotizacion.module.css'

const SolicitudCotizacion = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_header}>
        <h2>Solicitud de cotización</h2>
      </div>
      <div className={styles.card_body}>
        <div className={styles.card_datos_cotizacion}>
          <div>Datos generales</div>
          <span>
            A través del presente documento la Caja Municipal de Ahorro y
            Créditos S.A. le agradece al Sr. Proveedor Prueba cotizar el
            requerimiento ADQUISIÓN DE OTROS SERVICIOS: ADQUISIÓN DE DOMINIOS
            PARA CAJA TRUJILLO generado por nuestra institución para su
            respectiva atención.
          </span>
          <div>
            <div className={styles.group_text}>
              <strong>Razón social</strong>
              <label>Proveedor prueba S.A.</label>
            </div>
            <div className={styles.group_text}>
              <strong>RUC</strong>
              <label>20505050501</label>
            </div>
            <div className={styles.group_text}>
              <strong>Dirección comercial</strong>
              <label>Dirección de prueba</label>
            </div>
            <div className={styles.group_text}>
              <strong>Cotización</strong>
              <label>
                <File />
              </label>
            </div>
          </div>
        </div>
        <div className={styles.card_propuesta_cotizacion}>
          <div>Propuesta económica</div>
          <Table
            columns={[
              { name: 'N°' },
              { name: 'Cantidad' },
              { name: 'Requerimiento' },
              { name: 'Moneda' },
              { name: 'Precio Unitario' },
              { name: 'Subtotal(S/)' },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default SolicitudCotizacion
