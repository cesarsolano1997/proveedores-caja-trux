import React from 'react'

import './spinner.css'

const Spinner = ({ active }) => {
  return (
    <>
      <div className="overlay"></div>
      <div className="spanner">
        <div className="loader"></div>
        <div>
          <p className="text_loader"></p>
        </div>
      </div>
    </>
  )
}

export default Spinner
