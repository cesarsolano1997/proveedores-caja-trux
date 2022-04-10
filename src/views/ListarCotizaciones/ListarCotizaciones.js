import React, { useContext, useEffect } from 'react'
import { Link } from 'wouter'
import Table from '../../ui/table/Table'

import styles from './listarcotizaciones.module.css'

import CotizaContext from '../../context/cotizaciones/cotizaContext'
import AuthContext from '../../context/authentication/authContext'

const Acciones = ({ id, linkPdf }) => {
  return (
    <>
      <Link href={`/postulacion/cotizacion/${id}`}>
        <a>
          <svg
            aria-hidden="true"
            width="24px"
            height="24px"
            viewBox="0 0 1024 1024"
          >
            <path
              d="M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
              fill="currentColor"
            />
          </svg>
        </a>
      </Link>
      <a href={`/descargar/${linkPdf}`}>
        <svg aria-hidden="true" width="24px" height="24px" viewBox="0 0 24 24">
          <path
            d="M8.267 14.68c-.184 0-.308.018-.372.036v1.178c.076.018.171.023.302.023.479 0 .774-.242.774-.651 0-.366-.254-.586-.704-.586zm3.487.012c-.2 0-.33.018-.407.036v2.61c.077.018.201.018.313.018.817.006 1.349-.444 1.349-1.396.006-.83-.479-1.268-1.255-1.268z"
            fill="currentColor"
          />
          <path
            d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.498 16.19c-.309.29-.765.42-1.296.42a2.23 2.23 0 0 1-.308-.018v1.426H7v-3.936A7.558 7.558 0 0 1 8.219 14c.557 0 .953.106 1.22.319.254.202.426.533.426.923-.001.392-.131.723-.367.948zm3.807 1.355c-.42.349-1.059.515-1.84.515-.468 0-.799-.03-1.024-.06v-3.917A7.947 7.947 0 0 1 11.66 14c.757 0 1.249.136 1.633.426.415.308.675.799.675 1.504 0 .763-.279 1.29-.663 1.615zM17 14.77h-1.532v.911H16.9v.734h-1.432v1.604h-.906V14.03H17v.74zM14 9h-1V4l5 5h-4z"
            fill="currentColor"
          />
        </svg>
      </a>
    </>
  )
}

const ListarCotizaciones = () => {
  const cotizaContext = useContext(CotizaContext)
  const authContext = useContext(AuthContext)

  const { cotizaciones, listarCotizaciones } = cotizaContext
  const { idProveedor } = authContext

  useEffect(() => {
    if (idProveedor) {
      listarCotizaciones(idProveedor)
    }
  }, [idProveedor])

  return (
    <div className={styles.card}>
      <h3>Requerimientos pendientes por cotizar</h3>
      <Table
        columns={[
          { name: 'N°' },
          { name: 'Requerimiento' },
          { name: 'Fecha Límite' },
          { name: `Acciones` },
        ]}
        rows={cotizaciones.map((values) => ({
          n: values.IdCotizacion,
          req: values.Requerimiento,
          fecha: values.FechaLimite,
          link: <Acciones id={values.IdCotizacion} linkPdf={values.LinkPdf} />,
        }))}
      />
    </div>
  )
}

export default ListarCotizaciones
