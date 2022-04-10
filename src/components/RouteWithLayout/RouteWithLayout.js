import React, { useContext, useEffect } from 'react'
import { Route, Redirect } from 'wouter'

import AuthContext from '../../context/authentication/authContext'

const RouteWithLayout = (props) => {
  const { layout: Layout, component: Component, ...rest } = props

  const token = localStorage.getItem('token')
  const authContext = useContext(AuthContext)
  const { autenticado, ValidateUser } = authContext

  useEffect(() => {
    ValidateUser()
  }, [autenticado])

  return !autenticado && !token ? (
    <Route {...rest}>
      <Redirect to="/" />
    </Route>
  ) : (
    <Route {...rest}>
      <Layout>
        <Component />
      </Layout>
    </Route>
  )
}

export default RouteWithLayout
