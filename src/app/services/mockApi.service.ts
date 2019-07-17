import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'

const API_URL = environment.apiUrl

// Pretend the user is logged in already (service not created)
const LOGGED_IN_USER_ID = '5d2b54ee6f4fa5605cffe215'

@Injectable({
  providedIn: 'root',
})
export class MockApiService {
  constructor(private httpClient: HttpClient) {}

  public getLoggedInUser() {
    return this.httpClient.get(API_URL + '/users/?id=' + LOGGED_IN_USER_ID)
  }
}
