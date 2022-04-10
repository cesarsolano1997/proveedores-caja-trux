import React from 'react'
import { Route, Switch } from 'wouter'
import Login from './views/Login/Login'
import RegisterProvider from './views/RegisterProvider/Register'
import EditUser from './views/User/Edit'
import Inicio from './views/Principal/Inicio'
import NotFound from './views/route/404'
import RouteWithLayout from './components/RouteWithLayout/RouteWithLayout'
import { Main as MainLayout } from './layout'
import ListarCotizaciones from './views/Postulacion/ListarCotizaciones/ListarCotizaciones'
import Spinner from './components/Spinner/Spinner'
import Cotizacion from './views/Cotizacion/Cotizacion'

const AppRoute = () => {
  return (
    <>
      <Spinner />
      <Switch>
        <Route path="/Login" component={Login} />

        <Route path="/" component={Login} />

        <Route path="/registrar-proveedor" component={RegisterProvider} />

        <RouteWithLayout
          component={Inicio}
          layout={MainLayout}
          path="/inicio"
        />

        <RouteWithLayout
          component={ListarCotizaciones}
          layout={MainLayout}
          path="/postulacion/listar-cotizaciones"
        />

        <RouteWithLayout
          component={EditUser}
          layout={MainLayout}
          path="/editar-perfil"
        />

        <RouteWithLayout
          path="/postulacion/cotizacion/:id"
          component={Cotizacion}
          layout={MainLayout}
        />

        <Route path="/:rest*">{(params) => <NotFound params={params} />}</Route>
      </Switch>
    </>
  )
}

export default AppRoute
