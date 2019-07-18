import { Injectable } from '@angular/core'
import { ApiService } from './../services/api.service'
import { Effect, Actions, ofType } from '@ngrx/effects'
import { map, mergeMap } from 'rxjs/operators'
import { Observable } from 'rxjs'
import { Action } from '@ngrx/store'

import * as types from './action.types'
import * as userActions from './user.actions'

@Injectable({
  providedIn: 'root',
})
export class UserEffects {
  constructor(private api: ApiService, private actions$: Actions) {}

  @Effect() loadUsers$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.LoadUsersAction>(types.LOAD_USERS),
    mergeMap(() =>
      this.api
        .getUsers()
        .pipe(map(users => new userActions.LoadUsersSuccessAction(users))),
    ),
  )

  @Effect() deleteUser$: Observable<Action> = this.actions$.pipe(
    ofType<userActions.DeleteUserAction>(types.DELETE_USER),
    mergeMap(action =>
      this.api
        .deleteUser(action.payload)
        .pipe(
          map(user => new userActions.DeleteCustomerSuccessAction(user.id)),
        ),
    ),
  )
}
