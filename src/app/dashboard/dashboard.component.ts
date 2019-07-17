import { Component, OnInit } from '@angular/core'
import { UserService } from './../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  userData

  constructor(private userService: UserService) {
    this.userData = this.userService.getLoggedInUser()
    console.log('userData', this.userData)
  }

  ngOnInit() {}
}
