import React from 'react'

import styles from '../registerProvider.module.css'

const Information = ({ setCondition }) => {
  const handleAccepted = () => {
    const checked = document.getElementById('check-condition').checked

    if (checked) {
      setCondition(true)
    } else {
      setCondition(false)
      alert('Debe aceptar los términos y condiciones')
    }
  }

  return (
        <>
            <p>BIENVENIDOS</p>
            <p className={styles.description}>El departamento de Logística de Caja Trujillo, con el fin de garantizar la excelencia de sus procesos, por medio de mecanismos eficaces pone a disposición este Portal para que lo interesados en contratar con nuestra Entidad, procedan a efectuar su registro en nuestra Base de Datos</p>
            <div className={styles.card}>
                <p className={styles.card_title}>
                    <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 24 24" ><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 11.17-1.41 1.42L6 12l3.59-3.59L11 9.83 8.83 12 11 14.17zm1-9.92c-.41 0-.75-.34-.75-.75s.34-.75.75-.75.75.34.75.75-.34.75-.75.75zm2.41 11.34L13 14.17 15.17 12 13 9.83l1.41-1.42L18 12l-3.59 3.59z" fill="currentColor" /></svg>
                    Instrucciones</p>
                <div className={styles.card_body}>
                    <ul>
                        <li>
                            Para realizar el registro el proveedor deberá crear un usuario y clave secreta.
                        </li>
                        <li>
                            Luego completar todos los campos con información exacta y veraz.
                        </li>
                        <li>
                            El proveedor es el único responsable de la información ingresada a la Base de Datos de Caja Trujillo.
                        </li>
                        <li>
                            El proveedor deberá mantener actualizada la información ingresada en la Base de Datos de Caja Trujillo.
                        </li>
                        <li>
                            El departamento de Logística de Caja Trujillo se reserva el derecho de corroborar la información registrada en la Base de Datos de Caja Trujillo, cuando consideren conveniente.
                        </li>
                        <li>   La clave secreta es personal, no la comparta con nadie.
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.card}>
                <p className={styles.card_title}>
                    <svg aria-hidden="true" width="1em" height="1em" viewBox="0 0 16 16">
                        <g fill="currentColor">
                            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                        </g>
                    </svg>
                    Declaración jurada</p>
                <div className={styles.card_body}>
                    <ul>
                        <li>
                            El proveedor declara bajo juramento, que la información registrada en la Base de Datos de Caja Trujillo es veraz, pudiendo ser susceptible de confirmación en cualquier momento o entregada a los funcionarios de Caja Trujillo cuando así lo requieran.
                        </li>
                        <li>
                            Asimismo declaro no encontrarme inmerso en alguna acción u omisión destinada a convertir o transferir dinero, bienes, efectos o ganancias de origin ilícito o presumiblemente ilícito de conformidad a lo establecido en las Normas de Prevención de lavado de Activos y Financiamiento del Terrorismo.
                        </li>

                    </ul>
                </div>
            </div>
            <div className={styles.card}>
                <p className={styles.card_title}>
                    <svg aria-hidden="true" width="1.5em" height="1.2em" viewBox="0 0 30 40">
                        <g fill="currentColor">
                            <path d="M1.23 1.85C1.38 1.49 1.6 1.16 1.88 0.88C2.16 0.6 2.49 0.38 2.85 0.23C3.22 0.08 3.61 0 4 0L26 0C26.39 0 26.78 0.08 27.15 0.23C27.51 0.38 27.84 0.6 28.12 0.88C28.4 1.16 28.62 1.49 28.77 1.85C28.92 2.22 29 2.61 29 3L29 33C29 33.39 28.92 33.78 28.77 34.15C28.62 34.51 28.4 34.84 28.12 35.12C27.84 35.4 27.51 35.62 27.15 35.77C26.78 35.92 26.39 36 26 36L21 36L21 32.47C22.57 31.56 23.33 29.71 22.86 27.97C22.4 26.22 20.81 25 19 25C17.19 25 15.6 26.22 15.14 27.97C14.67 29.71 15.43 31.56 17 32.47L17 36L4 36C3.61 36 3.22 35.92 2.85 35.77C2.49 35.62 2.16 35.4 1.88 35.12C1.6 34.84 1.38 34.51 1.23 34.15C1.08 33.78 1 33.39 1 33L1 3C1 2.61 1.08 2.22 1.23 1.85ZM17.59 30.41C17.21 30.04 17 29.53 17 29C17 28.47 17.21 27.96 17.59 27.59C17.96 27.21 18.47 27 19 27C19.53 27 20.04 27.21 20.41 27.59C20.79 27.96 21 28.47 21 29C21 29.53 20.79 30.04 20.41 30.41C20.04 30.79 19.53 31 19 31C18.47 31 17.96 30.79 17.59 30.41ZM9.08 7.38C9.13 7.5 9.2 7.61 9.29 7.71C9.39 7.8 9.5 7.87 9.62 7.92C9.74 7.97 9.87 8 10 8L20 8C20.27 8 20.52 7.89 20.71 7.71C20.89 7.52 21 7.27 21 7C21 6.73 20.89 6.48 20.71 6.29C20.52 6.11 20.27 6 20 6L10 6C9.87 6 9.74 6.03 9.62 6.08C9.5 6.13 9.39 6.2 9.29 6.29C9.2 6.39 9.13 6.5 9.08 6.62C9.03 6.74 9 6.87 9 7C9 7.13 9.03 7.26 9.08 7.38ZM6 12C5.73 12 5.48 12.11 5.29 12.29C5.11 12.48 5 12.73 5 13C5 13.27 5.11 13.52 5.29 13.71C5.48 13.89 5.73 14 6 14L24 14C24.27 14 24.52 13.89 24.71 13.71C24.89 13.52 25 13.27 25 13C25 12.73 24.89 12.48 24.71 12.29C24.52 12.11 24.27 12 24 12L6 12ZM5.08 17.38C5.13 17.5 5.2 17.61 5.29 17.71C5.39 17.8 5.5 17.87 5.62 17.92C5.74 17.97 5.87 18 6 18L24 18C24.27 18 24.52 17.89 24.71 17.71C24.89 17.52 25 17.27 25 17C25 16.73 24.89 16.48 24.71 16.29C24.52 16.11 24.27 16 24 16L6 16C5.87 16 5.74 16.03 5.62 16.08C5.5 16.13 5.39 16.2 5.29 16.29C5.2 16.39 5.13 16.5 5.08 16.62C5.03 16.74 5 16.87 5 17C5 17.13 5.03 17.26 5.08 17.38ZM6 20C5.73 20 5.48 20.11 5.29 20.29C5.11 20.48 5 20.73 5 21C5 21.27 5.11 21.52 5.29 21.71C5.48 21.89 5.73 22 6 22L24 22C24.27 22 24.52 21.89 24.71 21.71C24.89 21.52 25 21.27 25 21C25 20.73 24.89 20.48 24.71 20.29C24.52 20.11 24.27 20 24 20L6 20Z" />
                            <path d="M17 40L17 36L21 36L21 40L19 38.5L17 40Z" />
                        </g>
                    </svg>
                    Política de privacidad</p>
                <div className={styles.card_body}>
                    <ul>
                        <li>
                            En cumplimiento de la Ley de Protección de Datos personales - Ley 29733, Caja Trujillo le informa que por medio de este sitio web se recopilan sus datos de carácter personal necesarios para participar de los procesos de adquisiones y contrataciones. Dichos datos forman parte de nuestro “Banco de Datos de Proveedores”, el cual se encuentra convenientemente inscrito ante la Autoridad Nacional de protección de datos personales.
                        </li>
                        <li>
                            Dicha información será tratada solo para fines de participación en procesos convocados por nuestra Entidad la cual garantiza su debida confidencialidad. Finalmente, le recordamos que Ud. puede solicitar en cualquier momento la modificación de sus datos, la exclusión de nuestro Banco de datos, o la revocatorio para su tratamiento, a tráves de nuestras oficinas de atención de usuario
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.group_check}>
                <input type="checkbox" className={styles.checkbox} id="check-condition" /> <span className="text-checkbox">Acepto términos y condiciones</span>
                <div></div>
                <button type="button" className="btn btn-caja" onClick={handleAccepted}>Continuar</button>
            </div>
        </>
  )
}

export default Information
