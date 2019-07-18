import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { User } from '../models/user.model'
import { AppState } from '../app.state'
import { Store } from '@ngrx/store'
import * as UserActions from '../../app/store/user.actions'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  users$: Observable<any>
  users: User[]

  constructor(private store: Store<AppState>) {
    this.users$ = this.store.select('applicationState')
  }

  ngOnInit() {
    this.getUsers()
    this.users$.subscribe((state: AppState) => (this.users = state.users))
  }

  getUsers() {
    this.store.dispatch(new UserActions.LoadUsersAction())
  }

  deleteCustomer(user: User): void {
    this.store.dispatch(new UserActions.DeleteUserAction(user.id))
  }
}
