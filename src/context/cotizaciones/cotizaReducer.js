import { LISTAR_COTIZACIONES, OBTENER_COTIZACIONES } from '../../types/index'

export default (state, action) => {
  switch (action.type) {
    case LISTAR_COTIZACIONES:
      return {
        cotizaciones: action.payload,
      }
    case OBTENER_COTIZACIONES:
      return {
        cotizacion: state.Cotizaciones.filter(
          (value) => value.IdCotizacion === action.payload
        ),
      }
    default:
      return state
  }
}
