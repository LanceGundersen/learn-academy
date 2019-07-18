import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { catchError, tap } from 'rxjs/operators'

import { User } from '../models/user.model'

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
// }

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:3004/users?id=5d2b54ee6f4fa5605cffe215'
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    console.log(this.http.get(this.baseUrl))
    return
    // return this.http.get<User[]>(this.baseUrl).pipe(
    //   tap(users => users),
    //   catchError(this.handleError('getUsers', [])),
    // )
  }

  // deleteUser(user: User | number): Observable<User> {
  //   const id = typeof user === 'number' ? user : user.id
  //   const url = `${this.baseUrl}/${id}`
  //   return this.http.delete<User>(url, httpOptions).pipe(
  //     tap(user => console.log(`deleted user id=${user.id}`)),
  //     catchError(this.handleError<User>('deleteUser')),
  //   )
  // }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }
}
