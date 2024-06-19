import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../env/env';
import { UserRequest } from '../interface/user-request.interface';
import { Observable } from 'rxjs';
import { UserResponse } from '../interface/user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;
  constructor(private http:HttpClient) { }

  registerUser(newUser: UserRequest): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.url}/users`, newUser);
  }
}
