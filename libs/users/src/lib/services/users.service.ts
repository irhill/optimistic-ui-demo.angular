import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

// noinspection ES6PreferShortImport
import { User } from '../models/user'

@Injectable({ providedIn: 'root' })
export class UsersService {
  private readonly _httpClient = inject(HttpClient)

  private readonly baseUrl = 'http://localhost:8080/users'

  getUsers (): Observable<User[]> {
    return this._httpClient.get<User[]>(this.baseUrl)
  }

  addUser (user: User): Observable<object> {
    return this._httpClient.post(this.baseUrl, user)
  }

  updateUser(id: string, user: User): Observable<object> {
    return this._httpClient.put(`${this.baseUrl}/${id}`, user)
  }

  deleteUser(id: string): Observable<object> {
    return this._httpClient.delete(`${this.baseUrl}/${id}`)
  }
}
