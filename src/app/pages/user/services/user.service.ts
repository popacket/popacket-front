import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../../../env/env';
import { UserRequest } from '../interface/user-request.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { UserResponse } from '../interface/user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.baseUrl;
  constructor() { }

  httpClient = inject(HttpClient);

  private handleError(error:HttpErrorResponse){
    if(error.status===0){
      console.error('Se ha producido un error '+error.error);
    }else{
      console.error('Backend retorno el código del estado '+error.message);
    }return throwError(() => error);
  }

  registerUser(newUser: UserRequest): Observable<UserResponse> {
    return this.httpClient.post<UserResponse>(`${this.url}/users`, newUser).pipe(
      catchError(this.handleError));
  }
}
