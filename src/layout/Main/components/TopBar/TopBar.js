import React, { useContext } from 'react'
import { Link } from 'wouter'
import AuthContext from '../../../../context/authentication/authContext'
import UserPefilSk from '../../../../skeleton/User_Perfil'

const TopBar = () => {
  const authContext = useContext(AuthContext)

  const { empresa, RUC } = authContext

  return (
    <header>
      <h2>
        <label htmlFor="nav_toggle">
          <span>
            <svg width={24} height={24} viewBox="0 0 124 124">
              <path d="M112 6H12C5.4 6 0 11.4 0 18s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12zM112 94H12c-6.6 0-12 5.4-12 12s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" />
            </svg>
          </span>
        </label>
        Inicio
      </h2>

      <Link href="/editar-perfil">
        <a className="user_edit">
          <div className="user_wrapper">
            {empresa === '' || empresa === null ? (
              <UserPefilSk />
            ) : (
              <>
                <img
                  src="/imagenes/user_profile.png"
                  width="50px"
                  height="50px"
                  alt="Foto de perfil"
                />
                <div>
                  <h4 className="h4">{empresa}</h4>
                  <small>{RUC}</small>
                </div>
              </>
            )}
          </div>
        </a>
      </Link>
    </header>
  )
}

export default TopBar
