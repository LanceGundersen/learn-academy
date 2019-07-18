import * as userActions from './user.actions'
import * as types from './action.types'
import { AppState } from './../app.state'

export const initialState: AppState = {
  users: [],
}

export function UserReducer(
  state = initialState,
  action: userActions.Actions,
): AppState {
  switch (action.type) {
    case types.LOAD_USERS_SUCCESS: {
      return { ...state, users: action.payload }
    }
    case types.DELETE_USER_SUCCESS: {
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      }
    }
    default:
      return state
  }
}
