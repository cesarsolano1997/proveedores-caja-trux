import { USER_GET_DATA_PERSONAL, USER_CHANGE_DATA_PERSONAL } from '../../types'

export default (state, action) => {
  switch (action.type) {
    case USER_GET_DATA_PERSONAL:
      return {
        state: action.payload,
      }
    case USER_CHANGE_DATA_PERSONAL:
      return {
        ...state,
        Personal: {
          ...state.Personal,
          [action.payload.name]: action.payload.value,
        },
      }
  }
}
