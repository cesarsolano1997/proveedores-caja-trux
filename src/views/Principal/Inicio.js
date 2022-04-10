import React from 'react'
import ListarCotizaciones from '../ListarCotizaciones/ListarCotizaciones'
import Requeriment from '../Requeriment/Requeriment'

const Prueba = () => {
  return (
    <>
      <h3>Nuevos requerimientos</h3>
      <Requeriment
        direction={'row'}
        scrolldelay={'80'}
        scrollamount={'10'}
        style={{ height: '200px', marginBottom: '20px' }}
      />
      <ListarCotizaciones />
    </>
  )
}

export default Prueba
