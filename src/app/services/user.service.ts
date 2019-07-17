import { User } from './../classes/user'
import { MockApiService } from './mockApi.service'
import { Injectable } from '@angular/core'
import { Observer, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private api: MockApiService) {}

  getLoggedInUser() {
    return { ...this.api.getLoggedInUser() }
  }
}
