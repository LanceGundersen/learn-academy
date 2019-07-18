import { Action } from '@ngrx/store'
import * as types from './action.types'
import { User } from '../models/user.model'

export class LoadUsersAction implements Action {
  readonly type = types.LOAD_USERS
}

export class LoadUsersSuccessAction implements Action {
  readonly type = types.LOAD_USERS_SUCCESS
  constructor(public payload: User[]) {}
}

export class DeleteUserAction implements Action {
  readonly type = types.DELETE_USER
  constructor(public payload: string) {}
}

export class DeleteCustomerSuccessAction implements Action {
  readonly type = types.DELETE_USER_SUCCESS
  constructor(public payload: string) {}
}

export type Actions =
  | LoadUsersAction
  | LoadUsersSuccessAction
  | DeleteUserAction
  | DeleteCustomerSuccessAction
