import { LISTAR_REQUERIMIENTOS } from '../../types/index'

export default (state, action) => {
  switch (action.type) {
    case LISTAR_REQUERIMIENTOS:
      return {
        requerimientos: action.payload,
      }
    default:
      return state
  }
}
