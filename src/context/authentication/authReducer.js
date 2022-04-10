import { LOGIN_EXITOSO, LOGOUT, USER_VALIDATE } from '../../types/index'

export default (state, action) => {
  switch (action.type) {
    case LOGIN_EXITOSO:
      localStorage.setItem('token', action.payload.Token)
      return {
        ...state,
        autenticate: true,
        empresa: action.payload.Empresa,
        RUC: action.payload.RUC,
        token: action.payload.Token,
        idProveedor: action.payload.IdProveedor,
      }
    case USER_VALIDATE:
      return {
        ...state,
        autenticate: true,
        empresa: action.payload.Empresa,
        RUC: action.payload.RUC,
        idProveedor: action.payload.IdProveedor,
      }
    case LOGOUT:
      localStorage.clear()
      return {
        ...state,
        autenticate: false,
        empresa: '',
        RUC: '',
        token: '',
      }
    default:
      return state
  }
}
