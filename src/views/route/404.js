import React from 'react'

import './notfound.css'

const NotFound = ({ params }) => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h3>Oops! Página no encontrada</h3>
          <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
        </div>
        <h2>Lo sentimos, pero la página {params.rest} no existe.</h2>
      </div>
    </div>
  )
}

export default NotFound
