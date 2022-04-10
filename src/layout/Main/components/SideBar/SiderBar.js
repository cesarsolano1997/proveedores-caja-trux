import React, { useState, useContext } from 'react'
import { Link, useRoute, useLocation } from 'wouter'

import AuthContext from '../../../../context/authentication/authContext'

const ActiveLink = (props) => {
  const [isActive] = useRoute(props.href)
  const [expanse, setExpanse] = useState(false)
  const [location] = useLocation()

  const handleClick = (e) => {
    const state = !expanse
    setExpanse(state)

    if (state) {
      e.currentTarget.classList.add('dropdown')
    } else {
      e.currentTarget.classList.remove('dropdown')
    }
  }

  return (
    <Link {...props} onClick={handleClick}>
      {location.split('/')[1] === props.id ? (
        <a className="dropdown ">{props.children}</a>
      ) : (
        <a className={isActive ? 'active' : ''}>{props.children}</a>
      )}
    </Link>
  )
}

const SideBar = () => {
  const [imageSmall, setImageSmall] = useState(false)

  const handleClick = (e) => {
    setImageSmall(!imageSmall)
  }

  const authContext = useContext(AuthContext)

  const { Logout } = authContext

  const handleClickLogout = () => {
    Logout()
  }

  return (
    <>
      <input
        type="checkbox"
        id="nav_toggle"
        className="nav_toggle"
        onClick={handleClick}
      />
      <div className="sidebar">
        <div className="sidebar_brand">
          <h2>
            <ActiveLink href="/inicio">
              <img
                src={
                  !imageSmall
                    ? '/imagenes/Caja-Trujillo.png'
                    : '/imagenes/logo.png'
                }
                id="logo"
                width="150"
                height="52"
                alt="Logo Caja Trujillo"
                title="Logo"
              />
            </ActiveLink>
            <span>Web Proveedores</span>
          </h2>
        </div>

        <div className="sidebar_menu">
          <ul>
            <li>
              <ActiveLink href="/inicio">
                <svg
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 1024 1024"
                  className="iconify iconify--ant-design"
                >
                  <path
                    d="M946.5 505 534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"
                    fill="currentColor"
                  />
                </svg>
                <span>Principal</span>
              </ActiveLink>
            </li>
          </ul>
          <ul>
            <li>
              <ActiveLink href="" id="postulacion">
                <svg
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 28 28"
                  className="iconify iconify--fluent"
                >
                  <g fill="currentColor">
                    <path d="M14 2v8a2 2 0 0 0 2 2h7.999l.001.078V23.6a2.4 2.4 0 0 1-2.4 2.4H6.4A2.4 2.4 0 0 1 4 23.6V4.4A2.4 2.4 0 0 1 6.4 2H14z" />
                    <path d="M15.5 2.475V10a.5.5 0 0 0 .5.5h7.502a2.739 2.739 0 0 0-.307-.366l-7.431-7.431a2.401 2.401 0 0 0-.264-.228z" />
                  </g>
                </svg>
                <span>Postulación en línea</span>
                <i>
                  <svg
                    aria-hidden="true"
                    width="1.01em"
                    height="1em"
                    viewBox="0 0 616 614"
                    className="iconify iconify--ls"
                  >
                    <path
                      d="m602.442 200-253 317c-24 29-61 29-84 0l-253-317c-24-30-12-53 25-53h540c38 0 49 23 25 53z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </ActiveLink>
              <ul className="sub_menu">
                <li>
                  <ActiveLink href="/postulacion/listar-cotizaciones">
                    Listar cotizaciones
                  </ActiveLink>
                </li>
                <li>
                  <a href="/postulacion/mis-postulaciones">Mis postulaciones</a>
                </li>
                <li>
                  <a href="/postulacion/atencion-orden-servicios">
                    Atención de ordenes de compra y servicios
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <ActiveLink href="">
                <svg
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                  className="iconify iconify--healthicons"
                >
                  <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                    <path d="M17 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3V7zm3-1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-8z" />
                    <path d="M18 7h-5a3 3 0 0 0-3 3v31a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V10a3 3 0 0 0-3-3h-5v2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7zm-3 14a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1zm1-6a1 1 0 1 0 0 2h15.5a1 1 0 1 0 0-2H16zm1 14v2h2v-2h-2zm-1-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4zm15 2a3 3 0 1 1-6 0 3 3 0 1 1 6 0zm-3 4.318c-2.003 0-6 1.066-6 3.182V39h12v-2.5c0-2.116-3.997-3.182-6-3.182z" />
                  </g>
                </svg>
                <span>Procesos de selección</span>
                <i>
                  <svg
                    aria-hidden="true"
                    width="1.01em"
                    height="1em"
                    viewBox="0 0 616 614"
                    className="iconify iconify--ls"
                  >
                    <path
                      d="m602.442 200-253 317c-24 29-61 29-84 0l-253-317c-24-30-12-53 25-53h540c38 0 49 23 25 53z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </ActiveLink>
              <ul className="sub_menu">
                <li>
                  <a href="">Registro de proceso de selección</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <svg
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 20 20"
                  className="iconify iconify--fluent"
                >
                  <path
                    d="M8.5 2a1.5 1.5 0 0 0-1.415 1H5.5A1.5 1.5 0 0 0 4 4.5v3.756a4.5 4.5 0 0 1 5.561 6.184l2 2a1.5 1.5 0 0 1 .354 1.56H14.5a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 14.5 3h-1.585A1.5 1.5 0 0 0 11.5 2h-3zm3 1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h3zM8.303 14.596a3.5 3.5 0 1 0-.707.707l2.55 2.55a.5.5 0 0 0 .708-.707l-2.55-2.55zM5.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"
                    fill="currentColor"
                  />
                </svg>
                <span>Consultar</span>
                <i>
                  <svg
                    aria-hidden="true"
                    width="1.01em"
                    height="1em"
                    viewBox="0 0 616 614"
                    className="iconify iconify--ls"
                  >
                    <path
                      d="m602.442 200-253 317c-24 29-61 29-84 0l-253-317c-24-30-12-53 25-53h540c38 0 49 23 25 53z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </a>
              <ul className="sub_menu">
                <li>
                  <a href="#">Resultado de procesos</a>
                </li>
                <li>
                  <a href="#">Mis pagos</a>
                </li>
                <li>
                  <a href="#">Mis facturas emitidas</a>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">
                <svg
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="iconify iconify--fluent"
                >
                  <path
                    d="M12 2v6a2 2 0 0 0 2 2.001h6v10.001a2 2 0 0 1-2 2H9v-3.671a4.5 4.5 0 0 0-5-7.073V4a2 2 0 0 1 2-2h6zm1.5.5V8a.5.5 0 0 0 .5.5h5.5l-6-6zM9 15.502a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-6 3.742v3.044a.71.71 0 0 0 1.212.503L5.5 21.503l1.288 1.288A.71.71 0 0 0 8 22.288v-3.044a4.479 4.479 0 0 1-2.5.758c-.925 0-1.785-.279-2.5-.758z"
                    fill="currentColor"
                  />
                </svg>
                <span>Normatividad</span>
                <i>
                  <svg
                    aria-hidden="true"
                    width="1.01em"
                    height="1em"
                    viewBox="0 0 616 614"
                    className="iconify iconify--ls"
                  >
                    <path
                      d="m602.442 200-253 317c-24 29-61 29-84 0l-253-317c-24-30-12-53 25-53h540c38 0 49 23 25 53z"
                      fill="currentColor"
                    />
                  </svg>
                </i>
              </a>
              <ul className="sub_menu">
                <li>
                  <a href="#">Reg. Contrataciones y Adquisiciones</a>
                </li>
                <li>
                  <a href="#">
                    Formulario para el conocimiento del postor (persona natural)
                  </a>
                </li>
                <li>
                  <a href="#">
                    Formulario para el conocimiento del postor (persona
                    jurídica)
                  </a>
                </li>
                <li>
                  <a href="#">
                    Declaración jurada de noencontrarse
                    en proceso de investigación
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="logout" onClick={handleClickLogout}>
            <li>
              <ActiveLink href="/">
                <svg
                  aria-hidden="true"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H5zm10-6 5-4-5-4v3H9v2h6v3z"
                    fill="currentColor"
                  />
                </svg>
                <span>Cerrar sesión</span>
              </ActiveLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default SideBar
