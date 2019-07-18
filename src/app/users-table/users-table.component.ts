import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { User } from '../models/user.model'

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.sass'],
})
export class UsersTableComponent implements OnInit {
  @Input() users: User[]
  @Output() delete = new EventEmitter<User>()

  constructor() {}

  ngOnInit() {}

  deleteUser(user: User) {
    if (user && user.id) {
      if (confirm(`Are you sure want to delete customer ${user.id}`)) {
        this.delete.emit(user)
      }
    }
  }
}
